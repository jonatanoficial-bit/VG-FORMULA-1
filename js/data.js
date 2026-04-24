const BUILD = {
  version: 'v0.1.7',
  date: '2026-04-24',
  time: '10:55',
  label: 'career save + race simulation loop'
};

const ASSETS = {
  backgrounds: 'assets/backgrounds/',
  buttons: 'assets/buttons/',
  drivers: 'assets/drivers/',
  flags: 'assets/flags/',
  hud: 'assets/hud/',
  icons: 'assets/icons/',
  teamCards: 'assets/teams/cards/',
  teamLogos: 'assets/teams/cards/logos/',
  tracks: 'assets/tracks/'
};

const teams = [
  { id:'mercedes', name:'Mercedes', color:'#00d2be', card:'mercedes.png', logo:'mercedes.png', budget:180, reputation:92, objective:'Brigar por vitórias', car:{pace:91, tire:86, reliability:88}, drivers:['andrea_antonelli','george_russell'] },
  { id:'ferrari', name:'Ferrari', color:'#e10600', card:'ferrari.png', logo:'ferrari.png', budget:190, reputation:94, objective:'Vencer corridas e disputar títulos', car:{pace:92, tire:84, reliability:86}, drivers:['lewis_hamilton','charles_leclerc'] },
  { id:'mclaren', name:'McLaren', color:'#ff8700', card:'mclaren.png', logo:'mclaren.png', budget:170, reputation:91, objective:'Pódios constantes', car:{pace:93, tire:90, reliability:87}, drivers:['lando_norris','oscar_piastri'] },
  { id:'red_bull', name:'Red Bull', color:'#1e41ff', card:'red_bull.png', logo:'red_bull.png', budget:185, reputation:95, objective:'Título mundial', car:{pace:94, tire:87, reliability:89}, drivers:['max_verstappen','isack_hadjar'] },
  { id:'rb', name:'Racing Bulls', color:'#2b6cff', card:'rb.png', logo:'rb.png', budget:92, reputation:72, objective:'Pontuar regularmente', car:{pace:75, tire:78, reliability:77}, drivers:['liam_lawson','arvid_lindblad'] },
  { id:'audi', name:'Audi F1 Team', color:'#cf1f2b', card:'audi.png', logo:'audi.png', budget:135, reputation:82, objective:'Construir base competitiva', car:{pace:78, tire:76, reliability:79}, drivers:['nico_hulkenberg','gabriel_bortoleto'] },
  { id:'williams', name:'Williams', color:'#00a3e0', card:'williams.png', logo:'williams.png', budget:120, reputation:80, objective:'Liderar o meio do grid', car:{pace:80, tire:75, reliability:78}, drivers:['carlos_sainz_jr','alex_albon'] },
  { id:'alpine', name:'Alpine', color:'#2293d1', card:'alpine.png', logo:'alpine.png', budget:105, reputation:76, objective:'Evoluir o carro durante o ano', car:{pace:74, tire:77, reliability:73}, drivers:['pierre_gasly','franco_colapinto'] },
  { id:'aston_martin', name:'Aston Martin', color:'#006f62', card:'aston_martin.png', logo:'aston_martin.png', budget:155, reputation:86, objective:'Voltar aos pódios', car:{pace:83, tire:82, reliability:80}, drivers:['fernando_alonso','lance_stroll'] },
  { id:'haas', name:'Haas', color:'#b6babd', card:'haas.png', logo:'haas.png', budget:85, reputation:70, objective:'Somar pontos e reduzir custos', car:{pace:72, tire:73, reliability:74}, drivers:['esteban_ocon','oliver_bearman'] },
  { id:'cadillac', name:'Cadillac', color:'#c8a24a', card:'cadillac.png', logo:'cadillac.png', budget:145, reputation:78, objective:'Temporada de estreia sólida', car:{pace:76, tire:74, reliability:76}, drivers:['sergio_perez','valtteri_bottas'] }
];

