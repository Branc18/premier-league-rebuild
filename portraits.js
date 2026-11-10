// Player IDs match the squad and market data in app.js.
// Sources and licenses were checked against each Wikimedia Commons file.
const playerPhotos = new Map([
  ["mu0","d/df","Senne_Lammens_USMNT_v_Belgium_Mar_28_2026-98_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu1","d/d2","Karl_Darlow_13092025_(3).jpg","Timmy96","CC0"],
  ["mu2","a/a6","Tom_Heaton_playing_for_Burnley_(cropped).jpg","Kelvin Stuttard","CC BY-SA 4.0"],
  ["mu4","1/1f","Diogo_Dalot_USMNT_v_Portugal_Mar_31_2026-12.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu5","5/52","Noussair_Mazraoui_France_v_Morocco_9_July_2026-125_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu6","c/c9","2022-07-30_Fußball,_Männer,_DFL-Supercup,_RB_Leipzig_-_FC_Bayern_München_Matthijs_de_Ligt_(cropped).jpg","Stepro, crop by MajorPrince","CC BY-SA 4.0"],
  ["mu7","a/ab","Harry_Maguire_2023_(cropped).jpg","UK Prime Minister","CC BY 2.0"],
  ["mu8","6/6e","Lisandro_Martinez_Argentina_v_Egypt_7_July_2026-343_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu9","0/01","Patrick_Dorgu_Como-Lecce_30_Dec_2024.jpg","Fra Casa","CC0"],
  ["mu10","a/a2","RC_Lens_-_Lille_OSC_(08-10-2023)_12_(cropped1).jpg","Supporterhéninois","CC0"],
  ["mu11","b/b3","Luke_Shaw,_Manchester_United_v_Newcastle_United,_11_September_2021_(44)_(cropped).jpg","Ardfern","CC BY-SA 4.0"],
  ["mu12","4/47","Ayden_Heaven_2025.png","AFC Bournemouth","CC BY 4.0"],
  ["mu13","b/b9","Harry_Amass_18102025_(4)_(cropped).jpg","Timmy96","CC0"],
  ["mu14","9/90","Mason_Mount_-_2021-12-08_-_FC_Zenit_Saint_Petersburg_v_Chelsea_F.C.jpg","Voltmetro","CC BY-SA 4.0"],
  ["mu15","c/c7","Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu16","2/23","Santos_asse_rcsa_2425.jpg","Paté kroute","CC0"],
  ["mu17","f/ff","Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu18","d/de","Carlos_Baleba_24012026_(2).jpg","Timmy96","CC0"],
  ["mu19","2/2e","M.UGARTE.jpg","Atmedia25","CC BY 4.0"],
  ["mu20","1/1f","Kobbie_Mainoo_England_v_Ghana_23_June_2026-042.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu22","1/17","Tyler_Fletcher_Scotland_v_Bolivia_6_June_2026-4.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu23","5/54","Marcus_Rashford_England_v_Ghana_23_June_2026-073.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu24","3/31","Matheus_Cunha_Brazil_V_Morocco_13_June_2026-178_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu25","e/e2","Joshua_Zirkzee_2019.jpg","Sven Mandel","CC BY-SA 4.0"],
  ["mu26","1/1a","Amad_Diallo_Cote_D'Ivoire_v_Ecuador_14_June_2026-256_(cropped_2).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["mu27","7/78","Bryan_Mbeumo_00-02-31.18.png","AFC Bournemouth","CC BY 3.0"],
  ["mu28","e/e9","FC_RB_Salzburg_gegen_SK_Austria_Klagenfurt_(2023-05-28)_38_(cropped).jpg","Werner100359","CC BY-SA 4.0"],
  ["mu29","1/1e","Shea_Lacey.jpg","Jahrenvisuals","CC BY 4.0"],
  ["t0","2/2d","Norway_Italy_-_June_2025_A_17_(Gianluigi_Donnarumma).jpg","MichaelEmilio","CC BY 4.0"],
  ["t1","1/1d","James_Trafford_England_v_Ghana_23_June_2026-027.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t2","4/4f","Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t3","b/b5","Ruben_Dias_Croatia_v_Portugal_2_July_2026-228_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t4","d/dd","Marc_Guehi_England_v_Panama_27_June_26-182.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t5","5/58","Josko_Gvardiol_Croatia_v_Portugal_2_July_2026-262.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t6","5/5f","Lewis_Hall_24052026_(2).jpg","Timmy96","CC0"],
  ["t7","e/e5","Milot_Kerkez_(cropped).png","AFC Bournemouth","CC BY 3.0"],
  ["t8","8/86","Celebration!_(54493257432)_(Jarrad_Branthwaite).jpg","Pete from Liverpool, UK","CC BY 2.0"],
  ["t9","5/5e","Pedro_Porro_Argentina_v_Spain_19_July_2026-177_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t10","3/3f","Micky_Van_De_Ven_pre-match_training_(cropped).jpg","KrispyKrumpets","CC BY 4.0"],
  ["t11","5/51","Manchester_United_v_Southampton,_12_February_2022_(23)_(Tino_Livramento_cropped).jpg","Ardfern","CC BY-SA 4.0"],
  ["t12","5/5d","Declan_Rice_England_v_Ghana_23_June_2026-150.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t13","1/13","Martin_Odegaard_France_v_Norway_26_June_26-014.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t14","0/0e","Moises_Caicedo_Ecuador_v_Germany_25_June_2026-051_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t15","1/10","Enzo_Fernandez_Argentina_v_Spain_19_July_2026-050_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t16","7/70","Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t17","5/52","Dominik_Szoboszlai_04012026_(1).jpg","Timmy96","CC0"],
  ["t18","5/52","Elliot_Anderson_England_v_Ghana_23_June_2026-059_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t19","6/61","Morgan_Gibbs-White_-_Nottingham_Forest_-_2025.jpg","Sebalston","CC0"],
  ["t20","f/fb","Cole_Palmer_2025_FIFA_Club_World_Cup_Final.jpg","The White House","Public domain"],
  ["t21","9/92","James_Maddison_pre-match_training_(cropped).jpg","KrispyKrumpets","CC BY 4.0"],
  ["t22","4/43","Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t23","2/2f","Bukayo_Saka_England_v_Ghana_23_June_2026-057_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t24","3/32","Alexander_Isak_-_Sweden_-_Greece21_(cropped).jpg","Mikael Hervestad","CC BY-SA 4.0"],
  ["t25","4/49","Hugo_Ekitike_(PSG_2023)_(cropped2).jpg","Liondartois","CC BY-SA 4.0"],
  ["t26","5/51","Antoine_Semenyo_England_v_Ghana_23_June_2026-209_(cropped2).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t27","c/c5","Eberechi_Eze_England_v_Ghana_23_June_2026-039.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["t30","0/07","Cody_Gakpo_Liverpool_FC_20261103_(1).JPG","Zafer","CC BY-SA 4.0"],
  ["t31","9/97","Rayan_Cherki_France_v_Norway_26_June_26-114.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars262749","8/8a","David_Raya_Argentina_v_Spain_19_July_2026-003_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars542586","2/20","Illan_Meslier_13092025_(10)_(cropped).jpg","Timmy96","CC0"],
  ["ars192279","8/89","Kepa_Arrizabalaga_2021_(cropped).jpg","Vyacheslav Evdokimov","CC BY-SA 3.0"],
  ["ars495666","0/06","William_Saliba_France_v_Paraguay_4_July_2026-183.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars435338","8/8e","Gabriel_Magalhaes_Brazil_V_Morocco_13_June_2026-132_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars659813","1/19","Piero_Hincapie_Cote_D'Ivoire_v_Ecuador_14_June_2026-247_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars413403","c/c7","Ezri_Konsa_England_v_Panama_27_June_26-259_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars646750","7/78","2_Cristhian_Mosquera_(cropped).jpg","Chensiyuan","CC BY-SA 4.0"],
  ["ars502821","4/46","1_Riccardo_Calafiori_2026_(cropped).jpg","Chensiyuan","CC BY-SA 4.0"],
  ["ars420243","9/9f","JURRIEN_TIMBER.jpg","Carlo Bruil Fotografie","CC BY 2.0"],
  ["ars335721","a/a0","Ben_White_2018.jpg","James Boyes from UK","CC BY 2.0"],
  ["ars423440","f/f9","Martin_Zubimendi_Argentina_v_Spain_19_July_2026-012.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars890721","7/70","Myles_Lewis-Skelly_2026_(cropped).jpg","Chensiyuan","CC BY-SA 4.0"],
  ["ars520624","7/70","Bruno_Guimaraes_Brazil_V_Morocco_13_June_2026-78_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars338424","4/45","Mikel_Merino_France_v_Spain_7.24.26-241_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars451677","5/5b","Sweden_-_Greece22_(cropped).jpg","Mikael Hervestad","CC BY-SA 4.0"],
  ["ars1187629","8/8b","1_max_dowman_2026b_(cropped).jpg","Chensiyuan","CC BY-SA 4.0"],
  ["ars503987","4/45","Noni_Madueke_England_v_Panama_27_June_26-054.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars309400","7/76","Kai_Havertz_Ecuador_v_Germany_25_June_2026-118.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["ars325443","9/9c","Viktor_Gyokeres_France_v_Sweden_6.30.26-123_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av432298","7/7b","ZION_SUZUKI_-_JPN_vs_THA_-_Friendly_Match_-_2024.01.01.jpg","RuinDig/Yuki Uchida","CC BY 4.0"],
  ["av124884","2/24","Bizot_asse_sb_2425.png","Paté kroute","CC0"],
  ["av503977","6/6b","Taylor_Harwood-Bellis_22122024_(2).jpg","Timmy96","CC0"],
  ["av399776","c/ca","Pau_Torres_April_2026_(cropped).jpg","MintyGel","CC0"],
  ["av1282860","0/09","Modou_Kéba_Cissé.jpg","Werner100359","CC BY-SA 4.0"],
  ["av184573","0/0c","Victor_Lindelof_France_v_Sweden_6.30.26-236.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av253677","a/a7","Tyrone_Mings_at_2026_SXSW_London.jpg","DavidPMaynard","CC BY-SA 4.0"],
  ["av485585","c/c9","St._Louis_City_vs_Aston_Villa_(Jul_2025)_06_(Ian_Maatsen).jpg","u/reepers_hellcat","CC BY 4.0"],
  ["av425334","4/43","Matty_Cash_(cropped).jpg","Nottingham Forest F.C.","CC0"],
  ["av477758","5/55","Aaron_Wan-Bissaka_of_West_Ham_United.jpeg","Egghead06","CC BY-SA 4.0"],
  ["av394327","d/df","Lens_-_Marseille_(22-01-2022)_17.jpg","Supporterhéninois","CC0"],
  ["av485706","3/36","Amadou_Onana_USMNT_v_Belgium_Mar_28_2026-96_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av645686","2/2a","Lamare_Bogarde_July_2025.jpg","MintyGel","CC0"],
  ["av153084","6/68","Leon_Goretzka_Ecuador_v_Germany_25_June_2026-159.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av131978","a/a6","Ross_Barkley_in_2019.jpg","cfcunofficial","CC BY-SA 2.0"],
  ["av193116","6/63","John_McGinn_Scotland_v_Bolivia_6_June_2026-2.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av321247","e/e6","Emilano_Buendia_April_2026_(cropped).jpg","MintyGel","CC0"],
  ["av811779","a/ab","Alejandro_Garnacho_7_August_2022_(cropped).jpg","Ardfern","CC BY-SA 4.0"],
  ["av1023191","f/f0","George_Hemmings_(cropped).jpg","MintyGel","CC BY 4.0"],
  ["av1185888","6/6f","Ibrahim_Mbaye_France_v_Senegal_16_June_2026-256.jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av776890","3/35","Nicolas_Jackson_France_v_Senegal_16_June_2026-369_(cropped).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["av1226357","e/eb","Brian_Madjo_July_2026_(cropped).jpg","MintyGel","CC BY 4.0"],
  ["av331726","8/8f","FC_Salzburg_gegen_AS_Roma_(UEFA_Euroleague_play-off,_2023-02-16)_39_(cropped2).jpg","Werner100359","CC BY-SA 4.0"],
  ["av616631","2/29","Next_Generation_Trophy_2017_Dritter_Tag_05.jpg","Werner100359","CC BY-SA 4.0"],
  ["av735570","5/56","João_Gomes_01112025_(7)_(croped).jpg","Timmy96","CC0"],
  ["bou948275","1/18","Alvaro_Rodriguez_2026.jpg","AFC Bournemouth","CC BY 3.0"],
  ["bou746740","1/1e","Daniel_Jebbison_2024.jpg","AFC Bournemouth","CC BY 3.0"],
  ["bou399434","0/00","Marcus_Tavernier_2022.jpg","AFC Bournemouth","CC BY 3.0"],
  ["bou654539","d/d3","Adrien_Truffert.jpg","Timmy96","CC BY-SA 4.0"],
  ["bou52570","8/83","Fraser_Forster_09052026_(1).jpg","Timmy96","CC0"],
  ["bou955357","e/ec","Jogadores_do_AFC_Bournemouth_abraçados_(Éli_Junior_Kroupi).jpg","AFC Bournemouth","CC BY 4.0"],
  ["bou1012564","4/40","Brazil_World_Cup_Roster_Brazil_V_Morocco_13_June_2026-72_(Rayan).jpg","Bryan Berlin","CC BY-SA 4.0"],
  ["bou855256","f/f1","Alex_Scott_Interview_2023.jpg","AFC Bournemouth","CC BY 3.0"],
  ["bou711337","e/e1","Evanilson_09052026_(1).jpg","Timmy96","CC0"],
  ["bou1009658","0/08","Julio_Soler_2025.jpg","AFC Bournemouth","CC BY 3.0"],
  ["bou61841","3/3b","Adam_Smith_09052026_(1).jpg","Timmy96","CC0"],
  ["bou277033","3/33","David_Brooks_09052026_(2).jpg","Timmy96","CC0"],
  ["bou332705","8/81","Tyler_Adams_WC2022.jpg","U.S. Department of State","Public domain"],
  ["bou463605","e/e0","Bafodé_Diakité_asse_losc_2425_(cropped).jpg","Paté kroute","CC0"],
  ["bou330659","4/41","Justin_Kluivert_09052026_(1).jpg","Timmy96","CC0"],
  ["bou532776","f/ff","Amine_Adli_27122025_(4).jpg","Timmy96","CC0"]
].map(([id, path, file, author, license]) => {
  const name = encodeURIComponent(file).replace(/[()']/g, char => "%" + char.charCodeAt(0).toString(16).toUpperCase());
  return [id, {
    url: `https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}/${name}/250px-${name}`,
    source: `https://commons.wikimedia.org/wiki/File:${name}`,
    author,
    license
  }];
}));

// Center and zoom for source photos that show more than a typical headshot.
const portraitFraming = {
  bou52570: [.50, .22, 1.65], // Fraser Forster
  bou654539: [.44, .26, 1.65], // Adrien Truffert
  bou711337: [.50, .29, 1.65], // Evanilson
  bou61841: [.50, .25, 2.10], // Adam Smith
  bou277033: [.50, .25, 1.90], // David Brooks
  bou330659: [.50, .23, 1.70], // Justin Kluivert
  bou532776: [.50, .23, 1.70], // Amine Adli
  av616631: [.41, .18, 1.43], // Matteo Ruggeri
  av735570: [.40, .22, 1.38], // João Gomes
  mu4: [.50, .25, 1.50], // Diogo Dalot
  mu9: [.54, .34, 3.40], // Patrick Dorgu
  mu10: [.57, .24, 1.65], // Leny Yoro
  mu14: [.46, .25, 1.55] // Mason Mount
};

function squarePortraitCrop(id, width, height) {
  const [focusX, focusY, zoom] = portraitFraming[id] ?? [.50, .33, 1.14];
  const size = Math.min(width, height) / zoom;
  const x = Math.max(0, Math.min(width - size, width * focusX - size / 2));
  const y = Math.max(0, Math.min(height - size, height * focusY - size / 2));
  return { x, y, size };
}
