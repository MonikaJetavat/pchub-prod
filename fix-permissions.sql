UPDATE roles
SET permissions = '{"opportunities":["read","write"],"srp":["read","write"],"fee_calculator":["read","write"],"ce":["read","write"],"pi":["read","write"],"invoices":["read"],"surveys":["read","write"],"master_lookup":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"],"audit":["read"]}'::jsonb
WHERE name = 'Commission Lead';

UPDATE roles
SET permissions = '{"opportunities":["read","write"],"srp":["read","approve"],"fee_calculator":["read","approve"],"ce":["read","approve"],"invoices":["read","write","approve"],"audit":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"]}'::jsonb
WHERE name = 'Commercial Manager';

UPDATE roles
SET permissions = '{"opportunities":["read","write"],"srp":["read"],"fee_calculator":["read"],"audit":["read"],"reporting":["read"],"users":["read"],"roles":["read"],"delegations":["read","write"],"suppliers":["read"]}'::jsonb
WHERE name = 'Lead Partner';

SELECT name, permissions FROM roles ORDER BY sort_order;
