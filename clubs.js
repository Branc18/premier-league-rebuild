const leagueSeason = "26/27";
const defaultClubId = "manchester-united";
const clubs = [
  ["arsenal","Arsenal","Arsenal","ARS",3,"#d6283d","#92202d"],
  ["aston-villa","Aston Villa","Villa","AVL",7,"#a74468","#641c39"],
  ["bournemouth","AFC Bournemouth","Bournemouth","BOU",91,"#df354b","#981f32"],
  ["brentford","Brentford","Brentford","BRE",94,"#e43a46","#a42332"],
  ["brighton","Brighton & Hove Albion","Brighton","BHA",36,"#3b85ff","#1246a5"],
  ["chelsea","Chelsea","Chelsea","CHE",8,"#4f82ff","#1b46a3"],
  ["coventry-city","Coventry City","Coventry","COV",9,"#72c7fa","#285b99"],
  ["crystal-palace","Crystal Palace","Palace","CRY",31,"#5482eb","#233c94"],
  ["everton","Everton","Everton","EVE",11,"#4c83ff","#1f459e"],
  ["fulham","Fulham","Fulham","FUL",54,"#dedfe6","#656971"],
  ["hull-city","Hull City","Hull","HUL",88,"#f5a327","#a55c14"],
  ["ipswich-town","Ipswich Town","Ipswich","IPS",40,"#5785fa","#254d9b"],
  ["leeds-united","Leeds United","Leeds","LEE",2,"#f2ce56","#877126"],
  ["liverpool","Liverpool","Liverpool","LIV",14,"#f24457","#941b2c"],
  ["manchester-city","Manchester City","City","MCI",43,"#7bc4ee","#356184"],
  ["manchester-united","Manchester United","United","MUN",1,"#e32936","#a91320"],
  ["newcastle-united","Newcastle United","Newcastle","NEW",4,"#e3e3e7","#626671"],
  ["nottingham-forest","Nottingham Forest","Forest","NFO",17,"#ec3e52","#a01e2c"],
  ["sunderland","Sunderland","Sunderland","SUN",56,"#e43a48","#a01d2b"],
  ["tottenham-hotspur","Tottenham Hotspur","Spurs","TOT",6,"#b1c1f7","#474e83"]
].map(([id, name, shortName, code, badgeId, primary, secondary]) => ({
  id, name, shortName, code, primary, secondary,
  badge: id === defaultClubId
    ? "manchester-united-crest.svg"
    : ["arsenal", "aston-villa", "bournemouth", "brentford", "brighton", "chelsea", "coventry-city", "crystal-palace"].includes(id)
      ? `${id}-crest.png`
      : `https://resources.premierleague.com/premierleague/badges/100/t${badgeId}.png`
}));

function clubSaveKey(clubId) {
  return `plr-save:${clubId}`;
}

function readClubSave(clubId) {
  try {
    const saved = localStorage.getItem(clubSaveKey(clubId)) ??
      (clubId === defaultClubId ? localStorage.getItem("plr-save") : null);
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function gameUrl(clubId) {
  return `game.html?club=${encodeURIComponent(clubId)}`;
}
