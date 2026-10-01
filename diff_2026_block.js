const fs = require('fs');

// Read backup (known OK)
const backup = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html.test', 'utf8');
const backupScripts = backup.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const backupInner = backupScripts[16].replace(/<\/?script[^>]*>/g, '');
const backupLines = backupInner.split('\n');

// Read current (has error)
const current = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const currentScripts = current.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const currentInner = currentScripts[16].replace(/<\/?script[^>]*>/g, '');
const currentLines = currentInner.split('\n');

// Find the render function in both
function findRender(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('function render()')) return i;
  }
  return -1;
}

const backupRenderStart = findRender(backupLines);
const currentRenderStart = findRender(currentLines);

// Find the if (2026) block in both
function find2026(lines, startFrom) {
  for (let i = startFrom; i < lines.length; i++) {
    if (lines[i].includes("if (currentAlbum === '2026')")) return i;
  }
  return -1;
}

const backup2026 = find2026(backupLines, backupRenderStart);
const current2026 = find2026(currentLines, currentRenderStart);

console.log('Backup render start: line ' + (backupRenderStart+1));
console.log('Backup if(2026): line ' + (backup2026+1));
console.log('Current render start: line ' + (currentRenderStart+1));
console.log('Current if(2026): line ' + (current2026+1));

// Find the end of the if(2026) block in both
// Look for the closing } that matches the if (2026)
function findBlockEnd(lines, startLine) {
  let braceDepth = 0;
  let inBlock = false;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') { braceDepth++; inBlock = true; }
      else if (ch === '}') { braceDepth--; }
    }
    if (inBlock && braceDepth === 0) return i;
  }
  return -1;
}

const backupEnd = findBlockEnd(backupLines, backup2026);
const currentEnd = findBlockEnd(currentLines, current2026);

console.log('Backup block: lines ' + (backup2026+1) + '-' + (backupEnd+1) + ' (' + (backupEnd - backup2026 + 1) + ' lines)');
console.log('Current block: lines ' + (current2026+1) + '-' + (currentEnd+1) + ' (' + (currentEnd - current2026 + 1) + ' lines)');

// Extract and compare
console.log('\n=== BACKUP ===');
for (let i = backup2026; i <= backupEnd; i++) {
  console.log('  ' + backupLines[i]);
}

console.log('\n=== CURRENT ===');
for (let i = current2026; i <= currentEnd; i++) {
  console.log('  ' + currentLines[i]);
}
