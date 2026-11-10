// Transfermarkt snapshot checked 10 November 2026. Amounts are whole euros.
const initialSquad = [
  ["mu0","Senne Lammens","GK",1,35000000,"2026-06-03","/senne-lammens/profil/spieler/503883"],
  ["mu1","Karl Darlow","GK",12,200000,"2026-06-03","/karl-darlow/profil/spieler/99397"],
  ["mu2","Tom Heaton","GK",22,100000,"2026-06-03","/tom-heaton/profil/spieler/34130"],
  ["mu3","Dermot Mee","GK",45,null,null,"/dermot-mee/profil/spieler/620362"],
  ["mu4","Diogo Dalot","DEF",2,30000000,"2026-06-03","/diogo-dalot/profil/spieler/357147"],
  ["mu5","Noussair Mazraoui","DEF",3,18000000,"2026-06-03","/noussair-mazraoui/profil/spieler/340456"],
  ["mu6","Matthijs de Ligt","DEF",4,25000000,"2026-10-07","/matthijs-de-ligt/profil/spieler/326031"],
  ["mu7","Harry Maguire","DEF",5,8000000,"2026-06-03","/harry-maguire/profil/spieler/177907"],
  ["mu8","Lisandro Martínez","DEF",6,45000000,"2026-07-22","/lisandro-martinez/profil/spieler/480762"],
  ["mu9","Patrick Dorgu","DEF",13,35000000,"2026-06-03","/patrick-dorgu/profil/spieler/926952"],
  ["mu10","Leny Yoro","DEF",15,45000000,"2026-10-07","/leny-yoro/profil/spieler/923831"],
  ["mu11","Luke Shaw","DEF",23,8000000,"2026-06-03","/luke-shaw/profil/spieler/183288"],
  ["mu12","Ayden Heaven","DEF",26,30000000,"2026-06-03","/ayden-heaven/profil/spieler/1078163"],
  ["mu13","Harry Amass","DEF",41,5000000,"2026-10-07","/harry-amass/profil/spieler/1011738"],
  ["mu14","Mason Mount","MID",7,25000000,"2026-06-03","/mason-mount/profil/spieler/346483"],
  ["mu15","Bruno Fernandes","MID",8,35000000,"2026-06-03","/bruno-fernandes/profil/spieler/240306"],
  ["mu16","Andrey Santos","MID",17,45000000,"2026-10-07","/andrey-santos/profil/spieler/743600"],
  ["mu17","Youri Tielemans","MID",18,40000000,"2026-07-22","/youri-tielemans/profil/spieler/249565"],
  ["mu18","Carlos Baleba","MID",20,65000000,"2026-10-07","/carlos-baleba/profil/spieler/973085"],
  ["mu19","Manuel Ugarte","MID",25,20000000,"2026-10-07","/manuel-ugarte/profil/spieler/476701"],
  ["mu20","Kobbie Mainoo","MID",37,75000000,"2026-10-07","/kobbie-mainoo/profil/spieler/820374"],
  ["mu21","Jack Fletcher","MID",38,2000000,"2026-10-07","/jack-fletcher/profil/spieler/1011140"],
  ["mu22","Tyler Fletcher","MID",39,2500000,"2026-10-07","/tyler-fletcher/profil/spieler/1049911"],
  ["mu23","Marcus Rashford","FWD",9,35000000,"2026-10-07","/marcus-rashford/profil/spieler/258923"],
  ["mu24","Matheus Cunha","FWD",10,75000000,"2026-06-03","/matheus-cunha/profil/spieler/517894"],
  ["mu25","Joshua Zirkzee","FWD",11,20000000,"2026-06-03","/joshua-zirkzee/profil/spieler/435648"],
  ["mu26","Amad Diallo","FWD",16,45000000,"2026-06-03","/amad-diallo/profil/spieler/536835"],
  ["mu27","Bryan Mbeumo","FWD",19,75000000,"2026-06-03","/bryan-mbeumo/profil/spieler/413039"],
  ["mu28","Benjamin Šeško","FWD",30,75000000,"2026-06-03","/benjamin-sesko/profil/spieler/627442"],
  ["mu29","Shea Lacey","FWD",31,12000000,"2026-10-07","/shea-lacey/profil/spieler/926309"]
].map(([id, name, pos, number, value, valueDate, profile]) => ({
  id, name, pos, number, value, valueDate, profile, status: "undecided", club: "Manchester United"
}));

