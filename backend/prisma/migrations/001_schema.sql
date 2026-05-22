-- ================================================================
-- PC HUB 2.0 — Complete PostgreSQL Schema
-- Production-ready: FTS, partitioned audit, JSONB, indexes
-- ================================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- ── ENUMS ────────────────────────────────────────────────────────
CREATE TYPE opp_status AS ENUM (
  'Lead','Probable','StrongProbable','Contracted','WorkStarted','Completed'
);
CREATE TYPE srp_status AS ENUM ('Draft','SentForApproval','Approved','Rejected');
CREATE TYPE invoice_status AS ENUM ('Draft','Pending','Paid','Overdue','Cancelled');
CREATE TYPE ce_stage AS ENUM ('Assessment','Submitted','Reviewed','Approved','Rejected');
CREATE TYPE delegation_type AS ENUM ('Full','Workflow','ApprovalOnly','ReadOnly');
CREATE TYPE delegation_status AS ENUM ('Pending','Active','Expired','Revoked');
CREATE TYPE audit_action AS ENUM (
  'Create','Update','Delete','Approve','Reject','Login','Logout','Export','System'
);
CREATE TYPE notif_type AS ENUM (
  'SrpApproval','CeStatus','SupplierInvoice','OverdueAction',
  'Delegation','FeeApproval','System'
);
CREATE TYPE notif_priority AS ENUM ('Low','Medium','High','Critical');
CREATE TYPE supplier_status AS ENUM ('Approved','UnderReview','Expired','Suspended');
CREATE TYPE user_status AS ENUM ('Active','Inactive','Pending');

-- ── USERS ────────────────────────────────────────────────────────
CREATE TABLE users (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id     VARCHAR(100) UNIQUE,
  name            VARCHAR(200) NOT NULL,
  email           VARCHAR(320) NOT NULL UNIQUE,
  initials        VARCHAR(4)  NOT NULL,
  avatar_color    VARCHAR(7),
  status          user_status NOT NULL DEFAULT 'Pending',
  region          VARCHAR(100),
  business_unit   VARCHAR(100),
  reporting_mgr   UUID REFERENCES users(id),
  last_login_at   TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_users_email    ON users(email);
CREATE INDEX idx_users_status   ON users(status);
CREATE INDEX idx_users_ext      ON users(external_id) WHERE external_id IS NOT NULL;
CREATE INDEX idx_users_name_tgm ON users USING GIN(name gin_trgm_ops);

-- ── ROLES ────────────────────────────────────────────────────────
CREATE TABLE roles (
  id          UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  color       VARCHAR(7),
  icon        VARCHAR(10),
  is_system   BOOLEAN NOT NULL DEFAULT FALSE,
  is_active   BOOLEAN NOT NULL DEFAULT TRUE,
  permissions JSONB   NOT NULL DEFAULT '{}',
  sort_order  SMALLINT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_roles_active ON roles(is_active);

CREATE TABLE user_roles (
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id    UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  granted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  granted_by UUID REFERENCES users(id),
  PRIMARY KEY (user_id, role_id)
);
CREATE INDEX idx_user_roles_role ON user_roles(role_id);

-- ── OPPORTUNITIES ─────────────────────────────────────────────────
CREATE TABLE opportunities (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  comm_num        VARCHAR(20) NOT NULL UNIQUE,
  name            VARCHAR(500) NOT NULL,
  client_name     VARCHAR(300) NOT NULL,
  lead_id         UUID        REFERENCES users(id),
  sector          VARCHAR(100),
  region          VARCHAR(100),
  status          opp_status  NOT NULL DEFAULT 'Lead',
  stage_percent   SMALLINT    NOT NULL DEFAULT 20 CHECK(stage_percent BETWEEN 0 AND 100),
  value           NUMERIC(15,2) NOT NULL DEFAULT 0,
  services        TEXT[]      NOT NULL DEFAULT '{}',
  srp_status      srp_status  NOT NULL DEFAULT 'Draft',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  search_vec      TSVECTOR
);

-- Indexes
CREATE INDEX idx_opp_status     ON opportunities(status);
CREATE INDEX idx_opp_lead       ON opportunities(lead_id);
CREATE INDEX idx_opp_comm_num   ON opportunities(comm_num);
CREATE INDEX idx_opp_srp_status ON opportunities(srp_status);
CREATE INDEX idx_opp_created    ON opportunities(created_at DESC);
CREATE INDEX idx_opp_value      ON opportunities(value DESC);
CREATE INDEX idx_opp_search     ON opportunities USING GIN(search_vec);
CREATE INDEX idx_opp_name_tgm   ON opportunities USING GIN(name gin_trgm_ops);
CREATE INDEX idx_opp_client_tgm ON opportunities USING GIN(client_name gin_trgm_ops);

-- FTS trigger
CREATE OR REPLACE FUNCTION opp_fts_update() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.search_vec :=
    setweight(to_tsvector('english', coalesce(NEW.comm_num,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.name,'')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.client_name,'')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.sector,'')), 'C') ||
    setweight(to_tsvector('english', coalesce(NEW.region,'')), 'C');
  RETURN NEW;
