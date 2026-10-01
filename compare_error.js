const fs = require('fs');
const current = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

const scripts = current.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
// Script 16 = second inline script (index 16, 0-indexed)
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');

// Test different sections to narrow down
const lines = s.split('\n');

// Binary search approach: test alternating sections
function isGood(code) {
  try {
    new Function(code);
    return true;
  } catch (e) {
    return false;
  }
}

// Find the error line more precisely
// Strategy: take slices and mark first bad segment
let errorStart = -1;
let errorEnd = -1;

// Test if the whole script is bad
if (!isGood(s)) {
  console.log('Main script has syntax error');
  
  // Test by removing the template literal section
  // Find unique markers
  const templateIdx = s.indexOf('playersHTML += `<div class="sticker ${state}"');
  if (templateIdx >= 0) {
    // Find the end by finding backtick+semicolon AFTER the opening
    let depth = 0;
    let inTemplate = false;
    let templateEnd = -1;
    for (let i = templateIdx; i < s.length; i++) {
      const ch = s[i];
      if (ch === '`') {
        if (!inTemplate) {
          inTemplate = true;
        } else {
          // Check if next char is `;`
          if (i + 1 < s.length && s[i + 1] === ';') {
            templateEnd = i + 2;
            break;
          }
        }
      }
    }
    
    if (templateEnd > 0) {
      const before = s.substring(0, templateIdx);
      const after = s.substring(templateEnd);
      
      // Test without the template
      const without = before + '/* removed */' + after;
      if (!isGood(without)) {
        console.log('ERROR is NOT in the template (removing it still causes error)');
      } else {
        console.log('ERROR IS in the template literal!');
        console.log('Template starts at: ' + templateIdx);
        console.log('First 200 chars:', s.substring(templateIdx, templateIdx + 200));
      }
    }
  }
} else {
  console.log('Main script is OK');
}
