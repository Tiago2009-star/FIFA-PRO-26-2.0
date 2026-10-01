const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/script17.js', 'utf8');

// Try to find the error by binary search
const lines = c.split('\n');
const total = lines.length;

function isGood(endLine) {
  try {
    new Function(lines.slice(0, endLine).join('\n'));
    return true;
  } catch (e) {
    return false;
  }
}

// Narrow down the error range
let lo = 2480;
let hi = 2590;
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  if (isGood(mid)) {
    lo = mid + 1;
  } else {
    hi = mid;
  }
}

console.log('Error first detected at line:', lo + 1);
console.log('Line content:', lines[lo].substring(0, 100));
for (let i = Math.max(0, lo - 3); i <= Math.min(total, lo + 3); i++) {
  console.log('  ' + (i + 1) + ': ' + lines[i].substring(0, 120));
}
