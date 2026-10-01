const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// Extract lines 2555-2590
const block = lines.slice(2554, 2590).join('\n');
fs.writeFileSync('C:/Users/Utilizador/Documents/cromos_temp/problem_block.js', block);
console.log('Written ' + block.length + ' bytes');
