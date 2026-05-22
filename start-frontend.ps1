Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Set-Location "$PSScriptRoot\frontend"
Write-Host "Starting PC HUB 2.0 Frontend on http://localhost:4200" -ForegroundColor Green
npm start
