const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
if (scripts && scripts.length >= 17) {
  const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
  try {
    new Function(s);
    console.log('OK');
  } catch (e) {
    console.log('ERROR:', e.message);
    const lines = s.split('\n');
    for (let i = 0; i < lines.length; i++) {
      try {
        new Function(lines.slice(0, i + 1).join('\n'));
      } catch (e2) {
        console.log('First error at line', i + 1, ':', lines[i].substring(0, 120));
        break;
      }
    }
  }
} else {
  console.log('Scripts found:', scripts ? scripts.length : 0);
}
