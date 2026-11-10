// Register each playable club with its verified squad.
const clubData = new Map();

{
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
    id, name, pos, number, value, valueDate, profile, status: "undecided"
  }));


  clubData.set("manchester-united", {
    squad: initialSquad,
    stadium: "Old Trafford · Manchester",
    squadSource: "https://www.transfermarkt.com/manchester-united/kader/verein/985/saison_id/2026",
    checkedOn: "10 November 2026"
  });
}

// Arsenal's 26/27 squad on 11 November 2026. Players out on loan are excluded.
clubData.set("arsenal", {
  squad: [
    ["ars262749","David Raya","GK",1,30000000,"2026-06-03","/david-raya/profil/spieler/262749"],
    ["ars542586","Illan Meslier","GK",30,6000000,"2026-10-07","/illan-meslier/profil/spieler/542586"],
    ["ars192279","Kepa Arrizabalaga","GK",13,5000000,"2026-06-03","/kepa-arrizabalaga/profil/spieler/192279"],
    ["ars495666","William Saliba","DEF",2,100000000,"2026-06-03","/william-saliba/profil/spieler/495666"],
    ["ars435338","Gabriel Magalhães","DEF",6,75000000,"2026-06-03","/gabriel/profil/spieler/435338"],
    ["ars659813","Piero Hincapié","DEF",5,50000000,"2026-06-03","/piero-hincapie/profil/spieler/659813"],
    ["ars413403","Ezri Konsa","DEF",15,50000000,"2026-10-07","/ezri-konsa/profil/spieler/413403"],
    ["ars646750","Cristhian Mosquera","DEF",3,40000000,"2026-06-03","/cristhian-mosquera/profil/spieler/646750"],
    ["ars502821","Riccardo Calafiori","DEF",33,65000000,null,"/riccardo-calafiori/profil/spieler/502821"],
    ["ars420243","Jurriën Timber","DEF",12,70000000,"2026-06-03","/jurrien-timber/profil/spieler/420243"],
    ["ars335721","Ben White","DEF",4,35000000,"2026-10-07","/ben-white/profil/spieler/335721"],
    ["ars423440","Martín Zubimendi","MID",36,65000000,null,"/martin-zubimendi/profil/spieler/423440"],
    ["ars890721","Myles Lewis-Skelly","DEF",49,65000000,"2026-10-07","/myles-lewis-skelly/profil/spieler/890721"],
    ["t12","Declan Rice","MID",41,120000000,"2026-06-03","/declan-rice/profil/spieler/357662"],
    ["ars520624","Bruno Guimarães","MID",39,75000000,"2026-10-07","/bruno-guimaraes/profil/spieler/520624"],
    ["ars338424","Mikel Merino","MID",23,25000000,"2026-06-03","/mikel-merino/profil/spieler/338424"],
    ["t13","Martin Ødegaard","MID",8,80000000,"2026-10-07","/martin-odegaard/profil/spieler/316264"],
    ["t27","Eberechi Eze","MID",10,60000000,"2026-10-07","/eberechi-eze/profil/spieler/479999"],
    ["ars451677","Christos Tzolis","FWD",17,40000000,"2026-06-04","/christos-tzolis/profil/spieler/451677"],
    ["t23","Bukayo Saka","FWD",7,110000000,"2026-06-03","/bukayo-saka/profil/spieler/433177"],
    ["ars1187629","Max Dowman","FWD",56,50000000,"2026-10-07","/max-dowman/profil/spieler/1187629"],
    ["ars503987","Noni Madueke","FWD",20,45000000,null,"/noni-madueke/profil/spieler/503987"],
    ["ars309400","Kai Havertz","FWD",29,60000000,"2026-10-07","/kai-havertz/profil/spieler/309400"],
    ["ars325443","Viktor Gyökeres","FWD",14,55000000,"2026-10-07","/viktor-gyokeres/profil/spieler/325443"]
  ].map(([id, name, pos, number, value, valueDate, profile]) => ({
    id, name, pos, number, value, valueDate, profile, status: "undecided"
  })),
  stadium: "Emirates Stadium · London",
  squadSource: "https://www.transfermarkt.com/fc-arsenal/kader/verein/11/saison_id/2026",
  checkedOn: "11 November 2026"
});

const featuredTargets = [
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
  id, name, pos, club: club.replace(/ FC$/, ""), value, valueDate, profile
}));

function rivalTransferTargets(activeClub) {
  const playerKey = player => player.profile.split("/").at(-1);
  const ownPlayers = new Set(clubData.get(activeClub.id).squad.map(playerKey));
  const targets = new Map();

  // Keep existing transfer IDs so signed players in saved games still resolve.
  for (const player of featuredTargets) {
    if (player.club !== activeClub.name && !ownPlayers.has(playerKey(player))) {
      targets.set(playerKey(player), player);
    }
  }

  for (const club of clubs) {
    if (club.id === activeClub.id) continue;
    for (const player of clubData.get(club.id)?.squad ?? []) {
      const key = playerKey(player);
      if (!player.value || ownPlayers.has(key) || targets.has(key)) continue;
      const { status, number, ...target } = player;
      targets.set(key, { ...target, club: club.name });
    }
  }
  return [...targets.values()];
}
