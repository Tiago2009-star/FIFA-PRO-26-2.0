const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const fullScript = scripts[16].replace(/<\/?script[^>]*>/g, '');
let lines = fullScript.split('\n');

// Simple function to check syntax of first N lines
function checkUpTo(n) {
  const chunk = lines.slice(0, n).join('\n');
  try {
    new Function(chunk + '\nreturn;');
    return true;
  } catch (e) {
    return false;
  }
}

// Binary search for error
let lo = 0, hi = lines.length;
while (lo < hi - 1) {
  let mid = Math.floor((lo + hi) / 2);
  if (checkUpTo(mid)) {
    lo = mid;
  } else {
    hi = mid;
  }
  // Progress indicator every few iterations
  console.log('lo=' + lo + ' hi=' + hi + ' mid=' + mid);
}

console.log('\nError at line ' + (hi));
console.log('Content around error:');
for (let i = Math.max(0, hi-5); i < Math.min(lines.length, hi+5); i++) {
  console.log('L' + (i+1) + ': ' + lines[i].substring(0, 100));
}
