# PC HUB 2.0 — Production Deployment Guide

## Recommended Server Stack (all open-source)

```
Internet
    │
    ▼
┌──────────────────────────────────┐
│  Cloudflare (free CDN + DDoS)   │  ← optional but strongly recommended
└──────────────────┬───────────────┘
                   │
                   ▼
┌──────────────────────────────────┐
│   Ubuntu 24.04 LTS Server        │  ← your VPS / bare metal
│                                  │
│  ┌────────────────────────────┐  │
│  │  nginx 1.25 (reverse proxy)│  │  ← port 80/443
│  └────────────┬───────────────┘  │
│               │                  │
│  ┌────────────▼──────────────┐   │
│  │  Docker Compose stack     │   │
│  │  ├─ Angular (nginx:alpine)│   │  ← port 4200 internal
│  │  ├─ NestJS API            │   │  ← port 3000 internal
│  │  ├─ PostgreSQL 16         │   │  ← port 5432 internal
│  │  └─ Redis 7               │   │  ← port 6379 internal
│  └───────────────────────────┘   │
│                                  │
│  ┌────────────────────────────┐  │
│  │  Certbot (Let's Encrypt)  │   │  ← free SSL
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

---

## Minimum Server Requirements

| Component | Minimum | Recommended (enterprise) |
|-----------|---------|--------------------------|
| CPU | 2 vCPU | 4 vCPU |
| RAM | 4 GB | 8 GB |
| Disk | 40 GB SSD | 100 GB SSD |
| OS | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| Network | 100 Mbps | 1 Gbps |

**Recommended VPS providers (cost-effective):**
- **Hetzner Cloud** (best value) — CX22: €4/mo, CPX31: €12/mo
- **DigitalOcean** — Droplet 4GB: $24/mo
- **Linode/Akamai** — 4GB: $24/mo
- **Vultr** — 4GB: $24/mo

For UK data residency (GDPR): Hetzner Falkenstein or London, DigitalOcean LON1

---

## Phase 1 — Server Preparation

### 1.1 Initial server setup

```bash
# SSH into your new Ubuntu 24.04 server
ssh root@YOUR_SERVER_IP

# Update system
apt update && apt upgrade -y

# Create non-root deploy user
adduser deploy
usermod -aG sudo deploy
# Copy your SSH key
mkdir -p /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys

# Harden SSH — disable root login and password auth
sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd

# Firewall (UFW)
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status

# Set timezone
timedatectl set-timezone Europe/London
```

### 1.2 Install Docker + Docker Compose

```bash
# Switch to deploy user
su - deploy

# Install Docker (official script)
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker deploy
newgrp docker

# Verify
docker --version        # Docker 25.x+
docker compose version  # Docker Compose 2.x+
```

### 1.3 Install nginx + Certbot (on host, not in Docker)

```bash
sudo apt install -y nginx certbot python3-certbot-nginx

# Verify nginx is running
sudo systemctl status nginx
```

---

## Phase 2 — DNS Setup

Before getting SSL you need DNS pointing to your server.

```
# In your DNS provider (Cloudflare, Route53, etc.):
Type  Name                        Value
A     pchub.perfectcircle.co.uk   YOUR_SERVER_IP
A     www.pchub.perfectcircle.co.uk  YOUR_SERVER_IP

# Wait for DNS propagation (2-10 minutes with Cloudflare, up to 48h elsewhere)
# Verify:
dig pchub.perfectcircle.co.uk +short
# Should return: YOUR_SERVER_IP
```

---

## Phase 3 — Deploy Application Code

### 3.1 Upload the project

```bash
# On your LOCAL machine — upload the zip
scp pchub-enterprise-production.zip deploy@YOUR_SERVER_IP:/home/deploy/

# On the SERVER
ssh deploy@YOUR_SERVER_IP
cd /home/deploy
unzip pchub-enterprise-production.zip
mv pchub-prod /opt/pchub
cd /opt/pchub
```

### 3.2 Configure environment

```bash
# Create .env from template
cp .env.example .env

# Generate a strong JWT secret
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
# (or: openssl rand -hex 64)

# Edit .env with your values
nano .env
```

**Required values to set in `.env`:**

```bash
# Change ALL of these:
POSTGRES_PASSWORD=<strong-random-password-min-32-chars>
JWT_SECRET=<64-char-hex-from-command-above>
CORS_ORIGINS=https://pchub.perfectcircle.co.uk
NODE_ENV=production

# Keep these as-is for Docker networking:
DATABASE_URL=postgresql://pchub:${POSTGRES_PASSWORD}@postgres:5432/pchub?schema=public
REDIS_URL=redis://redis:6379
PORT=3000
```

**Generate secure passwords easily:**
```bash
# PostgreSQL password
openssl rand -base64 32

# JWT secret
openssl rand -hex 64
```

---

## Phase 4 — SSL Certificate (Let's Encrypt, free)

```bash
# Stop nginx temporarily to get certificate
sudo systemctl stop nginx