const market = [
  ["t0","Gianluigi Donnarumma","GK","Manchester City",45000000,"2026-06-03","/gianluigi-donnarumma/profil/spieler/315858"],
  ["t1","James Trafford","GK","Leeds United",35000000,"2026-10-07","/james-trafford/profil/spieler/566799"],
  ["t2","Alisson Becker","GK","Liverpool FC",15000000,"2026-06-03","/alisson/profil/spieler/105470"],
  ["t3","Rúben Dias","DEF","Manchester City",50000000,"2026-10-07","/ruben-dias/profil/spieler/258004"],
  ["t4","Marc Guéhi","DEF","Manchester City",75000000,"2026-10-07","/marc-guehi/profil/spieler/392757"],
  ["t5","Joško Gvardiol","DEF","Manchester City",75000000,"2026-10-07","/josko-gvardiol/profil/spieler/475959"],
  ["t6","Lewis Hall","DEF","Newcastle United",55000000,"2026-10-07","/lewis-hall/profil/spieler/670858"],
  ["t7","Milos Kerkez","DEF","Liverpool FC",35000000,"2026-06-03","/milos-kerkez/profil/spieler/730861"],
  ["t8","Jarrad Branthwaite","DEF","Everton FC",45000000,"2026-10-07","/jarrad-branthwaite/profil/spieler/661053"],
  ["t9","Pedro Porro","DEF","Tottenham Hotspur",45000000,"2026-07-22","/pedro-porro/profil/spieler/553875"],
  ["t10","Micky van de Ven","DEF","Tottenham Hotspur",50000000,"2026-06-03","/micky-van-de-ven/profil/spieler/557459"],
  ["t11","Tino Livramento","DEF","Newcastle United",45000000,"2026-06-03","/tino-livramento/profil/spieler/503981"],
  ["t12","Declan Rice","MID","Arsenal FC",120000000,"2026-06-03","/declan-rice/profil/spieler/357662"],
  ["t13","Martin Ødegaard","MID","Arsenal FC",80000000,"2026-10-07","/martin-odegaard/profil/spieler/316264"],
  ["t14","Moisés Caicedo","MID","Chelsea FC",100000000,"2026-06-03","/moises-caicedo/profil/spieler/687626"],
  ["t15","Enzo Fernández","MID","Manchester City",120000000,"2026-10-07","/enzo-fernandez/profil/spieler/648195"],
  ["t16","Florian Wirtz","MID","Liverpool FC",85000000,"2026-10-07","/florian-wirtz/profil/spieler/598577"],
  ["t17","Dominik Szoboszlai","MID","Liverpool FC",100000000,"2026-06-03","/dominik-szoboszlai/profil/spieler/451276"],
  ["t18","Elliot Anderson","MID","Manchester City",120000000,"2026-10-07","/elliot-anderson/profil/spieler/567576"],
  ["t19","Morgan Gibbs-White","MID","Nottingham Forest",80000000,"2026-10-07","/morgan-gibbs-white/profil/spieler/429014"],
  ["t20","Cole Palmer","MID","Chelsea FC",110000000,"2026-10-07","/cole-palmer/profil/spieler/568177"],
  ["t21","James Maddison","MID","Tottenham Hotspur",17000000,"2026-10-07","/james-maddison/profil/spieler/294057"],
  ["t22","Erling Haaland","FWD","Manchester City",220000000,"2026-07-22","/erling-haaland/profil/spieler/418560"],
  ["t23","Bukayo Saka","FWD","Arsenal FC",110000000,"2026-06-03","/bukayo-saka/profil/spieler/433177"],
  ["t24","Alexander Isak","FWD","Liverpool FC",90000000,"2026-10-07","/alexander-isak/profil/spieler/349066"],
  ["t25","Hugo Ekitiké","FWD","Liverpool FC",80000000,"2026-06-03","/hugo-ekitike/profil/spieler/709726"],
  ["t26","Antoine Semenyo","FWD","Manchester City",80000000,"2026-06-03","/antoine-semenyo/profil/spieler/583255"],
  ["t27","Eberechi Eze","MID","Arsenal FC",60000000,"2026-10-07","/eberechi-eze/profil/spieler/479999"],
  ["t30","Cody Gakpo","FWD","Liverpool FC",75000000,"2026-10-07","/cody-gakpo/profil/spieler/434675"],
  ["t31","Rayan Cherki","MID","Manchester City",110000000,"2026-10-07","/rayan-cherki/profil/spieler/607223"]
].map(([id, name, pos, club, value, valueDate, profile]) => ({
  id, name, pos, club, value, valueDate, profile
}));

