Set-Location "C:\Users\Owner\Auto-Lab--main"

Write-Host ""
Write-Host "================================="
Write-Host " Auto-Lab AUTO UPDATE START"
Write-Host "================================="
Write-Host ""

Write-Host "Node.js version:"
node -v

Write-Host ""
Write-Host "Starting auto-update-test.js..."
Write-Host ""

node .\auto-update-test.js

Write-Host ""
Write-Host "================================="
Write-Host " Auto-Lab AUTO UPDATE END"
Write-Host "================================="