const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// Find the render() function's if(2026) - it's the one with badge/photo/players
let inRender = false;
let found = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('function render()')) inRender = true;
  if (!inRender) continue;
  
  if (lines[i].includes("if (currentAlbum === '2026')")) {
    // Check if this is in the render function (has matchTeam/matchTabBadge)
    if (lines[i+1] && lines[i+1].includes('matchTeam')) {
      let j = i;
      while (j < lines.length && !lines[j].includes('} else if') && !lines[j].includes('} else {')) {
        console.log(lines[j]);
        j++;
      }
      if (j < lines.length) {
        console.log(lines[j].substring(0, 60) + '...');
      }
      found = true;
      break;
    }
  }
}
if (!found) console.log('Not found in render');
