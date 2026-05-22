-- ================================================================
-- PC HUB 2.0 — Complete Seed Data
-- Matches HTML prototype data exactly + performance dataset
-- ================================================================

-- ── ROLES ────────────────────────────────────────────────────────
INSERT INTO roles (name, description, color, icon, is_system, permissions, sort_order) VALUES
  ('Admin',            'Full system access. All modules and settings.', '#dc2626', '👑', TRUE,  '{"all":true}', 1),
  ('Commission Lead',  'Manages commissions, SRP, Fee Calculator, CE.', '#2563eb', '⬛', FALSE, '{"opportunities":["read","write"],"srp":["read","write"],"fee_calculator":["read","write"],"ce":["read","write"],"pi":["read","write"],"invoices":["read"],"surveys":["read","write"],"master_lookup":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"],"audit":["read"]}', 2),
  ('Commercial Manager','Approves SRP and Fee Calculator. Financial visibility.', '#16a34a', '◈', FALSE, '{"opportunities":["read","write"],"srp":["read","approve"],"fee_calculator":["read","approve"],"ce":["read","approve"],"invoices":["read","write","approve"],"audit":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"]}', 3),
  ('Client',           'View-only access to assigned commissions.',     '#7c3aed', '◎', FALSE, '{"opportunities":["read"],"srp":["read"],"surveys":["read","write"],"invoices":["read"]}', 4),
  ('Supplier',         'Supplier portal and own invoices.',              '#f59e0b', '▣', FALSE, '{"suppliers":["read","write"],"surveys":["read","write"],"invoices":["read"]}', 5),
  ('Lead Partner',     'Cross-commission visibility and approvals.',     '#0f766e', '◆', FALSE, '{"opportunities":["read","write"],"srp":["read"],"fee_calculator":["read"],"audit":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"]}', 6),
  ('FDM',              'Financial data manager. Invoice and fee oversight.', '#be185d', '⊛', FALSE, '{"invoices":["read","write","approve"],"fee_calculator":["read","write"],"audit":["read"]}', 7);

