        if (matchTeam && matchTabBadge) {
          count++;
          const badgeUrl = getStickerImageUrl(team.name, 1);
          playersHTML += `<div class="sticker badge ${stateBadge}" data-id="${idBadge}" onclick="openModal('${idBadge}','Emblema','EMB','${team.name.replace(/'/g,"\\'")}',1)">
            <img class="sticker-bg" loading="lazy" src="${badgeUrl}" data-team="${team.name}" data-num="1" onerror="handleBadgeError(this)">
            <div class="num">${String(1).padStart(2,'0')}</div>
            <div class="pos">EMB</div>
            <div class="name">${getFlagImg(team.name, 32)}</div>
          </div>`;
        }
        team.players.forEach((p, i) => {
          if (i > 10) return;
          const stickerNum = i + 2;
          const pos = i < 3 ? 'GR' : i < 9 ? 'ZAG' : i < 14 ? 'MD' : 'AT';
          const id = `${gName}-${team.name}-${i}`;
          const state = getState(id);
          const matchSearch = !search || p.toLowerCase().includes(search) || team.name.toLowerCase().includes(search);
          const matchTab = currentTab === 'all' || (currentTab === 'owned' && state === 'owned') || (currentTab === 'missing' && (state === 'missing' || state === 'wanted')) || (currentTab === 'wanted' && state === 'wanted');
          if (!matchSearch || !matchTab) return;
          count++;
          const playerUrl = getStickerImageUrl(team.name, i + 2);
          const escapedId = id.replace(/'/g,"\\'");
          const escapedP = p.replace(/'/g,"\\'");
          const escapedTeam = team.name.replace(/'/g,"\\'");
          playersHTML += `<div class="sticker ${state}" data-id="${id}" style="aspect-ratio:3/4;" onclick="openModal('${escapedId}','${escapedP}','${pos}','${escapedTeam}',${stickerNum})">
            <img class="sticker-bg" loading="lazy" src="${playerUrl}" data-team="${team.name}" data-player="${p}" data-num="${stickerNum}" data-pn="${p}" onerror="handleStickerError(this)">
            <div class="num">${String(stickerNum).padStart(2,'0')}</div>
            <div class="pos">${pos}</div>
            <div class="name">${p}</div>
          </div>`;
          }
        });
        if (matchTeam && matchTabPhoto) {
          count++;
          const photoUrl = getStickerImageUrl(team.name, 13);
          playersHTML += `<div class="sticker photo ${statePhoto}" data-id="${idPhoto}" style="aspect-ratio:4/3;" onclick="openModal('${idPhoto}','Foto de Equipa','photo','${team.name.replace(/'/g,"\\'")}',13)">