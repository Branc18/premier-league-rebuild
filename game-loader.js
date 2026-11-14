const requestedClubId = new URLSearchParams(location.search).get("club") || defaultClubId;
const activeClub = clubs.find(club => club.id === requestedClubId);
const activeClubData = clubData.get(requestedClubId);

if (!activeClub || !activeClubData) {
  location.replace(activeClub ? `./?club=${encodeURIComponent(activeClub.id)}` : "./");
} else {
  const find = selector => document.querySelector(selector);
  document.documentElement.dataset.club = activeClub.id;
  document.title = `Premier League Rebuild — ${activeClub.name}`;
  find('meta[name="description"]').content = `Rebuild ${activeClub.name}. Decide who stays, sign players and pick your starting XI.`;
  document.documentElement.style.setProperty("--red", activeClub.primary);
  document.documentElement.style.setProperty("--red2", activeClub.secondary);
  find("#gameSeason").textContent = `SEASON ${leagueSeason}`;
  find(".hero").dataset.club = activeClub.shortName.toUpperCase();
  find("#heroClubName").textContent = `${activeClub.shortName.toUpperCase()}.`;
  find("#clubName").textContent = activeClub.name.toUpperCase();
  find("#clubStadium").textContent = activeClubData.stadium.toUpperCase();
  find("#lineupHeading").textContent = `YOUR ${activeClub.shortName.toUpperCase()} XI.`;
  if (activeClub.id === "manchester-city") {
    find(".hero").classList.add("hero-city");
    find("#cityStamp").hidden = false;
  }
  if (activeClub.id === "arsenal") {
    find(".hero").classList.add("hero-arsenal");
    const trophy = find("#arsenalTrophy");
    const image = trophy.querySelector("img");
    image.src = image.dataset.src;
    trophy.hidden = false;
    find("#arsenalTrophyCredit").hidden = false;
  }
  const badge = find(".club-badge");
  badge.src = activeClub.badge;
  badge.alt = `${activeClub.name} crest`;
  find("#clubSquadSource").href = activeClubData.squadSource;
  find("#clubCheckedOn").textContent = ` · Checked ${activeClubData.checkedOn}`;
  find("#graphicDownload").download = `${activeClub.id}-rebuild.png`;

  const script = document.createElement("script");
  script.src = "app.js?v=31";
  script.addEventListener("load", () => {
    find("#gameShell").hidden = false;
    find("#gameLoadStatus").hidden = true;
  });
  script.addEventListener("error", () => {
    find("#gameLoadStatus p").textContent = "The rebuild could not load. Refresh the page to try again.";
  });
  document.body.append(script);
}
