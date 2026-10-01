const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

const lines = c.split('\n');

// Show exact bytes around the error area (line 3785 in original)
for (let i = 3775; i <= 3790; i++) {
  const l = lines[i-1];
  const hex = Buffer.from(l, 'utf8').toString('hex');
  console.log('L' + i + ' (' + l.length + ' chars): ' + l.substring(0, 150));
  console.log('  hex: ' + hex.substring(0, 200));
}
