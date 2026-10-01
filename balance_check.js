const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');

const lines = s.split('\n');

// Count parentheses and braces per line, but skip template literals
let parens = 0;
let braces = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Simple character count (won't handle strings/regexes properly but gives a rough idea)
  const opens = (line.match(/\(/g) || []).length;
  const closes = (line.match(/\)/g) || []).length;
  parens += opens - closes;
  
  const bOpen = (line.match(/\{/g) || []).length;
  const bClose = (line.match(/\}/g) || []).length;
  braces += bOpen - bClose;
  
  // Check lines around 2580
  if (i >= 2575 && i <= 2590) {
    console.log('L' + (i+1) + ' parens=' + parens + ' braces=' + braces + ': ' + line.substring(0, 80));
  }
}
