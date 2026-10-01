const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

// Find the area of the error - search for common patterns in the HTML file
// The template literal in the source contains: onclick="openModal('${escapedId}',...
// But this is the EDITED version. Let me search for 'openModal' in the HTML file directly.

// First, let me find the second <script> tag and look at the right area
const scripts = c.match(/<script[^>]*>[\s\S]*?<\/script>/g);
const bigScript = scripts[16];
const innerScript = bigScript.replace(/<\/?script[^>]*>/g, '');
const innerLines = innerScript.split('\n');

// Show the problem area from the inner script
console.log('Inner script lines 2575-2595:');
for (let i = 2574; i < Math.min(2595, innerLines.length); i++) {
  const line = innerLines[i];
  // Show hex for the last few lines which might have hidden chars
  console.log((i+1) + ': ' + line);
}

// Now check for hidden characters in the lines around the error
console.log('\nHex dump of lines 2583-2586:');
for (let i = 2582; i < Math.min(2587, innerLines.length); i++) {
  const buf = Buffer.from(innerLines[i], 'utf8');
  console.log('Line ' + (i+1) + ' hex: ' + buf.toString('hex'));
  console.log('Line ' + (i+1) + ' chars:');
  for (let j = 0; j < innerLines[i].length; j++) {
    const charCode = innerLines[i].charCodeAt(j);
    if (charCode > 127 || charCode < 32) {
      console.log('  pos ' + j + ': charCode=' + charCode + ' hex=' + charCode.toString(16));
    }
  }
}
