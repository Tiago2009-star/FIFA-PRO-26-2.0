const fs = require('fs');
let c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');

// Find and replace the template literal at line 3779 that's causing the error
// Original pattern: has p.replace(/'/g,"\\'") and team.name.replace(/'/g,"\\'")
// Replace with simpler version: just p and team.name

const oldStr = 'playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal(\'${id}\',\'${p.replace(/\'/g,"\\\\\'")}\',\'${pos}\',\'${team.name.replace(/\'/g,"\\\\\'")}\',${stickerNum})">\n            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">\n            <div class="num">${String(stickerNum).padStart(2,\'0\')}</div>\n            <div class="pos">${pos}</div>\n            <div class="name">${p}</div>\n          </div>`;';

const newStr = 'playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal(\'${id}\',\'${p}\',\'${pos}\',\'${team.name}\',${stickerNum})">\n            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">\n            <div class="num">${String(stickerNum).padStart(2,\'0\')}</div>\n            <div class="pos">${pos}</div>\n            <div class="name">${p}</div>\n          </div>`;';

if (c.indexOf(oldStr) >= 0) {
  console.log('Found exact match for template');
} else {
  console.log('No exact match - trying to find partial match');
  const idx = c.indexOf('playersHTML += `<div class="sticker ${state}"');
  if (idx >= 0) {
    console.log('Template starts at', idx);
    console.log('First 300 chars:', c.substring(idx, idx + 300));
  }
}
