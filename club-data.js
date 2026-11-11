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

// Aston Villa's 26/27 squad. Incoming loans are retained for lineup selection.
clubData.set("aston-villa", {
  squad: [
    ["av432298","Zion Suzuki","GK",1,30000000,"2026-07-22","/zion-suzuki/profil/spieler/432298"],
    ["av124884","Marco Bizot","GK",40,1500000,null,"/marco-bizot/profil/spieler/124884"],
    ["av712181","James Wright","GK",42,200000,null,"/james-wright/profil/spieler/712181"],
    ["av503977","Taylor Harwood-Bellis","DEF",4,25000000,null,"/taylor-harwood-bellis/profil/spieler/503977"],
    ["av399776","Pau Torres","DEF",14,20000000,null,"/pau-torres/profil/spieler/399776"],
    ["av1282860","Modou Kéba Cissé","DEF",48,6000000,null,"/modou-keba-cisse/profil/spieler/1282860"],
    ["av184573","Victor Lindelöf","DEF",3,5000000,null,"/victor-lindelof/profil/spieler/184573"],
    ["av253677","Tyrone Mings","DEF",5,3000000,null,"/tyrone-mings/profil/spieler/253677"],
    ["av485585","Ian Maatsen","DEF",22,35000000,null,"/ian-maatsen/profil/spieler/485585"],
    ["av616631","Matteo Ruggeri","DEF",13,28000000,null,"/matteo-ruggeri/profil/spieler/616631"],
    ["av425334","Matty Cash","DEF",2,22000000,null,"/matty-cash/profil/spieler/425334"],
    ["av477758","Aaron Wan-Bissaka","DEF",29,15000000,null,"/aaron-wan-bissaka/profil/spieler/477758","West Ham United"],
    ["av394327","Boubacar Kamara","MID",8,50000000,null,"/boubacar-kamara/profil/spieler/394327"],
    ["av485706","Amadou Onana","MID",24,40000000,null,"/amadou-onana/profil/spieler/485706"],
    ["av645686","Lamare Bogarde","MID",26,18000000,null,"/lamare-bogarde/profil/spieler/645686"],
    ["av735570","João Gomes","MID",35,40000000,null,"/joao-gomes/profil/spieler/735570"],
    ["av153084","Leon Goretzka","MID",27,10000000,null,"/leon-goretzka/profil/spieler/153084"],
    ["av131978","Ross Barkley","MID",6,4000000,null,"/ross-barkley/profil/spieler/131978"],
    ["av193116","John McGinn","MID",7,13000000,null,"/john-mcginn/profil/spieler/193116"],
    ["av927353","Johan Manzambi","MID",44,65000000,null,"/johan-manzambi/profil/spieler/927353"],
    ["av321247","Emiliano Buendía","MID",10,16000000,null,"/emiliano-buendia/profil/spieler/321247"],
    ["av811779","Alejandro Garnacho","FWD",17,22000000,null,"/alejandro-garnacho/profil/spieler/811779","Chelsea"],
    ["av1023191","George Hemmings","MID",53,15000000,null,"/george-hemmings/profil/spieler/1023191"],
    ["av1185888","Ibrahim Mbaye","FWD",19,50000000,null,"/ibrahim-mbaye/profil/spieler/1185888"],
    ["av1005583","Alysson","FWD",47,15000000,null,"/alysson/profil/spieler/1005583"],
    ["av776890","Nicolas Jackson","FWD",11,45000000,null,"/nicolas-jackson/profil/spieler/776890"],
    ["av1226357","Brian Madjo","FWD",39,22000000,null,"/brian-madjo/profil/spieler/1226357"],
    ["av331726","Tammy Abraham","FWD",18,18000000,null,"/tammy-abraham/profil/spieler/331726"]
  ].map(([id, name, pos, number, value, valueDate, profile, loanFrom]) => ({
    id, name, pos, number, value, valueDate, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Villa Park · Birmingham",
  squadSource: "https://www.transfermarkt.com/aston-villa/kader/verein/405/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("bournemouth", {
  squad: [
    ["bou465555","Djordje Petrović","GK",1,28000000,"/djordje-petrovic/profil/spieler/465555"],
    ["bou301238","Michele Di Gregorio","GK",20,8000000,"/michele-di-gregorio/profil/spieler/301238","Juventus"],
    ["bou52570","Fraser Forster","GK",17,400000,"/fraser-forster/profil/spieler/52570"],
    ["bou611793","James Hill","DEF",5,30000000,"/james-hill/profil/spieler/611793"],
    ["bou650568","António Silva","DEF",14,30000000,"/antonio-silva/profil/spieler/650568"],
    ["bou463605","Bafodé Diakité","DEF",18,22000000,"/bafode-diakite/profil/spieler/463605"],
    ["bou989112","Veljko Milosavljević","DEF",44,20000000,"/veljko-milosavljevic/profil/spieler/989112"],
    ["bou654539","Adrien Truffert","DEF",3,35000000,"/adrien-truffert/profil/spieler/654539"],
    ["bou1009658","Julio Soler","DEF",6,6000000,"/julio-soler/profil/spieler/1009658"],
    ["bou676042","Juanlu Sánchez","DEF",24,10000000,"/juanlu-sanchez/profil/spieler/676042"],
    ["bou513970","Julián Araujo","DEF",2,6000000,"/julian-araujo/profil/spieler/513970"],
    ["bou471690","Max Aarons","DEF",28,2500000,"/max-aarons/profil/spieler/471690"],
    ["bou61841","Adam Smith","DEF",15,300000,"/adam-smith/profil/spieler/61841"],
    ["bou332705","Tyler Adams","MID",12,30000000,"/tyler-adams/profil/spieler/332705"],
    ["bou855256","Alex Scott","MID",8,70000000,"/alex-scott/profil/spieler/855256"],
    ["bou998101","Alex Tóth","MID",27,12000000,"/alex-toth/profil/spieler/998101"],
    ["bou249089","Lewis Cook","MID",4,11000000,"/lewis-cook/profil/spieler/249089"],
    ["bou188077","Ryan Christie","MID",10,8000000,"/ryan-christie/profil/spieler/188077"],
    ["bou399434","Marcus Tavernier","MID",16,30000000,"/marcus-tavernier/profil/spieler/399434"],
    ["bou330659","Justin Kluivert","MID",19,25000000,"/justin-kluivert/profil/spieler/330659"],
    ["bou532776","Amine Adli","FWD",21,20000000,"/amine-adli/profil/spieler/532776"],
    ["bou1012564","Rayan","FWD",37,60000000,"/rayan/profil/spieler/1012564"],
    ["bou719673","Ben Gannon-Doak","FWD",11,15000000,"/ben-gannon-doak/profil/spieler/719673"],
    ["bou277033","David Brooks","FWD",7,12000000,"/david-brooks/profil/spieler/277033"],
    ["bou955357","Junior Kroupi","FWD",22,70000000,"/junior-kroupi/profil/spieler/955357"],
    ["bou711337","Evanilson","FWD",9,35000000,"/evanilson/profil/spieler/711337"],
    ["bou948275","Álvaro Rodríguez","FWD",30,20000000,"/alvaro-rodriguez/profil/spieler/948275"],
    ["bou746740","Daniel Jebbison","FWD",29,8000000,"/daniel-jebbison/profil/spieler/746740"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Vitality Stadium · Bournemouth",
  squadSource: "https://www.transfermarkt.com/afc-bournemouth/kader/verein/989/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("brentford", {
  squad: [
    ["bre340918","Caoimhín Kelleher","GK",1,32000000,"/caoimhin-kelleher/profil/spieler/340918"],
    ["bre488935","Hákon Valdimarsson","GK",12,2500000,"/hakon-valdimarsson/profil/spieler/488935"],
    ["bre456292","Ellery Balcombe","GK",31,400000,"/ellery-balcombe/profil/spieler/456292"],
    ["bre541231","Sepp van den Berg","DEF",4,32000000,"/sepp-van-den-berg/profil/spieler/541231"],
    ["bre469050","Nathan Collins","DEF",22,30000000,"/nathan-collins/profil/spieler/469050"],
    ["bre328658","Kristoffer Ajer","DEF",20,25000000,"/kristoffer-ajer/profil/spieler/328658"],
    ["bre915418","Jannik Schuster","DEF",44,22000000,"/jannik-schuster/profil/spieler/915418"],
    ["bre709767","Ji-soo Kim","DEF",36,1800000,"/ji-soo-kim/profil/spieler/709767"],
    ["bre1071138","Benjamin Fredrick","DEF",48,600000,"/benjamin-fredrick/profil/spieler/1071138"],
    ["bre1111589","El Hadji Malick Diouf","DEF",25,35000000,"/el-hadji-malick-diouf/profil/spieler/1111589"],
    ["bre644401","Keane Lewis-Potter","DEF",23,30000000,"/keane-lewis-potter/profil/spieler/644401"],
    ["bre339556","Rico Henry","DEF",3,10000000,"/rico-henry/profil/spieler/339556"],
    ["bre823486","Michael Kayode","DEF",33,40000000,"/michael-kayode/profil/spieler/823486"],
    ["bre591949","Aaron Hickey","DEF",2,20000000,"/aaron-hickey/profil/spieler/591949"],
    ["bre270171","Vitaly Janelt","MID",27,20000000,"/vitaly-janelt/profil/spieler/270171"],
    ["bre808348","Mamadou Sangaré","MID",18,50000000,"/mamadou-sangare/profil/spieler/808348"],
    ["bre717411","Yehor Yarmoliuk","MID",6,32000000,"/yegor-yarmolyuk/profil/spieler/717411"],
    ["bre319859","Mathias Jensen","MID",8,8000000,"/mathias-jensen/profil/spieler/319859"],
    ["bre340321","Josh Dasilva","MID",10,1500000,"/josh-dasilva/profil/spieler/340321"],
    ["bre540941","Mikkel Damsgaard","MID",24,30000000,"/mikkel-damsgaard/profil/spieler/540941"],
    ["bre683620","Antoni Milambo","MID",17,15000000,"/antoni-milambo/profil/spieler/683620"],
    ["bre559263","Fábio Carvalho","MID",14,8000000,"/fabio-carvalho/profil/spieler/559263"],
    ["bre473050","Kevin Schade","FWD",7,50000000,"/kevin-schade/profil/spieler/473050"],
    ["bre684210","Jaidon Anthony","FWD",19,20000000,"/jaidon-anthony/profil/spieler/684210"],
    ["bre1086375","Gustavo Nunes","FWD",39,6000000,"/gustavo-nunes/profil/spieler/1086375"],
    ["bre823231","Dango Ouattara","FWD",11,35000000,"/dango-ouattara/profil/spieler/823231"],
    ["bre739443","Igor Thiago","FWD",9,65000000,"/igor-thiago/profil/spieler/739443"],
    ["bre1011936","Kaye Furo","FWD",47,8000000,"/kaye-furo/profil/spieler/1011936"],
    ["bre123682","Callum Wilson","FWD",13,4000000,"/callum-wilson/profil/spieler/123682"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "Gtech Community Stadium · London",
  squadSource: "https://www.transfermarkt.com/brentford-fc/kader/verein/1148/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("brighton", {
  squad: [
    ["bha565093","Bart Verbruggen","GK",1,40000000,"/bart-verbruggen/profil/spieler/565093"],
    ["bha73564","Jason Steele","GK",23,500000,"/jason-steele/profil/spieler/73564"],
    ["bha406556","Tom McGill","GK",38,500000,"/tom-mcgill/profil/spieler/406556"],
    ["bha892160","Luka Vušković","DEF",44,65000000,"/luka-vuskovic/profil/spieler/892160"],
    ["bha410708","Pascal Struijk","DEF",4,22000000,"/pascal-struijk/profil/spieler/410708"],
    ["bha318508","Olivier Boscagli","DEF",21,20000000,"/olivier-boscagli/profil/spieler/318508"],
    ["bha438961","Michael Svoboda","DEF",30,5000000,"/michael-svoboda/profil/spieler/438961"],
    ["bha148153","Lewis Dunk","DEF",5,3500000,"/lewis-dunk/profil/spieler/148153"],
    ["bha369316","Ferdi Kadıoğlu","DEF",24,40000000,"/ferdi-kadioglu/profil/spieler/369316"],
    ["bha429915","Maxim De Cuyper","DEF",29,30000000,"/maxim-de-cuyper/profil/spieler/429915"],
    ["bha750903","Jaouen Hadjam","DEF",3,10000000,"/jaouen-hadjam/profil/spieler/750903"],
    ["bha415381","Mats Wieffer","DEF",27,25000000,"/mats-wieffer/profil/spieler/415381"],
    ["bha539252","Costinha","DEF",20,10000000,"/costinha/profil/spieler/539252"],
    ["bha867688","Jack Hinshelwood","MID",8,35000000,"/jack-hinshelwood/profil/spieler/867688"],
    ["bha948279","Chema Andrés","MID",14,24000000,"/chema-andres/profil/spieler/948279"],
    ["bha667287","Yasin Ayari","MID",26,45000000,"/yasin-ayari/profil/spieler/667287"],
    ["bha996897","Diego Gómez","MID",25,30000000,"/diego-gomez/profil/spieler/996897"],
    ["bha1178758","Malick Yalcouyé","MID",35,22000000,"/malick-yalcouye/profil/spieler/1178758"],
    ["bha406634","Matt O'Riley","MID",33,18000000,"/matt-oriley/profil/spieler/406634"],
    ["bha82873","Pascal Groß","MID",13,2500000,"/pascal-gross/profil/spieler/82873"],
    ["bha504849","Kaoru Mitoma","FWD",7,22000000,"/kaoru-mitoma/profil/spieler/504849"],
    ["bha1110406","Ibrahim Osman","FWD",15,12000000,"/ibrahim-osman/profil/spieler/1110406"],
    ["bha1012534","Yankuba Minteh","FWD",11,55000000,"/yankuba-minteh/profil/spieler/1012534"],
    ["bha1421433","Zadok Yohanna","FWD",36,25000000,"/zadok-yohanna/profil/spieler/1421433"],
    ["bha703408","Femi Azeez","FWD",39,15000000,"/femi-azeez/profil/spieler/703408"],
    ["bha1060087","Charalampos Kostoulas","FWD",19,40000000,"/charalampos-kostoulas/profil/spieler/1060087"],
    ["bha538977","Georginio Rutter","FWD",10,30000000,"/georginio-rutter/profil/spieler/538977"],
    ["bha888785","Promise David","FWD",12,20000000,"/promise-david/profil/spieler/888785","Union Saint-Gilloise"],
    ["bha950091","Stefanos Tzimas","FWD",9,18000000,"/stefanos-tzimas/profil/spieler/950091"],
    ["bha648046","Evan Ferguson","FWD",28,15000000,"/evan-ferguson/profil/spieler/648046"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "American Express Stadium · Brighton",
  squadSource: "https://www.transfermarkt.com/brighton-amp-hove-albion/kader/verein/1237/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("chelsea", {
  squad: [
    ["che834397","Mike Penders","GK",39,25000000,"/mike-penders/profil/spieler/834397"],
    ["che111873","Emiliano Martínez","GK",1,10000000,"/emiliano-martinez/profil/spieler/111873"],
    ["che656316","Gabriel Slonina","GK",44,3000000,"/gabriel-slonina/profil/spieler/656316"],
    ["che731466","Teddy Sharman-Lowe","GK",28,500000,"/teddy-sharman-lowe/profil/spieler/731466"],
    ["che434224","Maxence Lacroix","DEF",5,60000000,"/maxence-lacroix/profil/spieler/434224"],
    ["che614258","Levi Colwill","DEF",6,50000000,"/levi-colwill/profil/spieler/614258"],
    ["che475411","Wesley Fofana","DEF",3,32000000,"/wesley-fofana/profil/spieler/475411"],
    ["che1004708","Josh Acheampong","DEF",34,30000000,"/josh-acheampong/profil/spieler/1004708"],
    ["che1145504","Aarón Anselmino","DEF",30,10000000,"/aaron-anselmino/profil/spieler/1145504"],
    ["che904802","Jorrel Hato","DEF",21,45000000,"/jorrel-hato/profil/spieler/904802"],
    ["che596122","Pep Chavarría","DEF",29,18000000,"/pep-chavarria/profil/spieler/596122"],
    ["che472423","Reece James","DEF",24,60000000,"/reece-james/profil/spieler/472423"],
    ["che895937","Marco Palestra","DEF",2,45000000,"/marco-palestra/profil/spieler/895937"],
    ["che620322","Malo Gusto","DEF",27,35000000,"/malo-gusto/profil/spieler/620322"],
    ["che687626","Moisés Caicedo","MID",25,100000000,"/moises-caicedo/profil/spieler/687626"],
    ["che628451","Roméo Lavia","MID",45,25000000,"/romeo-lavia/profil/spieler/628451"],
    ["che849410","Valentín Barco","MID",4,40000000,"/valentin-barco/profil/spieler/849410"],
    ["che1353008","Mahdi Nicoll-Jazuli","MID",32,2000000,"/mahdi-nicoll-jazuli/profil/spieler/1353008"],
    ["che61651","Jordan Henderson","MID",14,1200000,"/jordan-henderson/profil/spieler/61651"],
    ["che568177","Cole Palmer","MID",10,110000000,"/cole-palmer/profil/spieler/568177"],
    ["che503743","Morgan Rogers","FWD",17,120000000,"/morgan-rogers/profil/spieler/503743"],
    ["che670882","Jamie Gittens","FWD",11,25000000,"/jamie-gittens/profil/spieler/670882"],
    ["che1056993","Estêvão","FWD",41,80000000,"/estevao/profil/spieler/1056993"],
    ["che487465","Pedro Neto","FWD",7,60000000,"/pedro-neto/profil/spieler/487465"],
    ["che1138758","Geovany Quenda","FWD",23,42000000,"/geovany-quenda/profil/spieler/1138758"],
    ["che626724","João Pedro","FWD",9,100000000,"/joao-pedro/profil/spieler/626724"],
    ["che559328","Emmanuel Emegha","FWD",22,20000000,"/emmanuel-emegha/profil/spieler/559328"],
    ["che67063","Danny Welbeck","FWD",18,3000000,"/danny-welbeck/profil/spieler/67063"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "Stamford Bridge · London",
  squadSource: "https://www.transfermarkt.com/chelsea-fc/kader/verein/631/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("coventry-city", {
  squad: [
    ["cov646353","Carl Rushworth","GK",19,22000000,"/carl-rushworth/profil/spieler/646353"],
    ["cov136401","Dan Bentley","GK",25,800000,"/dan-bentley/profil/spieler/136401"],
    ["cov121352","Ben Wilson","GK",13,300000,"/ben-wilson/profil/spieler/121352"],
    ["cov788283","Bobby Thomas","DEF",4,20000000,"/bobby-thomas/profil/spieler/788283"],
    ["cov635645","Aurèle Amenda","DEF",24,15000000,"/aurele-amenda/profil/spieler/635645"],
    ["cov442248","Ethan Pinnock","DEF",2,3000000,"/ethan-pinnock/profil/spieler/442248"],
    ["cov1049020","Stephen Mfuni","DEF",12,3000000,"/stephen-mfuni/profil/spieler/1049020","Manchester City U21"],
    ["cov412823","Joel Latibeaudiere","DEF",22,3000000,"/joel-latibeaudiere/profil/spieler/412823"],
    ["cov527425","Luke Woolfenden","DEF",26,1500000,"/luke-woolfenden/profil/spieler/527425"],
    ["cov258915","Jay Dasilva","DEF",3,12000000,"/jay-dasilva/profil/spieler/258915"],
    ["cov121250","Jake Bidwell","DEF",21,600000,"/jake-bidwell/profil/spieler/121250"],
    ["cov587335","Milan van Ewijk","DEF",27,22000000,"/milan-van-ewijk/profil/spieler/587335"],
    ["cov626888","Kaine Kesler-Hayden","DEF",20,3000000,"/kaine-kesler-hayden/profil/spieler/626888"],
    ["cov265471","Matt Grimes","MID",6,5000000,"/matt-grimes/profil/spieler/265471"],
    ["cov1240763","Caleb Yirenkyi","MID",8,22000000,"/caleb-yirenkyi/profil/spieler/1240763"],
    ["cov403692","Victor Torp","MID",29,14000000,"/victor-torp/profil/spieler/403692"],
    ["cov322985","Gustavo Hamer","MID",38,11000000,"/gustavo-hamer/profil/spieler/322985"],
    ["cov618903","Josh Eccles","MID",28,9000000,"/josh-eccles/profil/spieler/618903"],
    ["cov421637","Frank Onyeka","MID",16,8000000,"/frank-onyeka/profil/spieler/421637"],
    ["cov662476","Jack Rudoni","MID",5,20000000,"/jack-rudoni/profil/spieler/662476"],
    ["cov466637","Ephron Mason-Clark","FWD",10,16000000,"/ephron-mason-clark/profil/spieler/466637"],
    ["cov463613","Yann Gboho","FWD",34,15000000,"/yann-gboho/profil/spieler/463613"],
    ["cov607226","Loum Tchaouna","FWD",17,18000000,"/loum-tchaouna/profil/spieler/607226"],
    ["cov617408","Tatsuhiro Sakamoto","FWD",7,4500000,"/tatsuhiro-sakamoto/profil/spieler/617408"],
    ["cov986288","Sidiki Chérif","FWD",49,22000000,"/sidiki-cherif/profil/spieler/986288"],
    ["cov315291","Haji Wright","FWD",11,16000000,"/haji-wright/profil/spieler/315291"],
    ["cov451747","Brandon Thomas-Asante","FWD",23,16000000,"/brandon-thomas-asante/profil/spieler/451747"],
    ["cov511550","Ellis Simms","FWD",9,12000000,"/ellis-simms/profil/spieler/511550"],
    ["cov295313","Taiwo Awoniyi","FWD",14,8000000,"/taiwo-awoniyi/profil/spieler/295313"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Coventry Building Society Arena · Coventry",
  squadSource: "https://www.transfermarkt.com/coventry-city/kader/verein/990/saison_id/2026",
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
      if (!player.value || player.loanFrom || ownPlayers.has(key) || targets.has(key)) continue;
      const { status, number, ...target } = player;
      targets.set(key, { ...target, club: club.name });
    }
  }
  return [...targets.values()];
}

for (const club of clubs) {
  const data = clubData.get(club.id);
  if (data) data.market = rivalTransferTargets(club);
}
