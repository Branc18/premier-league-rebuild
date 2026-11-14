// Render the current rebuild as a standalone, high-resolution PNG.
function loadGraphicImage(url) {
  if (!url) return Promise.resolve(null);

  return new Promise(resolve => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    const finish = result => {
      clearTimeout(timeout);
      image.onload = image.onerror = null;
      resolve(result);
    };
    const timeout = setTimeout(() => finish(null), 4500);
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = url;
  });
}

async function loadGraphicPortrait(id) {
  const photo = playerPhotos.get(id);
  const image = await loadGraphicImage(photo?.url);
  return image ? { image, photo } : null;
}

async function makeTeamGraphic(team) {
  const players = team.rows.flat().map(slot => slot.player);
  const [crest, portraits] = await Promise.all([
    loadGraphicImage(team.crestUrl),
    Promise.all(players.map(player => loadGraphicPortrait(player.id)))
  ]);
  const photoById = new Map(players.map((player, index) => [player.id, portraits[index]]));
  const photoIds = players.filter((_, index) => portraits[index]).map(player => player.id);
  const creditsUrl = photoIds.length ? photoCreditsUrl(photoIds) : "";
  const canvas = document.createElement("canvas");
  const width = 1080;
  const field = { x: 52, y: 308, w: 976, h: 776 };
  const transferTop = field.y + field.h + 62;
  const transferRows = Math.max(1, team.signings.length, team.sales.length);
  const footerTop = transferTop + 111 + transferRows * 35;
  canvas.width = width;
  canvas.height = footerTop + (creditsUrl ? 100 : 72);
  const ctx = canvas.getContext("2d");

  function box(x, y, w, h, radius, fill, stroke) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  function label(value, x, y, options = {}) {
    const { size = 20, color = "#f8f6ef", weight = 700, align = "left",
      maxWidth = width, family = "system-ui" } = options;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    let fitted = size;
    do {
      ctx.font = weight + " " + fitted + "px " + family;
      if (ctx.measureText(value).width <= maxWidth) break;
      fitted--;
    } while (fitted > 11);
    ctx.fillText(value, x, y, maxWidth);
  }

  const accent = "#ff5964";
  const gold = "#f5d48c";
  const muted = "#c2c5cb";
  const headline = "'Arial Narrow', system-ui";
  ctx.fillStyle = "#0e1014";
  ctx.fillRect(0, 0, width, canvas.height);
  const glow = ctx.createLinearGradient(0, 0, width, 330);
  glow.addColorStop(0, "#371823");
  glow.addColorStop(1, "#12151c");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, 300);
  ctx.fillStyle = team.clubColor;
  ctx.fillRect(0, 0, width, 8);

  label("PREMIER LEAGUE REBUILD  /  TACTICAL BOARD", 54, 47, { size: 17, color: gold, weight: 800 });
  label(`MY ${team.clubName.toUpperCase()} XI`, 50, 120, {
    size: 65, weight: 900, maxWidth: crest ? 812 : 978, family: headline
  });
  if (crest) {
    const scale = 132 / Math.max(crest.naturalWidth, crest.naturalHeight);
    const w = crest.naturalWidth * scale;
    const h = crest.naturalHeight * scale;
    ctx.drawImage(crest, 1028 - w, 111 - h / 2, w, h);
  }
  label(`MANAGER MODE  ·  SEASON ${team.season}`, 54, 175, { size: 17, color: muted, weight: 700 });

  [
    ["FORMATION", team.formation],
    ["BUDGET REMAINING", team.budget],
    ["TRANSFER SPEND", team.spend]
  ].forEach(([title, value], index) => {
    const x = 52 + index * 329;
    box(x, 208, 318, 78, 12, "#1b1e26", "#393d49");
    label(title, x + 16, 229, { size: 13, color: muted, weight: 800 });
    label(value, x + 16, 259, { size: 30, color: index === 1 ? gold : "#fff", weight: 850 });
  });

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(field.x, field.y, field.w, field.h, 20);
  ctx.clip();
  for (let stripe = 0; stripe < 10; stripe++) {
    ctx.fillStyle = stripe % 2 ? "#174b38" : "#1d583f";
    ctx.fillRect(field.x, field.y + stripe * field.h / 10, field.w, field.h / 10 + 1);
  }

  ctx.strokeStyle = "#b8dbc6aa";
  ctx.lineWidth = 2;
  const centerX = field.x + field.w / 2;
  const centerY = field.y + field.h / 2;
  ctx.strokeRect(field.x + 22, field.y + 21, field.w - 44, field.h - 42);
  ctx.beginPath();
  ctx.moveTo(field.x + 22, centerY);
  ctx.lineTo(field.x + field.w - 22, centerY);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centerX, centerY, 84, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeRect(centerX - 170, field.y + 21, 340, 105);
  ctx.strokeRect(centerX - 170, field.y + field.h - 126, 340, 105);
  ctx.strokeRect(centerX - 82, field.y + 21, 164, 42);
  ctx.strokeRect(centerX - 82, field.y + field.h - 63, 164, 42);

  team.rows.forEach((row, rowIndex) => {
    const spacing = field.w / Math.max(row.length, 2);
    const badgeWidth = Math.min(190, spacing - 10);
    const step = (field.h - 204) / Math.max(1, team.rows.length - 1);
    const y = field.y + 40 + rowIndex * step;
    row.forEach(({ position, player }, index) => {
      const x = centerX + (index - (row.length - 1) / 2) * spacing;
      const portrait = photoById.get(player.id);
      box(x - 38, y, 76, 76, 10, "#132820", "#b3d8bf");
      if (portrait) {
        const { image } = portrait;
        const crop = squarePortraitCrop(player.id, image.naturalWidth, image.naturalHeight);
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(x - 35, y + 3, 70, 70, 7);
        ctx.clip();
        ctx.drawImage(image, crop.x, crop.y, crop.size, crop.size, x - 35, y + 3, 70, 70);
        ctx.restore();
      } else {
        label(player.number || position, x, y + 38, { size: 27, color: gold, align: "center", weight: 900 });
      }
      box(x - badgeWidth / 2, y + 79, badgeWidth, 42, 9, "#101a18", "#6ca387");
      label(player.name, x, y + 92, { size: 18, align: "center", maxWidth: badgeWidth - 14, weight: 850 });
      label(position, x, y + 110, { size: 11, color: gold, align: "center", weight: 850 });
    });
  });
  ctx.restore();

  label("TRANSFER BUSINESS", 52, transferTop, { size: 35, weight: 900, family: headline });
  const ledgerHeight = 55 + transferRows * 35;
  [
    ["SIGNED", team.signings, "#93e2ad"],
    ["SOLD", team.sales, accent]
  ].forEach(([heading, transfers, color], index) => {
    const x = 52 + index * 493;
    const y = transferTop + 32;
    box(x, y, 483, ledgerHeight, 14, "#191c23", "#343844");
    label(heading + "  /  " + transfers.length, x + 16, y + 24, { size: 16, color, weight: 900 });
    const lines = transfers.length ? transfers : [{ name: "None", fee: "" }];
    lines.forEach(({ name, fee }, row) => {
      const center = y + 57 + row * 35;
      if (row % 2 === 0) box(x + 9, center - 15, 465, 30, 6, "#242832");
      label(name, x + 17, center, { size: 17, maxWidth: 300 });
      label(fee, x + 464, center, { size: 15, color: muted, align: "right", maxWidth: 130 });
    });
  });

  label("BRANC18.GITHUB.IO/PREMIER-LEAGUE-REBUILD", 52, footerTop + 28,
    { size: 15, color: muted, weight: 800 });
  label("Fan-made  ·  Values in EUR", 1028, footerTop + 28,
    { size: 14, color: muted, align: "right" });
  if (creditsUrl) {
    label("Photo credits · " + creditsUrl, 52, footerTop + 63,
      { size: 18, color: gold, maxWidth: 976 });
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("PNG export failed")), "image/png");
  });
}

