const fs = require('fs');
let html = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

// Strategy: Find ALL instances of .replace(/'/g,"\\'") inside template literals and replace them
// with a pre-escaped variable

// The pattern appears in onclick attributes inside template strings:
// Badge template: onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',1)"
// Photo template: onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',13)"
// Also potentially in the photo template's alt/other attrs

// Let's find and replace ALL instances of the pattern
// The pattern: .replace(/'/g,"\\'")
// Note: The actual HTML has the pattern: .replace(/'/g,"\\\\'")
// Because HTML escaping adds one level of backslashes

// Actually let me just check what's in the file
const idx1 = html.indexOf(`,replace(/'/g,"`);
if (idx1 >= 0) {
  console.log('Found .replace( pattern at byte', idx1);
  console.log('Context:', html.substring(idx1 - 50, idx1 + 50));
}

// Let me search for the actual pattern in the raw HTML
// Since HTML might have different escaping than what we think
const idx2 = html.indexOf("replace(/'/g");
if (idx2 >= 0) {
  console.log('\nFound replace( pattern at byte', idx2);
  console.log('Full match:', html.substring(idx2 - 30, idx2 + 40));
}

// Count all occurrences of "replace" near template context
let cnt = 0;
let pos = 0;
while ((pos = html.indexOf('.replace(', pos)) >= 0) {
  cnt++;
  console.log('replace #' + cnt + ' at byte ' + pos + ': ' + html.substring(pos, pos + 40));
  pos++;
}
console.log('\nTotal .replace( occurrences: ' + cnt);
