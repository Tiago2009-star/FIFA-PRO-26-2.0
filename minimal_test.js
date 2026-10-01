const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

// Extract the second inline script
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');

// Write the exact content around the error to a file for analysis
const lines = s.split('\n');
const problemBlock = lines.slice(2564, 2586).join('\n');
console.log('=== Lines 2565-2585 ===');
console.log(problemBlock);

// Test with node --check by writing to a temp file
const fs2 = require('fs');
fs2.writeFileSync('C:/Users/Utilizador/Documents/cromos_temp/problem_block.js', problemBlock);
