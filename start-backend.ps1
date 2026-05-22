Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Set-Location "$PSScriptRoot\backend"
Write-Host "Starting PC HUB 2.0 Backend on http://localhost:3000" -ForegroundColor Cyan
npm run start:dev
