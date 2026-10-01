const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');

function isGood(code) {
  try { new Function(code); return true; }
  catch (e) { return false; }
}

// Find the render function
const renderIdx = s.indexOf('function render()');
if (renderIdx >= 0) {
  const beforeRender = s.substring(0, renderIdx);
  if (!isGood(beforeRender)) {
    console.log('Error is BEFORE render() function');
  } else {
    // Find the specific section around the error (line 2582)
    const lines = s.split('\n');
    // Test up to line 2580
    const upTo2580 = lines.slice(0, 2580).join('\n');
    if (!isGood(upTo2580)) {
      console.log('Error is before line 2580');
      // Binary search between 2550 and 2580
      for (let i = 2550; i <= 2580; i++) {
        const part = lines.slice(0, i).join('\n');
        if (!isGood(part)) {
          console.log('First error at line ' + i + ': ' + lines[i-1].substring(0, 120));
          break;
        }
      }
    } else {
      // Test up to line 2582
      const upTo2582 = lines.slice(0, 2582).join('\n');
      if (!isGood(upTo2582)) {
        console.log('Error between lines 2580 and 2582');
        console.log('L2580: ' + lines[2579].substring(0, 100));
        console.log('L2581: ' + lines[2580].substring(0, 100));
        console.log('L2582: ' + lines[2581].substring(0, 100));
      } else {
        console.log('Error at line 2582 or later');
      }
    }
  }
}
