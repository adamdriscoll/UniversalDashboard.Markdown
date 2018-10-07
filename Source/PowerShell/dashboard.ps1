Get-UDDashboard | Stop-UDDashboard

$Page = New-UDPage -Name Home -Icon code -Content {
    New-UDRow -Columns {
        New-UDColumn -Content {
            # Get the content of markdown file.
            $md = Get-Content -Path .\PowerShell\DemoPage.md

            
            New-UDMarkdown -Markdown $md -CodeBlockStyle @{
                'border-radius' = '6px' 
                background = '#e6e6e6' 
                padding = '16px'
            } -CodeBlockShowLineNumbers
        }
    }
}

$db = New-UDDashboard -Title "UDMarkdown" -Pages $Page -FontIconStyle LineAwesome

Start-UDDashboard -Dashboard $db -Port 10012