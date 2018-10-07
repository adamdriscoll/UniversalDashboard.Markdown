if ($Env:APPVEYOR) {
    $BuildFolder = $env:APPVEYOR_BUILD_FOLDER
} else {
    # source\powershell
    $BuildFolder = $PSScriptRoot
    # Full Path to powershell folder
    $PSFolder = Resolve-Path -Path $PSScriptRoot
    # Source folder path
    $SourceFolder = Split-Path -Path $PSFolder -Parent
}

$powerShellGet = Import-Module PowerShellGet  -PassThru -ErrorAction Ignore
if ($powerShellGet.Version -lt ([Version]'1.6.0')) {
	Install-Module PowerShellGet -Scope CurrentUser -Force -AllowClobber
	Import-Module PowerShellGet -Force
}

Set-Location $SourceFolder

$OutputPath = "$PSFolder\UniversalDashboard.Markdown"

Remove-Item -Path $OutputPath -Force -ErrorAction SilentlyContinue -Recurse
Remove-Item -Path "$PSFolder\UniversalDashboard.Markdown.*.bundle.js" -Force -ErrorAction SilentlyContinue

New-Item -Path $PSFolder -Name "UniversalDashboard.Markdown" -ItemType Directory
New-Item -Path $PSFolder\UniversalDashboard.Markdown -Name Help -ItemType Directory

npm install
npm run build

Copy-Item $PSFolder\UniversalDashboard.Markdown.*.bundle.js $OutputPath
Copy-Item $PSFolder\UniversalDashboard.Markdown.psm1 $OutputPath
Copy-Item $PSFolder\UniversalDashboard.Markdown.psd1 $OutputPath
Copy-Item $PSFolder\New-UDMarkdown.md $OutputPath\Help