const $ = s => document.querySelector(s);
const saveKey = "plr-save";
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
  return { version: saveVersion, squad: initialSquad.map(p => ({ ...p })), buys: [], formation: "4-3-3", slots: {} };
}

function saleValue(p) {
  return p.status === "sell" && hasValue(p) ? p.value : 0;
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

function canSign(p, game = state) {
  return hasValue(p) && !game.squad.some(p => p.status === "undecided") &&
    budget(game) >= p.value && owned(game).length < maxSquad && !game.buys.some(x => x.id === p.id);
}

const formations={"4-3-3":[["LW","ST","RW"],["CM","CM","CM"],["LB","CB","CB","RB"],["GK"]],"4-2-3-1":[["ST"],["LW","CAM","RW"],["CDM","CDM"],["LB","CB","CB","RB"],["GK"]],"4-4-2":[["ST","ST"],["LM","CM","CM","RM"],["LB","CB","CB","RB"],["GK"]],"3-5-2":[["ST","ST"],["LWB","CM","CAM","CM","RWB"],["CB","CB","CB"],["GK"]]};

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
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(saveKey));
  } catch {
    return game;
  }
  if (!Array.isArray(saved?.squad)) return game;

  for (const player of game.squad) {
    const status = saved.squad.find(p => p?.id === player.id)?.status;
    if (status === "keep" || status === "sell") player.status = status;
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
function updateStats(){let decided=state.squad.filter(p=>p.status!=="undecided").length;$("#budgetStat").textContent=money(budget());$("#marketBudget").textContent=money(budget());$("#squadStat").innerHTML=owned().length+' <i>/ 25</i>';$("#decidedStat").innerHTML=decided+' <i>/ '+state.squad.length+'</i>';$("#spendStat").textContent=money(spend());$("#squadTabCount").textContent=state.squad.length;let unlocked=decided===state.squad.length;$("#marketTab").classList.toggle("locked",!unlocked);$("#marketTab b").textContent=unlocked?"OPEN":"LOCKED";$("#decisionNotice").innerHTML=unlocked?"<b>MARKET UNLOCKED:</b> Your squad decisions are complete. Build your new team with the budget you created.":"<b>YOUR JOB:</b> Decide the future of every player to unlock the transfer market. "+decided+" of "+state.squad.length+" decisions made.";save();}
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

function card(p,marketCard=false){let status=p.status||"";let actions=marketCard?'<button class="buy-btn" data-buy="'+p.id+'" '+(!canSign(p)?"disabled":"")+'>SIGN PLAYER</button>':(status==="undecided"?'<button class="action keep" data-choice="keep" data-id="'+p.id+'">KEEP</button><button class="action sell" data-choice="sell" data-id="'+p.id+'">SELL</button>':status==="keep"?'<button class="action keep selected" data-choice="undecided" data-id="'+p.id+'">KEPT ✓</button><button class="action sell" data-choice="sell" data-id="'+p.id+'">SELL</button>':'<button class="action keep" data-choice="keep" data-id="'+p.id+'">KEEP</button><button class="action sell selected" data-choice="undecided" data-id="'+p.id+'">FOR SALE ✓</button>');
return '<article class="player-card '+(marketCard?'market-card':status==="keep"?'kept':status==="sell"?'sold':'')+'">'+portraitMarkup(p, '<span class="shirt">'+(p.number||"＋")+'</span>')+'<div class="player-info"><span class="position">'+p.pos+' · '+(marketCard?p.club:"MANCHESTER UNITED")+'</span><strong>'+p.name+'</strong><small>'+(marketCard?(hasValue(p)?"AVAILABLE TO BUY":"SIGNING UNAVAILABLE"):status==="keep"?"IN YOUR SQUAD":status==="sell"?(hasValue(p)?"SALE VALUE ADDED TO BUDGET":"NO PROCEEDS ADDED"):"UNDECIDED")+'</small></div><div class="player-value"><strong>'+(hasValue(p)?money(p.value):"Unavailable")+'</strong><small><a href="'+transfermarkt+p.profile+'" target="_blank" rel="noopener">Transfermarkt</a>'+(p.valueDate?'<time datetime="'+p.valueDate+'">'+dateFormat.format(new Date(p.valueDate))+'</time>':'')+'</small></div><div class="card-actions">'+actions+'</div></article>'}
const squadPositions = [
  ["GK", "Goalkeepers"],
  ["DEF", "Defenders"],
  ["MID", "Midfielders"],
  ["FWD", "Forwards"]
];

function positionSections(players, idPrefix, renderCard) {
  return squadPositions.map(([position, label]) => {
    const group = players.filter(p => p.pos === position).sort((a, b) =>
      (hasValue(b) ? b.value : 0) - (hasValue(a) ? a.value : 0)
    );
    if (!group.length) return "";

    return `
      <section class="squad-group" aria-labelledby="${idPrefix}-${position}">
        <header class="squad-group-heading">
          <h3 id="${idPrefix}-${position}"><span>${position}</span> ${label}</h3>
          <span class="squad-group-count">${group.length} ${group.length === 1 ? "player" : "players"}</span>
        </header>
        <div class="player-grid">${group.map(player => renderCard(player)).join("")}</div>
      </section>`;
  }).join("");
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
function setTab(tab){if(tab==="market"&&state.squad.some(p=>p.status==="undecided")){toast("Decide every squad player's future first.");return}document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));document.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active",p.id==="panel-"+tab));if(tab==="market")renderMarket();if(tab==="lineup")renderLineup();}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.tab)));
$("#squadGrid").addEventListener("click", e => {
  const button = e.target.closest("[data-choice]");
  const player = state.squad.find(p => p.id === button?.dataset.id);
  if (!player) return;

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
  if (status === "sell") {
    for (const slot of Object.keys(state.slots)) {
      if (state.slots[slot] === player.id) delete state.slots[slot];
    }
  }
  renderSquad();
});
$("#marketGrid").addEventListener("click", e => {
  const button = e.target.closest("[data-buy]");
  const player = market.find(p => p.id === button?.dataset.buy);
  if (!player || !canSign(player)) return;
  state.buys.push({ ...player });
  renderMarket();
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
  $("#shareNotice").textContent = team.complete
    ? "Open your team graphic to copy or download it."
    : `Fill all ${team.total} starting slots to share your team.`;
  $("#benchCount").textContent = team.bench.length + (team.bench.length === 1 ? " player" : " players");
  $("#lineupBench").innerHTML = team.groups.map(({ position, label, players }) => {
    const cards = players.map(p => `<li>
      <button type="button" class="bench-player" data-lineup-player="${p.id}">
        <span class="lineup-grip" aria-hidden="true">⠿</span>${p.name}
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
    const graphic = await makeTeamGraphic({
      rows: team.rows,
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
    graphicUrl = URL.createObjectURL(graphic);
    graphicBlob = graphic;
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

renderSquad();renderMarket();renderLineup();
