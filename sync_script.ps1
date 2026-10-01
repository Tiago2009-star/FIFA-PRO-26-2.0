$filePath = 'C:\Users\Utilizador\Documents\cromos_temp\index.html'
$lines = [System.IO.File]::ReadAllLines($filePath)
$content = [System.IO.File]::ReadAllText($filePath)

# 1. Add Repetidas tab
$oldTab = '  <div class="tab" data-tab="wanted">Troca</div>' + "`r`n" + '</div>'
$newTab = '  <div class="tab" data-tab="wanted">Troca</div>' + "`r`n" + '  <div class="tab" data-tab="dups">Repetidas <span class="badge" id="dupsBadge">0</span></div>' + "`r`n" + '</div>'
$content = $content.Replace($oldTab, $newTab)

# Also try LF line ending
$oldTabLF = "  <div class=`"tab`" data-tab=`"wanted`">Troca</div>`n</div>"
$newTabLF = "  <div class=`"tab`" data-tab=`"wanted`">Troca</div>`n  <div class=`"tab`" data-tab=`"dups`">Repetidas <span class=`"badge`" id=`"dupsBadge`">0</span></div>`n</div>"
$content = $content.Replace($oldTabLF, $newTabLF)

# 2. Update matchTabFilter function - single-line version
$oldFunc = 'function matchTabFilter(st) {'
$lines2 = $content.Split("`n")
$foundFunc = $false
for ($i = 0; $i -lt $lines2.Length; $i++) {
    if ($lines2[$i].Trim() -eq 'function matchTabFilter(st) {') {
        $lines2[$i] = 'function matchTabFilter(st, stickerId) {'
        # Replace the next line (the return statement)
        if ($i+1 -lt $lines2.Length) {
            $lines2[$i+1] = '  if (currentTab === ''all'') return true; if (currentTab === ''owned'' && st === ''owned'') return true; if (currentTab === ''missing'' && (st === ''missing'' || st === ''wanted'')) return true; if (currentTab === ''wanted'' && st === ''wanted'') return true; if (currentTab === ''dups'' && stickerId && currentTabId && tabStates[currentTabId]) { return (tabStates[currentTabId][stickerId + ''__dup''] || 0) > 0; } return false;'
        }
        $foundFunc = $true
        break
    }
}
if ($foundFunc) {
    $content = $lines2 -join "`n"
}

[System.IO.File]::WriteAllText($filePath, $content)
Write-Output "Done with basic replacements"
