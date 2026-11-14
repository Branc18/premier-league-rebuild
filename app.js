const initialSquad = activeClubData.squad;
const market = activeClubData.market;

const $ = s => document.querySelector(s);
const saveKey = clubSaveKey(activeClub.id);
const saveVersion = 2;
const maxSquad = 25;
const transfermarkt = "https://www.transfermarkt.com";
const numberFormat = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 6 });
const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeZone: "UTC" });
const hasValue = p => Number.isSafeInteger(p.value) && p.value > 0;

function money(euros) {
  const amount = Math.abs(euros);
  const sign = euros < 0 ? "−" : "";
  if (amount >= 1000000) return sign + "€" + numberFormat.format(amount / 1000000) + "m";
  if (amount >= 1000) return sign + "€" + numberFormat.format(amount / 1000) + "k";
  return sign + "€" + numberFormat.format(amount);
}

function newGame() {
  return { version: saveVersion, squad: initialSquad.map(p => ({ ...p, status: "keep" })), buys: [], formation: "4-3-3", slots: {} };
}

function saleValue(p) {
  return !p.loanFrom && p.status === "sell" && hasValue(p) ? p.value : 0;
}

function spend(game = state) {
  return game.buys.reduce((total, p) => total + p.value, 0);
}

function budget(game = state) {
  return game.squad.reduce((total, p) => total + saleValue(p), 0) - spend(game);
}

function owned(game = state) {
  return game.squad.filter(p => p.status !== "sell").concat(game.buys);
}

function squadIsFull(game = state) {
  return owned(game).length >= maxSquad;
}

function canSign(p, game = state) {
  return hasValue(p) &&
    budget(game) >= p.value && !squadIsFull(game) && !game.buys.some(x => x.id === p.id);
}