# Get certificate (replace with your actual domain)
sudo certbot certonly --standalone \
  -d pchub.perfectcircle.co.uk \
  --agree-tos \
  --non-interactive \
  --email admin@perfectcircle.co.uk

# Certificates are saved to:
# /etc/letsencrypt/live/pchub.perfectcircle.co.uk/fullchain.pem
# /etc/letsencrypt/live/pchub.perfectcircle.co.uk/privkey.pem

# Create SSL dir for nginx container
mkdir -p /opt/pchub/infrastructure/nginx/ssl

# Copy certs (readable by nginx)
sudo cp /etc/letsencrypt/live/pchub.perfectcircle.co.uk/fullchain.pem \
    /opt/pchub/infrastructure/nginx/ssl/
sudo cp /etc/letsencrypt/live/pchub.perfectcircle.co.uk/privkey.pem \
    /opt/pchub/infrastructure/nginx/ssl/
sudo chown deploy:deploy /opt/pchub/infrastructure/nginx/ssl/*.pem

# Auto-renew certs (certbot renews at 60 days, cert expires at 90)
# Add to crontab:
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --deploy-hook 'docker exec pchub_nginx nginx -s reload'") | crontab -
```

---

## Phase 5 — Configure nginx (host-level)

Update `/opt/pchub/infrastructure/nginx/nginx.conf` — change the server_name:

```bash
# Update the domain in nginx.conf
sed -i 's/pchub.perfectcircle.co.uk/YOUR_ACTUAL_DOMAIN/g' \
    /opt/pchub/infrastructure/nginx/nginx.conf
```

Or edit directly:
```nginx
# In /opt/pchub/infrastructure/nginx/nginx.conf, change:
server_name pchub.perfectcircle.co.uk;
# To your actual domain.
```

---

## Phase 6 — Build and Launch

```bash
cd /opt/pchub/infrastructure/docker

# Build all images (takes 3-8 minutes first time)
docker compose build --no-cache

# Start all services in background
docker compose up -d

# Watch startup logs
docker compose logs -f

# Wait ~30 seconds then verify all 5 services are healthy:
docker compose ps
```

Expected output:
```
NAME              STATUS          PORTS
pchub_postgres    healthy         0.0.0.0:5432->5432/tcp
pchub_redis       healthy
pchub_api         healthy
pchub_frontend    running
pchub_nginx       running         0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
```

### 6.1 Verify deployment

```bash
# Health check
curl -s https://pchub.perfectcircle.co.uk/api/health
# Expected: {"status":"ok","db":"connected","timestamp":"..."}

# Check API is responding
curl -s https://pchub.perfectcircle.co.uk/api/v1/auth/me \
  -H "Authorization: Bearer invalid"
# Expected: 401 Unauthorized (means API is working)

# Open in browser
open https://pchub.perfectcircle.co.uk
```

---

## Phase 7 — First-Time Database Setup

The database schema and seed data auto-load on first PostgreSQL startup via the Docker init scripts. Verify:

```bash
# Connect to database
docker exec -it pchub_postgres psql -U pchub -d pchub

# Check tables exist
\dt

# Check seed data loaded
SELECT COUNT(*) FROM opportunities;
-- Should return: 207

SELECT COUNT(*) FROM users;
-- Should return: 10

\q
```

If seed data didn't load automatically:
```bash
# Manual seed
docker exec -i pchub_postgres psql -U pchub -d pchub \
  < /opt/pchub/backend/prisma/seeds/seed.sql
```

---

## Phase 8 — First Login (Dev Token → Production SSO)

### Immediate access (dev token — disable before go-live)

```bash
# Get a dev token for James Dawson (Commission Lead)
curl -X POST https://pchub.perfectcircle.co.uk/api/v1/auth/dev-token/11111111-1111-1111-1111-111111111111

# Returns: { "token": "eyJ..." }
# Paste into the Login page's dev user selector
```

### Before go-live — disable dev tokens

Edit `backend/src/auth/auth.service.ts`:
```typescript
generateDevToken(userId: string): string {
  // Change this check:
  if (this.config.get('NODE_ENV') !== 'development') {  // was 'production'
    throw new UnauthorizedException('Dev tokens not available');
  }
  ...
}
```
Then rebuild: `docker compose build api && docker compose up -d api`

### Production SSO (Azure AD / Okta)

Add to `.env`:
```bash
AZURE_AD_TENANT_ID=your-tenant-id
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
```

Install passport-azure-ad:
```bash
# In backend/
npm install passport-azure-ad @nestjs/passport
```

Then implement `AzureAdStrategy` in `backend/src/auth/strategies/azure-ad.strategy.ts` — this validates the AD JWT and calls `authService.sync()` to upsert the user into the local DB.

---

## Phase 9 — Monitoring and Maintenance

### 9.1 Set up log rotation

```bash
# Docker log rotation (prevents disk fill)
cat > /etc/docker/daemon.json << 'EOF'
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "5"
  }
}
EOF
sudo systemctl restart docker
```

### 9.2 Automatic database backups

```bash
# Daily backup script
cat > /opt/pchub/infrastructure/scripts/backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/pchub"
mkdir -p $BACKUP_DIR
DATE=$(date +%Y%m%d_%H%M%S)
docker exec pchub_postgres pg_dump -U pchub pchub | \
  gzip > $BACKUP_DIR/pchub_$DATE.sql.gz

# Keep only last 14 days
find $BACKUP_DIR -name "*.sql.gz" -mtime +14 -delete
echo "Backup complete: pchub_$DATE.sql.gz"
EOF

chmod +x /opt/pchub/infrastructure/scripts/backup.sh

# Run daily at 2am
(crontab -l 2>/dev/null; echo "0 2 * * * /opt/pchub/infrastructure/scripts/backup.sh >> /var/log/pchub-backup.log 2>&1") | crontab -
```

### 9.3 Free monitoring with Uptime Kuma (open-source)

```bash
# Add to docker-compose.yml or run separately
docker run -d \
  --name uptime-kuma \
  --restart unless-stopped \
  -p 3001:3001 \
  -v uptime-kuma:/app/data \
  louislam/uptime-kuma:latest

# Access at: http://YOUR_SERVER_IP:3001
# Add monitors for:
# - https://pchub.perfectcircle.co.uk/api/health  (HTTP 200 check)
# - https://pchub.perfectcircle.co.uk             (Frontend check)
```

### 9.4 Application updates (zero-downtime)

```bash
# Pull new code
cd /opt/pchub
# Upload new zip and extract, or git pull if using git

# Rebuild only changed services
docker compose build api       # if backend changed
docker compose build frontend  # if frontend changed

# Rolling restart (zero downtime)
docker compose up -d --no-deps api
docker compose up -d --no-deps frontend

# Verify health after update
docker compose ps
curl https://pchub.perfectcircle.co.uk/api/health
```

---

## Complete Commands Reference

```bash
# ── Start / Stop ─────────────────────────────────
cd /opt/pchub/infrastructure/docker

docker compose up -d              # start all services
docker compose down               # stop all services
docker compose restart api        # restart just the API

# ── Logs ─────────────────────────────────────────
docker compose logs -f            # all services
docker compose logs -f api        # API only
docker compose logs -f postgres   # database only

# ── Database ─────────────────────────────────────
# Connect to DB
docker exec -it pchub_postgres psql -U pchub -d pchub

# Manual backup
docker exec pchub_postgres pg_dump -U pchub pchub | gzip > backup.sql.gz

# Restore backup
zcat backup.sql.gz | docker exec -i pchub_postgres psql -U pchub -d pchub

# ── Health ────────────────────────────────────────
curl https://yourdomain.com/api/health
docker compose ps
docker stats   # live resource usage

# ── SSL renewal ──────────────────────────────────
certbot renew --dry-run           # test renewal
certbot renew                     # force renewal
docker exec pchub_nginx nginx -s reload   # reload nginx after cert update

# ── Disk cleanup ─────────────────────────────────
docker system prune -f             # remove unused images
docker volume ls                   # list volumes
```

---

## Troubleshooting

| Problem | Command | Fix |
|---------|---------|-----|
| API not starting | `docker compose logs api` | Check DATABASE_URL in .env |
| DB connection refused | `docker compose logs postgres` | Wait for healthy status, check POSTGRES_PASSWORD |
| SSL cert error | `certbot certificates` | Check domain DNS is pointing to server |
| 502 Bad Gateway | `docker compose ps api` | API container not running — check logs |
| Out of disk | `df -h && docker system prune -f` | Clean Docker cache |
| Nginx 403 | `docker compose logs nginx` | Check ssl cert file paths |

---

## Security Checklist Before Go-Live

```bash
# 1. Strong passwords set
grep POSTGRES_PASSWORD .env  # not 'CHANGE_THIS'
grep JWT_SECRET .env          # 64-char hex

# 2. Dev tokens disabled in production
grep "NODE_ENV" .env           # should be 'production'

# 3. Firewall active
sudo ufw status               # should show 80, 443, 22 only

# 4. SSL working
curl -I https://yourdomain.com | grep "HTTP/2 200"

# 5. Security headers present
curl -I https://yourdomain.com | grep -i "strict-transport\|x-frame\|x-content"

# 6. Database not publicly accessible
nc -zv YOUR_SERVER_IP 5432    # should FAIL (only accessible inside Docker)

# 7. Automatic backups running
crontab -l | grep backup
```

---

## Cost Summary

| Service | Provider | Monthly Cost |
|---------|----------|-------------|
| Server (4 vCPU / 8GB) | Hetzner CPX31 | ~€12 |
| Domain | Namecheap / Cloudflare | ~£10/year |
| SSL Certificate | Let's Encrypt | **Free** |
| CDN / DDoS Protection | Cloudflare | **Free** (Pro: $20/mo) |
| Backups (off-site) | Backblaze B2 | ~$0.50/mo for 10GB |
| Monitoring | Uptime Kuma | **Free** (self-hosted) |
| **Total** | | **~£15/month** |
