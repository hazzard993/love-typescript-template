New-Item `
  -Path build/release `
  -ItemType Directory `
  -Force | Out-Null

$artifactPath = "build/artifact/*"
$archivePath = "build/release/game.love"

Compress-Archive `
  -Path $artifactPath `
  -Destination $archivePath `
  -Update

$gameName = (Get-Content package.json | ConvertFrom-Json).name
$gameVersion = (Get-Content package.json | ConvertFrom-Json).version
$lovePath = (Get-Command love).Source
$loveVersion = if (Get-Command lovec -ErrorAction SilentlyContinue) {
  lovec --version
} else {
  love --version
}
$isWin = $PSVersionTable.Platform -match '^($|(Microsoft )?Win)'
$outpath = if ($isWin) {
  ".\build\release\$gameName.exe"
} else {
  "./build/release/$gameName"
}

[PSCustomObject] @{
  "Game Name" = $gameName
  "Game Version" = $gameVersion
  "LÖVE 2D" = $lovePath
  "LÖVE Version" = $loveVersion
  "Distributable" = $outpath
} | Format-List

Write-Host "Creating release build..."

Get-Content -Path $lovePath,$archivePath -AsByteStream `
  | Set-Content $outpath -AsByteStream

Write-Host "Release build complete!"
Write-Host
Write-Host "  $outpath"
Write-Host
