Set-Location "C:\Users\Owner\Auto-Lab--main"

$Host.UI.RawUI.WindowTitle = "Auto-Lab 自動データ取得"

Clear-Host

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "     Auto-Lab AUTO UPDATE"
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "取得を開始します..." -ForegroundColor White
Write-Host ""

Write-Host "Node.js version:" -ForegroundColor Yellow
node -v

Write-Host ""
Write-Host "Starting auto-update-test.js..." -ForegroundColor Green
Write-Host ""

node .\auto-update-test.js

Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "     Auto-Lab AUTO UPDATE END"
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

Start-Sleep -Seconds 3
exit
