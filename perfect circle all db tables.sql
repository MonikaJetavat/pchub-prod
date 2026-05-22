-- ============================================================
-- PERFECT CIRCLE — All Table SELECT Queries
-- Run in psql: psql -U postgres -d perfect_circle
-- ============================================================

-- 1. USERS
SELECT id, name, email, initials, status, region, business_unit, last_login_at, created_at
FROM users
ORDER BY created_at DESC;

-- 2. ROLES
SELECT id, name, description, color, is_system, is_active, permissions, sort_order
FROM roles
ORDER BY sort_order;

-- 3. USER ↔ ROLE ASSIGNMENTS
SELECT u.name AS user_name, u.email, r.name AS role, ur.granted_at
FROM user_roles ur
JOIN users u ON u.id = ur.user_id
JOIN roles  r ON r.id = ur.role_id
ORDER BY u.name;

-- 4. OPPORTUNITIES
SELECT id, comm_num, name, client_name, status, stage_percent,
       value, srp_status, sector, region, created_at
FROM opportunities
ORDER BY created_at DESC;

-- 5. SRPs (Service Requirement Plans)
SELECT s.id, o.comm_num, s.status, s.client_contact_name,
       s.commission_lead, s.sent_for_approval_at, s.approved_at
FROM srps s
JOIN opportunities o ON o.id = s.opportunity_id
ORDER BY s.updated_at DESC;

-- 6. FEE CALCULATORS
SELECT f.id, o.comm_num, f.construction_value, f.proc_route,
       f.grand_total, f.total_core, f.total_time_charges, f.updated_at
FROM fee_calculators f
JOIN opportunities o ON o.id = f.opportunity_id
ORDER BY f.updated_at DESC;

-- 7. INVOICE SCHEDULES
SELECT i.id, o.comm_num, i.milestone, i.due_date, i.sort_order
FROM invoice_schedules i
JOIN opportunities o ON o.id = i.opportunity_id
ORDER BY o.comm_num, i.sort_order;

-- 8. CLIENT INVOICES
SELECT ci.id, ci.invoice_ref, o.comm_num, ci.net_amount,
       ci.vat_amount, ci.total_amount, ci.status, ci.issued_at, ci.paid_at
FROM client_invoices ci
JOIN invoice_schedules s ON s.id = ci.invoice_schedule_id
JOIN opportunities o      ON o.id = s.opportunity_id
ORDER BY ci.issued_at DESC;

-- 9. SUPPLIERS
SELECT id, name, type, contact, email, status, cert_expiry, tags, created_at
FROM suppliers
ORDER BY name;

-- 10. SUPPLIER INVOICES
SELECT si.id, si.invoice_ref, o.comm_num, si.supplier_name,
       si.net_amount, si.total_amount, si.status, si.received_at, si.paid_at
FROM supplier_invoices si
JOIN invoice_schedules s ON s.id = si.invoice_schedule_id
JOIN opportunities o      ON o.id = s.opportunity_id
ORDER BY si.received_at DESC;

-- 11. CE EVENTS (Compensation Events)
SELECT ce.id, o.comm_num, ce.ce_ref, ce.description,
       ce.stage, ce.value, ce.raised_at, ce.raised_by
FROM ce_events ce
JOIN opportunities o ON o.id = ce.opportunity_id
ORDER BY ce.raised_at DESC;

-- 12. PROJECT PIs
SELECT pp.id, o.comm_num, pp.status, pp.version, pp.approver, pp.approved_at
FROM project_pis pp
JOIN opportunities o ON o.id = pp.opportunity_id
ORDER BY pp.updated_at DESC;

-- 13. SURVEYS
SELECT sv.id, o.comm_num, sv.type, sv.satisfaction, sv.nps,
       sv.sent_at, sv.submitted_at, sv.deadline
FROM surveys sv
JOIN opportunities o ON o.id = sv.opportunity_id
ORDER BY sv.sent_at DESC;

-- 14. DELEGATIONS
SELECT d.id, fu.name AS from_user, tu.name AS to_user,
       d.type, d.status, d.scope, d.approval_limit, d.start_date, d.end_date
FROM delegations d
JOIN users fu ON fu.id = d.from_user_id
JOIN users tu ON tu.id = d.to_user_id
ORDER BY d.start_date DESC;

-- 15. NOTIFICATIONS
SELECT n.id, u.name AS user_name, n.type, n.priority,
       n.title, n.is_read, n.created_at
FROM notifications n
JOIN users u ON u.id = n.user_id
ORDER BY n.created_at DESC
LIMIT 100;

-- 16. NOTIFICATION SETTINGS
SELECT ns.id, u.name AS user_name, ns.event_key, ns.enabled, ns.digest
FROM notification_settings ns
JOIN users u ON u.id = ns.user_id
ORDER BY u.name, ns.event_key;

-- 17. AUDIT LOGS
SELECT al.id, al.action, al.entity_type, al.description,
       u.name AS user_name, al.is_system, al.created_at
FROM audit_logs al
LEFT JOIN users u ON u.id = al.user_id
ORDER BY al.created_at DESC
LIMIT 100;

-- 18. ENTITY VERSIONS (history/snapshots)
SELECT ev.id, ev.entity_type, ev.version,
       o.comm_num, ev.changed_by, ev.change_summary, ev.created_at
FROM entity_versions ev
LEFT JOIN opportunities o ON o.id = ev.opportunity_id
ORDER BY ev.created_at DESC;

-- 19. MASTER LOOKUPS (reference data)
SELECT id, category, code, label, sort_order, is_active
FROM master_lookups
ORDER BY category, sort_order;

-- 20. STAFF GRADES
SELECT id, grade, rate, is_active, sort_order
FROM staff_grades
ORDER BY sort_order;

-- 21. PEOPLE BAND RATES
SELECT id, rate_id, date_from, date_to, status, grades
FROM people_band_rates
ORDER BY date_from DESC;

-- ── USEFUL SUMMARY QUERIES ───────────────────────────────────────

-- Count of rows per table
SELECT 'users' AS tbl, COUNT(*) FROM users
UNION ALL SELECT 'roles',              COUNT(*) FROM roles
UNION ALL SELECT 'opportunities',      COUNT(*) FROM opportunities
UNION ALL SELECT 'srps',               COUNT(*) FROM srps
UNION ALL SELECT 'fee_calculators',    COUNT(*) FROM fee_calculators
UNION ALL SELECT 'invoice_schedules',  COUNT(*) FROM invoice_schedules
UNION ALL SELECT 'client_invoices',    COUNT(*) FROM client_invoices
UNION ALL SELECT 'supplier_invoices',  COUNT(*) FROM supplier_invoices
UNION ALL SELECT 'suppliers',          COUNT(*) FROM suppliers
UNION ALL SELECT 'ce_events',          COUNT(*) FROM ce_events
UNION ALL SELECT 'project_pis',        COUNT(*) FROM project_pis
UNION ALL SELECT 'surveys',            COUNT(*) FROM surveys
UNION ALL SELECT 'delegations',        COUNT(*) FROM delegations
UNION ALL SELECT 'notifications',      COUNT(*) FROM notifications
UNION ALL SELECT 'audit_logs',         COUNT(*) FROM audit_logs
UNION ALL SELECT 'entity_versions',    COUNT(*) FROM entity_versions
UNION ALL SELECT 'master_lookups',     COUNT(*) FROM master_lookups
UNION ALL SELECT 'staff_grades',       COUNT(*) FROM staff_grades
UNION ALL SELECT 'people_band_rates',  COUNT(*) FROM people_band_rates
ORDER BY tbl;