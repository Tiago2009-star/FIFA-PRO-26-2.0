const fs = require('fs');
const c = fs.readFileSync('C:/Users/Utilizador/Documents/cromos_temp/index.html', 'utf8');
const scripts = c.match(/<script[^>]*>([\s\S]*?)<\/script>/g);
let s = scripts[16].replace(/<\/?script[^>]*>/g, '');

// Try replacing the problematic template with a simpler version
const original = 'playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal(\'${id}\',\'${p.replace(/\'/g,"\\\\\'")}\',\'${pos}\',\'${team.name.replace(/\'/g,"\\\\\'")}\',${stickerNum})">\n            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">\n            <div class="num">${String(stickerNum).padStart(2,\'0\')}</div>\n            <div class="pos">${pos}</div>\n            <div class="name">${p}</div>\n          </div>`';

const simpler = 'playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal(\'${id}\',\'${p}\',\'${pos}\',\'${team.name}\',${stickerNum})">\n            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">\n            <div class="num">${String(stickerNum).padStart(2,\'0\')}</div>\n            <div class="pos">${pos}</div>\n            <div class="name">${p}</div>\n          </div>`';

if (s.includes(original)) {
  console.log('Found original, replacing...');
  s = s.replace(original, simpler);
  try {
    new Function(s);
    console.log('FIXED! Error was in the template literal');
  } catch (e) {
    console.log('Still has error:', e.message.substring(0, 100));
  }
} else {
  console.log('Could not find original template');
  // Try to find partial match
  const idx = s.indexOf('playersHTML += `<div class="sticker ${state}"');
  if (idx >= 0) { console.log('Template found at', idx); }
}
