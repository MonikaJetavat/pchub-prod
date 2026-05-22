-- Migration 002: Add conditional comment fields and new CSV-driven fields to srps table
-- Sources: Refer_from_here/field-analysis.csv

ALTER TABLE srps
  -- Has_Client_Prog_Appended_Comment / Has_Client_Proj_Brief_Appended_Comment / Has_Scheme_Layout_Appended_Comment
  ADD COLUMN IF NOT EXISTS has_programme_comment      TEXT,
  ADD COLUMN IF NOT EXISTS has_project_brief_comment  TEXT,
  ADD COLUMN IF NOT EXISTS has_scheme_layout_comment  TEXT,
  -- Client_Proposed_Organisations_Comment (required when client_proposed_org='Yes')
  ADD COLUMN IF NOT EXISTS client_proposed_org         TEXT NOT NULL DEFAULT 'No',
  ADD COLUMN IF NOT EXISTS client_proposed_org_comment TEXT,
  -- Client_Specific_Value_For_Money_Driver (shown when any VfM driver = '12) Client specific...')
  ADD COLUMN IF NOT EXISTS client_specific_vfm_driver  TEXT;
