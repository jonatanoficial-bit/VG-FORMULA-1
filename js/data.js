const BUILD = { version: 'v0.1.6', date: '2026-04-24', time: '09:30', label: 'SPA mobile-first visual rebuild' };
const ASSETS = {
  backgrounds: 'assets/backgrounds/', buttons: 'assets/buttons/', drivers: 'assets/drivers/', flags: 'assets/flags/', hud: 'assets/hud/', icons: 'assets/icons/', teamCards: 'assets/teams/cards/', teamLogos: 'assets/teams/cards/logos/', tracks: 'assets/tracks/'
};
const teams = [
  { id:'mercedes', name:'Mercedes', color:'#00d2be', card:'mercedes.png', logo:'mercedes.png', drivers:['andrea_antonelli','george_russell'] },
  { id:'ferrari', name:'Ferrari', color:'#e10600', card:'ferrari.png', logo:'ferrari.png', drivers:['lewis_hamilton','charles_leclerc'] },
  { id:'mclaren', name:'McLaren', color:'#ff8700', card:'mclaren.png', logo:'mclaren.png', drivers:['lando_norris','oscar_piastri'] },
  { id:'red_bull', name:'Red Bull', color:'#1e41ff', card:'red_bull.png', logo:'red_bull.png', drivers:['max_verstappen','isack_hadjar'] },
  { id:'rb', name:'Racing Bulls', color:'#2b6cff', card:'rb.png', logo:'rb.png', drivers:['liam_lawson','arvid_lindblad'] },
  { id:'audi', name:'Audi F1 Team', color:'#cf1f2b', card:'audi.png', logo:'audi.png', drivers:['nico_hulkenberg','gabriel_bortoleto'] },
  { id:'williams', name:'Williams', color:'#00a3e0', card:'williams.png', logo:'williams.png', drivers:['carlos_sainz_jr','alex_albon'] },
  { id:'alpine', name:'Alpine', color:'#2293d1', card:'alpine.png', logo:'alpine.png', drivers:['pierre_gasly','franco_colapinto'] },
  { id:'aston_martin', name:'Aston Martin', color:'#006f62', card:'aston_martin.png', logo:'aston_martin.png', drivers:['fernando_alonso','lance_stroll'] },
  { id:'haas', name:'Haas', color:'#b6babd', card:'haas.png', logo:'haas.png', drivers:['esteban_ocon','oliver_bearman'] },
  { id:'cadillac', name:'Cadillac', color:'#c8a24a', card:'cadillac.png', logo:'cadillac.png', drivers:['sergio_perez','valtteri_bottas'] }
];
const drivers = {
  max_verstappen:{name:'Max Verstappen', num:1, img:'max_verstappen.png'}, isack_hadjar:{name:'Isack Hadjar', num:6, img:'isack_hadjar.png'},
  lewis_hamilton:{name:'Lewis Hamilton', num:44, img:'lewis_hamilton.png'}, charles_leclerc:{name:'Charles Leclerc', num:16, img:'charles_leclerc.png'},
  lando_norris:{name:'Lando Norris', num:4, img:'lando_norris.png'}, oscar_piastri:{name:'Oscar Piastri', num:81, img:'oscar_piastri.png'},
  george_russell:{name:'George Russell', num:63, img:'george_russell.png'}, andrea_antonelli:{name:'Andrea Kimi Antonelli', num:12, img:'andrea_antonelli.png'},
  fernando_alonso:{name:'Fernando Alonso', num:14, img:'fernando_alonso.png'}, lance_stroll:{name:'Lance Stroll', num:18, img:'lance_stroll.png'},
  pierre_gasly:{name:'Pierre Gasly', num:10, img:'pierre_gasly.png'}, franco_colapinto:{name:'Franco Colapinto', num:43, img:'franco_colapinto.png'},
  carlos_sainz_jr:{name:'Carlos Sainz Jr.', num:55, img:'carlos_sainz_jr.png'}, alex_albon:{name:'Alex Albon', num:23, img:'alex_albon.png'},
  esteban_ocon:{name:'Esteban Ocon', num:31, img:'esteban_ocon.png'}, oliver_bearman:{name:'Oliver Bearman', num:87, img:'oliver_bearman.png'},
  nico_hulkenberg:{name:'Nico Hulkenberg', num:27, img:'nico_hulkenberg.png'}, gabriel_bortoleto:{name:'Gabriel Bortoleto', num:5, img:'gabriel_bortoleto.png'},
  liam_lawson:{name:'Liam Lawson', num:30, img:'liam_lawson.png'}, arvid_lindblad:{name:'Arvid Lindblad', num:38, img:'arvid_lindblad.png'},
  sergio_perez:{name:'Sergio Perez', num:11, img:'sergio_perez.png'}, valtteri_bottas:{name:'Valtteri Bottas', num:77, img:'valtteri_bottas.png'}
};
const calendar = [
  {round:1, gp:'Bahrain GP', country:'Bahrain', track:'bahrain.png', flag:'bahrain.png', laps:57, night:false},
  {round:2, gp:'Saudi Arabia GP', country:'Jeddah', track:'jeddah.png', flag:'saudi_arabia.png', laps:50, night:true},
  {round:3, gp:'Australia GP', country:'Australia', track:'australia.png', flag:'australia.png', laps:58, night:false},
  {round:4, gp:'Japan GP', country:'Japan', track:'japan.png', flag:'japan.png', laps:53, night:false},
  {round:5, gp:'China GP', country:'China', track:'china.png', flag:'china.png', laps:56, night:false},
  {round:6, gp:'Miami GP', country:'USA', track:'miami.png', flag:'usa.png', laps:57, night:false},
  {round:7, gp:'Imola GP', country:'Italy', track:'imola.png', flag:'italy.png', laps:63, night:false},
  {round:8, gp:'Monaco GP', country:'Monaco', track:'monaco.png', flag:'monaco.png', laps:78, night:false},
  {round:9, gp:'Canada GP', country:'Canada', track:'canada.png', flag:'canada.png', laps:70, night:false},
  {round:10, gp:'Spain GP', country:'Spain', track:'spain.png', flag:'spain.png', laps:66, night:false},
  {round:11, gp:'Austria GP', country:'Austria', track:'austria.png', flag:'austria.png', laps:71, night:false},
  {round:12, gp:'British GP', country:'United Kingdom', track:'silverstone.png', flag:'united_kingdom.png', laps:52, night:false},
  {round:13, gp:'Hungary GP', country:'Hungary', track:'hungary.png', flag:'hungary.png', laps:70, night:false},
  {round:14, gp:'Belgium GP', country:'Belgium', track:'spa.png', flag:'belgium.png', laps:44, night:false},
  {round:15, gp:'Netherlands GP', country:'Netherlands', track:'netherlands.png', flag:'netherlands.png', laps:72, night:false},
  {round:16, gp:'Italian GP', country:'Italy', track:'monza.png', flag:'italy.png', laps:53, night:false},
  {round:17, gp:'Singapore GP', country:'Singapore', track:'singapore.png', flag:'singapore.png', laps:62, night:true},
  {round:18, gp:'United States GP', country:'USA', track:'austin.png', flag:'usa.png', laps:56, night:false},
  {round:19, gp:'Mexico GP', country:'Mexico', track:'mexico.png', flag:'mexico.png', laps:71, night:false},
  {round:20, gp:'Brazil GP', country:'Brazil', track:'interlagos.png', flag:'brazil.png', laps:71, night:false},
  {round:21, gp:'Las Vegas GP', country:'USA', track:'las_vegas.png', flag:'usa.png', laps:50, night:true},
  {round:22, gp:'Qatar GP', country:'Qatar', track:'qatar.png', flag:'qatar.png', laps:57, night:true},
  {round:23, gp:'Abu Dhabi GP', country:'UAE', track:'abu_dhabi.png', flag:'uae.png', laps:58, night:true}
];
