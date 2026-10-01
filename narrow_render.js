const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// Find render function
let renderStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('function render()')) { renderStart = i; break; }
}

// Find end of render (next top-level function)
let renderEnd = -1;
for (let i = renderStart + 1; i < lines.length; i++) {
  if (lines[i].match(/^\s*function\s+\w+/)) { renderEnd = i - 1; break; }
}
if (renderEnd === -1) renderEnd = lines.length - 1;

console.log('render: lines ' + (renderStart+1) + ' to ' + (renderEnd+1));

const renderLines = lines.slice(renderStart, renderEnd + 1);

// Now try removing different sections. Let's find the "for (const team" section
// and everything related to 2026 album rendering.
// The error is around line 2585 in the full script, which corresponds to
// some line within render.

// Calculate offset: error line 2585 vs render start
const errorInRender = 2585 - renderStart - 1; // 0-indexed within render
console.log('Error at render line ' + (errorInRender + 1));
console.log('Content: ' + renderLines[errorInRender]);

// Strategy: Remove the entire 2026-album block or simplify it to find the exact error
// Find the if (currentAlbum === '2026') that contains the forEach with error
let startOf2026 = -1;
for (let i = 0; i < renderLines.length; i++) {
  if (renderLines[i].includes("if (currentAlbum === '2026')")) {
    startOf2026 = i;
    break;
  }
}
if (startOf2026 >= 0) {
  console.log('\nif (2026) starts at render line ' + (startOf2026+1));
  
  // Find the NEXT if (currentAlbum === '...') to know where this block ends
  let endOfBlock = -1;
  for (let i = startOf2026 + 1; i < renderLines.length; i++) {
    if (renderLines[i].match(/^\s*\}\s*$/)) {
      // Check if the NEXT line starts another if (currentAlbum === '...')
      if (i + 1 < renderLines.length && renderLines[i+1].includes("if (currentAlbum === '")) {
        endOfBlock = i;
        break;
      }
    }
  }
  
  if (endOfBlock > startOf2026) {
    console.log('Block ends at render line ' + (endOfBlock+1));
    
    // Replace the entire 2026 block with empty string
    let modified = renderLines.slice(0, startOf2026).join('\n') + '\n' + 
                   '/* DELETED 2026 BLOCK */\n' +
                   renderLines.slice(endOfBlock + 1).join('\n');
    try {
      new Function('return ' + JSON.stringify(modified)).toString(); // just to use the var
      // Actually test properly
      const testCode = renderLines.slice(0, startOf2026).concat(
        ['/* removed */'],
        renderLines.slice(endOfBlock + 1)
      ).join('\n');
      new Function(testCode);
      console.log('Without 2026 block: OK');
    } catch(e) {
      console.log('Without 2026 block: still ERROR: ' + e.message.substring(0, 80));
    }
  } else {
    console.log('Could not determine end of block');
  }
}
