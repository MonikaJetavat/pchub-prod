# PC HUB 2.0 — Enterprise Commission Management

**Stack:** Angular 17 · NestJS · PostgreSQL 16 · Redis · Docker · nginx

## Quick Start

```bash
# 1. Clone and set up
git clone <repo>
cd pchub-prod
bash infrastructure/scripts/setup.sh

# 2. Edit .env (set POSTGRES_PASSWORD, JWT_SECRET)
nano .env

# 3. Start all services
docker-compose -f infrastructure/docker/docker-compose.yml up -d --build

# 4. Verify
curl http://localhost/api/health
# → { "status": "ok", "db": "connected" }
```

App: http://localhost | API Docs: http://localhost/api/docs (dev only)

---

## Local Development

```bash
# Start PostgreSQL + Redis only
docker-compose -f infrastructure/docker/docker-compose.yml up -d postgres redis

# Backend (port 3000)
cd backend
npm install && npm run db:generate
psql $DATABASE_URL -f prisma/migrations/001_schema.sql   # first run only
npm run db:seed                                            # first run only
npm run start:dev

# Frontend (port 4200)
cd frontend
npm install && npm start
```

---

## API Endpoints

| Module | Path | Auth |
|--------|------|------|
| Auth | `GET /api/v1/auth/me` | Bearer |
| Opportunities | `GET /api/v1/opportunities` | ✓ |
| SRP | `GET /api/v1/srp/:opportunityId` | ✓ |
| Fee Calculator | `GET /api/v1/fee-calculator/:opportunityId` | ✓ |
| Client Invoices | `GET /api/v1/invoices/client` | ✓ |
| Supplier Invoices | `GET /api/v1/invoices/supplier` | ✓ |
| CE Events | `GET /api/v1/ce` | ✓ |
| Project PI | `GET /api/v1/project-pi` | ✓ |
| Surveys | `GET /api/v1/surveys` | ✓ |
| Suppliers | `GET /api/v1/suppliers` | ✓ |
| Users | `GET /api/v1/users` | ✓ |
| Roles | `GET /api/v1/roles` | ✓ |
| Delegations | `GET /api/v1/delegations` | ✓ |
| Master Lookup | `GET /api/v1/master-lookup` | ✓ |
| Audit | `GET /api/v1/audit` | ✓ |
| Notifications | `GET /api/v1/notifications` | ✓ |

### Pagination (all list endpoints)
```
?page=1&pageSize=20&sortBy=createdAt&sortDir=desc&q=search+term
```

### Dev JWT (non-production only)
```bash
curl -X POST http://localhost:3000/api/v1/auth/dev-token/11111111-1111-1111-1111-111111111111
# → { "token": "eyJ..." }
```

---

## Project Structure

```
pchub-prod/
├── backend/
│   ├── src/
│   │   ├── auth/               JWT + RBAC
│   │   ├── common/             Guards, decorators, filters
│   │   ├── modules/
│   │   │   ├── opportunities/  all-modules.ts (12 modules)
│   │   │   ├── audit/          Immutable audit log
│   │   │   └── notifications/  User notifications
│   │   └── prisma/             ORM service
│   └── prisma/
│       ├── migrations/001_schema.sql   Full schema + FTS + partitions
│       ├── schema.prisma               Prisma model definitions
│       └── seeds/seed.sql              ~207 opportunities + 500 audit records
│
├── frontend/
│   └── src/app/
│       ├── core/services/api.service.ts      API + auth + services + models
│       ├── features/all-feature-components.ts All 14 Angular components
│       ├── layout/shell.component.ts          Sidebar + topbar
│       └── shared/components/shared-components.ts  Paginator + StageBadge + FilterBar
│
└── infrastructure/
    ├── docker/
    │   ├── docker-compose.yml   5-service production stack
    │   ├── Dockerfile.api       Multi-stage NestJS build
    │   └── Dockerfile.frontend  Multi-stage Angular + nginx
    └── nginx/nginx.conf         SSL + rate limiting + reverse proxy
```

---

## Database

```bash
# Apply migrations
psql $DATABASE_URL -f backend/prisma/migrations/001_schema.sql

# Load seed data
psql $DATABASE_URL -f backend/prisma/seeds/seed.sql

# Prisma Studio (visualize data)
cd backend && npx prisma studio
```

Key optimizations:
- Full-text search on opportunities (`search_vec` TSVECTOR + GIN index)
- `pg_trgm` trigram indexes on name/clientName for ILIKE
- Audit logs and notifications: **range-partitioned by month**
- Entity versions table for full change history
- `search_opportunities()` stored function for optimized FTS

---

## Security Checklist

- [x] JWT Bearer auth on all endpoints
- [x] RBAC permission guards (`@Permissions()` decorator)
- [x] Proxy/delegation header validation  
- [x] Helmet security headers
- [x] nginx CSP, HSTS, XSS headers
- [x] Rate limiting (30/s API, 10/s general)
- [x] `ValidationPipe` with `whitelist: true`
- [x] Prisma parameterised queries (SQL injection safe)
- [x] Partitioned audit log (immutable, append-only)
- [ ] **Set strong `POSTGRES_PASSWORD` before production**
- [ ] **Set 64-char `JWT_SECRET` before production**
- [ ] Add SSL certificates to `infrastructure/nginx/ssl/`
- [ ] Configure Azure AD / Okta for enterprise SSO

---

## RBAC Permissions Matrix

| Module | Lead | Commercial | Admin |
|--------|------|-----------|-------|
| opportunities:read | ✓ | ✓ | ✓ |
| opportunities:write | ✓ | ✓ | ✓ |
| srp:write | ✓ | — | ✓ |
| srp:approve | — | ✓ | ✓ |
| fee_calculator:write | ✓ | ✓ | ✓ |
| invoices:write | — | ✓ | ✓ |
| users:write | — | — | ✓ |
| roles:write | — | — | ✓ |
| audit:read | — | ✓ | ✓ |

---

## Key Business Logic Preserved

**Fee Calculator PSC/PSSC rates:**
- Design & Build 1-stage: 2.45%
- Design & Build 2-stage: 2.65%  
- Traditional: 2.80%
- Framework Agreement: 2.20%
- Negotiated: 2.00%

**Staff Grades (from FC_STAFF_GRADES):**
Director £195, Associate Director £165, Senior Associate £145, Associate £125, Senior Engineer £110, Engineer £90, Graduate £72, Technician £65, Admin £45

**People Band Rates:** PBR-001 (2024 Superseded), PBR-002 (2025 Current), PBR-003 (2026 Upcoming) — all in seed data

**Opportunity Stages:**
Lead 20% → Probable 50% → Strong Probable 75% → Contracted 100% → Work Started 100% → Completed 100%