const drivers = {
  max_verstappen:{name:'Max Verstappen', num:1, img:'max_verstappen.png', rating:96, consistency:94, aggression:92, tire:87},
  isack_hadjar:{name:'Isack Hadjar', num:6, img:'isack_hadjar.png', rating:78, consistency:74, aggression:86, tire:72},
  lewis_hamilton:{name:'Lewis Hamilton', num:44, img:'lewis_hamilton.png', rating:92, consistency:91, aggression:85, tire:88},
  charles_leclerc:{name:'Charles Leclerc', num:16, img:'charles_leclerc.png', rating:93, consistency:88, aggression:89, tire:84},
  lando_norris:{name:'Lando Norris', num:4, img:'lando_norris.png', rating:94, consistency:90, aggression:87, tire:90},
  oscar_piastri:{name:'Oscar Piastri', num:81, img:'oscar_piastri.png', rating:91, consistency:89, aggression:84, tire:88},
  george_russell:{name:'George Russell', num:63, img:'george_russell.png', rating:90, consistency:88, aggression:86, tire:84},
  andrea_antonelli:{name:'Andrea Kimi Antonelli', num:12, img:'andrea_antonelli.png', rating:82, consistency:78, aggression:88, tire:76},
  fernando_alonso:{name:'Fernando Alonso', num:14, img:'fernando_alonso.png', rating:89, consistency:92, aggression:82, tire:87},
  lance_stroll:{name:'Lance Stroll', num:18, img:'lance_stroll.png', rating:77, consistency:75, aggression:79, tire:74},
  pierre_gasly:{name:'Pierre Gasly', num:10, img:'pierre_gasly.png', rating:84, consistency:84, aggression:82, tire:80},
  franco_colapinto:{name:'Franco Colapinto', num:43, img:'franco_colapinto.png', rating:79, consistency:75, aggression:84, tire:73},
  carlos_sainz_jr:{name:'Carlos Sainz Jr.', num:55, img:'carlos_sainz_jr.png', rating:88, consistency:90, aggression:81, tire:86},
  alex_albon:{name:'Alex Albon', num:23, img:'alex_albon.png', rating:85, consistency:83, aggression:82, tire:80},
  esteban_ocon:{name:'Esteban Ocon', num:31, img:'esteban_ocon.png', rating:83, consistency:81, aggression:84, tire:78},
  oliver_bearman:{name:'Oliver Bearman', num:87, img:'oliver_bearman.png', rating:78, consistency:74, aggression:86, tire:72},
  nico_hulkenberg:{name:'Nico Hulkenberg', num:27, img:'nico_hulkenberg.png', rating:84, consistency:86, aggression:78, tire:81},
  gabriel_bortoleto:{name:'Gabriel Bortoleto', num:5, img:'gabriel_bortoleto.png', rating:79, consistency:76, aggression:83, tire:74},
  liam_lawson:{name:'Liam Lawson', num:30, img:'liam_lawson.png', rating:80, consistency:77, aggression:85, tire:75},
  arvid_lindblad:{name:'Arvid Lindblad', num:38, img:'arvid_lindblad.png', rating:76, consistency:72, aggression:87, tire:70},
  sergio_perez:{name:'Sergio Perez', num:11, img:'sergio_perez.png', rating:86, consistency:84, aggression:82, tire:83},
  valtteri_bottas:{name:'Valtteri Bottas', num:77, img:'valtteri_bottas.png', rating:85, consistency:87, aggression:77, tire:82}
};

const calendar = [
  {round:1, gp:'Bahrain GP', country:'Bahrain', track:'bahrain.png', flag:'bahrain.png', laps:57, night:false, difficulty:74},
  {round:2, gp:'Saudi Arabia GP', country:'Jeddah', track:'jeddah.png', flag:'saudi_arabia.png', laps:50, night:true, difficulty:82},
  {round:3, gp:'Australia GP', country:'Australia', track:'australia.png', flag:'australia.png', laps:58, night:false, difficulty:78},
  {round:4, gp:'Japan GP', country:'Japan', track:'japan.png', flag:'japan.png', laps:53, night:false, difficulty:88},
  {round:5, gp:'China GP', country:'China', track:'china.png', flag:'china.png', laps:56, night:false, difficulty:80},
  {round:6, gp:'Miami GP', country:'USA', track:'miami.png', flag:'usa.png', laps:57, night:false, difficulty:76},
  {round:7, gp:'Imola GP', country:'Italy', track:'imola.png', flag:'italy.png', laps:63, night:false, difficulty:84},
  {round:8, gp:'Monaco GP', country:'Monaco', track:'monaco.png', flag:'monaco.png', laps:78, night:false, difficulty:96},
  {round:9, gp:'Canada GP', country:'Canada', track:'canada.png', flag:'canada.png', laps:70, night:false, difficulty:83},
  {round:10, gp:'Spain GP', country:'Spain', track:'spain.png', flag:'spain.png', laps:66, night:false, difficulty:81},
  {round:11, gp:'Austria GP', country:'Austria', track:'austria.png', flag:'austria.png', laps:71, night:false, difficulty:75},
  {round:12, gp:'British GP', country:'United Kingdom', track:'silverstone.png', flag:'united_kingdom.png', laps:52, night:false, difficulty:89},
  {round:13, gp:'Hungary GP', country:'Hungary', track:'hungary.png', flag:'hungary.png', laps:70, night:false, difficulty:85},
  {round:14, gp:'Belgium GP', country:'Belgium', track:'spa.png', flag:'belgium.png', laps:44, night:false, difficulty:90},
  {round:15, gp:'Dutch GP', country:'Netherlands', track:'netherlands.png', flag:'netherlands.png', laps:72, night:false, difficulty:86},
  {round:16, gp:'Italian GP', country:'Italy', track:'monza.png', flag:'italy.png', laps:53, night:false, difficulty:79},
  {round:17, gp:'Singapore GP', country:'Singapore', track:'singapore.png', flag:'singapore.png', laps:62, night:true, difficulty:93},
  {round:18, gp:'United States GP', country:'USA', track:'austin.png', flag:'usa.png', laps:56, night:false, difficulty:84},
  {round:19, gp:'Mexico GP', country:'Mexico', track:'mexico.png', flag:'mexico.png', laps:71, night:false, difficulty:80},
  {round:20, gp:'Brazil GP', country:'Brazil', track:'interlagos.png', flag:'brazil.png', laps:71, night:false, difficulty:88},
  {round:21, gp:'Las Vegas GP', country:'USA', track:'las_vegas.png', flag:'usa.png', laps:50, night:true, difficulty:78},
  {round:22, gp:'Qatar GP', country:'Qatar', track:'qatar.png', flag:'qatar.png', laps:57, night:true, difficulty:82},
  {round:23, gp:'Abu Dhabi GP', country:'UAE', track:'abu_dhabi.png', flag:'uae.png', laps:58, night:true, difficulty:81}
];
