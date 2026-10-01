const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

// Check syntax of the entire file's scripts combined
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);

// Test each script separately (excluding the big one)
let combinedOK = true;
for (let i = 0; i < scripts.length; i++) {
  const s = scripts[i].replace(/<\/?script[^>]*>/g,'').trim();
  if (!s) continue;
}

// Now test the BIG script alone and with specific edits
let bigScript = scripts[16].replace(/<\/?script[^>]*>/g,'').trim();

// Strategy: remove specific sections to find the offending code
// Let's try removing the forEach block that contains the error
const forEachStart = bigScript.indexOf('team.players.forEach((p, i) => {');
const forEachEnd = bigScript.indexOf('        });', forEachStart) + 10;

if (forEachStart >= 0 && forEachEnd > forEachStart) {
  // Remove the entire forEach block
  let modified = bigScript.substring(0, forEachStart) + bigScript.substring(forEachEnd);
  try {
    new Function(modified);
    console.log('REMOVED forEach: OK - the error is in the forEach block');
  } catch(e) {
    console.log('REMOVED forEach: ERROR: ' + e.message.substring(0, 100));
  }
  
  // Extract just the forEach block
  const block = bigScript.substring(forEachStart, forEachEnd);
  const blockLines = block.split('\n');
  console.log('\nForEach block lines:', blockLines.length);
  console.log('First line:', blockLines[0]);
  console.log('Last line:', blockLines[blockLines.length - 1]);
}
