const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
let s = scripts[16].replace(/<\/?script[^>]*>/g, '');
const lines = s.split('\n');

// The error is at a specific location in the render function.
// Let's try to extract different major functions and check each one.
// Strategy: find all "function " definitions and test each one individually.

const funcMatches = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^\s*function\s+(\w+)/);
  if (m) {
    funcMatches.push({name: m[1], line: i, start: i});
  }
}

for (let f = 0; f < funcMatches.length; f++) {
  const func = funcMatches[f];
  // Find the end (next function at same indentation level, or end of file)
  let endLine = func.line + 1;
  let braceDepth = 0;
  for (let i = func.line; i < lines.length; i++) {
    // Count braces (approximately)
    for (const ch of lines[i]) {
      if (ch === '{') braceDepth++;
      else if (ch === '}') braceDepth--;
    }
    if (braceDepth === 0 && i > func.line) {
      endLine = i;
      break;
    }
  }
  // If we reached end of file without finding end, extend to file end
  if (braceDepth !== 0) endLine = lines.length - 1;
  
  const funcCode = lines.slice(func.line, endLine + 1).join('\n');
  
  // Check if this function's line range contains the error (line 2585)
  if (func.line <= 2584 && endLine >= 2584) {
    console.log('Function ' + func.name + ' (lines ' + (func.line+1) + '-' + (endLine+1) + ') contains the error area');
    
    // Try checking this function in isolation
    try {
      new Function(funcCode);
      console.log('  -> INDIVIDUAL CHECK: OK');
    } catch(e) {
      console.log('  -> INDIVIDUAL CHECK: ERROR: ' + e.message.substring(0, 80));
    }
    
    // Now check the function with all dependencies (global vars)
    // Actually, let's try narrowing down within this function
    // Find the "if (currentAlbum === '2026')" inside
    const albumIdx = funcCode.indexOf("if (currentAlbum === '2026')");
    if (albumIdx >= 0) {
      // Extract from the if to the end of function
      const afterIf = funcCode.substring(albumIdx);
      try {
        new Function('var currentAlbum,team,playersHTML,search,currentTab,gName,getState,getFlagImg,getStickerImageUrl,handleStickerError,handleBadgeError,handlePhotoError' + afterIf);
        console.log('  -> FROM if(2026): OK');
      } catch(e) {
        console.log('  -> FROM if(2026): ERROR: ' + e.message.substring(0, 100));
        
        // Narrow further
        const forEachIdx = afterIf.indexOf('team.players.forEach((p, i) => {');
        if (forEachIdx >= 0) {
          const forEachBlock = afterIf.substring(forEachIdx);
          // Find where it ends
          const endOfForEach = forEachBlock.indexOf('        });');
          const trimmedForEach = forEachBlock.substring(0, endOfForEach + 10);
          try {
            new Function('var team,playersHTML,search,currentTab,gName,getState,getFlagImg,getStickerImageUrl,handleStickerError,handleBadgeError,handlePhotoError,updateStickers' + trimmedForEach);
            console.log('  -> forEach block alone: OK');
          } catch(e) {
            console.log('  -> forEach block alone: ERROR: ' + e.message.substring(0, 100));
          }
          
          // Test just the content inside the forEach
          const bodyStart = forEachBlock.indexOf('{');
          const bodyEnd = forEachBlock.lastIndexOf('}');
          const body = forEachBlock.substring(bodyStart + 1, bodyEnd);
          try {
            new Function('var i,team,p,playersHTML,search,currentTab,gName,getState,getFlagImg,getStickerImageUrl,handleStickerError,handleBadgeError,handlePhotoError,updateStickers' + body);
            console.log('  -> forEach body alone: OK');
          } catch(e) {
            console.log('  -> forEach body alone: ERROR: ' + e.message.substring(0, 100));
          }
        }
      }
    }
  }
}