END $$;
CREATE TRIGGER trg_opp_fts BEFORE INSERT OR UPDATE ON opportunities
  FOR EACH ROW EXECUTE FUNCTION opp_fts_update();

-- ── SRPs ─────────────────────────────────────────────────────────
CREATE TABLE srps (
  id                        UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id            UUID       NOT NULL UNIQUE REFERENCES opportunities(id) ON DELETE CASCADE,
  status                    srp_status NOT NULL DEFAULT 'Draft',
  -- Part A
  client_contact_name       VARCHAR(200),
  client_contact_email      VARCHAR(320),
  client_contact_tel        VARCHAR(50),
  client_contact_position   VARCHAR(200),
  commission_lead           VARCHAR(200),
  commission_lead_email     VARCHAR(320),
  commission_lead_mobile    VARCHAR(50),
  service_manager           VARCHAR(200),
  commission_desc           TEXT,
  commission_post_code      VARCHAR(20),
  main_contract_type        VARCHAR(200),
  start_date                DATE,
  end_date                  DATE,
  confidentiality_flag      VARCHAR(5)  NOT NULL DEFAULT 'No',
  has_programme             VARCHAR(5)  NOT NULL DEFAULT 'No',
  has_project_brief         VARCHAR(5)  NOT NULL DEFAULT 'No',
  has_scheme_layout         VARCHAR(5)  NOT NULL DEFAULT 'No',
  -- Part B
  pre_engagement_required   VARCHAR(5)  NOT NULL DEFAULT 'No',
  pre_engagement_items      JSONB       NOT NULL DEFAULT '{}',
  -- Part C
  project_overview          TEXT,
  objectives                TEXT,
  health_safety             TEXT,
  vfm_statement             TEXT,
  vfm_driver1               TEXT,
  vfm_driver2               TEXT,
  vfm_driver3               TEXT,
  project_success_criteria  TEXT,
  social_value              TEXT,
  toms_rows                 JSONB       NOT NULL DEFAULT '[]',
  -- Sections 6+
  s61 TEXT, s62 TEXT, s63 TEXT, s65 TEXT, s66 TEXT, s70 TEXT,
  s90 TEXT, s100 TEXT, s110 TEXT, s120 TEXT, s130 TEXT, s140 TEXT, s150 TEXT,
  non_core_services         JSONB       NOT NULL DEFAULT '[]',
  scope_selections          JSONB       NOT NULL DEFAULT '{}',
  -- Section 8
  upload_own_programme      VARCHAR(5)  NOT NULL DEFAULT 'No',
  delivery_rows             JSONB       NOT NULL DEFAULT '[]',
  -- Section 17
  selected_contract_desc    TEXT,
  -- Approval
  srp_delivery_method       VARCHAR(200),
  commercial_lead           VARCHAR(200),
  approval_comments         TEXT,
  approved_at               TIMESTAMPTZ,
  approved_by               VARCHAR(200),
  sent_for_approval_at      TIMESTAMPTZ,
  created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_srps_status ON srps(status);
CREATE INDEX idx_srps_opp    ON srps(opportunity_id);

-- ── FEE CALCULATORS ───────────────────────────────────────────────
CREATE TABLE fee_calculators (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id        UUID        NOT NULL UNIQUE REFERENCES opportunities(id) ON DELETE CASCADE,
  -- Config
  input_date            DATE,
  construction_value    NUMERIC(15,2) NOT NULL DEFAULT 0,
  pre_contract_weeks    SMALLINT    NOT NULL DEFAULT 0,
  post_contract_weeks   SMALLINT    NOT NULL DEFAULT 0,
  proc_route            VARCHAR(100) NOT NULL DEFAULT 'Design & Build – 1 stage',
  override_psc_pct      NUMERIC(6,3) NOT NULL DEFAULT 0,
  contract_lead         VARCHAR(200),
  supervisor            VARCHAR(200),
  bim                   VARCHAR(100) NOT NULL DEFAULT 'Standard (no IM)',
  nec3_option_g         BOOLEAN     NOT NULL DEFAULT FALSE,
  nec_contract_form     VARCHAR(200),
  nec_option            VARCHAR(10),
  inflation_required    VARCHAR(10) NOT NULL DEFAULT 'No',
  inflation_applied     VARCHAR(20) NOT NULL DEFAULT 'Outset',
  -- JSONB for complex nested structures
  selected_services     JSONB       NOT NULL DEFAULT '[]',
  secondary_services    JSONB       NOT NULL DEFAULT '[]',
  non_core_services     JSONB       NOT NULL DEFAULT '[]',
  time_charges          JSONB       NOT NULL DEFAULT '[]',
  non_sfr               JSONB       NOT NULL DEFAULT '[]',
  disbursements         JSONB       NOT NULL DEFAULT '[]',
  ce_list               JSONB       NOT NULL DEFAULT '[]',
  next_ce_num           SMALLINT    NOT NULL DEFAULT 1,
  -- Calculated totals (denormalised for API performance)
  total_prime_core      NUMERIC(15,2) NOT NULL DEFAULT 0,
  total_core            NUMERIC(15,2) NOT NULL DEFAULT 0,
  total_time_charges    NUMERIC(15,2) NOT NULL DEFAULT 0,
  total_ext_consultancy NUMERIC(15,2) NOT NULL DEFAULT 0,
  total_disbursements   NUMERIC(15,2) NOT NULL DEFAULT 0,
  psc_fee               NUMERIC(15,2) NOT NULL DEFAULT 0,
  grand_total           NUMERIC(15,2) NOT NULL DEFAULT 0,
  created_at            TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_fc_opp ON fee_calculators(opportunity_id);

-- ── INVOICE SCHEDULES ─────────────────────────────────────────────
CREATE TABLE invoice_schedules (
  id             UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID       NOT NULL REFERENCES opportunities(id) ON DELETE CASCADE,
  milestone      VARCHAR(300) NOT NULL,
  due_date       DATE       NOT NULL,
  sort_order     SMALLINT   NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_inv_sched_opp  ON invoice_schedules(opportunity_id);
CREATE INDEX idx_inv_sched_date ON invoice_schedules(due_date);

CREATE TABLE client_invoices (
  id                  UUID           PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_schedule_id UUID           NOT NULL REFERENCES invoice_schedules(id) ON DELETE CASCADE,
  invoice_ref         VARCHAR(30)    NOT NULL UNIQUE,
  net_amount          NUMERIC(15,2)  NOT NULL,
  vat_rate            NUMERIC(5,2)   NOT NULL DEFAULT 20,
  vat_amount          NUMERIC(15,2)  NOT NULL,
  total_amount        NUMERIC(15,2)  NOT NULL,
  status              invoice_status NOT NULL DEFAULT 'Pending',
  issued_at           DATE,
  paid_at             DATE,
  payment_terms       SMALLINT       NOT NULL DEFAULT 30,
  notes               TEXT,
  created_at          TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ    NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_ci_status   ON client_invoices(status);
CREATE INDEX idx_ci_schedule ON client_invoices(invoice_schedule_id);
CREATE INDEX idx_ci_ref      ON client_invoices(invoice_ref);
CREATE INDEX idx_ci_issued   ON client_invoices(issued_at DESC);

CREATE TABLE suppliers (
  id          UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(300)    NOT NULL,
  type        VARCHAR(150)    NOT NULL,
  contact     VARCHAR(200),
  email       VARCHAR(320),
  phone       VARCHAR(30),
  status      supplier_status NOT NULL DEFAULT 'UnderReview',
  cert_expiry DATE,
  tags        TEXT[]          NOT NULL DEFAULT '{}',
  notes       TEXT,
  metadata    JSONB           NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_supp_status  ON suppliers(status);
CREATE INDEX idx_supp_expiry  ON suppliers(cert_expiry);
CREATE INDEX idx_supp_name    ON suppliers USING GIN(name gin_trgm_ops);

CREATE TABLE supplier_invoices (
  id                  UUID           PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_schedule_id UUID           NOT NULL REFERENCES invoice_schedules(id) ON DELETE CASCADE,
  supplier_id         UUID           REFERENCES suppliers(id),
  invoice_ref         VARCHAR(30)    NOT NULL UNIQUE,
  supplier_name       VARCHAR(300)   NOT NULL,
  net_amount          NUMERIC(15,2)  NOT NULL,
  vat_amount          NUMERIC(15,2)  NOT NULL,
  total_amount        NUMERIC(15,2)  NOT NULL,
  status              invoice_status NOT NULL DEFAULT 'Pending',
  received_at         DATE,
  paid_at             DATE,
  notes               TEXT,
  created_at          TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ    NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_si_status   ON supplier_invoices(status);
CREATE INDEX idx_si_supplier ON supplier_invoices(supplier_id);
CREATE INDEX idx_si_schedule ON supplier_invoices(invoice_schedule_id);

-- ── CE EVENTS ────────────────────────────────────────────────────
CREATE TABLE ce_events (
  id             UUID     PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID     NOT NULL REFERENCES opportunities(id) ON DELETE CASCADE,
  ce_ref         VARCHAR(20) NOT NULL,
  description    TEXT     NOT NULL,
  stage          ce_stage NOT NULL DEFAULT 'Assessment',
  value          NUMERIC(15,2) NOT NULL DEFAULT 0,
  raised_at      DATE     NOT NULL DEFAULT CURRENT_DATE,
  raised_by      VARCHAR(200),
  metadata       JSONB    NOT NULL DEFAULT '{}',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_ce_opp   ON ce_events(opportunity_id);
CREATE INDEX idx_ce_stage ON ce_events(stage);
CREATE INDEX idx_ce_date  ON ce_events(raised_at DESC);

-- ── PROJECT PIs ───────────────────────────────────────────────────
CREATE TABLE project_pis (
  id             UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID       NOT NULL UNIQUE REFERENCES opportunities(id) ON DELETE CASCADE,
  status         VARCHAR(50) NOT NULL DEFAULT 'Not Started',
  version        SMALLINT   NOT NULL DEFAULT 1,
  approver       VARCHAR(200),
  approved_at    TIMESTAMPTZ,
  metadata       JSONB      NOT NULL DEFAULT '{}',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── SURVEYS ───────────────────────────────────────────────────────
CREATE TABLE surveys (
  id             UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  opportunity_id UUID       NOT NULL REFERENCES opportunities(id) ON DELETE CASCADE,
  type           VARCHAR(20) NOT NULL CHECK(type IN ('client','supplier')),
  supplier_id    UUID       REFERENCES suppliers(id),
  sent_at        TIMESTAMPTZ,
  deadline       DATE,
  submitted_at   TIMESTAMPTZ,
  satisfaction   SMALLINT   CHECK(satisfaction BETWEEN 1 AND 5),
  nps            SMALLINT   CHECK(nps BETWEEN -100 AND 100),
  responses      JSONB      NOT NULL DEFAULT '{}',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_surveys_opp  ON surveys(opportunity_id);
CREATE INDEX idx_surveys_type ON surveys(type);

-- ── MASTER LOOKUP ─────────────────────────────────────────────────
CREATE TABLE master_lookups (
  id         UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  category   VARCHAR(60) NOT NULL,
  code       VARCHAR(20),
  label      VARCHAR(300) NOT NULL,
  metadata   JSONB      NOT NULL DEFAULT '{}',
  sort_order SMALLINT   NOT NULL DEFAULT 0,
  is_active  BOOLEAN    NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(category, code)
);
CREATE INDEX idx_ml_cat   ON master_lookups(category, is_active);
CREATE INDEX idx_ml_sort  ON master_lookups(category, sort_order);

CREATE TABLE staff_grades (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  grade      VARCHAR(200) NOT NULL UNIQUE,
  rate       NUMERIC(10,2) NOT NULL,
  is_active  BOOLEAN     NOT NULL DEFAULT TRUE,
  sort_order SMALLINT    NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE people_band_rates (
  id         UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  rate_id    VARCHAR(20) NOT NULL UNIQUE,
  date_from  DATE       NOT NULL,
  date_to    DATE       NOT NULL,
  status     VARCHAR(20) NOT NULL CHECK(status IN ('Current','Upcoming','Superseded')),
  grades     JSONB      NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_pbr_dates CHECK(date_to > date_from)
);
CREATE INDEX idx_pbr_status ON people_band_rates(status);

-- ── DELEGATIONS ───────────────────────────────────────────────────
CREATE TABLE delegations (
  id              UUID              PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id    UUID              NOT NULL REFERENCES users(id),
  to_user_id      UUID              NOT NULL REFERENCES users(id),
  type            delegation_type   NOT NULL,
  scope           TEXT              NOT NULL,
  status          delegation_status NOT NULL DEFAULT 'Pending',
  approval_limit  NUMERIC(15,2),
  start_date      DATE              NOT NULL,
  end_date        DATE              NOT NULL,
  created_by_id   UUID              NOT NULL REFERENCES users(id),
  created_at      TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ       NOT NULL DEFAULT NOW(),
  revoked_at      TIMESTAMPTZ,
  CONSTRAINT chk_dlg_dates CHECK(end_date > start_date),
  CONSTRAINT chk_dlg_users CHECK(from_user_id != to_user_id)
);
CREATE INDEX idx_dlg_from   ON delegations(from_user_id);
CREATE INDEX idx_dlg_to     ON delegations(to_user_id);
CREATE INDEX idx_dlg_status ON delegations(status);
CREATE INDEX idx_dlg_end    ON delegations(end_date);

-- Auto-expire delegations
CREATE OR REPLACE FUNCTION expire_delegations() RETURNS VOID LANGUAGE SQL AS $$
  UPDATE delegations SET status='Expired', updated_at=NOW()
  WHERE status='Active' AND end_date < CURRENT_DATE;
$$;

-- ── NOTIFICATIONS (partitioned by month) ──────────────────────────
CREATE TABLE notifications (
  id          UUID          NOT NULL DEFAULT gen_random_uuid(),
  user_id     UUID          NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type        notif_type    NOT NULL,
  priority    notif_priority NOT NULL DEFAULT 'Medium',
  title       VARCHAR(500)  NOT NULL,
  body        TEXT,
  entity_type VARCHAR(60),
  entity_id   UUID,
  is_read     BOOLEAN       NOT NULL DEFAULT FALSE,
  read_at     TIMESTAMPTZ,
  metadata    JSONB         NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);

-- Monthly partitions
DO $$ DECLARE m INT; yr INT; s DATE; e DATE; tbl TEXT;
BEGIN
  FOR yr IN 2025..2026 LOOP
    FOR m IN 1..12 LOOP
      s := make_date(yr, m, 1);
      e := s + INTERVAL '1 month';
      tbl := format('notifications_%s_%02s', yr, m);
      EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF notifications FOR VALUES FROM (%L) TO (%L)', tbl, s, e);
    END LOOP;
  END LOOP;
END $$;

CREATE TABLE notifications_default PARTITION OF notifications DEFAULT;

CREATE INDEX idx_notif_user_read ON notifications(user_id, is_read);
CREATE INDEX idx_notif_user_date ON notifications(user_id, created_at DESC);

-- ── NOTIFICATION SETTINGS ─────────────────────────────────────────
CREATE TABLE notification_settings (
  id         UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  event_key  VARCHAR(60) NOT NULL,
  enabled    BOOLEAN    NOT NULL DEFAULT TRUE,
  digest     VARCHAR(20) NOT NULL DEFAULT 'Immediate',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, event_key)
);

-- ── AUDIT LOGS (partitioned by month) ────────────────────────────
CREATE TABLE audit_logs (
  id             UUID         NOT NULL DEFAULT gen_random_uuid(),
  action         audit_action NOT NULL,
  entity_type    VARCHAR(60)  NOT NULL,
  entity_id      UUID,
  opportunity_id UUID,
  user_id        UUID,
  proxy_user_id  UUID,
  is_proxy       BOOLEAN      NOT NULL DEFAULT FALSE,
  is_system      BOOLEAN      NOT NULL DEFAULT FALSE,
  description    TEXT         NOT NULL,
  before_val     JSONB,
  after_val      JSONB,
  comments       TEXT,
  ip_address     VARCHAR(45),
  user_agent     TEXT,
  created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);

DO $$ DECLARE m INT; yr INT; s DATE; e DATE; tbl TEXT;
BEGIN
  FOR yr IN 2024..2026 LOOP
    FOR m IN 1..12 LOOP
      s := make_date(yr, m, 1);
      e := s + INTERVAL '1 month';
      tbl := format('audit_logs_%s_%02s', yr, m);
      EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF audit_logs FOR VALUES FROM (%L) TO (%L)', tbl, s, e);
    END LOOP;
  END LOOP;
END $$;

CREATE TABLE audit_logs_default PARTITION OF audit_logs DEFAULT;

CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_user   ON audit_logs(user_id, created_at DESC);
CREATE INDEX idx_audit_opp    ON audit_logs(opportunity_id, created_at DESC);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_date   ON audit_logs(created_at DESC);

-- ── ENTITY VERSIONS ───────────────────────────────────────────────
CREATE TABLE entity_versions (
  id             UUID       PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type    VARCHAR(60) NOT NULL,
  entity_id      UUID       NOT NULL,
  opportunity_id UUID,
  version        INTEGER    NOT NULL,
  snapshot       JSONB      NOT NULL,
  changed_by     VARCHAR(200),
  change_summary TEXT,
  diff           JSONB,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(entity_type, entity_id, version)
);
CREATE INDEX idx_ev_entity ON entity_versions(entity_type, entity_id);
CREATE INDEX idx_ev_opp    ON entity_versions(opportunity_id);
CREATE INDEX idx_ev_date   ON entity_versions(created_at DESC);

-- ── UPDATED_AT TRIGGERS ───────────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END $$;

DO $$ DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'users','roles','opportunities','srps','fee_calculators',
    'invoice_schedules','client_invoices','supplier_invoices',
    'ce_events','project_pis','surveys','suppliers','delegations',
    'master_lookups','staff_grades','people_band_rates'
  ] LOOP
    EXECUTE format(
      'CREATE TRIGGER trg_%s_upd BEFORE UPDATE ON %I FOR EACH ROW EXECUTE FUNCTION set_updated_at()',
      t, t
    );
  END LOOP;
END $$;

-- ── SEARCH FUNCTION ───────────────────────────────────────────────
CREATE OR REPLACE FUNCTION search_opportunities(
  p_query     TEXT    DEFAULT NULL,
  p_status    TEXT    DEFAULT NULL,
  p_lead_id   UUID    DEFAULT NULL,
  p_sector    TEXT    DEFAULT NULL,
  p_region    TEXT    DEFAULT NULL,
  p_limit     INT     DEFAULT 20,
  p_offset    INT     DEFAULT 0
) RETURNS TABLE(
  id UUID, comm_num TEXT, name TEXT, client_name TEXT,
  lead_name TEXT, status opp_status, stage_percent SMALLINT,
  value NUMERIC, srp_status srp_status, created_at TIMESTAMPTZ,
  total BIGINT
) LANGUAGE plpgsql STABLE AS $$
DECLARE v_ts TSQUERY;
BEGIN
  IF p_query IS NOT NULL AND p_query != '' THEN
    v_ts := websearch_to_tsquery('english', p_query);
  END IF;
  RETURN QUERY
  SELECT o.id, o.comm_num::TEXT, o.name, o.client_name,
         u.name AS lead_name, o.status, o.stage_percent,
         o.value, o.srp_status, o.created_at,
         COUNT(*) OVER() AS total
  FROM opportunities o
  LEFT JOIN users u ON u.id = o.lead_id
  WHERE
    (p_status  IS NULL OR o.status::TEXT = p_status) AND
    (p_lead_id IS NULL OR o.lead_id = p_lead_id) AND
    (p_sector  IS NULL OR o.sector ILIKE '%'||p_sector||'%') AND
    (p_region  IS NULL OR o.region ILIKE '%'||p_region||'%') AND
    (v_ts IS NULL OR o.search_vec @@ v_ts
      OR o.name ILIKE '%'||p_query||'%'
      OR o.client_name ILIKE '%'||p_query||'%'
      OR o.comm_num ILIKE '%'||p_query||'%')
  ORDER BY
    CASE WHEN v_ts IS NOT NULL THEN ts_rank(o.search_vec, v_ts) ELSE 0 END DESC,
    o.created_at DESC
  LIMIT p_limit OFFSET p_offset;
END $$;

-- ── Performance optimization indexes (added during production validation) ──
-- CE search
CREATE INDEX IF NOT EXISTS idx_ce_desc_tgm ON ce_events USING GIN(description gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_ce_ref_tgm  ON ce_events USING GIN(ce_ref gin_trgm_ops);
-- SRP pending-actions query (status + sent_for_approval_at compound)
CREATE INDEX IF NOT EXISTS idx_srps_pending ON srps(status, sent_for_approval_at) WHERE status = 'SentForApproval';
-- Overdue invoice query
CREATE INDEX IF NOT EXISTS idx_ci_overdue ON client_invoices(issued_at, status) WHERE status != 'Paid';
-- Delegation expiry query
CREATE INDEX IF NOT EXISTS idx_dlg_expiring ON delegations(end_date, status) WHERE status = 'Active';
-- Reporting aggregate: opportunities by status+value
CREATE INDEX IF NOT EXISTS idx_opp_status_value ON opportunities(status, value DESC);
-- Audit reporting date range queries
CREATE INDEX IF NOT EXISTS idx_audit_date_entity ON audit_logs(created_at DESC, entity_type);
-- Project PI status
CREATE INDEX IF NOT EXISTS idx_pi_status ON project_pis(status);
-- Survey deadlines
CREATE INDEX IF NOT EXISTS idx_survey_deadline ON surveys(deadline) WHERE deadline IS NOT NULL;
