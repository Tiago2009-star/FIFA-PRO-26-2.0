const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');

// Find the error by removing large blocks
function testCode(code) {
  try {
    new Function(code);
    return true;
  } catch (e) {
    return false;
  }
}

// Find the specific line with the error using node --check
// We already know it's at line 2582 in the extracted script
const lines = s.split('\n');
console.log('Extracted script has', lines.length, 'lines');
console.log('Line 2582:', lines[2581].substring(0, 100));
console.log('Line 2581:', lines[2580].substring(0, 100));

// Check if the error is in the specific template literal
// Let's look for the template around line 2576
for (let i = 2570; i <= 2585; i++) {
  console.log('L' + (i+1) + ': ' + lines[i].substring(0, 120));
}