async function makeSeasonGraphic({ club, crestUrl, season, position, finish, standings }) {
  const [crest] = await Promise.all([
    loadGraphicImage(crestUrl),
    document.fonts.load("800 64px 'Barlow Condensed'")
  ]);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1320;
  const ctx = canvas.getContext("2d");
  const fill = (color, x, y, w, h) => { ctx.fillStyle = color; ctx.fillRect(x, y, w, h); };
  function label(value, x, y, size, color = "#f4f4f2", align = "left") {
    ctx.fillStyle = color;
    ctx.font = `800 ${size}px "Barlow Condensed", sans-serif`;
    ctx.textAlign = align;
    ctx.textBaseline = "middle";
    ctx.fillText(value, x, y);
  }

  fill("#101114", 0, 0, 1080, 1320);
  const gradient = ctx.createLinearGradient(0, 0, 1080, 280);
  gradient.addColorStop(0, "#202229");
  gradient.addColorStop(1, club.primary + "55");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 280);
  fill(club.primary, 0, 0, 1080, 8);
  label(`PREMIER LEAGUE REBUILD  /  SEASON ${season}`, 44, 42, 24, "#e5c477");
  label(club.name.toUpperCase(), 44, 103, 57);
  label(`FINISHED ${position.toUpperCase()}`, 44, 170, 64, "#e5c477");
  label(`${finish.points} POINTS   ·   ${finish.wins} W   ${finish.draws} D   ${finish.losses} L`, 44, 236, 36);
  if (crest) {
    const scale = 122 / Math.max(crest.width, crest.height);
    ctx.drawImage(crest, 946 - crest.width * scale / 2, 128 - crest.height * scale / 2,
      crest.width * scale, crest.height * scale);
  }

  label("FINAL LEAGUE TABLE", 44, 318, 32);
  const columns = [68, 122, 570, 637, 704, 771, 838, 905, 972, 1023];
  ["#", "CLUB", "P", "W", "D", "L", "GF", "GA", "GD", "PTS"].forEach((heading, i) =>
    label(heading, columns[i], 362, 22, "#b9bec8", i < 2 ? "left" : "right"));
  standings.forEach((row, i) => {
    const y = 380 + i * 43;
    const accent = i === 0 ? "#e5c477" : i < 6 ? "#73d6a0" : i >= standings.length - 3 ? "#f48891" : null;
    const own = row.id === club.id;
    fill(own ? "#35303a" : i % 2 ? "#24272d" : "#191b20", 44, y, 992, 42);
    if (accent) fill(accent, 44, y, 5, 42);
    [i + 1, row.name, row.played, row.wins, row.draws, row.losses, row.gf, row.ga, row.gf - row.ga, row.points]
      .forEach((value, col) => label(value, columns[col], y + 21, 24,
        own ? "#f4da9a" : "#f4f4f2", col < 2 ? "left" : "right"));
  });
  label(finish.pointsDeduction ? `SIMULATED SEASON · −${finish.pointsDeduction} POINTS DEDUCTED` : "SIMULATED SEASON", 44, 1280, 22, "#b9bec8");
  return new Promise((resolve, reject) => canvas.toBlob(
    blob => blob ? resolve(blob) : reject(new Error("Could not encode season graphic")), "image/png"));
}
