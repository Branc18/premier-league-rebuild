const clubGrid = document.querySelector("#clubGrid");
const clubSearch = document.querySelector("#clubSearch");
const playableClubs = clubs.filter(club => clubData.has(club.id));

function badgeMarkup(club) {
  return `<span class="club-tile-badge" aria-hidden="true">
    <span>${club.code}</span>
    <img src="${club.badge}" width="56" height="56" alt="" decoding="async">
  </span>`;
}

document.addEventListener("load", event => {
  if (event.target.matches?.(".club-tile-badge img")) {
    event.target.parentElement.classList.add("badge-loaded");
  }
}, true);

function renderClubGrid() {
  const query = clubSearch.value.trim().toLowerCase();
  const visible = clubs.filter(club => club.name.toLowerCase().includes(query) ||
    club.shortName.toLowerCase().includes(query) || club.code.toLowerCase().includes(query));

  clubGrid.innerHTML = visible.map(club => {
    const playable = clubData.has(club.id);
    const content = `${badgeMarkup(club)}
      <span class="club-tile-name">${club.name}</span>
      <span class="club-state${playable ? " ready" : ""}">${playable ? "PLAY NOW" : "COMING SOON"}</span>`;
    const card = playable
      ? `<a class="club-card playable" href="${gameUrl(club.id)}">${content}</a>`
      : `<div class="club-card">${content}</div>`;
    return `<li style="--club-accent:${club.primary}">${card}</li>`;
  }).join("");
  document.querySelector("#clubEmpty").hidden = visible.length > 0;
}

document.querySelector("#homeSeason").textContent = `SEASON ${leagueSeason}`;
document.querySelector("#directorySeason").textContent = `SEASON ${leagueSeason} · CLUB SELECT`;
document.querySelector("#clubAvailability").textContent =
  `${clubs.length} clubs · ${playableClubs.length} ready to play`;

const requested = clubs.find(club => club.id === new URLSearchParams(location.search).get("club"));
if (requested && !clubData.has(requested.id)) {
  const notice = document.querySelector("#clubNotice");
  notice.textContent = `${requested.name} is coming soon. Its squad data is being prepared.`;
  notice.hidden = false;
}

clubSearch.addEventListener("input", renderClubGrid);
renderClubGrid();
