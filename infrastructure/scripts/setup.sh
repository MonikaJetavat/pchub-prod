#!/bin/bash
# ============================================================
# PC HUB 2.0 — Bootstrap script
# Run once after cloning: bash scripts/setup.sh
# ============================================================
set -e

echo "PC HUB 2.0 — Setup"
echo "=================="

# 1. Env file
if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "✓ Created .env from .env.example"
  echo "⚠  Edit .env and set POSTGRES_PASSWORD and JWT_SECRET before continuing"
  exit 1
fi

echo "✓ .env exists"

# 2. Generate JWT secret if placeholder
if grep -q "REPLACE_WITH_64_BYTE" .env; then
  SECRET=$(node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
  sed -i "s/REPLACE_WITH_64_BYTE_HEX_SECRET/$SECRET/" .env
  echo "✓ JWT_SECRET auto-generated"
fi

# 3. Install backend deps
echo "Installing backend dependencies..."
cd backend && npm install && cd ..

# 4. Install frontend deps
echo "Installing frontend dependencies..."
cd frontend && npm install && cd ..

echo ""
echo "Setup complete. Next steps:"
echo "  Development:   docker-compose -f infrastructure/docker/docker-compose.yml up -d postgres redis"
echo "                 cd backend && npm run start:dev"
echo "                 cd frontend && npm start"
echo "  Production:    docker-compose -f infrastructure/docker/docker-compose.yml up -d --build"