const formations = {
  "4-3-3": [["LW", "ST", "RW"], ["CM", "CM", "CM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-2-3-1": [["ST"], ["LW", "CAM", "RW"], ["CDM", "CDM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "4-4-2": [["ST", "ST"], ["LM", "CM", "CM", "RM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "3-5-2": [["ST", "ST"], ["LWB", "CM", "CAM", "CM", "RWB"], ["CB", "CB", "CB"], ["GK"]],
  "3-4-3": [["LW", "ST", "RW"], ["LM", "CM", "CM", "RM"], ["CB", "CB", "CB"], ["GK"]],
  "4-5-1": [["ST"], ["LM", "CM", "CM", "CM", "RM"], ["LB", "CB", "CB", "RB"], ["GK"]],
  "5-2-3": [["LW", "ST", "RW"], ["CM", "CM"], ["LWB", "CB", "CB", "CB", "RWB"], ["GK"]]
};

const positionGroup = {
  GK: "GK",
  LB: "DEF", CB: "DEF", RB: "DEF", LWB: "DEF", RWB: "DEF",
  LM: "MID", CM: "MID", RM: "MID", CDM: "MID", CAM: "MID",
  LW: "FWD", ST: "FWD", RW: "FWD"
};

let state = load();
let squadFilter = "All", squadStatus = "all", marketPos = "All";

function load() {
  const game = newGame();
  const saved = readClubSave(activeClub.id);
  if (!Array.isArray(saved?.squad)) return game;

  for (const player of game.squad) {
    const status = saved.squad.find(p => p?.id === player.id)?.status;
    if (!player.loanFrom && (status === "keep" || status === "sell")) player.status = status;
  }

  const legacy = saved.version !== saveVersion;
  if (Array.isArray(saved.buys)) {
    for (const previous of saved.buys) {
      const player = market.find(p => p.id === previous?.id);
      if (!player || !hasValue(player) || game.buys.some(p => p.id === player.id)) continue;
      if (!legacy || (budget(game) >= player.value && owned(game).length < maxSquad)) {
        game.buys.push({ ...player, value: !legacy && hasValue(previous) ? previous.value : player.value });
      }
    }
  }

  if (Object.hasOwn(formations, saved.formation)) game.formation = saved.formation;
  const eligible = new Map(owned(game).map(p => [p.id, p]));
  for (const [row, positions] of formations[game.formation].entries()) {
    for (const [col, position] of positions.entries()) {
      const slot = row + "-" + col;
      const id = saved.slots?.[slot];
      if (eligible.get(id)?.pos === positionGroup[position]) {
        game.slots[slot] = id;
        eligible.delete(id);
      }
    }
  }

  if (legacy) {
    const lost = (Array.isArray(saved.buys) ? saved.buys.length : 0) - game.buys.length;
    const notice = $("#migrationNotice");
    notice.hidden = false;
    notice.textContent = "Your save now uses verified EUR values. Squad decisions were carried over and eligible signings were repriced." +
      (lost ? " Signings removed because they no longer fit the market, budget or squad limit: " + lost + "." : "");
  }
  return game;
}

function save() {
  try {
    localStorage.setItem(saveKey, JSON.stringify(state));
    $("#saveState").textContent = "● SAVED LOCALLY";
  } catch {
    $("#saveState").textContent = "● SAVE UNAVAILABLE";
  }
}
function toast(t){const el=$("#toast");el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
function updateStats() {
  const available = money(budget());
  $("#budgetStat").textContent = available;
  $("#marketBudget").textContent = available;
  $("#marketSquadLimit").hidden = !squadIsFull();
  $("#squadStat").innerHTML = owned().length + " <i>/ " + maxSquad + "</i>";
  $("#soldStat").textContent = state.squad.filter(p => p.status === "sell").length;
  $("#spendStat").textContent = money(spend());
  $("#squadTabCount").textContent = state.squad.length;
  save();
}
function portraitMarkup(player, fallback) {
  const photo = playerPhotos.get(player.id);
  const image = photo ? `<span class="portrait-frame">
    <img class="player-portrait" data-portrait="${player.id}" src="${photo.url}" crossorigin="anonymous" alt="" loading="lazy" decoding="async">
  </span>` : "";
  return `<span class="portrait-tile">${fallback}${image}</span>`;
}

document.addEventListener("load", e => {
  const image = e.target;
  if (!image.classList?.contains("player-portrait")) return;
  const { naturalWidth, naturalHeight } = image;
  const { x, y, size } = squarePortraitCrop(image.dataset.portrait, naturalWidth, naturalHeight);
  image.style.width = 100 * naturalWidth / size + "%";
  image.style.height = 100 * naturalHeight / size + "%";
  image.style.left = -100 * x / size + "%";
  image.style.top = -100 * y / size + "%";
  image.closest(".portrait-tile").classList.add("portrait-loaded");
}, true);

const marketKits = new Map(clubs.map(({ name, primary, secondary }) => {
  const [red, green, blue] = primary.slice(1).match(/../g).map(hex => {
    const channel = parseInt(hex, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  return [name, `--kit-primary:${primary};--kit-secondary:${secondary};--kit-number:${luminance > 0.179 ? "#000" : "#fff"}`];
}));

function shirtMarkup(player, marketCard) {
  const kit = marketCard ? marketKits.get(player.club) : undefined;
  const number = Number.isInteger(player.number) && player.number > 0 ? player.number : "＋";
  return `<span class="shirt"${kit ? ` style="${kit}"` : ""}>${number}</span>`;
}

function card(p,marketCard=false){
  const status = p.status || "";
  const signed = marketCard && state.buys.some(player => player.id === p.id);
  let actions;
  if (marketCard) {
    const signButton = `<button type="button" class="buy-btn" data-buy="${p.id}" ${canSign(p) ? "" : "disabled"}>SIGN PLAYER</button>`;
    actions = signed
      ? `<button type="button" class="action" data-undo-signing="${p.id}">UNDO SIGNING</button>`
      : squadIsFull()
        ? `<span class="sign-limit-tooltip" title="Sell players to make room in your squad before signing anyone.">${signButton}</span>`
        : signButton;
  } else if (p.loanFrom) {
    actions = "";
  } else {
    actions = status === "sell"
      ? '<button class="action keep" data-choice="keep" data-id="'+p.id+'">KEEP</button><span class="action sell selected">FOR SALE ✓</span>'
      : '<span class="action keep selected">KEPT ✓</span><button class="action sell" data-choice="sell" data-id="'+p.id+'">SELL</button>';
  }
return '<article class="player-card '+(marketCard?'market-card':status==="keep"?'kept':status==="sell"?'sold':'')+'">'+portraitMarkup(p, shirtMarkup(p, marketCard))+'<div class="player-info"><span class="position">'+p.pos+' · '+(marketCard?p.club:activeClub.name.toUpperCase())+'</span><strong>'+p.name+'</strong><small>'+(marketCard?(signed?"SIGNED":hasValue(p)?"AVAILABLE TO BUY":"SIGNING UNAVAILABLE"):p.loanFrom?"ON LOAN FROM "+p.loanFrom.toUpperCase():status==="sell"?(hasValue(p)?"SALE VALUE ADDED TO BUDGET":"NO PROCEEDS ADDED"):"IN YOUR SQUAD")+'</small></div><div class="player-value"><strong>'+(hasValue(p)?money(p.value):"Unavailable")+'</strong><small><a href="'+transfermarkt+p.profile+'" target="_blank" rel="noopener">Transfermarkt</a>'+(p.valueDate?'<time datetime="'+p.valueDate+'">'+dateFormat.format(new Date(p.valueDate))+'</time>':'')+'</small></div><div class="card-actions">'+actions+'</div></article>'}
const squadPositions = [
  ["GK", "Goalkeepers"],
  ["DEF", "Defenders"],
  ["MID", "Midfielders"],
  ["FWD", "Forwards"]
];

const collapsedPositions = { squad: new Set(), market: new Set() };

function positionSections(players, idPrefix, renderCard) {
  return squadPositions.map(([position, label]) => {
    const group = players.filter(p => p.pos === position).sort((a, b) =>
      (hasValue(b) ? b.value : 0) - (hasValue(a) ? a.value : 0)
    );
    if (!group.length) return "";

    const groupId = `${idPrefix}-${position}`;
    const expanded = !collapsedPositions[idPrefix].has(position);
    return `
      <section class="squad-group" aria-labelledby="${groupId}">
        <header class="squad-group-heading">
          <h3 id="${groupId}">
            <button type="button" class="position-toggle" data-position-toggle="${position}"
              aria-expanded="${expanded}" aria-controls="${groupId}-players">
              <span class="position-code">${position}</span> ${label}
              <span class="squad-group-count">${group.length} ${group.length === 1 ? "player" : "players"}</span>
              <span class="position-chevron" aria-hidden="true"></span>
            </button>
          </h3>
        </header>
        <div class="player-grid" id="${groupId}-players"${expanded ? "" : " hidden"}>${group.map(player => renderCard(player)).join("")}</div>
      </section>`;
  }).join("");
}

for (const [tab, collapsed] of Object.entries(collapsedPositions)) {
  $(`#${tab}Grid`).addEventListener("click", event => {
    const button = event.target.closest("[data-position-toggle]");
    if (!button) return;

    const position = button.dataset.positionToggle;
    const isExpanded = collapsed.delete(position);
    if (!isExpanded) collapsed.add(position);
    button.setAttribute("aria-expanded", isExpanded);
    document.getElementById(button.getAttribute("aria-controls")).hidden = !isExpanded;
  });
}

function renderSquad() {
  const query = $("#squadSearch").value.toLowerCase();
  const players = state.squad.filter(p =>
    (squadFilter === "All" || p.pos === squadFilter) &&
    (squadStatus === "all" || p.status === squadStatus) &&
    p.name.toLowerCase().includes(query)
  );

  $("#squadGrid").innerHTML = positionSections(players, "squad", card) ||
    '<div class="empty-state">No players match those filters.</div>';
  updateStats();
}

function renderMarket() {
  const query = $("#marketSearch").value.toLowerCase();
  const club = $("#clubFilter").value;
  const players = market.filter(p =>
    (marketPos === "All" || p.pos === marketPos) &&
    (club === "All" || p.club === club) &&
    p.name.toLowerCase().includes(query)
  );

  $("#marketGrid").innerHTML = positionSections(players, "market", player => card(player, true)) ||
    '<div class="empty-state">No transfer targets match those filters.</div>';
  $("#marketCount").textContent = players.length + " TRANSFER TARGETS";
  updateStats();
}
function setTab(tab) {
  const opening = !$(`#panel-${tab}`).classList.contains("active");
  if (opening) collapsedPositions[tab]?.clear();

  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + tab));
  if (tab === "squad" && opening) renderSquad();
  if (tab === "market") renderMarket();
  if (tab === "lineup") renderLineup();
}
const skipMarketDialog = $("#skipMarketDialog");
$("#marketTab").addEventListener("click", () => {
  if ($("#marketTab").classList.contains("active") || state.squad.some(p => p.status === "sell")) {
    setTab("market");
    return;
  }

  skipMarketDialog.returnValue = "";
  skipMarketDialog.showModal();
});
skipMarketDialog.addEventListener("close", () => {
  const tab = skipMarketDialog.returnValue;
  if (tab === "lineup" || tab === "squad") {
    setTab(tab);
    document.querySelector(`.tab[data-tab="${tab}"]`).focus();
  }
});
document.querySelectorAll('.tab:not([data-tab="market"])').forEach(button => {
  button.addEventListener("click", () => setTab(button.dataset.tab));
});
function removeFromLineup(playerId) {
  for (const slot of Object.keys(state.slots)) {
    if (state.slots[slot] === playerId) delete state.slots[slot];
  }
}

$("#squadGrid").addEventListener("click", e => {
  const button = e.target.closest("[data-choice]");
  const player = state.squad.find(p => p.id === button?.dataset.id);
  if (!player || player.loanFrom) return;

  const status = button.dataset.choice;
  if (player.status === "sell" && status !== "sell") {
    if (budget() < saleValue(player)) {
      toast("This sale has already funded your signings.");
      return;
    }
    if (state.buys.length && owned().length >= maxSquad) {
      toast("Free a squad place before reversing this sale.");
      return;
    }
  }
  player.status = status;
  if (status === "sell") removeFromLineup(player.id);
  renderSquad();
});
$("#marketGrid").addEventListener("click", e => {
  const undo = e.target.closest("[data-undo-signing]");
  if (undo) {
    const index = state.buys.findIndex(player => player.id === undo.dataset.undoSigning);
    if (index === -1) return;

    const [player] = state.buys.splice(index, 1);
    removeFromLineup(player.id);
    renderMarket();
    $("#marketGrid").querySelector(`[data-buy="${player.id}"]`)?.focus();
    toast("Signing undone. " + money(player.value) + " refunded for " + player.name + ".");
    return;
  }

  const button = e.target.closest("[data-buy]");
  const player = market.find(p => p.id === button?.dataset.buy);
  if (!player || !canSign(player)) return;
  state.buys.push({ ...player });
  renderMarket();
  $("#marketGrid").querySelector(`[data-undo-signing="${player.id}"]`)?.focus();
  toast(player.name + " signed.");
});
$("#squadSearch").addEventListener("input",renderSquad);$("#marketSearch").addEventListener("input",renderMarket);$("#clubFilter").addEventListener("change",renderMarket);
$("#positionFilters").addEventListener("click",e=>{let b=e.target.closest("[data-filter]");if(!b)return;squadFilter=b.dataset.filter;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));renderSquad()});
document.querySelectorAll("[data-status]").forEach(b=>b.addEventListener("click",()=>{squadStatus=b.dataset.status;document.querySelectorAll("[data-status]").forEach(x=>x.classList.toggle("active",x===b));renderSquad()}));
$("#marketPositionFilters").addEventListener("click",e=>{let b=e.target.closest("[data-mpos]");if(!b)return;marketPos=b.dataset.mpos;document.querySelectorAll("[data-mpos]").forEach(x=>x.classList.toggle("active",x===b));renderMarket()});
[...new Set(market.map(p=>p.club))].sort().forEach(c=>$("#clubFilter").insertAdjacentHTML("beforeend",'<option>'+c+'</option>'));
$("#resetBtn").addEventListener("click",()=>{if(!confirm("Reset all squad decisions, signings and your budget?"))return;state=newGame();$("#migrationNotice").hidden=true;renderSquad();toast("Save reset.");});

const lineupPanel = $("#panel-lineup");
const lineupPrompt = $("#lineupPrompt");
let lineupPick = null;
let lineupDrag = null;
let ignoreLineupClick = false;

$("#formation").addEventListener("change", e => {
  state.formation = e.target.value;
  state.slots = {};
  renderLineup();
  save();
});

function slotGroup(key) {
  const [row, col] = key.split("-");
  return positionGroup[formations[state.formation][row]?.[col]];
}

function selectLineupPlayer(player, message) {
  lineupPick = player;
  lineupPanel.querySelectorAll("[data-lineup-player]").forEach(button => {
    button.setAttribute("aria-pressed", button.dataset.lineupPlayer === player?.id);
  });
  lineupPanel.querySelectorAll("[data-slot]").forEach(button => {
    const eligible = player?.pos === slotGroup(button.dataset.slot) &&
      button.dataset.lineupPlayer !== player.id;
    button.classList.toggle("lineup-target", eligible);
  });
  const isStarter = player && Object.values(state.slots).includes(player.id);
  $("#benchReturn").disabled = !isStarter;
  $("#lineupBenchArea").classList.toggle("lineup-target", Boolean(isStarter));
  lineupPrompt.textContent = message ?? (player
    ? player.name + " selected. Choose a highlighted slot."
    : "Choose a player to highlight their eligible slots.");
}

function moveLineupPlayer(key, restoreFocus) {
  const player = lineupPick;
  const from = Object.keys(state.slots).find(slot => state.slots[slot] === player?.id);
  if (!player || key === from) return;
  if (key === null && !from) return;
  if (key !== null && slotGroup(key) !== player.pos) {
    lineupPrompt.textContent = player.name + " can only play in a " + player.pos + " slot.";
    return;
  }

  const replaced = state.slots[key];
  if (from) {
    if (replaced) state.slots[from] = replaced;
    else delete state.slots[from];
  }
  if (key !== null) state.slots[key] = player.id;

  renderLineup();
  save();
  lineupPrompt.textContent = key === null
    ? player.name + " returned to the bench."
    : player.name + " placed in the Starting XI.";
  if (restoreFocus) {
    const target = key === null ? `[data-lineup-player="${player.id}"]` : `[data-slot="${key}"]`;
    lineupPanel.querySelector(target)?.focus();
  }
}

lineupPanel.addEventListener("click", e => {
  if (ignoreLineupClick && e.detail) {
    ignoreLineupClick = false;
    return;
  }
  const slot = e.target.closest("[data-slot]");
  if (slot && lineupPick && slot.dataset.lineupPlayer !== lineupPick.id) {
    moveLineupPlayer(slot.dataset.slot, true);
    return;
  }

  const card = e.target.closest("[data-lineup-player]");
  if (!card) return;
  const player = owned().find(p => p.id === card.dataset.lineupPlayer);
  selectLineupPlayer(player?.id === lineupPick?.id ? null : player);
});

$("#benchReturn").addEventListener("click", () => moveLineupPlayer(null, true));
const dragLabel = $("#lineupDragLabel");

lineupPanel.addEventListener("pointerdown", e => {
  if (!e.isPrimary || e.button !== 0) return;
  ignoreLineupClick = false;
  const card = e.target.closest("[data-lineup-player]");
  if (!card || (e.pointerType === "touch" && !e.target.closest(".lineup-grip"))) return;
  const player = owned().find(p => p.id === card.dataset.lineupPlayer);
  if (!player) return;

  lineupDrag = { pointer: e.pointerId, player, x: e.clientX, y: e.clientY, frame: null };
  card.setPointerCapture(e.pointerId);
});

function scrollDuringLineupDrag() {
  const { y } = lineupDrag;
  const edge = 52;
  if (y < edge) window.scrollBy(0, -12);
  else if (y > window.innerHeight - edge) window.scrollBy(0, 12);
  lineupDrag.frame = requestAnimationFrame(scrollDuringLineupDrag);
}

lineupPanel.addEventListener("pointermove", e => {
  if (lineupDrag?.pointer !== e.pointerId) return;
  if (lineupDrag.frame === null) {
    if (Math.hypot(e.clientX - lineupDrag.x, e.clientY - lineupDrag.y) < 7) return;
    ignoreLineupClick = true;
    selectLineupPlayer(lineupDrag.player);
    dragLabel.textContent = lineupDrag.player.name;
    dragLabel.hidden = false;
    lineupDrag.frame = requestAnimationFrame(scrollDuringLineupDrag);
  }
  lineupDrag.y = e.clientY;
  dragLabel.style.left = e.clientX + 12 + "px";
  dragLabel.style.top = e.clientY + 12 + "px";
});

function finishLineupDrag(target = null) {
  const active = lineupDrag?.frame != null;
  if (active) cancelAnimationFrame(lineupDrag.frame);
  lineupDrag = null;
  dragLabel.hidden = true;
  if (target) moveLineupPlayer(target.dataset.slot ?? null, false);
  else if (active) selectLineupPlayer(null);
}

lineupPanel.addEventListener("pointerup", e => {
  if (lineupDrag?.pointer !== e.pointerId) return;
  const target = lineupDrag.frame === null ? null :
    document.elementFromPoint(e.clientX, e.clientY)?.closest(".lineup-target");
  finishLineupDrag(target);
});

for (const event of ["pointercancel", "lostpointercapture"]) {
  lineupPanel.addEventListener(event, e => {
    if (lineupDrag?.pointer === e.pointerId) finishLineupDrag();
  });
}

lineupPanel.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  finishLineupDrag();
  selectLineupPlayer(null);
});

function lineupTeam() {
  const players = owned();
  const playersById = new Map(players.map(player => [player.id, player]));
  const rows = formations[state.formation].map((row, rowIndex) => row.map((position, colIndex) => {
    const key = rowIndex + "-" + colIndex;
    return { key, position, player: playersById.get(state.slots[key]) };
  }));
  const slots = rows.flat();
  const starters = slots.filter(slot => slot.player);
  const used = new Set(starters.map(slot => slot.player.id));
  const bench = players.filter(player => !used.has(player.id));
  const groups = squadPositions.map(([position, label]) => ({
    position, label, players: bench.filter(player => player.pos === position)
  })).filter(group => group.players.length);
  return { rows, starters, bench, groups, total: slots.length, complete: used.size === slots.length };
}

function renderLineup() {
  $("#formation").value = state.formation;
  const team = lineupTeam();
  $("#pitchSlots").innerHTML = team.rows.map(row => {
    const slots = row.map(({ key, position, player }, colIndex) => {
      const source = player ? `data-lineup-player="${player.id}"` : "";
      return `<button type="button" class="slot" data-slot="${key}" ${source}
        aria-label="${position} slot ${colIndex + 1}, ${player?.name ?? "empty"}" title="${player?.name ?? position}">
        ${player ? '<span class="lineup-grip" aria-hidden="true">⠿</span>' : ""}
        ${player ? portraitMarkup(player, `<span class="slot-photo-fallback">${player.number || position}</span>`) : ""}
        <small>${position}</small>
        <strong>${player?.name ?? "EMPTY"}</strong>
      </button>`;
    });
    return `<div class="pitch-row">${slots.join("")}</div>`;
  }).join("");

  $("#lineupCount").textContent = `${team.starters.length} / ${team.total} STARTING`;
  $("#shareBtn").disabled = !team.complete;
  updateSeasonButton(team);
  $("#shareNotice").textContent = team.complete
    ? "Open your team graphic to copy or download it."
    : `Fill all ${team.total} starting slots to share your team.`;
  $("#benchCount").textContent = team.bench.length + (team.bench.length === 1 ? " player" : " players");
  $("#lineupBench").innerHTML = team.groups.map(({ position, label, players }) => {
    const cards = players.map(p => `<li>
      <button type="button" class="bench-player" data-lineup-player="${p.id}">
        <span class="lineup-grip" aria-hidden="true">⠿</span>
        ${portraitMarkup(p, `<span class="slot-photo-fallback" aria-hidden="true">${p.number || position}</span>`)}
        ${p.name}
      </button>
    </li>`).join("");
    return `<section class="bench-group" aria-labelledby="bench-${position}">
      <h4 id="bench-${position}"><b>${position}</b> ${label}</h4>
      <ul class="bench" role="list">${cards}</ul>
    </section>`;
  }).join("");
  $("#benchEmpty").hidden = team.bench.length > 0;
  selectLineupPlayer(null);
}

const graphicDialog = $("#graphicDialog");
const graphicPreview = $("#graphicPreview");
const graphicDownload = $("#graphicDownload");
const graphicCopy = $("#graphicCopy");
const graphicStatus = $("#graphicStatus");
let graphicRequest = 0;
let graphicUrl;
let graphicBlob;

$("#shareBtn").addEventListener("click", async () => {
  const team = lineupTeam();
  if (!team.complete) return;

  const request = ++graphicRequest;
  graphicStatus.hidden = false;
  graphicStatus.textContent = "Building your team graphic…";
  graphicDialog.showModal();

  try {
    const blob = await makeTeamGraphic({
      rows: team.rows,
      crestUrl: $(".club-badge").src,
      clubName: activeClub.name,
      clubColor: activeClub.primary,
      season: leagueSeason,
      formation: state.formation,
      budget: money(budget()),
      spend: money(spend()),
      signings: state.buys.map(player => ({ name: player.name, fee: money(player.value) })),
      sales: state.squad.filter(player => player.status === "sell").map(player => ({
        name: player.name,
        fee: hasValue(player) ? money(player.value) : "No proceeds"
      }))
    });
    if (request !== graphicRequest || !graphicDialog.open) return;
    graphicUrl = URL.createObjectURL(blob);
    graphicBlob = blob;
    graphicPreview.src = graphicUrl;
    graphicPreview.hidden = false;
    graphicDownload.href = graphicUrl;
    graphicDownload.hidden = false;
    graphicCopy.hidden = false;
    graphicStatus.hidden = true;
  } catch {
    if (request === graphicRequest) graphicStatus.textContent = "The graphic could not be generated. Close this window and try again.";
  }
});

graphicCopy.addEventListener("click", async () => {
  if (!graphicBlob) return;
  const request = graphicRequest;
  let message = "Team graphic copied to clipboard.";

  try {
    await navigator.clipboard.write([new ClipboardItem({ "image/png": graphicBlob })]);
  } catch {
    message = "Couldn’t copy the image. Use Download PNG to save it.";
  }

  if (request !== graphicRequest || !graphicDialog.open) return;
  graphicStatus.textContent = message;
  graphicStatus.hidden = false;
});

graphicDialog.addEventListener("close", () => {
  graphicRequest++;
  if (graphicUrl) URL.revokeObjectURL(graphicUrl);
  graphicUrl = undefined;
  graphicBlob = undefined;
  graphicCopy.hidden = true;
  graphicPreview.removeAttribute("src");
  graphicPreview.hidden = true;
  graphicDownload.removeAttribute("href");
  graphicDownload.hidden = true;
});

$("#photoCreditList").innerHTML = [...initialSquad, ...market].filter(player => playerPhotos.has(player.id)).map(player => {
  const { source, author, license } = playerPhotos.get(player.id);
  return `<li><a href="${source}" target="_blank" rel="noopener">${player.name}</a> · ${author} · ${license}</li>`;
}).join("");

const seasonKey = saveKey + ":season";
let season = null;
try {
  const savedSeason = JSON.parse(localStorage.getItem(seasonKey));
  if (savedSeason?.version === 1 && savedSeason.fixtures?.length === 38 &&
      Array.isArray(savedSeason.results) && savedSeason.ratings?.[activeClub.id]) season = savedSeason;
} catch {}

const seasonDialog = $("#seasonDialog");
const seasonClubs = new Map(clubs.map(club => [club.id, club]));
const seasonName = id => seasonClubs.get(id).name;
function updateSeasonButton(team) {
  $("#seasonBtn").disabled = !season && !team.complete;
  $("#seasonBtn").textContent = season ? "VIEW SEASON" : "SIMULATE SEASON";
}

function renderSeason() {
  const played = season.results.length;
  const complete = played === season.fixtures.length;
  const table = seasonEngine.table(season);
  const rank = table.findIndex(row => row.id === activeClub.id) + 1;
  $("#seasonProgress").textContent = complete
    ? `Season complete · Finished ${rank} of ${table.length} with ${table[rank - 1].points} points`
    : `${played} / ${season.fixtures.length} matchdays played`;
  $("#seasonNext").disabled = complete;
  $("#seasonAll").disabled = complete;
  $("#seasonTable").innerHTML = table.map((row, index) =>
    `<tr class="${row.id === activeClub.id ? "season-your-club " : ""}${index === 0 && complete ? "season-champion" : index < 6 ? "season-top-six" : index >= table.length - 3 ? "season-relegation" : ""}">
      <td>${index + 1}${index === 0 && complete ? '<span class="season-visually-hidden"> Champion</span>' : index < 6 ? '<span class="season-visually-hidden"> Top six</span>' : index >= table.length - 3 ? '<span class="season-visually-hidden"> Relegation zone</span>' : ""}</td><th scope="row">${seasonName(row.id)}</th><td>${row.played}</td>
      <td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td>
      <td>${row.gf}</td><td>${row.ga}</td><td>${row.gf - row.ga}</td><td>${row.points}</td>
    </tr>`).join("");
  $("#seasonFixtures").innerHTML = season.fixtures.map((round, index) => {
    const matchIndex = round.findIndex(pair => pair.includes(activeClub.id));
    const [home, away] = round[matchIndex];
    const result = season.results[index]?.[matchIndex];
    const isNext = index === played;
    const club = id => `<div class="match-club"><img src="${seasonClubs.get(id).badge}" alt="" width="80" height="80" loading="lazy"><strong>${seasonName(id)}</strong></div>`;
    return `<li class="match-screen${isNext ? " season-next-fixture" : ""}" aria-label="Matchday ${index + 1}">
      <div class="match-label">MATCHDAY ${index + 1} / ${season.fixtures.length} · ${home === activeClub.id ? "HOME" : "AWAY"}</div>
      <div class="match-scoreboard">${club(home)}<strong class="match-score">${result ? result.join("–") : "VS"}</strong>${club(away)}</div>
      <div class="match-label">${result ? "FULL TIME" : isNext ? "NEXT FIXTURE" : "UPCOMING"}</div>
    </li>`;
  }).join("");
  const last = season.results.length - 1;
  if (last >= 0) {
    const round = season.fixtures[last];
    $("#seasonMatchday").innerHTML = round.map(([home, away], i) =>
      `<li>${seasonName(home)} <strong>${season.results[last][i].join("–")}</strong> ${seasonName(away)}</li>`).join("");
  } else {
    $("#seasonMatchday").textContent = "";
  }
  $("#seasonResults").hidden = last < 0;
}

function showMatchday(index) {
  const feed = $("#seasonFixtures");
  const match = feed.children[index];
  if (!match) return;
  const left = match.offsetLeft - feed.firstElementChild.offsetLeft;
  feed.scrollTo({ left, behavior: "instant" });
  updateMatchNavigation();
}

const matchFeed = $("#seasonFixtures");
function moveMatchday(direction) {
  const index = Math.round(matchFeed.scrollLeft / matchFeed.clientWidth);
  showMatchday(index + direction);
}
$("#seasonPreviousCard").addEventListener("click", () => moveMatchday(-1));
$("#seasonNextCard").addEventListener("click", () => moveMatchday(1));
matchFeed.addEventListener("scroll", updateMatchNavigation);
function updateMatchNavigation() {
  const index = Math.round(matchFeed.scrollLeft / matchFeed.clientWidth);
  $("#seasonPreviousCard").disabled = index === 0;
  $("#seasonNextCard").disabled = index >= matchFeed.children.length - 1;
}

function saveSeason() {
  try {
    localStorage.setItem(seasonKey, JSON.stringify(season));
    $("#seasonStorage").hidden = true;
  } catch {
    $("#seasonStorage").hidden = false;
  }
}

$("#seasonBtn").addEventListener("click", () => {
  if (!season) {
    const team = lineupTeam();
    if (!team.complete) return;
    season = seasonEngine.create(clubs, activeClub.id, team.starters.map(slot => slot.player),
      id => clubData.get(id).squad, crypto.getRandomValues(new Uint32Array(1))[0]);
    saveSeason();
    updateSeasonButton(team);
  }
  renderSeason();
  seasonDialog.showModal();
  showMatchday(Math.min(season.results.length, season.fixtures.length - 1));
});

$("#seasonNext").addEventListener("click", () => {
  const matchday = season.results.length;
  seasonEngine.advance(season);
  saveSeason();
  renderSeason();
  showMatchday(matchday);
});
$("#seasonAll").addEventListener("click", () => {
  while (season.results.length < season.fixtures.length) seasonEngine.advance(season);
  saveSeason();
  renderSeason();
  showMatchday(season.results.length - 1);
});
$("#seasonReset").addEventListener("click", () => {
  if (!confirm("Reset this simulated season and its results?")) return;
  try { localStorage.removeItem(seasonKey); }
  catch { toast("Season save could not be cleared."); return; }
  season = null;
  seasonDialog.close();
  updateSeasonButton(lineupTeam());
  if ($("#seasonBtn").disabled) $("#formationSelect")?.focus();
});

renderSquad();renderMarket();renderLineup();