-- ── USERS ────────────────────────────────────────────────────────
INSERT INTO users (id, name, email, initials, avatar_color, status, region, business_unit) VALUES
  ('11111111-1111-1111-1111-111111111111','James Dawson',  'j.dawson@perfectcircle.co.uk',  'JD','#3d7eff','Active','London','Built Environment'),
  ('22222222-2222-2222-2222-222222222222','Sarah Mitchell','s.mitchell@perfectcircle.co.uk','SM','#16a34a','Active','South East','Commercial'),
  ('33333333-3333-3333-3333-333333333333','Priya Patel',   'p.patel@perfectcircle.co.uk',   'PP','#7c3aed','Active','East Midlands','Healthcare'),
  ('44444444-4444-4444-4444-444444444444','Tom Hargreaves','t.hargreaves@perfectcircle.co.uk','TH','#f59e0b','Active','North West','Infrastructure'),
  ('55555555-5555-5555-5555-555555555555','Lucy Chen',     'l.chen@perfectcircle.co.uk',     'LC','#0f766e','Active','West Midlands','Industrial'),
  ('66666666-6666-6666-6666-666666666666','David Chambers','d.chambers@perfectcircle.co.uk','DC','#64748b','Inactive','Scotland','Finance'),
  ('77777777-7777-7777-7777-777777777777','Anna Kowalski', 'a.kowalski@perfectcircle.co.uk','AK','#be185d','Pending','London','Operations'),
  ('88888888-8888-8888-8888-888888888888','Marcus Webb',   'm.webb@perfectcircle.co.uk',    'MW','#0369a1','Active','Yorkshire','Built Environment'),
  ('99999999-9999-9999-9999-999999999999','Clare Foster',  'c.foster@perfectcircle.co.uk',  'CF','#7c2d12','Active','South West','Retail'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Raj Patel',     'r.patel@perfectcircle.co.uk',   'RP','#1e40af','Active','East of England','Education');

-- User-role assignments
INSERT INTO user_roles (user_id, role_id) SELECT '11111111-1111-1111-1111-111111111111', id FROM roles WHERE name='Commission Lead';
INSERT INTO user_roles (user_id, role_id) SELECT '22222222-2222-2222-2222-222222222222', id FROM roles WHERE name='Commercial Manager';
INSERT INTO user_roles (user_id, role_id) SELECT '33333333-3333-3333-3333-333333333333', id FROM roles WHERE name='Commission Lead';
INSERT INTO user_roles (user_id, role_id) SELECT '44444444-4444-4444-4444-444444444444', id FROM roles WHERE name='Lead Partner';
INSERT INTO user_roles (user_id, role_id) SELECT '55555555-5555-5555-5555-555555555555', id FROM roles WHERE name='Commission Lead';
INSERT INTO user_roles (user_id, role_id) SELECT '66666666-6666-6666-6666-666666666666', id FROM roles WHERE name='FDM';
INSERT INTO user_roles (user_id, role_id) SELECT '77777777-7777-7777-7777-777777777777', id FROM roles WHERE name='Admin';
INSERT INTO user_roles (user_id, role_id) SELECT '88888888-8888-8888-8888-888888888888', id FROM roles WHERE name='Commission Lead';
INSERT INTO user_roles (user_id, role_id) SELECT '99999999-9999-9999-9999-999999999999', id FROM roles WHERE name='Commission Lead';
INSERT INTO user_roles (user_id, role_id) SELECT 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', id FROM roles WHERE name='Commission Lead';

-- ── STAFF GRADES (matches FC_STAFF_GRADES) ────────────────────────
INSERT INTO staff_grades (grade, rate, sort_order) VALUES
  ('Director',                195, 1),
  ('Associate Director',      165, 2),
  ('Senior Associate',        145, 3),
  ('Associate',               125, 4),
  ('Senior Engineer/Architect',110,5),
  ('Engineer/Architect',       90, 6),
  ('Graduate',                 72, 7),
  ('Technician',               65, 8),
  ('Admin',                    45, 9);

-- ── PEOPLE BAND RATES ─────────────────────────────────────────────
INSERT INTO people_band_rates (rate_id, date_from, date_to, status, grades) VALUES
  ('PBR-001','2024-01-05','2024-12-31','Superseded',
   '[{"grade":"Director","rate":188},{"grade":"Associate Director","rate":159},{"grade":"Senior Associate","rate":140},{"grade":"Associate","rate":121},{"grade":"Senior Engineer/Architect","rate":106},{"grade":"Engineer/Architect","rate":87},{"grade":"Graduate","rate":70},{"grade":"Technician","rate":63},{"grade":"Admin","rate":43}]'),
  ('PBR-002','2025-01-05','2025-12-31','Current',
   '[{"grade":"Director","rate":195},{"grade":"Associate Director","rate":165},{"grade":"Senior Associate","rate":145},{"grade":"Associate","rate":125},{"grade":"Senior Engineer/Architect","rate":110},{"grade":"Engineer/Architect","rate":90},{"grade":"Graduate","rate":72},{"grade":"Technician","rate":65},{"grade":"Admin","rate":45}]'),
  ('PBR-003','2026-01-05','2026-12-31','Upcoming',
   '[{"grade":"Director","rate":202},{"grade":"Associate Director","rate":171},{"grade":"Senior Associate","rate":150},{"grade":"Associate","rate":129},{"grade":"Senior Engineer/Architect","rate":114},{"grade":"Engineer/Architect","rate":93},{"grade":"Graduate","rate":75},{"grade":"Technician","rate":67},{"grade":"Admin","rate":47}]');

-- ── MASTER LOOKUP ─────────────────────────────────────────────────
INSERT INTO master_lookups (category, code, label, sort_order) VALUES
  ('services',NULL,'Project Manager',1),
  ('services',NULL,'Quantity Surveyor',2),
  ('services',NULL,'Architect',3),
  ('services',NULL,'Building Surveyor',4),
  ('services',NULL,'Commercial Surveyor',5),
  ('services',NULL,'Electrical Engineer',6),
  ('services',NULL,'Mechanical Engineer',7),
  ('services',NULL,'Structural Engineer',8),
  ('bim_levels','BIM0','No BIM',1),
  ('bim_levels','BIM1','Standard (no IM)',2),
  ('bim_levels','BIM2','BIM Level 2',3),
  ('bim_levels','BIM3','BIM Level 3',4),
  ('bim_levels','FEDM','Federated Model',5),
  ('nec_types',NULL,'Option A NEC4 PSC (Service DA) Priced Contract',1),
  ('nec_types',NULL,'Option C NEC4 PSC (Service DA) Target Contract',2),
  ('nec_types',NULL,'Option E NEC4 PSC (Service DA) Cost Reimbursable',3),
  ('nec_types',NULL,'NEC3 PSC',4),
  ('lot_sectors',NULL,'Lot 1 – Architecture',1),
  ('lot_sectors',NULL,'Lot 2 – Structural Engineering',2),
  ('lot_sectors',NULL,'Lot 3 – M&E Engineering',3),
  ('lot_sectors',NULL,'Lot 4 – Project Management',4),
  ('lot_sectors',NULL,'Lot 5 – Cost Consultancy',5),
  ('regions',NULL,'East Midlands',1),
  ('regions',NULL,'West Midlands',2),
  ('regions',NULL,'North West',3),
  ('regions',NULL,'North East',4),
  ('regions',NULL,'Yorkshire',5),
  ('regions',NULL,'East of England',6),
  ('regions',NULL,'South East',7),
  ('regions',NULL,'South West',8),
  ('regions',NULL,'London',9),
  ('regions',NULL,'Wales',10),
  ('regions',NULL,'Scotland',11),
  ('regions',NULL,'Northern Ireland',12),
  ('partners',NULL,'1st Horizon',1),
  ('partners',NULL,'360 Energy',2),
  ('partners',NULL,'Perfect Circle',3),
  ('partners',NULL,'Stride Structural Ltd',4),
  ('partners',NULL,'Enviro MEP Solutions',5),
  ('partners',NULL,'CostPro QS Ltd',6),
  ('partners',NULL,'Urban Transport Consulting',7),
  ('partners',NULL,'GreenBuild Architects',8),
  ('proc_routes','SFR','Scape Framework Rates',1),
  ('proc_routes','AFR','Alternative Framework Rates',2),
  ('proc_routes','CPO','Client Proposed Organisation',3),
  ('proc_routes','CT','Competitive Tender (3+ suppliers)',4),
  ('proc_routes','BM','Benchmark Negotiation',5),
  ('proc_routes','OB','Open Book Arrangement',6),
  ('proc_routes','CPS','Client Preferred Supplier',7),
  ('vat_rates','STD','Standard Rate (20%)',1),
  ('vat_rates','RED','Reduced Rate (5%)',2),
  ('vat_rates','ZER','Zero Rate (0%)',3),
  ('vat_rates','EXM','Exempt',4);

-- ── SUPPLIERS ─────────────────────────────────────────────────────
INSERT INTO suppliers (name, type, contact, email, phone, status, cert_expiry, tags, notes) VALUES
  ('Stride Structural Ltd','Structural Engineering','Mark Stride','mark@stride-structural.com','0161 445 7823','Approved','2026-08-31',ARRAY['ISO 9001','PI Insurance','PQQ Approved'],'Long-standing partner. Excellent track record on 6+ commissions.'),
  ('Enviro MEP Solutions','M&E Engineering','Claire Hughes','claire@enviromep.co.uk','0207 889 3412','Approved','2025-12-31',ARRAY['ISO 14001','PI Insurance'],''),
  ('CostPro QS Ltd','Quantity Surveying','Daniel Park','d.park@costpro.co.uk','0113 567 2290','Approved','2025-06-30',ARRAY['RICS Member','PI Insurance','PQQ Approved'],''),
  ('GreenBuild Architects','Architecture','Sophie Walsh','s.walsh@greenbuild.co.uk','0207 334 5678','UnderReview','2025-03-31',ARRAY['RIBA Member','PI Insurance'],'New supplier — under review'),
  ('Apex Civil Engineering','Civil Engineering','Rob Chambers','r.chambers@apexcivil.co.uk','0113 445 2233','Expired','2024-12-31',ARRAY['ISO 9001'],'Certificate renewal overdue. Do not use until renewed.');

-- ── CORE OPPORTUNITIES (matches HTML prototype exactly) ────────────
INSERT INTO opportunities (id, comm_num, name, client_name, lead_id, sector, region, status, stage_percent, value, services, srp_status, created_at) VALUES
  ('00000001-0000-0000-0000-000000000001','PC-15000','Tesco Metro Refurb – London','Tesco Retail Ltd','11111111-1111-1111-1111-111111111111','Retail','London','WorkStarted',100,485000,ARRAY['Architecture','MEP Engineering'],'SentForApproval','2024-01-15'),
  ('00000002-0000-0000-0000-000000000002','PC-15001','Barclays HQ – Manchester','Barclays Bank PLC','22222222-2222-2222-2222-222222222222','Commercial Office','North West','Probable',50,320000,ARRAY['Architecture','Interior Design','Project Management'],'Draft','2024-02-08'),
  ('00000003-0000-0000-0000-000000000003','PC-15002','NHS Trust – Radiology Wing','NHS Property Services','33333333-3333-3333-3333-333333333333','Healthcare','East Midlands','Probable',50,780000,ARRAY['Architecture','Structural Engineering','Cost Consultancy'],'Draft','2024-03-01'),
  ('00000004-0000-0000-0000-000000000004','PC-15003','Network Rail – Depot Upgrade','Network Rail Ltd','44444444-4444-4444-4444-444444444444','Transport / Infrastructure','North East','Probable',50,210000,ARRAY['Structural Engineering','MEP Engineering'],'Draft','2024-01-05'),
  ('00000005-0000-0000-0000-000000000005','PC-15004','Rolls-Royce Innovation Hub','Rolls-Royce Holdings','55555555-5555-5555-5555-555555555555','Industrial / Logistics','East Midlands','Lead',20,1250000,ARRAY['Architecture','Interior Design','Landscape Architecture'],'Draft','2024-03-20'),
  ('00000006-0000-0000-0000-000000000006','PC-15005','Tesco Distribution Centre','Tesco Retail Ltd','11111111-1111-1111-1111-111111111111','Industrial / Logistics','East Midlands','Completed',100,550000,ARRAY['Architecture','Structural Engineering'],'Approved','2023-11-01'),
  ('00000007-0000-0000-0000-000000000007','PC-15006','Barclays Branch Network','Barclays Bank PLC','22222222-2222-2222-2222-222222222222','Commercial Office','London','WorkStarted',100,180000,ARRAY['Architecture','Interior Design'],'Draft','2023-12-15');

-- SRP for PC-15000
INSERT INTO srps (opportunity_id, status, client_contact_name, client_contact_email,
  client_contact_tel, client_contact_position, commission_lead, commission_lead_email,
  commission_lead_mobile, service_manager, commission_desc, commission_post_code,
  main_contract_type, project_overview, project_success_criteria,
  srp_delivery_method, commercial_lead, sent_for_approval_at)
VALUES (
  '00000001-0000-0000-0000-000000000001','SentForApproval',
  'Mr John Smith','j.smith@tesco.com','0161 445 1234','Estates Manager',
  'James Dawson','j.dawson@perfectcircle.co.uk','07700 900 001','James Dawson',
  'Tesco Metro store refurbishment in Central London covering structural, MEP, and architectural services.',
  'W1A 1AB','Option A NEC4 PSC (Service DA) Priced Contract',
  'The Tesco Metro Refurbishment project involves comprehensive internal and external renovation of a 2,800 sqm retail unit in Central London.',
  'Deliver within agreed budget of £485,000, programme of 18 months, and client satisfaction rating of 4+/5.',
  'Service Delivery Agreement','Sarah Mitchell','2024-01-20'
);

-- Fee Calculator initial state for PC-15000
INSERT INTO fee_calculators (opportunity_id, construction_value, proc_route, selected_services)
VALUES (
  '00000001-0000-0000-0000-000000000001', 485000, 'Design & Build – 1 stage',
  '[{"name":"Project Manager","ribaStages":[],"supplier":"","procRoute":"SFR","isPct":false},{"name":"Quantity Surveyor","ribaStages":[],"supplier":"","procRoute":"SFR","isPct":false},{"name":"Architect","ribaStages":[],"supplier":"","procRoute":"SFR","isPct":false}]'
);

-- Default SRP + FC for other opps
INSERT INTO srps (opportunity_id, status) VALUES
  ('00000002-0000-0000-0000-000000000002','Draft'),
  ('00000003-0000-0000-0000-000000000003','Draft'),
  ('00000004-0000-0000-0000-000000000004','Draft'),
  ('00000005-0000-0000-0000-000000000005','Draft'),
  ('00000006-0000-0000-0000-000000000006','Approved'),
  ('00000007-0000-0000-0000-000000000007','Draft');

INSERT INTO fee_calculators (opportunity_id, construction_value) VALUES
  ('00000002-0000-0000-0000-000000000002',320000),
  ('00000003-0000-0000-0000-000000000003',780000),
  ('00000004-0000-0000-0000-000000000004',210000),
  ('00000005-0000-0000-0000-000000000005',1250000),
  ('00000006-0000-0000-0000-000000000006',550000),
  ('00000007-0000-0000-0000-000000000007',180000);

-- ── INVOICE SCHEDULES ─────────────────────────────────────────────
INSERT INTO invoice_schedules (id, opportunity_id, milestone, due_date, sort_order) VALUES
  ('00100001-0000-0000-0000-000000000001','00000001-0000-0000-0000-000000000001','Stage 2 Completion','2026-07-31',1),
  ('00100002-0000-0000-0000-000000000002','00000001-0000-0000-0000-000000000001','Stage 3 Completion','2026-11-30',2),
  ('00100003-0000-0000-0000-000000000003','00000001-0000-0000-0000-000000000001','Stage 4 Completion','2027-03-15',3),
  ('00200001-0000-0000-0000-000000000001','00000002-0000-0000-0000-000000000002','Design Sign-off','2026-08-31',1),
  ('00200002-0000-0000-0000-000000000002','00000002-0000-0000-0000-000000000002','Technical Package','2026-11-30',2),
  ('00600001-0000-0000-0000-000000000001','00000006-0000-0000-0000-000000000006','Stage 2','2026-06-30',1),
  ('00600002-0000-0000-0000-000000000002','00000006-0000-0000-0000-000000000006','Stage 3','2026-09-30',2),
  ('00600003-0000-0000-0000-000000000003','00000006-0000-0000-0000-000000000006','Stage 4-5','2026-12-31',3),
  ('00600004-0000-0000-0000-000000000004','00000006-0000-0000-0000-000000000006','Stage 6 – Final','2027-03-31',4);

INSERT INTO client_invoices (invoice_schedule_id, invoice_ref, net_amount, vat_amount, total_amount, status, issued_at, paid_at) VALUES
  ('00100001-0000-0000-0000-000000000001','CI-001',72000,14400,86400,'Paid','2024-03-15','2024-04-10'),
  ('00100002-0000-0000-0000-000000000002','CI-002',110000,22000,132000,'Paid','2024-07-20','2024-08-15'),
  ('00100003-0000-0000-0000-000000000003','CI-003',145000,29000,174000,'Pending','2024-12-01',NULL),
  ('00200001-0000-0000-0000-000000000001','CI-010',55000,11000,66000,'Paid','2024-05-15','2024-06-10'),
  ('00200002-0000-0000-0000-000000000002','CI-011',88000,17600,105600,'Pending','2024-10-20',NULL),
  ('00600001-0000-0000-0000-000000000001','CI-030',80000,16000,96000,'Paid','2023-12-15','2024-01-10'),
  ('00600002-0000-0000-0000-000000000002','CI-031',120000,24000,144000,'Paid','2024-03-20','2024-04-15'),
  ('00600003-0000-0000-0000-000000000003','CI-032',200000,40000,240000,'Paid','2024-08-15','2024-09-10'),
  ('00600004-0000-0000-0000-000000000004','CI-033',150000,30000,180000,'Paid','2024-11-20','2024-12-15');

INSERT INTO supplier_invoices (invoice_schedule_id, supplier_id, invoice_ref, supplier_name, net_amount, vat_amount, total_amount, status, received_at, paid_at)
SELECT '00100001-0000-0000-0000-000000000001',s.id,'SI-001',s.name,5000,1000,6000,'Paid','2024-03-20','2024-04-05'
FROM suppliers s WHERE s.name='Stride Structural Ltd' LIMIT 1;

INSERT INTO supplier_invoices (invoice_schedule_id, supplier_id, invoice_ref, supplier_name, net_amount, vat_amount, total_amount, status, received_at, paid_at)
SELECT '00100001-0000-0000-0000-000000000001',s.id,'SI-002',s.name,3000,600,3600,'Paid','2024-03-21','2024-04-06'
FROM suppliers s WHERE s.name='Enviro MEP Solutions' LIMIT 1;

INSERT INTO supplier_invoices (invoice_schedule_id, supplier_id, invoice_ref, supplier_name, net_amount, vat_amount, total_amount, status, received_at)
SELECT '00100003-0000-0000-0000-000000000003',s.id,'SI-005',s.name,12000,2400,14400,'Pending','2024-12-05'
FROM suppliers s WHERE s.name='Stride Structural Ltd' LIMIT 1;

-- ── CE EVENTS ─────────────────────────────────────────────────────
INSERT INTO ce_events (opportunity_id, ce_ref, description, stage, value, raised_at) VALUES
  ('00000001-0000-0000-0000-000000000001','CE-001','Additional surveys required by client','Approved',12500,'2024-01-15'),
  ('00000001-0000-0000-0000-000000000001','CE-002','Design scope change – additional floor','Assessment',28000,'2024-03-10'),
  ('00000002-0000-0000-0000-000000000002','CE-003','Client-requested programme extension','Submitted',8200,'2024-05-20'),
  ('00000003-0000-0000-0000-000000000003','CE-004','Revised programme duration','Assessment',18500,'2024-05-10'),
  ('00000004-0000-0000-0000-000000000004','CE-005','Additional structural investigation','Reviewed',15000,'2024-02-28');

-- ── PROJECT PIs ───────────────────────────────────────────────────
INSERT INTO project_pis (opportunity_id, status, version, approver, approved_at) VALUES
  ('00000001-0000-0000-0000-000000000001','Approved',2,'Sarah Mitchell','2024-02-01'),
  ('00000002-0000-0000-0000-000000000002','Pending Approval',1,NULL,NULL),
  ('00000003-0000-0000-0000-000000000003','Not Started',1,NULL,NULL),
  ('00000004-0000-0000-0000-000000000004','Not Started',1,NULL,NULL),
  ('00000005-0000-0000-0000-000000000005','Not Started',1,NULL,NULL),
  ('00000006-0000-0000-0000-000000000006','Approved',3,'James Dawson','2024-01-10'),
  ('00000007-0000-0000-0000-000000000007','Not Started',1,NULL,NULL);

-- ── SURVEYS ───────────────────────────────────────────────────────
INSERT INTO surveys (opportunity_id, type, sent_at, deadline, submitted_at, satisfaction, nps, responses) VALUES
  ('00000001-0000-0000-0000-000000000001','client','2024-04-01','2024-04-30','2024-04-25',4,55,'{"q1":"Very satisfied","q2":"Good communication"}'),
  ('00000002-0000-0000-0000-000000000002','client','2024-06-01','2024-06-30',NULL,NULL,NULL,'{}'),
  ('00000006-0000-0000-0000-000000000006','client','2024-12-01','2024-12-31','2024-12-20',5,78,'{"q1":"Excellent service","q2":"Delivered on time and budget"}');

INSERT INTO surveys (opportunity_id, type, supplier_id, submitted_at, satisfaction)
SELECT '00000001-0000-0000-0000-000000000001','supplier',s.id,'2024-04-10',4
FROM suppliers s WHERE s.name='Stride Structural Ltd' LIMIT 1;

-- ── DELEGATIONS ───────────────────────────────────────────────────
INSERT INTO delegations (from_user_id, to_user_id, type, scope, status, approval_limit, start_date, end_date, created_by_id)
VALUES
  ('44444444-4444-4444-4444-444444444444','11111111-1111-1111-1111-111111111111','Workflow','CE Actions only','Active',50000,'2025-05-10','2025-06-15','44444444-4444-4444-4444-444444444444'),
  ('22222222-2222-2222-2222-222222222222','33333333-3333-3333-3333-333333333333','ApprovalOnly','SRP Approvals – PC-15002, PC-15003','Active',250000,'2025-05-01','2025-05-31','22222222-2222-2222-2222-222222222222'),
  ('55555555-5555-5555-5555-555555555555','88888888-8888-8888-8888-888888888888','ReadOnly','Opportunities – view only','Expired',NULL,'2025-04-15','2025-05-15','55555555-5555-5555-5555-555555555555'),
  ('11111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222222','Full','All modules','Pending',500000,'2025-05-20','2025-05-22','11111111-1111-1111-1111-111111111111');

-- ── NOTIFICATIONS ─────────────────────────────────────────────────
INSERT INTO notifications (user_id, type, priority, title, body, entity_type, entity_id, is_read) VALUES
  ('11111111-1111-1111-1111-111111111111','SrpApproval','High','SRP Overdue – PC-15000 Tesco Metro','Action required: SRP approval is overdue','opportunities','00000001-0000-0000-0000-000000000001',FALSE),
  ('11111111-1111-1111-1111-111111111111','FeeApproval','Medium','Fee Calculator approved – PC-15001','Approved by Sarah Mitchell','opportunities','00000002-0000-0000-0000-000000000002',FALSE),
  ('11111111-1111-1111-1111-111111111111','Delegation','Low','Delegation active: Tom H. → James D.','CE Actions delegated until 15 Jun',NULL,NULL,TRUE);

-- ── AUDIT LOGS ────────────────────────────────────────────────────
INSERT INTO audit_logs (action, entity_type, entity_id, opportunity_id, user_id, is_system, description, after_val, created_at) VALUES
  ('Create','opportunities','00000001-0000-0000-0000-000000000001','00000001-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111',FALSE,'Commission PC-15000 created','{"commNum":"PC-15000","status":"WorkStarted"}','2024-01-15'),
  ('Update','srps',NULL,'00000001-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111',FALSE,'SRP Part A completed for PC-15000','{"clientContactName":"Mr John Smith"}','2024-01-18'),
  ('Approve','srps',NULL,'00000001-0000-0000-0000-000000000001','22222222-2222-2222-2222-222222222222',FALSE,'SRP sent for approval – PC-15000','{"status":"SentForApproval"}','2024-01-20'),
  ('Create','ce_events',NULL,'00000001-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111',FALSE,'CE-001 raised on PC-15000','{"value":12500,"stage":"Assessment"}','2024-01-15'),
  ('System','delegations',NULL,NULL,NULL,TRUE,'Delegation created: Tom Hargreaves → James Dawson',NULL,'2025-05-10');

-- ── SEED 200 OPPORTUNITIES (performance dataset) ──────────────────
DO $$
DECLARE
  i INT;
  v_clients TEXT[] := ARRAY['Tesco Retail Ltd','Barclays Bank PLC','NHS Property Services','Network Rail Ltd','Rolls-Royce Holdings','Sainsbury''s Group','HSBC UK','Aviva Insurance','BAE Systems','National Grid','Lloyds Banking Group','Transport for London','Ministry of Justice'];
  v_sectors TEXT[] := ARRAY['Healthcare','Retail','Commercial Office','Education','Industrial / Logistics','Transport / Infrastructure','Residential','Civic / Public'];
  v_regions TEXT[] := ARRAY['London','South East','South West','East Midlands','West Midlands','North West','North East','Yorkshire','Wales','Scotland'];
  v_statuses opp_status[] := ARRAY['Lead','Probable','StrongProbable','Contracted','WorkStarted','Completed']::opp_status[];
  v_leads UUID[] := ARRAY['11111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222222','33333333-3333-3333-3333-333333333333','44444444-4444-4444-4444-444444444444','55555555-5555-5555-5555-555555555555']::UUID[];
  v_names TEXT[] := ARRAY['Civic Hub Redevelopment','Distribution Centre Expansion','Primary Care Centre','Railway Depot Upgrade','University Teaching Block','Office Fit-Out Phase 2','Retail Unit Reconfiguration','Housing Development Block A','Wastewater Treatment Plant','Fire Station Refurbishment','Primary School Extension','Data Centre Build','Stadium Accessibility Works','Marine Research Facility','Airport Terminal Expansion','Leisure Centre Regeneration','Energy Recovery Facility','Passenger Terminal Upgrade','Logistics Hub Phase 3','School Expansion Programme'];
  v_st opp_status; v_stg INT; v_oid UUID;
BEGIN
  FOR i IN 1..200 LOOP
    v_st := v_statuses[1 + (i % array_length(v_statuses,1))];
    v_stg := CASE v_st WHEN 'Lead' THEN 20 WHEN 'Probable' THEN 50 WHEN 'StrongProbable' THEN 75 ELSE 100 END;
    INSERT INTO opportunities (comm_num, name, client_name, lead_id, sector, region, status, stage_percent, value, services, created_at)
    VALUES (
      'PC-'||(15100+i),
      v_names[1+(i%array_length(v_names,1))]||' – '||v_regions[1+(i%array_length(v_regions,1))],
      v_clients[1+(i%array_length(v_clients,1))],
      v_leads[1+(i%array_length(v_leads,1))],
      v_sectors[1+(i%array_length(v_sectors,1))],
      v_regions[1+(i%array_length(v_regions,1))],
      v_st, v_stg, (50+(i*7))*1000,
      ARRAY['Project Manager','Quantity Surveyor'],
      NOW()-(i*INTERVAL '2 days')
    ) RETURNING id INTO v_oid;
    -- Create default SRP + FC for each seed opp
    INSERT INTO srps (opportunity_id) VALUES (v_oid) ON CONFLICT DO NOTHING;
    INSERT INTO fee_calculators (opportunity_id, construction_value) VALUES (v_oid, (50+(i*7))*1000) ON CONFLICT DO NOTHING;
    INSERT INTO project_pis (opportunity_id) VALUES (v_oid) ON CONFLICT DO NOTHING;
  END LOOP;
END $$;

-- ── SEED 500 AUDIT RECORDS ────────────────────────────────────────
DO $$
DECLARE i INT;
  v_acts audit_action[] := ARRAY['Create','Update','Approve','Login','Export']::audit_action[];
  v_mods TEXT[] := ARRAY['opportunities','srps','fee_calculators','ce_events','invoices','suppliers'];
  v_usrs UUID[] := ARRAY['11111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222222','33333333-3333-3333-3333-333333333333','44444444-4444-4444-4444-444444444444']::UUID[];
BEGIN
  FOR i IN 1..500 LOOP
    INSERT INTO audit_logs (action, entity_type, user_id, is_system, description, created_at)
    VALUES (
      v_acts[1+(i%array_length(v_acts,1))],
      v_mods[1+(i%array_length(v_mods,1))],
      v_usrs[1+(i%array_length(v_usrs,1))],
      FALSE, 'Seed audit record #'||i,
      NOW()-(i*INTERVAL '3 hours')
    );
  END LOOP;
END $$;
