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

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("crystal-palace", {
  squad: [
    ["cry258919","Dean Henderson","GK",1,28000000,"/dean-henderson/profil/spieler/258919"],
    ["cry296802","Walter Benítez","GK",44,4000000,"/walter-benitez/profil/spieler/296802"],
    ["cry196722","Remi Matthews","GK",31,200000,"/remi-matthews/profil/spieler/196722"],
    ["cry1077175","Honest Ahanor","DEF",21,40000000,"/honest-ahanor/profil/spieler/1077175","Atalanta BC"],
    ["cry1006411","Jaydee Canvot","DEF",6,35000000,"/jaydee-canvot/profil/spieler/1006411"],
    ["cry578539","Chris Richards","DEF",26,28000000,"/chris-richards/profil/spieler/578539"],
    ["cry689637","Chadi Riad","DEF",4,15000000,"/chadi-riad/profil/spieler/689637"],
    ["cry386047","Axel Disasi","DEF",5,15000000,"/axel-disasi/profil/spieler/386047","Chelsea"],
    ["cry331560","Takehiro Tomiyasu","DEF",17,5000000,"/takehiro-tomiyasu/profil/spieler/331560"],
    ["cry730893","Tyrick Mitchell","DEF",3,25000000,"/tyrick-mitchell/profil/spieler/730893"],
    ["cry316125","Ben Chilwell","DEF",33,10000000,"/ben-chilwell/profil/spieler/316125"],
    ["cry945021","Anan Khalaili","DEF",25,23000000,"/anan-khalaili/profil/spieler/945021"],
    ["cry331505","Óscar Mingueza","DEF",30,15000000,"/oscar-mingueza/profil/spieler/331505"],
    ["cry744149","Adam Wharton","MID",20,75000000,"/adam-wharton/profil/spieler/744149"],
    ["cry543387","Cheick Doucouré","MID",28,7000000,"/cheick-doucoure/profil/spieler/543387"],
    ["cry262980","Jefferson Lerma","MID",8,6000000,"/jefferson-lerma/profil/spieler/262980"],
    ["cry420213","Quinten Timber","MID",23,25000000,"/quinten-timber/profil/spieler/420213"],
    ["cry356141","Daichi Kamada","MID",18,10000000,"/daichi-kamada/profil/spieler/356141"],
    ["cry207014","Will Hughes","MID",19,5000000,"/will-hughes/profil/spieler/207014"],
    ["cry568157","Yéremy Pino","FWD",10,30000000,"/yeremy-pino/profil/spieler/568157"],
    ["cry584769","Dwight McNeil","FWD",11,22000000,"/dwight-mcneil/profil/spieler/584769"],
    ["cry410225","Ismaïla Sarr","FWD",7,45000000,"/ismaila-sarr/profil/spieler/410225"],
    ["cry881116","Darío Osorio","FWD",24,20000000,"/dario-osorio/profil/spieler/881116","FC Midtjylland"],
    ["cry500689","Evann Guessand","FWD",29,20000000,"/evann-guessand/profil/spieler/500689","Aston Villa"],
    ["cry1007383","Zavier Gozo","FWD",12,12000000,"/zavier-gozo/profil/spieler/1007383"],
    ["cry429983","Jørgen Strand Larsen","FWD",22,40000000,"/jorgen-strand-larsen/profil/spieler/429983"],
    ["cry420002","Jean-Philippe Mateta","FWD",14,30000000,"/jean-philippe-mateta/profil/spieler/420002"],
    ["cry340324","Eddie Nketiah","FWD",9,13000000,"/eddie-nketiah/profil/spieler/340324"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Selhurst Park · London",
  squadSource: "https://www.transfermarkt.com/crystal-palace/kader/verein/873/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("everton", {
  squad: [
    ["eve130164","Jordan Pickford","GK",1,13000000,"/jordan-pickford/profil/spieler/130164"],
    ["eve357658","Mark Travers","GK",12,3000000,"/mark-travers/profil/spieler/357658"],
    ["eve215810","Tom King","GK",31,100000,"/tom-king/profil/spieler/215810"],
    ["eve661053","Jarrad Branthwaite","DEF",4,45000000,"/jarrad-branthwaite/profil/spieler/661053"],
    ["eve173504","James Tarkowski","DEF",6,5000000,"/james-tarkowski/profil/spieler/173504"],
    ["eve118534","Michael Keane","DEF",5,3000000,"/michael-keane/profil/spieler/118534"],
    ["eve404842","Vitaliy Mykolenko","DEF",16,25000000,"/vitaliy-mykolenko/profil/spieler/404842"],
    ["eve711544","Jake O'Brien","DEF",15,18000000,"/jake-obrien/profil/spieler/711544"],
    ["eve285845","Ainsley Maitland-Niles","DEF",2,10000000,"/ainsley-maitland-niles/profil/spieler/285845"],
    ["eve505219","James Garner","MID",37,50000000,"/james-garner/profil/spieler/505219"],
    ["eve538216","Hayden Hackney","MID",30,32000000,"/hayden-hackney/profil/spieler/538216"],
    ["eve148367","Christian Nørgaard","MID",23,5000000,"/christian-norgaard/profil/spieler/148367"],
    ["eve1107733","Harrison Armstrong","MID",45,30000000,"/harrison-armstrong/profil/spieler/1107733"],
    ["eve608832","Merlin Röhl","MID",34,20000000,"/merlin-rohl/profil/spieler/608832"],
    ["eve748319","Charly Alcaraz","MID",24,15000000,"/charly-alcaraz/profil/spieler/748319"],
    ["eve475188","Kiernan Dewsbury-Hall","MID",8,40000000,"/kiernan-dewsbury-hall/profil/spieler/475188"],
    ["eve936874","Tyrique George","FWD",19,25000000,"/tyrique-george/profil/spieler/936874"],
    ["eve203460","Jack Grealish","FWD",10,20000000,"/jack-grealish/profil/spieler/203460","Manchester City"],
    ["eve470607","Brennan Johnson","FWD",22,25000000,"/brennan-johnson/profil/spieler/470607"],
    ["eve866655","Tyler Dibling","FWD",20,17000000,"/tyler-dibling/profil/spieler/866655"],
    ["eve937941","Thierno Barry","FWD",11,35000000,"/thierno-barry/profil/spieler/937941"],
    ["eve1122712","Braiden Graham","FWD",58,700000,"/braiden-graham/profil/spieler/1122712"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Hill Dickinson Stadium · Liverpool",
  squadSource: "https://www.transfermarkt.com/everton-fc/kader/verein/29/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("fulham", {
  squad: [
    ["ful72476","Bernd Leno","GK",1,6000000,"/bernd-leno/profil/spieler/72476"],
    ["ful127181","Benjamin Lecomte","GK",23,800000,"/benjamin-lecomte/profil/spieler/127181"],
    ["ful817613","Alex Borto","GK",36,null,"/alex-borto/profil/spieler/817613"],
    ["ful461883","Calvin Bassey","DEF",3,28000000,"/calvin-bassey/profil/spieler/461883"],
    ["ful452483","David Affengruber","DEF",22,20000000,"/david-affengruber/profil/spieler/452483"],
    ["ful260827","Joachim Andersen","DEF",5,16000000,"/joachim-andersen/profil/spieler/260827"],
    ["ful494880","Jorge Cuenca","DEF",4,8000000,"/jorge-cuenca/profil/spieler/494880"],
    ["ful392775","Ryan Sessegnon","DEF",30,22000000,"/ryan-sessegnon/profil/spieler/392775"],
    ["ful349701","Antonee Robinson","DEF",33,22000000,"/antonee-robinson/profil/spieler/349701"],
    ["ful262226","Timothy Castagne","DEF",21,8000000,"/timothy-castagne/profil/spieler/262226"],
    ["ful206746","Kenny Tete","DEF",2,6000000,"/kenny-tete/profil/spieler/206746"],
    ["ful333014","Sander Berge","MID",16,25000000,"/sander-berge/profil/spieler/333014"],
    ["ful747951","Shea Charles","MID",19,25000000,"/shea-charles/profil/spieler/747951"],
    ["ful242631","Alex Iwobi","MID",17,20000000,"/alex-iwobi/profil/spieler/242631"],
    ["ful931838","Hugo Larsson","MID",15,23000000,"/hugo-larsson/profil/spieler/931838","Eintracht Frankfurt"],
    ["ful646824","Manuel Ángel","MID",20,5000000,"/manuel-angel/profil/spieler/646824"],
    ["ful226973","Harrison Reed","MID",6,1300000,"/harrison-reed/profil/spieler/226973"],
    ["ful123275","Tom Cairney","MID",10,500000,"/tom-cairney/profil/spieler/123275"],
    ["ful1011131","Josh King","MID",24,40000000,"/josh-king/profil/spieler/1011131"],
    ["ful392765","Emile Smith Rowe","MID",32,17000000,"/emile-smith-rowe/profil/spieler/392765"],
    ["ful948272","César Palacios","MID",8,12000000,"/cesar-palacios/profil/spieler/948272"],
    ["ful900195","Kevin","FWD",11,25000000,"/kevin/profil/spieler/900195"],
    ["ful661207","Oscar Bobb","FWD",14,28000000,"/oscar-bobb/profil/spieler/661207"],
    ["ful935230","Gonzalo García","FWD",7,35000000,"/gonzalo-garcia/profil/spieler/935230"],
    ["ful735571","Rodrigo Muniz","FWD",9,20000000,"/rodrigo-muniz/profil/spieler/735571"],
    ["ful1069512","Jonah Kusi-Asare","FWD",18,5000000,"/jonah-kusi-asare/profil/spieler/1069512"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Craven Cottage · London",
  squadSource: "https://www.transfermarkt.com/fc-fulham/kader/verein/931/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("hull-city", {
  squad: [
    ["hul554389","Konstantinos Tzolakis","GK",19,22000000,"/konstantinos-tzolakis/profil/spieler/554389"],
    ["hul128899","Jack Butland","GK",1,1500000,"/jack-butland/profil/spieler/128899"],
    ["hul308431","Dillon Phillips","GK",12,200000,"/dillon-phillips/profil/spieler/308431"],
    ["hul1034853","Nobel Mendy","DEF",32,20000000,"/nobel-mendy/profil/spieler/1034853"],
    ["hul1279984","Lucas Herrington","DEF",22,15000000,"/lucas-herrington/profil/spieler/1279984"],
    ["hul746357","Charlie Hughes","DEF",4,10000000,"/charlie-hughes/profil/spieler/746357"],
    ["hul121324","John Egan","DEF",15,1500000,"/john-egan/profil/spieler/121324"],
    ["hul167268","Paddy McNair","DEF",17,1500000,"/paddy-mcnair/profil/spieler/167268"],
    ["hul251912","Semi Ajayi","DEF",6,1000000,"/semi-ajayi/profil/spieler/251912"],
    ["hul504581","Ryan Giles","DEF",3,16000000,"/ryan-giles/profil/spieler/504581"],
    ["hul250478","Matt Targett","DEF",23,3000000,"/matt-targett/profil/spieler/250478"],
    ["hul728733","Brooke Norton-Cuffy","DEF",18,15000000,"/brooke-norton-cuffy/profil/spieler/728733"],
    ["hul413402","Lewie Coyle","DEF",2,2500000,"/lewie-coyle/profil/spieler/413402"],
    ["hul473080","Regan Slater","MID",27,10000000,"/regan-slater/profil/spieler/473080"],
    ["hul620313","Lucas Gourna-Douath","MID",29,8000000,"/lucas-gourna-douath/profil/spieler/620313"],
    ["hul893658","Óscar Zambrano","MID",20,1500000,"/oscar-zambrano/profil/spieler/893658"],
    ["hul964426","Christos Mouzakitis","MID",36,20000000,"/christos-mouzakitis/profil/spieler/964426"],
    ["hul696589","Tim Iroegbunam","MID",42,15000000,"/tim-iroegbunam/profil/spieler/696589"],
    ["hul923535","Jens Hjertø-Dahl","MID",14,10000000,"/jens-hjerto-dahl/profil/spieler/923535"],
    ["hul524315","Hidemasa Morita","MID",5,6000000,"/hidemasa-morita/profil/spieler/524315"],
    ["hul663264","Darko Gyabi","MID",24,2000000,"/darko-gyabi/profil/spieler/663264"],
    ["hul535834","Eliot Matazo","MID",8,1500000,"/eliot-matazo/profil/spieler/535834"],
    ["hul169416","Matt Crooks","MID",25,1000000,"/matt-crooks/profil/spieler/169416"],
    ["hul258916","Kieran Dowell","MID",26,600000,"/kieran-dowell/profil/spieler/258916"],
    ["hul475416","Sorba Thomas","FWD",7,14000000,"/sorba-thomas/profil/spieler/475416"],
    ["hul687622","Elliot Stroud","FWD",21,8000000,"/elliot-stroud/profil/spieler/687622"],
    ["hul857079","Mohamed Belloumi","FWD",10,18000000,"/mohamed-belloumi/profil/spieler/857079"],
    ["hul670847","Mohamed-Ali Cho","FWD",50,15000000,"/mohamed-ali-cho/profil/spieler/670847"],
    ["hul271495","Abdülkadir Ömür","FWD",33,1500000,"/abdulkadir-omur/profil/spieler/271495"],
    ["hul1131161","Robinio Vaz","FWD",47,18000000,"/robinio-vaz/profil/spieler/1131161","AS Roma"],
    ["hul1035765","Ilyas Ansah","FWD",28,15000000,"/ilyas-ansah/profil/spieler/1035765"],
    ["hul503980","Joe Gelhardt","FWD",11,14000000,"/joe-gelhardt/profil/spieler/503980"],
    ["hul298477","Oli McBurnie","FWD",9,7000000,"/oli-mcburnie/profil/spieler/298477"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "MKM Stadium · Hull",
  squadSource: "https://www.transfermarkt.com/hull-city/kader/verein/3008/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("ipswich-town", {
  squad: [
    ["ips463527","Kjell Scherpen","GK",37,12000000,"/kjell-scherpen/profil/spieler/463527"],
    ["ips208379","Christian Walton","GK",28,2500000,"/christian-walton/profil/spieler/208379"],
    ["ips245625","Alex Palmer","GK",1,1000000,"/alex-palmer/profil/spieler/245625"],
    ["ips61814","David Button","GK",27,50000,"/david-button/profil/spieler/61814"],
    ["ips401320","Dara O'Shea","DEF",26,20000000,"/dara-oshea/profil/spieler/401320"],
    ["ips693095","Jacob Greaves","DEF",24,17000000,"/jacob-greaves/profil/spieler/693095"],
    ["ips272622","Issa Diop","DEF",6,10000000,"/issa-diop/profil/spieler/272622"],
    ["ips364827","Cédric Kipré","DEF",4,3000000,"/cedric-kipre/profil/spieler/364827"],
    ["ips596446","Leif Davis","DEF",3,25000000,"/leif-davis/profil/spieler/596446"],
    ["ips991487","Abdoul Ouattara","DEF",42,18000000,"/abdoul-ouattara/profil/spieler/991487"],
    ["ips351755","Darnell Furlong","DEF",2,2500000,"/darnell-furlong/profil/spieler/351755"],
    ["ips357162","Florentino","MID",12,16000000,"/florentino/profil/spieler/357162"],
    ["ips315145","Azor Matusiwa","MID",5,12000000,"/azor-matusiwa/profil/spieler/315145"],
    ["ips401578","Exequiel Palacios","MID",25,25000000,"/exequiel-palacios/profil/spieler/401578"],
    ["ips715558","Marcelino Núñez","MID",32,14000000,"/marcelino-nunez/profil/spieler/715558"],
    ["ips245056","Saša Lukić","MID",23,10000000,"/sasa-lukic/profil/spieler/245056"],
    ["ips458178","Jack Taylor","MID",14,2200000,"/jack-taylor/profil/spieler/458178"],
    ["ips660867","Julio Enciso","MID",10,30000000,"/julio-enciso/profil/spieler/660867"],
    ["ips530813","Anis Mehmeti","MID",33,13000000,"/anis-mehmeti/profil/spieler/530813"],
    ["ips665390","Jaden Philogene","FWD",11,20000000,"/jaden-philogene/profil/spieler/665390"],
    ["ips559794","Jack Clarke","FWD",47,20000000,"/jack-clarke/profil/spieler/559794"],
    ["ips420931","Daizen Maeda","FWD",38,13000000,"/daizen-maeda/profil/spieler/420931"],
    ["ips864121","Abdul Fatawu","FWD",7,23000000,"/abdul-fatawu/profil/spieler/864121"],
    ["ips923504","Sindre Walle Egeli","FWD",8,15000000,"/sindre-walle-egeli/profil/spieler/923504"],
    ["ips621193","Kasey McAteer","FWD",20,10000000,"/kasey-mcateer/profil/spieler/621193"],
    ["ips743599","Emersonn","FWD",19,25000000,"/emersonn/profil/spieler/743599"],
    ["ips411537","Zian Flemming","FWD",9,18000000,"/zian-flemming/profil/spieler/411537"],
    ["ips197642","Chuba Akpom","FWD",29,3500000,"/chuba-akpom/profil/spieler/197642"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "Portman Road · Ipswich",
  squadSource: "https://www.transfermarkt.com/ipswich-town/kader/verein/677/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("leeds-united", {
  squad: [
    ["lee566799","James Trafford","GK",1,35000000,"/james-trafford/profil/spieler/566799"],
    ["lee196813","Michael Zetterer","GK",16,4000000,"/michael-zetterer/profil/spieler/196813"],
    ["lee194386","Alex Cairns","GK",21,50000,"/alex-cairns/profil/spieler/194386"],
    ["lee679423","Tarik Muharemović","DEF",5,40000000,"/tarik-muharemovic/profil/spieler/679423"],
    ["lee371851","Jaka Bijol","DEF",15,20000000,"/jaka-bijol/profil/spieler/371851"],
    ["lee297212","Joe Rodon","DEF",6,18000000,"/joe-rodon/profil/spieler/297212"],
    ["lee192635","Nico Elvedi","DEF",30,12000000,"/nico-elvedi/profil/spieler/192635"],
    ["lee362108","Gabriel Gudmundsson","DEF",3,25000000,"/gabriel-gudmundsson/profil/spieler/362108"],
    ["lee532775","Melvin Bard","DEF",26,10000000,"/melvin-bard/profil/spieler/532775","OGC Nice"],
    ["lee465717","Jayden Bogle","DEF",2,18000000,"/jayden-bogle/profil/spieler/465717"],
    ["lee413220","James Justin","DEF",24,16000000,"/james-justin/profil/spieler/413220"],
    ["lee392771","Ethan Ampadu","MID",4,35000000,"/ethan-ampadu/profil/spieler/392771"],
    ["lee344069","Anton Stach","MID",18,32000000,"/anton-stach/profil/spieler/344069"],
    ["lee381753","Ilia Gruev","MID",44,12000000,"/ilia-gruev/profil/spieler/381753"],
    ["lee489359","Ao Tanaka","MID",22,15000000,"/ao-tanaka/profil/spieler/489359"],
    ["lee346707","Sean Longstaff","MID",8,12000000,"/sean-longstaff/profil/spieler/346707"],
    ["lee393323","Brenden Aaronson","MID",11,22000000,"/brenden-aaronson/profil/spieler/393323"],
    ["lee346890","Noah Okafor","FWD",19,32000000,"/noah-okafor/profil/spieler/346890"],
    ["lee939964","Jean-Mattéo Bahoya","FWD",23,25000000,"/jean-matteo-bahoya/profil/spieler/939964","Eintracht Frankfurt"],
    ["lee279455","Harry Wilson","FWD",10,22000000,"/harry-wilson/profil/spieler/279455"],
    ["lee319301","Daniel James","FWD",7,10000000,"/daniel-james/profil/spieler/319301"],
    ["lee306024","Dominic Calvert-Lewin","FWD",9,25000000,"/dominic-calvert-lewin/profil/spieler/306024"],
    ["lee314288","Lukas Nmecha","FWD",14,10000000,"/lukas-nmecha/profil/spieler/314288"],
    ["lee834742","Mateo Joseph","FWD",null,3500000,"/mateo-joseph/profil/spieler/834742"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Elland Road · Leeds",
  squadSource: "https://www.transfermarkt.com/leeds-united/kader/verein/399/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("liverpool", {
  squad: [
    ["liv502676","Giorgi Mamardashvili","GK",25,28000000,"/giorgi-mamardashvili/profil/spieler/502676"],
    ["liv105470","Alisson","GK",1,15000000,"/alisson/profil/spieler/105470"],
    ["liv486604","Vítězslav Jaroš","GK",56,5000000,"/vitezslav-jaros/profil/spieler/486604"],
    ["liv226049","Freddie Woodman","GK",28,3000000,"/freddie-woodman/profil/spieler/226049"],
    ["liv706815","Harvey Davies","GK",95,500000,"/harvey-davies/profil/spieler/706815"],
    ["liv1004301","Jérémy Jacquet","DEF",5,65000000,"/jeremy-jacquet/profil/spieler/1004301"],
    ["liv1086619","Giovanni Leoni","DEF",15,25000000,"/giovanni-leoni/profil/spieler/1086619"],
    ["liv480267","Ronald Araújo","DEF",33,25000000,"/ronald-araujo/profil/spieler/480267","FC Barcelona"],
    ["liv139208","Virgil van Dijk","DEF",4,15000000,"/virgil-van-dijk/profil/spieler/139208"],
    ["liv256178","Joe Gomez","DEF",2,11000000,"/joe-gomez/profil/spieler/256178"],
    ["liv730861","Milos Kerkez","DEF",6,35000000,"/milos-kerkez/profil/spieler/730861"],
    ["liv338070","Konstantinos Tsimikas","DEF",21,4500000,"/konstantinos-tsimikas/profil/spieler/338070"],
    ["liv670861","Luke Chambers","DEF",44,1000000,"/luke-chambers/profil/spieler/670861"],
    ["liv484547","Jeremie Frimpong","DEF",30,30000000,"/jeremie-frimpong/profil/spieler/484547"],
    ["liv624258","Conor Bradley","DEF",12,20000000,"/conor-bradley/profil/spieler/624258"],
    ["liv478573","Ryan Gravenberch","MID",38,75000000,"/ryan-gravenberch/profil/spieler/478573"],
    ["liv146310","Wataru Endo","MID",3,3000000,"/wataru-endo/profil/spieler/146310"],
    ["liv534033","Alexis Mac Allister","MID",10,70000000,"/alexis-mac-allister/profil/spieler/534033"],
    ["liv1045123","Trey Nyoni","MID",42,18000000,"/trey-nyoni/profil/spieler/1045123"],
    ["liv845289","James McConnell","MID",53,1500000,"/james-mcconnell/profil/spieler/845289"],
    ["liv451276","Dominik Szoboszlai","MID",8,100000000,"/dominik-szoboszlai/profil/spieler/451276"],
    ["liv598577","Florian Wirtz","MID",7,85000000,"/florian-wirtz/profil/spieler/598577"],
    ["liv708265","Bradley Barcola","FWD",29,100000000,"/bradley-barcola/profil/spieler/708265"],
    ["liv434675","Cody Gakpo","FWD",18,75000000,"/cody-gakpo/profil/spieler/434675"],
    ["liv1108466","Rio Ngumoha","FWD",73,50000000,"/rio-ngumoha/profil/spieler/1108466"],
    ["liv935231","Víctor Muñoz","FWD",23,40000000,"/victor-munoz/profil/spieler/935231"],
    ["liv341092","Federico Chiesa","FWD",14,10000000,"/federico-chiesa/profil/spieler/341092"],
    ["liv349066","Alexander Isak","FWD",9,90000000,"/alexander-isak/profil/spieler/349066"],
    ["liv709726","Hugo Ekitiké","FWD",22,80000000,"/hugo-ekitike/profil/spieler/709726"],
    ["liv922462","Lewis Koumas","FWD",67,8000000,"/lewis-koumas/profil/spieler/922462"],
    ["liv939290","Jayden Danns","FWD",76,800000,"/jayden-danns/profil/spieler/939290"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Anfield · Liverpool",
  squadSource: "https://www.transfermarkt.com/fc-liverpool/kader/verein/31/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("manchester-city", {
  squad: [
    ["mci315858","Gianluigi Donnarumma","GK",1,45000000,"/gianluigi-donnarumma/profil/spieler/315858"],
    ["mci229604","Gerónimo Rulli","GK",28,5000000,"/geronimo-rulli/profil/spieler/229604"],
    ["mci116648","Marcus Bettinelli","GK",13,300000,"/marcus-bettinelli/profil/spieler/116648"],
    ["mci392757","Marc Guéhi","DEF",6,75000000,"/marc-guehi/profil/spieler/392757"],
    ["mci258004","Rúben Dias","DEF",3,50000000,"/ruben-dias/profil/spieler/258004"],
    ["mci763079","Abdukodir Khusanov","DEF",45,50000000,"/abdukodir-khusanov/profil/spieler/763079"],
    ["mci1005575","Vitor Reis","DEF",22,30000000,"/vitor-reis/profil/spieler/1005575"],
    ["mci475959","Joško Gvardiol","DEF",24,75000000,"/josko-gvardiol/profil/spieler/475959"],
    ["mci743413","Nico O'Reilly","DEF",33,70000000,"/nico-oreilly/profil/spieler/743413"],
    ["mci578391","Rayan Aït-Nouri","DEF",21,35000000,"/rayan-ait-nouri/profil/spieler/578391"],
    ["mci601883","Matheus Nunes","DEF",27,45000000,"/matheus-nunes/profil/spieler/601883"],
    ["mci701057","Rico Lewis","DEF",82,25000000,"/rico-lewis/profil/spieler/701057"],
    ["mci567576","Elliot Anderson","MID",5,120000000,"/elliot-anderson/profil/spieler/567576"],
    ["mci1097139","Ayyoub Bouaddi","MID",32,90000000,"/ayyoub-bouaddi/profil/spieler/1097139"],
    ["mci648195","Enzo Fernández","MID",17,120000000,"/enzo-fernandez/profil/spieler/648195"],
    ["mci51471","Mateo Kovačić","MID",8,10000000,"/mateo-kovacic/profil/spieler/51471"],
    ["mci607223","Rayan Cherki","MID",10,110000000,"/rayan-cherki/profil/spieler/607223"],
    ["mci406635","Phil Foden","MID",47,65000000,"/phil-foden/profil/spieler/406635"],
    ["mci486049","Jérémy Doku","FWD",11,75000000,"/jeremy-doku/profil/spieler/486049"],
    ["mci623570","Iliman Ndiaye","FWD",7,65000000,"/iliman-ndiaye/profil/spieler/623570"],
    ["mci583255","Antoine Semenyo","FWD",42,80000000,"/antoine-semenyo/profil/spieler/583255"],
    ["mci1082631","Allan","FWD",37,30000000,"/allan/profil/spieler/1082631"],
    ["mci1187640","Ryan McAidoo","FWD",56,8000000,"/ryan-mcaidoo/profil/spieler/1187640"],
    ["mci418560","Erling Haaland","FWD",9,220000000,"/erling-haaland/profil/spieler/418560"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "Etihad Stadium · Manchester",
  squadSource: "https://www.transfermarkt.com/manchester-city/kader/verein/281/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("newcastle-united", {
  squad: [
    ["new629773","Lukáš Horníček","GK",21,27000000,"/lukas-hornicek/profil/spieler/629773"],
    ["new923757","Ewen Jaouen","GK",24,18000000,"/ewen-jaouen/profil/spieler/923757"],
    ["new192080","Nick Pope","GK",1,3000000,"/nick-pope/profil/spieler/192080"],
    ["new142389","Mark Gillespie","GK",29,100000,"/mark-gillespie/profil/spieler/142389"],
    ["new521964","Malick Thiaw","DEF",12,50000000,"/malick-thiaw/profil/spieler/521964"],
    ["new361093","Sven Botman","DEF",4,35000000,"/sven-botman/profil/spieler/361093"],
    ["new134270","Dan Burn","DEF",33,4000000,"/dan-burn/profil/spieler/134270"],
    ["new135343","Fabian Schär","DEF",5,3000000,"/fabian-schar/profil/spieler/135343"],
    ["new670858","Lewis Hall","DEF",3,55000000,"/lewis-hall/profil/spieler/670858"],
    ["new503981","Tino Livramento","DEF",2,45000000,"/tino-livramento/profil/spieler/503981"],
    ["new519184","Amar Dedić","DEF",37,30000000,"/amar-dedic/profil/spieler/519184"],
    ["new466805","Nico González","MID",6,50000000,"/nico-gonzalez/profil/spieler/466805"],
    ["new975347","Aladji Bamba","MID",8,25000000,"/aladji-bamba/profil/spieler/975347"],
    ["new503749","Jacob Ramsey","MID",41,35000000,"/jacob-ramsey/profil/spieler/503749"],
    ["new922769","Lewis Miley","MID",67,30000000,"/lewis-miley/profil/spieler/922769"],
    ["new1111063","Sean Steur","MID",14,22000000,"/sean-steur/profil/spieler/1111063"],
    ["new333241","Joelinton","MID",7,20000000,"/joelinton/profil/spieler/333241"],
    ["new340329","Joe Willock","MID",28,18000000,"/joe-willock/profil/spieler/340329"],
    ["new1067904","Bazoumana Touré","FWD",17,50000000,"/bazoumana-toure/profil/spieler/1067904"],
    ["new398065","Harvey Barnes","FWD",11,35000000,"/harvey-barnes/profil/spieler/398065"],
    ["new583189","Anthony Elanga","FWD",19,35000000,"/anthony-elanga/profil/spieler/583189"],
    ["new199527","Jacob Murphy","FWD",23,10000000,"/jacob-murphy/profil/spieler/199527"],
    ["new724129","Matias Fernandez-Pardo","FWD",20,55000000,"/matias-fernandez-pardo/profil/spieler/724129"],
    ["new609556","William Osula","FWD",10,32000000,"/william-osula/profil/spieler/609556"],
    ["new388165","Yoane Wissa","FWD",9,25000000,"/yoane-wissa/profil/spieler/388165"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "St James' Park · Newcastle upon Tyne",
  squadSource: "https://www.transfermarkt.com/newcastle-united/kader/verein/762/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("nottingham-forest", {
  squad: [
    ["nfo432914","John Victor","GK",12,3500000,"/john-victor/profil/spieler/432914"],
    ["nfo127202","Matz Sels","GK",26,3500000,"/matz-sels/profil/spieler/127202"],
    ["nfo381469","Steven Benda","GK",33,1000000,"/steven-benda/profil/spieler/381469"],
    ["nfo1005649","Murillo","DEF",5,50000000,"/murillo/profil/spieler/1005649"],
    ["nfo974982","Ousmane Diomande","DEF",2,42000000,"/ousmane-diomande/profil/spieler/974982"],
    ["nfo413507","Nikola Milenković","DEF",31,28000000,"/nikola-milenkovic/profil/spieler/413507"],
    ["nfo984096","Jair Cunha","DEF",23,25000000,"/jair-cunha/profil/spieler/984096"],
    ["nfo503680","Neco Williams","DEF",3,32000000,"/neco-williams/profil/spieler/503680"],
    ["nfo524285","Luca Netz","DEF",25,8000000,"/luca-netz/profil/spieler/524285"],
    ["nfo493003","Daniel Muñoz","DEF",27,22000000,"/daniel-munoz/profil/spieler/493003"],
    ["nfo236490","Ola Aina","DEF",34,18000000,"/ola-aina/profil/spieler/236490"],
    ["nfo708072","Nicolò Savona","DEF",37,15000000,"/nicolo-savona/profil/spieler/708072"],
    ["nfo375885","Ibrahim Sangaré","MID",6,20000000,"/ibrahim-sangare/profil/spieler/375885"],
    ["nfo583199","James McAtee","MID",24,22000000,"/james-mcatee/profil/spieler/583199"],
    ["nfo223979","Xaver Schlager","MID",21,15000000,"/xaver-schlager/profil/spieler/223979"],
    ["nfo497291","Nicolás Domínguez","MID",8,13000000,"/nicolas-dominguez/profil/spieler/497291"],
    ["nfo425902","Ryan Yates","MID",22,7000000,"/ryan-yates/profil/spieler/425902"],
    ["nfo429014","Morgan Gibbs-White","MID",10,80000000,"/morgan-gibbs-white/profil/spieler/429014"],
    ["nfo392768","Callum Hudson-Odoi","FWD",7,25000000,"/callum-hudson-odoi/profil/spieler/392768"],
    ["nfo365108","Dan Ndoye","FWD",14,35000000,"/dan-ndoye/profil/spieler/365108"],
    ["nfo610849","Liam Delap","FWD",19,40000000,"/liam-delap/profil/spieler/610849"],
    ["nfo432164","Igor Jesus","FWD",11,25000000,"/igor-jesus/profil/spieler/432164"],
    ["nfo585959","Arnaud Kalimuendo","FWD",15,20000000,"/arnaud-kalimuendo/profil/spieler/585959"],
    ["nfo108725","Chris Wood","FWD",9,4000000,"/chris-wood/profil/spieler/108725"]
  ].map(([id, name, pos, number, value, profile]) => ({
    id, name, pos, number, value, profile, status: "undecided"
  })),
  stadium: "The City Ground · Nottingham",
  squadSource: "https://www.transfermarkt.com/nottingham-forest/kader/verein/703/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("sunderland", {
  squad: [
    ["sun646991","Robin Roefs","GK",22,30000000,"/robin-roefs/profil/spieler/646991"],
    ["sun605426","Melker Ellborg","GK",31,3000000,"/melker-ellborg/profil/spieler/605426"],
    ["sun123536","Simon Moore","GK",21,75000,"/simon-moore/profil/spieler/123536"],
    ["sun503686","Dan Ballard","DEF",5,25000000,"/dan-ballard/profil/spieler/503686"],
    ["sun263236","Kevin Danso","DEF",4,20000000,"/kevin-danso/profil/spieler/263236","Tottenham Hotspur"],
    ["sun353032","Omar Alderete","DEF",15,10000000,"/omar-alderete/profil/spieler/353032"],
    ["sun282939","Luke O'Nien","DEF",13,700000,"/luke-onien/profil/spieler/282939"],
    ["sun502065","Aji Alese","DEF",42,700000,"/aji-alese/profil/spieler/502065"],
    ["sun1191444","Dayann Méthalie","DEF",6,25000000,"/dayann-methalie/profil/spieler/1191444"],
    ["sun240692","Reinildo Mandava","DEF",17,4000000,"/reinildo-mandava/profil/spieler/240692"],
    ["sun515544","Trai Hume","DEF",32,22000000,"/trai-hume/profil/spieler/515544"],
    ["sun348026","Nordi Mukiele","DEF",20,18000000,"/nordi-mukiele/profil/spieler/348026"],
    ["sun100986","Thomas Meunier","DEF",12,1500000,"/thomas-meunier/profil/spieler/100986"],
    ["sun111455","Granit Xhaka","MID",34,8000000,"/granit-xhaka/profil/spieler/111455"],
    ["sun1401779","Jules Ahoka","MID",29,7000000,"/jules-ahoka/profil/spieler/1401779"],
    ["sun727089","Noah Sadiki","MID",27,40000000,"/noah-sadiki/profil/spieler/727089"],
    ["sun876631","Habib Diarra","MID",19,35000000,"/habib-diarra/profil/spieler/876631"],
    ["sun633992","Enzo Le Fée","MID",28,30000000,"/enzo-le-fee/profil/spieler/633992"],
    ["sun277697","Alan Browne","MID",8,1300000,"/alan-browne/profil/spieler/277697"],
    ["sun947411","Chris Rigg","MID",11,25000000,"/chris-rigg/profil/spieler/947411"],
    ["sun743386","Malick Fofana","FWD",39,30000000,"/malick-fofana/profil/spieler/743386"],
    ["sun903611","Nilson Angulo","FWD",10,20000000,"/nilson-angulo/profil/spieler/903611"],
    ["sun696181","Romaine Mundle","FWD",14,5000000,"/romaine-mundle/profil/spieler/696181"],
    ["sun1079078","Timur Tuterov","FWD",57,300000,"/timur-tuterov/profil/spieler/1079078"],
    ["sun743384","Chemsdine Talbi","FWD",7,25000000,"/chemsdine-talbi/profil/spieler/743384"],
    ["sun1322090","Jocelin Ta Bi","FWD",37,2500000,"/jocelin-ta-bi/profil/spieler/1322090"],
    ["sun654412","Abdoullah Ba","FWD",46,1500000,"/abdoullah-ba/profil/spieler/654412"],
    ["sun473169","Brian Brobbey","FWD",9,50000000,"/brian-brobbey/profil/spieler/473169"],
    ["sun494237","Wilson Isidor","FWD",18,18000000,"/wilson-isidor/profil/spieler/494237"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Stadium of Light · Sunderland",
  squadSource: "https://www.transfermarkt.com/afc-sunderland/kader/verein/289/saison_id/2026",
  checkedOn: "11 November 2026"
});

// Transfermarkt 2026/27 squad snapshot. Amounts are whole euros.
clubData.set("tottenham-hotspur", {
  squad: [
    ["tot725912","Antonín Kinský","GK",31,18000000,"/antonin-kinsky/profil/spieler/725912"],
    ["tot74960","Martin Dúbravka","GK",39,500000,"/martin-dubravka/profil/spieler/74960"],
    ["tot428016","Brandon Austin","GK",40,500000,"/brandon-austin/profil/spieler/428016"],
    ["tot576314","Jan Paul van Hecke","DEF",6,60000000,"/jan-paul-van-hecke/profil/spieler/576314"],
    ["tot557459","Micky van de Ven","DEF",37,50000000,"/micky-van-de-ven/profil/spieler/557459"],
    ["tot469781","Marcos Senesi","DEF",5,20000000,"/marcos-senesi/profil/spieler/469781"],
    ["tot258878","Tosin Adarabioyo","DEF",4,13000000,"/tosin-adarabioyo/profil/spieler/258878"],
    ["tot192765","Ben Davies","DEF",33,3000000,"/ben-davies/profil/spieler/192765"],
    ["tot556385","Destiny Udogie","DEF",13,25000000,"/destiny-udogie/profil/spieler/556385"],
    ["tot234803","Andrew Robertson","DEF",3,7000000,"/andrew-robertson/profil/spieler/234803"],
    ["tot553875","Pedro Porro","DEF",23,45000000,"/pedro-porro/profil/spieler/553875"],
    ["tot922693","Archie Gray","DEF",14,35000000,"/archie-gray/profil/spieler/922693"],
    ["tot397033","Sandro Tonali","MID",16,90000000,"/sandro-tonali/profil/spieler/397033"],
    ["tot354362","Rodrigo Bentancur","MID",30,17000000,"/rodrigo-bentancur/profil/spieler/354362"],
    ["tot880245","Mateus Fernandes","MID",18,70000000,"/mateus-fernandes/profil/spieler/880245"],
    ["tot866246","Lucas Bergvall","MID",15,40000000,"/lucas-bergvall/profil/spieler/866246"],
    ["tot488362","Conor Gallagher","MID",8,32000000,"/conor-gallagher/profil/spieler/488362"],
    ["tot566931","Xavi Simons","MID",7,40000000,"/xavi-simons/profil/spieler/566931"],
    ["tot294057","James Maddison","MID",10,17000000,"/james-maddison/profil/spieler/294057"],
    ["tot431755","Dejan Kulusevski","MID",21,13000000,"/dejan-kulusevski/profil/spieler/431755"],
    ["tot743591","Sávio","FWD",17,50000000,"/savio/profil/spieler/743591"],
    ["tot801734","Mathys Tel","FWD",11,22000000,"/mathys-tel/profil/spieler/801734"],
    ["tot743498","Wilson Odobert","FWD",28,18000000,"/wilson-odobert/profil/spieler/743498"],
    ["tot537860","Mykhaylo Mudryk","FWD",27,15000000,"/mykhaylo-mudryk/profil/spieler/537860","Chelsea"],
    ["tot543499","Mohammed Kudus","FWD",20,45000000,"/mohammed-kudus/profil/spieler/543499"],
    ["tot445939","Omar Marmoush","FWD",22,50000000,"/omar-marmoush/profil/spieler/445939","Manchester City"],
    ["tot258889","Dominic Solanke","FWD",19,25000000,"/dominic-solanke/profil/spieler/258889"],
    ["tot378710","Richarlison","FWD",9,15000000,"/richarlison/profil/spieler/378710"]
  ].map(([id, name, pos, number, value, profile, loanFrom]) => ({
    id, name, pos, number, value, profile, loanFrom,
    status: loanFrom ? "keep" : "undecided"
  })),
  stadium: "Tottenham Hotspur Stadium · London",
  squadSource: "https://www.transfermarkt.com/tottenham-hotspur/kader/verein/148/saison_id/2026",
  checkedOn: "12 November 2026"
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
      const featured = targets.get(key);
      if (featured) {
        if (featured.club === club.name) targets.set(key, { ...featured, number: player.number });
        continue;
      }
      if (!player.value || player.loanFrom || ownPlayers.has(key)) continue;
      const { status, ...target } = player;
      targets.set(key, { ...target, club: club.name });
    }
  }
  return [...targets.values()];
}

for (const club of clubs) {
  const data = clubData.get(club.id);
  if (data) data.market = rivalTransferTargets(club);
}
