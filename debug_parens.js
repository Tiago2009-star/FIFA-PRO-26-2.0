const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
const s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// Look at the code around 2565-2585 and find unclosed parens
// Strategy: extract the full function containing this code and test
// Find the render function
const renderIdx = s.indexOf('function render()');
if (renderIdx >= 0) {
  // Find the end of render
  const nextFunc = s.indexOf('\nfunction ', renderIdx + 13);
  const renderCode = s.substring(renderIdx, nextFunc > 0 ? nextFunc : s.length);
  
  // Extract a block that starts from a well-known location
  // Find "team.players.forEach((p, i) => {" 
  const forEachIdx = renderCode.indexOf('team.players.forEach((p, i) => {');
  if (forEachIdx >= 0) {
    // Extract from the start of the enclosing function to the error
    const blockStart = renderCode.lastIndexOf('\n', forEachIdx) + 1;
    const blockEnd = renderCode.indexOf('\n        });\n', forEachIdx);
    const block = renderCode.substring(blockStart, blockEnd > 0 ? blockEnd + 15 : renderCode.length);
    
    console.log('Block length:', block.length);
    console.log('Block:');
    console.log(block.substring(0, 1000));
    
    // Try evaluating the block
    try {
      new Function('var playersHTML,search,currentTab,currentAlbum,gName,team,getState,getFlagImg,getStickerImageUrl,handleStickerError,handleBadgeError,handlePhotoError,updateStickers' + block + 'return;');
      console.log('BLOCK: OK');
    } catch (e) {
      console.log('BLOCK ERROR:', e.message.substring(0, 100));
    }
  }
}
