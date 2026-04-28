
const TEAMS = [{"id": "mclaren", "name": "McLaren", "short": "McLaren", "base": "Woking, Reino Unido", "drivers": ["Lando Norris", "Oscar Piastri"], "card": "assets/teams/cards/mclaren.png", "logo": "assets/teams/cards/logos/mclaren.png", "accent": "#ff8a00", "budget": 245000000, "car": {"aero": 93, "power": 90, "chassis": 92, "reliability": 88, "tyres": 91}, "points": 0}, {"id": "red_bull", "name": "Red Bull Racing", "short": "Red Bull", "base": "Milton Keynes, Reino Unido", "drivers": ["Max Verstappen", "Isack Hadjar"], "card": "assets/teams/cards/red_bull.png", "logo": "assets/teams/cards/logos/red_bull.png", "accent": "#1a4dff", "budget": 255000000, "car": {"aero": 91, "power": 92, "chassis": 89, "reliability": 86, "tyres": 88}, "points": 0}, {"id": "ferrari", "name": "Ferrari", "short": "Ferrari", "base": "Maranello, Itália", "drivers": ["Lewis Hamilton", "Charles Leclerc"], "card": "assets/teams/cards/ferrari.png", "logo": "assets/teams/cards/logos/ferrari.png", "accent": "#ff1010", "budget": 270000000, "car": {"aero": 90, "power": 91, "chassis": 88, "reliability": 87, "tyres": 86}, "points": 0}, {"id": "mercedes", "name": "Mercedes-AMG Petronas", "short": "Mercedes AMG Petronas", "base": "Brackley, Reino Unido", "drivers": ["Kimi Antonelli", "George Russell"], "card": "assets/teams/cards/mercedes.png", "logo": "assets/teams/cards/logos/mercedes.png", "accent": "#00b9ad", "budget": 268000000, "car": {"aero": 92, "power": 94, "chassis": 91, "reliability": 90, "tyres": 89}, "points": 0}, {"id": "aston_martin", "name": "Aston Martin Aramco-Mercedes", "short": "Aston Martin", "base": "Silverstone, Reino Unido", "drivers": ["Fernando Alonso", "Lance Stroll"], "card": "assets/teams/cards/aston_martin.png", "logo": "assets/teams/cards/logos/aston_martin.png", "accent": "#00a67a", "budget": 210000000, "car": {"aero": 84, "power": 87, "chassis": 83, "reliability": 85, "tyres": 82}, "points": 0}, {"id": "alpine", "name": "Alpine", "short": "Alpine", "base": "Viry-Châtillon, França", "drivers": ["Pierre Gasly", "Franco Colapinto"], "card": "assets/teams/cards/alpine.png", "logo": "assets/teams/cards/logos/alpine.png", "accent": "#2488ff", "budget": 160000000, "car": {"aero": 78, "power": 80, "chassis": 77, "reliability": 76, "tyres": 78}, "points": 0}, {"id": "williams", "name": "Williams", "short": "Williams", "base": "Grove, Reino Unido", "drivers": ["Carlos Sainz Jr.", "Alex Albon"], "card": "assets/teams/cards/williams.png", "logo": "assets/teams/cards/logos/williams.png", "accent": "#1b74ff", "budget": 170000000, "car": {"aero": 81, "power": 83, "chassis": 79, "reliability": 80, "tyres": 79}, "points": 0}, {"id": "audi", "name": "Audi F1 Team", "short": "Audi F1 Team", "base": "Hinwil, Suíça", "drivers": ["Gabriel Bortoleto", "Nico Hulkenberg"], "card": "assets/teams/cards/audi.png", "logo": "assets/teams/cards/logos/audi.png", "accent": "#d8d8d8", "budget": 190000000, "car": {"aero": 80, "power": 82, "chassis": 80, "reliability": 78, "tyres": 77}, "points": 0}, {"id": "haas", "name": "Haas", "short": "Haas", "base": "Kannapolis, EUA", "drivers": ["Oliver Bearman", "Esteban Ocon"], "card": "assets/teams/cards/haas.png", "logo": "assets/teams/cards/logos/haas.png", "accent": "#e32222", "budget": 125000000, "car": {"aero": 74, "power": 78, "chassis": 73, "reliability": 75, "tyres": 74}, "points": 0}, {"id": "racing_bulls", "name": "Racing Bulls", "short": "Racing Bulls", "base": "Faenza, Itália", "drivers": ["Liam Lawson", "Arvid Lindblad"], "card": "assets/teams/cards/rb.png", "logo": "assets/teams/cards/logos/rb.png", "accent": "#2a75ff", "budget": 135000000, "car": {"aero": 76, "power": 80, "chassis": 75, "reliability": 76, "tyres": 76}, "points": 0}, {"id": "cadillac", "name": "Cadillac", "short": "Cadillac", "base": "Charlotte, EUA", "drivers": ["Valtteri Bottas", "Sergio Perez"], "card": "assets/teams/cards/cadillac.png", "logo": "assets/teams/cards/logos/cadillac.png", "accent": "#c7a45a", "budget": 150000000, "car": {"aero": 72, "power": 77, "chassis": 72, "reliability": 73, "tyres": 71}, "points": 0}];
const DRIVERS = [{"id": "lando_norris", "name": "Lando Norris", "flag": "🇬🇧", "teamId": "mclaren", "team": "McLaren", "number": "#1", "asset": "assets/drivers/lando_norris.png", "overall": 94, "form": 92, "morale": 82, "attributes": {"pace": 95, "racecraft": 94, "qualifying": 93, "tyres": 92, "wet": 91, "focus": 94}, "points": 0, "wins": 0}, {"id": "oscar_piastri", "name": "Oscar Piastri", "flag": "🇦🇺", "teamId": "mclaren", "team": "McLaren", "number": "#81", "asset": "assets/drivers/oscar_piastri.png", "overall": 91, "form": 89, "morale": 82, "attributes": {"pace": 92, "racecraft": 91, "qualifying": 90, "tyres": 89, "wet": 88, "focus": 91}, "points": 0, "wins": 0}, {"id": "max_verstappen", "name": "Max Verstappen", "flag": "🇳🇱", "teamId": "red_bull", "team": "Red Bull", "number": "#3", "asset": "assets/drivers/max_verstappen.png", "overall": 95, "form": 93, "morale": 82, "attributes": {"pace": 96, "racecraft": 95, "qualifying": 94, "tyres": 93, "wet": 92, "focus": 95}, "points": 0, "wins": 0}, {"id": "isack_hadjar", "name": "Isack Hadjar", "flag": "🇫🇷", "teamId": "red_bull", "team": "Red Bull", "number": "#6", "asset": "assets/drivers/isack_hadjar.png", "overall": 80, "form": 78, "morale": 82, "attributes": {"pace": 81, "racecraft": 80, "qualifying": 79, "tyres": 78, "wet": 77, "focus": 80}, "points": 0, "wins": 0}, {"id": "lewis_hamilton", "name": "Lewis Hamilton", "flag": "🇬🇧", "teamId": "ferrari", "team": "Ferrari", "number": "#44", "asset": "assets/drivers/lewis_hamilton.png", "overall": 90, "form": 88, "morale": 82, "attributes": {"pace": 91, "racecraft": 90, "qualifying": 89, "tyres": 88, "wet": 87, "focus": 90}, "points": 0, "wins": 0}, {"id": "charles_leclerc", "name": "Charles Leclerc", "flag": "🇲🇨", "teamId": "ferrari", "team": "Ferrari", "number": "#16", "asset": "assets/drivers/charles_leclerc.png", "overall": 92, "form": 90, "morale": 82, "attributes": {"pace": 93, "racecraft": 92, "qualifying": 91, "tyres": 90, "wet": 89, "focus": 92}, "points": 0, "wins": 0}, {"id": "andrea_antonelli", "name": "Kimi Antonelli", "flag": "🇮🇹", "teamId": "mercedes", "team": "Mercedes AMG Petronas", "number": "#12", "asset": "assets/drivers/andrea_antonelli.png", "overall": 85, "form": 83, "morale": 82, "attributes": {"pace": 86, "racecraft": 85, "qualifying": 84, "tyres": 83, "wet": 82, "focus": 85}, "points": 0, "wins": 0}, {"id": "george_russell", "name": "George Russell", "flag": "🇬🇧", "teamId": "mercedes", "team": "Mercedes AMG Petronas", "number": "#63", "asset": "assets/drivers/george_russell.png", "overall": 90, "form": 88, "morale": 82, "attributes": {"pace": 91, "racecraft": 90, "qualifying": 89, "tyres": 88, "wet": 87, "focus": 90}, "points": 0, "wins": 0}, {"id": "fernando_alonso", "name": "Fernando Alonso", "flag": "🇪🇸", "teamId": "aston_martin", "team": "Aston Martin", "number": "#14", "asset": "assets/drivers/fernando_alonso.png", "overall": 88, "form": 86, "morale": 82, "attributes": {"pace": 89, "racecraft": 88, "qualifying": 87, "tyres": 86, "wet": 85, "focus": 88}, "points": 0, "wins": 0}, {"id": "lance_stroll", "name": "Lance Stroll", "flag": "🇨🇦", "teamId": "aston_martin", "team": "Aston Martin", "number": "#18", "asset": "assets/drivers/lance_stroll.png", "overall": 78, "form": 76, "morale": 82, "attributes": {"pace": 79, "racecraft": 78, "qualifying": 77, "tyres": 76, "wet": 75, "focus": 78}, "points": 0, "wins": 0}, {"id": "pierre_gasly", "name": "Pierre Gasly", "flag": "🇫🇷", "teamId": "alpine", "team": "Alpine", "number": "#10", "asset": "assets/drivers/pierre_gasly.png", "overall": 84, "form": 82, "morale": 82, "attributes": {"pace": 85, "racecraft": 84, "qualifying": 83, "tyres": 82, "wet": 81, "focus": 84}, "points": 0, "wins": 0}, {"id": "franco_colapinto", "name": "Franco Colapinto", "flag": "🇦🇷", "teamId": "alpine", "team": "Alpine", "number": "#43", "asset": "assets/drivers/franco_colapinto.png", "overall": 79, "form": 77, "morale": 82, "attributes": {"pace": 80, "racecraft": 79, "qualifying": 78, "tyres": 77, "wet": 76, "focus": 79}, "points": 0, "wins": 0}, {"id": "carlos_sainz_jr", "name": "Carlos Sainz Jr.", "flag": "🇪🇸", "teamId": "williams", "team": "Williams", "number": "#55", "asset": "assets/drivers/carlos_sainz_jr.png", "overall": 86, "form": 84, "morale": 82, "attributes": {"pace": 87, "racecraft": 86, "qualifying": 85, "tyres": 84, "wet": 83, "focus": 86}, "points": 0, "wins": 0}, {"id": "alex_albon", "name": "Alex Albon", "flag": "🇹🇭", "teamId": "williams", "team": "Williams", "number": "#23", "asset": "assets/drivers/alex_albon.png", "overall": 83, "form": 81, "morale": 82, "attributes": {"pace": 84, "racecraft": 83, "qualifying": 82, "tyres": 81, "wet": 80, "focus": 83}, "points": 0, "wins": 0}, {"id": "gabriel_bortoleto", "name": "Gabriel Bortoleto", "flag": "🇧🇷", "teamId": "audi", "team": "Audi F1 Team", "number": "#5", "asset": "assets/drivers/gabriel_bortoleto.png", "overall": 78, "form": 76, "morale": 82, "attributes": {"pace": 79, "racecraft": 78, "qualifying": 77, "tyres": 76, "wet": 75, "focus": 78}, "points": 0, "wins": 0}, {"id": "nico_hulkenberg", "name": "Nico Hulkenberg", "flag": "🇩🇪", "teamId": "audi", "team": "Audi F1 Team", "number": "#27", "asset": "assets/drivers/nico_hulkenberg.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}, "points": 0, "wins": 0}, {"id": "oliver_bearman", "name": "Oliver Bearman", "flag": "🇬🇧", "teamId": "haas", "team": "Haas", "number": "#87", "asset": "assets/drivers/oliver_bearman.png", "overall": 79, "form": 77, "morale": 82, "attributes": {"pace": 80, "racecraft": 79, "qualifying": 78, "tyres": 77, "wet": 76, "focus": 79}, "points": 0, "wins": 0}, {"id": "esteban_ocon", "name": "Esteban Ocon", "flag": "🇫🇷", "teamId": "haas", "team": "Haas", "number": "#31", "asset": "assets/drivers/esteban_ocon.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}, "points": 0, "wins": 0}, {"id": "liam_lawson", "name": "Liam Lawson", "flag": "🇳🇿", "teamId": "racing_bulls", "team": "Racing Bulls", "number": "#30", "asset": "assets/drivers/liam_lawson.png", "overall": 80, "form": 78, "morale": 82, "attributes": {"pace": 81, "racecraft": 80, "qualifying": 79, "tyres": 78, "wet": 77, "focus": 80}, "points": 0, "wins": 0}, {"id": "arvid_lindblad", "name": "Arvid Lindblad", "flag": "🇬🇧", "teamId": "racing_bulls", "team": "Racing Bulls", "number": "#41", "asset": "assets/drivers/arvid_lindblad.png", "overall": 76, "form": 74, "morale": 82, "attributes": {"pace": 77, "racecraft": 76, "qualifying": 75, "tyres": 74, "wet": 73, "focus": 76}, "points": 0, "wins": 0}, {"id": "valtteri_bottas", "name": "Valtteri Bottas", "flag": "🇫🇮", "teamId": "cadillac", "team": "Cadillac", "number": "#77", "asset": "assets/drivers/valtteri_bottas.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}, "points": 0, "wins": 0}, {"id": "sergio_perez", "name": "Sergio Perez", "flag": "🇲🇽", "teamId": "cadillac", "team": "Cadillac", "number": "#11", "asset": "assets/drivers/sergio_perez.png", "overall": 84, "form": 82, "morale": 82, "attributes": {"pace": 85, "racecraft": 84, "qualifying": 83, "tyres": 82, "wet": 81, "focus": 84}, "points": 0, "wins": 0}];
const CALENDAR = [{"round": 1, "gp": "GP da Austrália", "country": "Austrália", "track": "Melbourne", "laps": 58, "asset": "assets/tracks/australia.png"}, {"round": 2, "gp": "GP da China", "country": "China", "track": "Shanghai", "laps": 56, "asset": "assets/tracks/china.png"}, {"round": 3, "gp": "GP do Japão", "country": "Japão", "track": "Suzuka", "laps": 53, "asset": "assets/tracks/japan.png"}, {"round": 4, "gp": "GP do Bahrein", "country": "Bahrein", "track": "Sakhir", "laps": 57, "asset": "assets/tracks/bahrain.png"}, {"round": 5, "gp": "GP da Arábia Saudita", "country": "Arábia Saudita", "track": "Jeddah", "laps": 50, "asset": "assets/tracks/jeddah.png"}, {"round": 6, "gp": "GP de Miami", "country": "EUA", "track": "Miami", "laps": 57, "asset": "assets/tracks/miami.png"}, {"round": 7, "gp": "GP de Mônaco", "country": "Mônaco", "track": "Monaco", "laps": 78, "asset": "assets/tracks/monaco.png"}, {"round": 8, "gp": "GP do Canadá", "country": "Canadá", "track": "Montreal", "laps": 70, "asset": "assets/tracks/canada.png"}, {"round": 9, "gp": "GP da Espanha", "country": "Espanha", "track": "Barcelona", "laps": 66, "asset": "assets/tracks/spain.png"}, {"round": 10, "gp": "GP da Áustria", "country": "Áustria", "track": "Red Bull Ring", "laps": 71, "asset": "assets/tracks/austria.png"}, {"round": 11, "gp": "GP da Inglaterra", "country": "Reino Unido", "track": "Silverstone", "laps": 52, "asset": "assets/tracks/silverstone.png"}, {"round": 12, "gp": "GP da Bélgica", "country": "Bélgica", "track": "Spa", "laps": 44, "asset": "assets/tracks/belgium.png"}, {"round": 13, "gp": "GP da Hungria", "country": "Hungria", "track": "Hungaroring", "laps": 70, "asset": "assets/tracks/hungary.png"}, {"round": 14, "gp": "GP da Holanda", "country": "Holanda", "track": "Zandvoort", "laps": 72, "asset": "assets/tracks/netherlands.png"}, {"round": 15, "gp": "GP da Itália", "country": "Itália", "track": "Monza", "laps": 53, "asset": "assets/tracks/italy.png"}, {"round": 16, "gp": "GP do Azerbaijão", "country": "Azerbaijão", "track": "Baku", "laps": 51, "asset": "assets/tracks/baku.png"}, {"round": 17, "gp": "GP de Singapura", "country": "Singapura", "track": "Marina Bay", "laps": 62, "asset": "assets/tracks/singapore.png"}, {"round": 18, "gp": "GP dos EUA", "country": "EUA", "track": "Austin", "laps": 56, "asset": "assets/tracks/austin.png"}, {"round": 19, "gp": "GP do México", "country": "México", "track": "Mexico City", "laps": 71, "asset": "assets/tracks/mexico.png"}, {"round": 20, "gp": "GP de São Paulo", "country": "Brasil", "track": "Interlagos", "laps": 71, "asset": "assets/tracks/interlagos.png"}, {"round": 21, "gp": "GP de Las Vegas", "country": "EUA", "track": "Las Vegas", "laps": 50, "asset": "assets/tracks/las_vegas.png"}, {"round": 22, "gp": "GP do Catar", "country": "Catar", "track": "Lusail", "laps": 57, "asset": "assets/tracks/qatar.png"}, {"round": 23, "gp": "GP de Abu Dhabi", "country": "Emirados Árabes", "track": "Yas Marina", "laps": 58, "asset": "assets/tracks/abu_dhabi.png"}];
const STORE = "f1_ve_state_v0120";

const STATE = {
  career: "Rumo ao Topo",
  country: "🇧🇷 Brasil",
  avatar: "assets/avatar/avatar1.png",
  teamName: "McLaren",
  round: 1,
  pace: "normal",
  tyre: "medium",
  carBoost: { aero: 0, power: 0, chassis: 0, reliability: 0, tyres: 0 },
  standings: null,
  raceHistory: []
};

const POINTS = [25,18,15,12,10,8,6,4,2,1];
const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));

function team() { return TEAMS.find(t => t.name === STATE.teamName) || TEAMS[0]; }
function selectedDrivers() { const t = team(); return DRIVERS.filter(d => d.teamId === t.id); }
function nextRace() { return CALENDAR.find(r => r.round === STATE.round) || CALENDAR[CALENDAR.length - 1]; }

function baseStandings() {
  const driverRows = DRIVERS.map(d => ({ id:d.id, name:d.name, team:d.team, teamId:d.teamId, flag:d.flag, points:0, wins:0, asset:d.asset, overall:d.overall }));
  const teamRows = TEAMS.map(t => ({ id:t.id, name:t.short, full:t.name, logo:t.logo, points:0, wins:0 }));
  return { drivers: driverRows, teams: teamRows };
}

function save() {
  localStorage.setItem(STORE, JSON.stringify(STATE));
  localStorage.setItem("f1_ve_visual_state", JSON.stringify(STATE));
}

function load() {
  try {
    const raw = localStorage.getItem(STORE) || localStorage.getItem("f1_ve_visual_state");
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(STATE, saved);
    if (saved.team && typeof saved.team === "string") STATE.teamName = saved.team;
  } catch(e) {}
  if (!STATE.standings) STATE.standings = baseStandings();
}

function markSelected() {
  $all("[data-avatar]").forEach(btn => btn.classList.toggle("selected", btn.dataset.avatar === STATE.avatar));
  $all("[data-team]").forEach(btn => btn.classList.toggle("selected", btn.dataset.team === STATE.teamName));
  $all("[data-pace]").forEach(btn => btn.classList.toggle("selected", btn.dataset.pace === STATE.pace));
  $all("[data-tyre]").forEach(btn => btn.classList.toggle("selected", btn.dataset.tyre === STATE.tyre));
}

function applyAvatar() {
  $all(".profile-avatar-img").forEach(img => img.src = STATE.avatar);
  $all(".profile-img").forEach(el => el.style.backgroundImage = "none");
}

function readForm() {
  const name = $("#careerNameInput");
  if (name && name.value.trim()) STATE.career = name.value.trim();
  const country = $("#countryInput");
  if (country) STATE.country = country.value.replace("BRASIL","Brasil").replace("REINO UNIDO","Reino Unido").replace("ITÁLIA","Itália").replace("ALEMANHA","Alemanha");
}

function carStats() {
  const base = team().car;
  const boost = STATE.carBoost || {};
  const out = {};
  Object.keys(base).forEach(k => out[k] = Math.min(99, base[k] + (boost[k] || 0)));
  return out;
}

function driverCard(d) {
  return `<div class="pilot-card"><div class="pilot-img" style="background-image:url('${d.asset}')"></div><b>${d.name.toUpperCase()}</b><span>${d.flag} ${d.team} • ${d.number} • Geral ${d.overall}</span></div>`;
}

function statCards(stats) {
  const labels = {aero:"AERODINÂMICA", power:"MOTOR", chassis:"CHASSIS", reliability:"CONFIABILIDADE", tyres:"PNEUS"};
  return Object.entries(stats).map(([k,v]) => `<div class="stat-card"><b>${labels[k] || k}</b><strong>${v}</strong><i><em style="width:${v}%"></em></i></div>`).join("");
}

function updateTeamLogic() {
  const t = team();
  const ds = selectedDrivers();
  const driverBox = $("#selectedTeamDrivers");
  if (driverBox) driverBox.innerHTML = ds.map(driverCard).join("");

  const stats = carStats();
  if ($("#selectedTeamStats")) $("#selectedTeamStats").innerHTML = statCards(stats);
  if ($("#workshopStats")) $("#workshopStats").innerHTML = statCards(stats);

  updateRaceScreen();
  renderCalendar();
  renderStandings();
}

function renderCalendar() {
  const list = $("#calendarList");
  if (!list) return;
  list.innerHTML = CALENDAR.map(r => `<div class="calendar-row ${r.round===STATE.round?'current':''}"><b>${r.round}. ${r.gp}</b><span>${r.track} • ${r.laps} voltas</span></div>`).join("");
}

function updateRaceScreen() {
  const t = team();
  const ds = selectedDrivers();
  const race = nextRace();
  const stats = carStats();

  if ($("#raceMeta")) $("#raceMeta").textContent = `${race.gp} • ${race.track} • ${race.laps} voltas`;
  if ($("#raceTrackImg")) $("#raceTrackImg").src = race.asset;
  if ($("#raceTeamLogo")) $("#raceTeamLogo").src = t.logo;

  const avgDriver = Math.round(ds.reduce((s,d)=>s+d.overall,0) / Math.max(1, ds.length));
  const carAvg = Math.round(Object.values(stats).reduce((a,b)=>a+b,0) / 5);
  const reliability = stats.reliability;
  const paceMod = STATE.pace === "attack" ? 6 : STATE.pace === "conserve" ? -2 : 2;
  const tyreMod = STATE.tyre === "soft" ? 4 : STATE.tyre === "hard" ? -1 : 2;
  const predicted = Math.round(avgDriver*.54 + carAvg*.38 + reliability*.08 + paceMod + tyreMod);

  if ($("#raceKpis")) {
    $("#raceKpis").innerHTML = `
      <div><b>${avgDriver}</b><span>Dupla</span></div>
      <div><b>${carAvg}</b><span>Carro</span></div>
      <div><b>${reliability}</b><span>Conf.</span></div>
      <div><b>${predicted}</b><span>Força</span></div>`;
  }

  if ($("#raceDrivers")) {
    $("#raceDrivers").innerHTML = ds.map(d => `
      <div class="race-driver-card">
        <img src="${d.asset}" onerror="this.style.display='none'">
        <div><b>${d.name}</b><span>${d.flag} ${d.number} • ${d.team}</span></div>
        <strong>${d.overall}</strong>
      </div>`).join("");
  }

  if ($("#telemetryGrid")) {
    const rpm = STATE.pace === "attack" ? "12.800" : STATE.pace === "conserve" ? "10.900" : "11.700";
    const tyreLife = STATE.tyre === "soft" ? "62%" : STATE.tyre === "hard" ? "91%" : "78%";
    const fuel = STATE.pace === "attack" ? "89%" : STATE.pace === "conserve" ? "97%" : "93%";
    $("#telemetryGrid").innerHTML = `
      <div><b>RPM</b><strong>${rpm}</strong></div>
      <div><b>PNEU</b><strong>${STATE.tyre.toUpperCase()}</strong></div>
      <div><b>VIDA PNEU</b><strong>${tyreLife}</strong></div>
      <div><b>COMBUSTÍVEL</b><strong>${fuel}</strong></div>
      <div><b>ERS</b><strong>84%</strong></div>
      <div><b>SETUP</b><strong>${predicted}</strong></div>`;
  }
}

function applyTeam() {
  const t = team();
  if ($("#confirmTeam")) $("#confirmTeam").textContent = t.short.toUpperCase();
  if ($("#confirmTeamBase")) $("#confirmTeamBase").textContent = "Base: " + t.base;
  if ($("#confirmTeamDrivers")) $("#confirmTeamDrivers").textContent = "Pilotos: " + t.drivers.join(" • ");
  if ($("#confirmTeamLogo")) $("#confirmTeamLogo").src = t.logo;
  if ($("#confirmTeamCard")) $("#confirmTeamCard").src = t.card;
  if ($("#confirmCarName")) $("#confirmCarName").textContent = t.short.toUpperCase() + " 2026";
  if ($("#lobbyTeam")) $("#lobbyTeam").textContent = t.short.toUpperCase();
  if ($("#lobbyTeamLogo")) $("#lobbyTeamLogo").src = t.logo;
  const lobby = $(".lobby-screen");
  if (lobby) lobby.style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.10) 45%,#050505 83%), url("${t.card}")`;
  document.documentElement.style.setProperty("--cyan", t.accent || "#00b9ad");
  updateTeamLogic();
}

function applyText() {
  if ($("#confirmCareer")) $("#confirmCareer").textContent = STATE.career;
  if ($("#confirmCountry")) $("#confirmCountry").textContent = STATE.country + " • Avatar selecionado";
  if ($("#lobbyCareer")) $("#lobbyCareer").textContent = STATE.career.toUpperCase();
  if ($("#lobbyCountry")) $("#lobbyCountry").textContent = STATE.country.toUpperCase();
}

function applyAll() { readForm(); applyAvatar(); applyTeam(); applyText(); markSelected(); save(); }

function showScreen(id) {
  $all(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  $all(".game-nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.goto === id));
  applyAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function simulateRace() {
  const t = team();
  const ds = selectedDrivers();
  const stats = carStats();
  const teamPower = Object.values(stats).reduce((a,b)=>a+b,0)/5;
  const paceBonus = STATE.pace === "attack" ? 8 : STATE.pace === "conserve" ? -1 : 3;
  const reliabilityRisk = STATE.pace === "attack" ? 10 : STATE.pace === "conserve" ? -4 : 3;
  const grid = DRIVERS.map(d => {
    const isUser = d.teamId === t.id;
    const car = TEAMS.find(tm => tm.id === d.teamId)?.car || t.car;
    const carAvg = Object.values(car).reduce((a,b)=>a+b,0)/5;
    const base = d.overall*.55 + carAvg*.38 + (isUser ? paceBonus : 0);
    const variance = Math.random()*12 - 4;
    const failure = isUser && Math.random()*100 > (stats.reliability - reliabilityRisk);
    return {...d, score: Math.round(base + variance), failure};
  }).sort((a,b)=> b.score - a.score);

  grid.forEach((d,i) => {
    const pts = POINTS[i] || 0;
    const row = STATE.standings.drivers.find(x => x.id === d.id);
    if (row && !d.failure) { row.points += pts; if (i===0) row.wins += 1; }
    const teamRow = STATE.standings.teams.find(x => x.id === d.teamId);
    if (teamRow && !d.failure) { teamRow.points += pts; if (i===0) teamRow.wins += 1; }
  });

  const userRows = grid.filter(d => d.teamId === t.id);
  STATE.raceHistory.unshift({ round:STATE.round, gp:nextRace().gp, results:userRows.map((d,i)=>({name:d.name,pos:grid.indexOf(d)+1, failure:d.failure})) });
  STATE.round = Math.min(CALENDAR.length, STATE.round + 1);

  const result = $("#raceResult");
  if (result) result.innerHTML = `<h3>Resultado simulado</h3>${userRows.map(d=>`<div class="calendar-row"><b>P${grid.indexOf(d)+1} • ${d.name}</b><span>${d.failure ? 'Falha mecânica' : t.short + ' • score ' + d.score}</span></div>`).join("")}`;

  updateRaceScreen();
  renderCalendar();
  renderStandings();
  save();
}

function renderStandings(type = null) {
  const table = $("#standingsTable");
  if (!table || !STATE.standings) return;
  const selected = type || document.querySelector("[data-standings-tab].selected")?.dataset.standingsTab || "drivers";

  if (selected === "teams") {
    const rows = [...STATE.standings.teams].sort((a,b)=>b.points-a.points);
    table.innerHTML = rows.map((r,i)=>`<div class="standing-row"><b>${i+1}</b><span>${r.name}</span><strong>${r.points} pts</strong></div>`).join("");
  } else {
    const rows = [...STATE.standings.drivers].sort((a,b)=>b.points-a.points || b.overall-a.overall);
    table.innerHTML = rows.map((r,i)=>`<div class="standing-row"><b>${i+1}</b><span>${r.flag} ${r.name}<small>${r.team}</small></span><strong>${r.points} pts</strong></div>`).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  load();

  $all("[data-goto]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.goto)));
  $all("[data-avatar]").forEach(btn => btn.addEventListener("click", () => { STATE.avatar = btn.dataset.avatar; applyAll(); }));
  $all("[data-team]").forEach(btn => btn.addEventListener("click", () => { STATE.teamName = btn.dataset.team; STATE.standings = baseStandings(); STATE.round = 1; applyAll(); }));

  $all("[data-mode]").forEach(btn => btn.addEventListener("click", () => { $all("[data-mode]").forEach(x=>x.classList.remove("selected")); btn.classList.add("selected"); }));
  $all("[data-difficulty]").forEach(btn => btn.addEventListener("click", () => { $all("[data-difficulty]").forEach(x=>x.classList.remove("selected")); btn.classList.add("selected"); }));

  $all("[data-pace]").forEach(btn => btn.addEventListener("click", () => { STATE.pace = btn.dataset.pace; applyAll(); }));
  $all("[data-tyre]").forEach(btn => btn.addEventListener("click", () => { STATE.tyre = btn.dataset.tyre; applyAll(); }));

  $all("[data-standings-tab]").forEach(btn => btn.addEventListener("click", () => {
    $all("[data-standings-tab]").forEach(x=>x.classList.remove("selected"));
    btn.classList.add("selected");
    renderStandings(btn.dataset.standingsTab);
  }));

  const start = $("#startCareer"); if (start) start.addEventListener("click", () => showScreen("screenLobby"));
  const dev = $("#developAero"); if (dev) dev.addEventListener("click", () => { STATE.carBoost.aero = (STATE.carBoost.aero || 0) + 2; applyAll(); });
  const sim = $("#simulateRace"); if (sim) sim.addEventListener("click", simulateRace);
  const name = $("#careerNameInput"); if (name) name.addEventListener("input", applyAll);
  const country = $("#countryInput"); if (country) country.addEventListener("change", applyAll);

  applyAll();
});


/* v0.13.0 live race overlay */
let LIVE_TIMER=null;
function liveTeam(){ return typeof team==="function" ? team() : TEAMS[0]; }
function liveDrivers(){ return typeof selectedDrivers==="function" ? selectedDrivers() : DRIVERS.filter(d=>d.teamId===liveTeam().id); }
function liveRace(){ return typeof nextRace==="function" ? nextRace() : CALENDAR[0]; }
function liveStats(){ return typeof carStats==="function" ? carStats() : liveTeam().car; }
function ensureLiveRace(){
  if(STATE.liveRace && !STATE.liveRace.finished) return;
  const r=liveRace(), t=liveTeam();
  const grid=DRIVERS.map(d=>{
    const tm=TEAMS.find(x=>x.id===d.teamId)||t;
    const carAvg=Object.values(tm.car).reduce((a,b)=>a+b,0)/5;
    return {...d,pos:0,gap:0,tyreLife:100,fuel:100,out:false,score:d.overall*.58+carAvg*.42+(Math.random()*8-4)}
  }).sort((a,b)=>b.score-a.score);
  grid.forEach((d,i)=>{d.pos=i+1;d.gap=i?Math.round((i*1.6+Math.random()*2)*10)/10:0;});
  STATE.liveRace={running:false,finished:false,lap:0,totalLaps:r.laps,raceName:r.gp,track:r.track,grid,commentary:[`Pré-corrida em ${r.track}. ${t.short} prepara ${liveDrivers().map(d=>d.name).join(" e ")}.`]};
}
function liveComment(txt){ STATE.liveRace.commentary.push(`V${STATE.liveRace.lap}: ${txt}`); }
function renderLiveRace(){
  ensureLiveRace();
  const l=STATE.liveRace,t=liveTeam();
  const byPos=[...l.grid].sort((a,b)=>a.pos-b.pos);
  const lap=document.getElementById("liveLap"); if(lap) lap.textContent=`${l.lap} / ${l.totalLaps}`;
  const sp=document.getElementById("liveSpeed"); if(sp) sp.textContent=`${STATE.raceSpeed||1}x`;
  const st=document.getElementById("liveStatus"); if(st) st.textContent=l.finished?"Finalizada":l.running?"Ao vivo":"Pausada";
  const meta=document.getElementById("raceMeta"); if(meta) meta.textContent=`${l.raceName} • ${l.track} • ${l.totalLaps} voltas`;
  const logo=document.getElementById("raceTeamLogo"); if(logo) logo.src=t.logo;
  const grid=document.getElementById("liveGrid");
  if(grid) grid.innerHTML=byPos.map(d=>`<div class="live-grid-row ${d.teamId===t.id?'user-team':''} ${d.out?'out':''}"><b>P${d.pos}</b><img src="${d.asset}" onerror="this.style.display='none'"><span>${d.flag} ${d.name}<small>${d.team} • Gap ${d.gap.toFixed(1)}s • Pneu ${Math.max(0,Math.round(d.tyreLife))}%</small></span><strong>${d.out?'OUT':d.number}</strong></div>`).join("");
  const comm=document.getElementById("liveCommentary");
  if(comm) comm.innerHTML=l.commentary.slice(-14).reverse().map(x=>`<div>${x}</div>`).join("");
  const ds=liveDrivers(), rd=document.getElementById("raceDrivers");
  if(rd) rd.innerHTML=ds.map(d=>`<div class="race-driver-card"><img src="${d.asset}" onerror="this.style.display='none'"><div><b>${d.name}</b><span>${d.flag} ${d.number} • ${d.team}</span></div><strong>${d.overall}</strong></div>`).join("");
  const lead=byPos.find(d=>d.teamId===t.id)||byPos[0];
  const tel=document.getElementById("telemetryGrid");
  if(tel) tel.innerHTML=`<div><b>RPM</b><strong>${STATE.pace==="attack"?"13.100":STATE.pace==="conserve"?"10.700":"11.900"}</strong></div><div><b>PILOTO</b><strong>P${lead.pos}</strong></div><div><b>PNEU</b><strong>${Math.max(0,Math.round(lead.tyreLife))}%</strong></div><div><b>COMB.</b><strong>${Math.max(0,Math.round(lead.fuel))}%</strong></div><div><b>RITMO</b><strong>${(STATE.pace||"normal").toUpperCase()}</strong></div><div><b>GAP</b><strong>${lead.gap.toFixed(1)}s</strong></div>`;
}
function liveTick(){
  const l=STATE.liveRace; if(!l||!l.running||l.finished) return;
  l.lap++;
  const t=liveTeam(), stats=liveStats();
  l.grid.forEach(d=>{
    if(d.out) return;
    const user=d.teamId===t.id;
    d.tyreLife-= (STATE.tyre==="soft"?2.2:STATE.tyre==="hard"?1.0:1.55) + (user&&STATE.pace==="attack"?1.15:user&&STATE.pace==="conserve"?-0.35:0) + Math.random()*.7;
    d.fuel-= user&&STATE.pace==="attack"?1.9:user&&STATE.pace==="conserve"?1.05:1.35;
    const rel=user?stats.reliability:(TEAMS.find(tm=>tm.id===d.teamId)?.car.reliability||80);
    if(l.lap>5 && Math.random()*1000>(995+rel/18)){d.out=true;d.pos=l.grid.length;liveComment(`Problema mecânico para ${d.name}! Abandono.`);}
  });
  const active=[...l.grid].filter(d=>!d.out).sort((a,b)=>a.pos-b.pos);
  for(let i=1;i<active.length;i++){
    const car=active[i], ahead=active[i-1];
    const user=car.teamId===t.id;
    const attack=(car.overall-ahead.overall)+(user&&STATE.pace==="attack"?2.0:user&&STATE.pace==="conserve"?-.4:.6)+(car.tyreLife-ahead.tyreLife)/22+(Math.random()*6-2.3);
    if(attack>4.1){const p=car.pos;car.pos=ahead.pos;ahead.pos=p;liveComment(`${car.name} ultrapassa ${ahead.name} na disputa por P${car.pos}.`);break;}
  }
  l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{if(!d.out)d.pos=i+1;d.gap=i?Math.max(.2,d.gap+(Math.random()*1.4-.45)):0;});
  if(l.lap===1) liveComment("Largada! Os carros aceleram para a primeira curva.");
  if(l.lap%7===0) liveComment(`${t.short}: ${l.grid.filter(d=>d.teamId===t.id).sort((a,b)=>a.pos-b.pos).map(d=>`${d.name} P${d.pos}`).join(" / ")}.`);
  if(l.lap>=l.totalLaps) finishLiveRace();
  renderLiveRace(); if(typeof save==="function") save();
}
function finishLiveRace(){
  const l=STATE.liveRace;if(!l)return;l.running=false;l.finished=true;
  const ordered=[...l.grid].sort((a,b)=>a.pos-b.pos);
  ordered.forEach((d,i)=>{const pts=d.out?0:(POINTS[i]||0);const dr=STATE.standings.drivers.find(x=>x.id===d.id);if(dr){dr.points+=pts;if(i===0&&!d.out)dr.wins++}const tr=STATE.standings.teams.find(x=>x.id===d.teamId);if(tr){tr.points+=pts;if(i===0&&!d.out)tr.wins++}});
  liveComment(`Bandeirada! ${ordered[0].name} vence o ${l.raceName}.`);
  const res=document.getElementById("raceResult"), t=liveTeam();
  if(res) res.innerHTML=`<h3>Resultado final</h3>${ordered.filter(d=>d.teamId===t.id).map(d=>`<div class="calendar-row"><b>P${d.pos} • ${d.name}</b><span>${d.out?'Abandono':'Corrida concluída'}</span></div>`).join("")}`;
  STATE.round=Math.min(CALENDAR.length,STATE.round+1);
  if(typeof renderStandings==="function") renderStandings();
}
function startLiveRace(){ensureLiveRace();STATE.liveRace.running=true;liveComment("Corrida iniciada pelo comando da equipe.");renderLiveRace();}
function pauseLiveRace(){ensureLiveRace();STATE.liveRace.running=false;liveComment("Simulação pausada pela equipe.");renderLiveRace();}
function setupLiveRaceLoop(){if(LIVE_TIMER)clearInterval(LIVE_TIMER);LIVE_TIMER=setInterval(()=>{for(let i=0;i<(STATE.raceSpeed||1);i++)liveTick();},1200);}
document.addEventListener("DOMContentLoaded",()=>{
  const start=document.getElementById("startLiveRace"); if(start) start.addEventListener("click",startLiveRace);
  const pause=document.getElementById("pauseLiveRace"); if(pause) pause.addEventListener("click",pauseLiveRace);
  document.querySelectorAll("[data-speed]").forEach(b=>b.addEventListener("click",()=>{STATE.raceSpeed=Number(b.dataset.speed||1);document.querySelectorAll("[data-speed]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");renderLiveRace();}));
  setupLiveRaceLoop(); setTimeout(renderLiveRace,200);
});


/* v0.14.0 - podium + radio + pit mandatory + slower race */
function v14PatchRaceState() {
  ensureLiveRace();
  const l = STATE.liveRace;
  if (!l.v14) {
    l.v14 = true;
    l.tickProgress = 0;
    l.pitWindowStart = Math.max(4, Math.floor(l.totalLaps * 0.28));
    l.pitWindowEnd = Math.max(l.pitWindowStart + 3, Math.floor(l.totalLaps * 0.72));
    l.pitMandatory = true;
    l.podium = null;
    l.radio = [
      "Engenheiro: Rádio aberto. Vamos monitorar pneus, combustível e janela de pit.",
      `Engenheiro: Janela provável entre V${l.pitWindowStart} e V${l.pitWindowEnd}.`
    ];
    l.grid.forEach(d => {
      d.pitted = false;
      d.pitCooldown = 0;
      d.tyreLife = d.tyreLife || 100;
      d.brakeTemp = 620 + Math.round(Math.random()*80);
      d.engineTemp = 101 + Math.round(Math.random()*5);
      d.ers = 84;
      d.sector = "S1";
      d.lastLap = "--";
    });
  }
}
function addRadio(text) {
  v14PatchRaceState();
  STATE.liveRace.radio.push(`V${STATE.liveRace.lap}: ${text}`);
}
const oldRenderLiveRaceV13 = renderLiveRace;
renderLiveRace = function() {
  v14PatchRaceState();
  const l = STATE.liveRace;
  oldRenderLiveRaceV13();
  const radio = document.getElementById("radioPanel");
  if (radio) radio.innerHTML = l.radio.slice(-8).reverse().map(x=>`<div>${x}</div>`).join("");
  const pitStatus = document.getElementById("pitStatus");
  if (pitStatus) {
    const user = l.grid.filter(d=>d.teamId===liveTeam().id);
    const done = user.every(d=>d.pitted);
    pitStatus.textContent = done ? "Parada obrigatória concluída" : `Parada obrigatória pendente • janela V${l.pitWindowStart}-V${l.pitWindowEnd}`;
    pitStatus.classList.toggle("done", done);
  }
  updateRaceTelemetryLiveV14();
};
function requestPitStop() {
  v14PatchRaceState();
  const l = STATE.liveRace;
  const userDrivers = l.grid.filter(d=>d.teamId===liveTeam().id && !d.out);
  const target = userDrivers.sort((a,b)=>a.tyreLife-b.tyreLife)[0];
  if (!target) return;
  if (target.pitted) { addRadio(`${target.name}: Já fiz minha parada. Mantendo plano.`); renderLiveRace(); return; }
  target.pitted = true;
  target.pitCooldown = 1;
  target.tyreLife = STATE.tyre === "soft" ? 92 : STATE.tyre === "medium" ? 96 : 98;
  target.fuel = Math.max(0, target.fuel - 1);
  target.pos = Math.min(l.grid.length, target.pos + 4 + Math.floor(Math.random()*3));
  addRadio(`Box, box! ${target.name} entra para troca obrigatória. Perde posições, mas volta com pneus novos.`);
  liveComment(`${target.name} faz pit stop obrigatório e retorna em P${target.pos}.`);
  l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{ if(!d.out) d.pos=i+1; });
  renderLiveRace();
  save();
}
function updateRaceTelemetryLiveV14() {
  const l = STATE.liveRace;
  if (!l || !document.getElementById("telemetryGrid")) return;
  const user = l.grid.filter(d=>d.teamId===liveTeam().id).sort((a,b)=>a.pos-b.pos)[0] || l.grid[0];
  user.brakeTemp = Math.max(520, Math.min(910, (user.brakeTemp||650) + (STATE.pace==="attack"?12:STATE.pace==="conserve"?-8:3) + Math.random()*16-7));
  user.engineTemp = Math.max(94, Math.min(124, (user.engineTemp||104) + (STATE.pace==="attack"?0.9:STATE.pace==="conserve"?-0.4:0.2) + Math.random()*1.4-.6));
  user.ers = Math.max(0, Math.min(100, (user.ers||84) + (STATE.pace==="attack"?-2.8:STATE.pace==="conserve"?1.8:-0.6)));
  const rpm = STATE.pace==="attack" ? "13.050" : STATE.pace==="conserve" ? "10.650" : "11.850";
  const risk = user.tyreLife < 30 ? "ALTO" : user.engineTemp > 116 ? "MÉDIO" : "BAIXO";
  document.getElementById("telemetryGrid").innerHTML = `
    <div><b>RPM</b><strong>${rpm}</strong></div>
    <div><b>POSIÇÃO</b><strong>P${user.pos}</strong></div>
    <div><b>PNEU</b><strong>${Math.max(0,Math.round(user.tyreLife))}%</strong></div>
    <div><b>COMB.</b><strong>${Math.max(0,Math.round(user.fuel))}%</strong></div>
    <div><b>ERS</b><strong>${Math.round(user.ers)}%</strong></div>
    <div><b>FREIO</b><strong>${Math.round(user.brakeTemp)}°C</strong></div>
    <div><b>MOTOR</b><strong>${Math.round(user.engineTemp)}°C</strong></div>
    <div><b>SETOR</b><strong>${user.sector||"S1"}</strong></div>
    <div><b>RISCO</b><strong>${risk}</strong></div>`;
}
function liveTickV14() {
  const l=STATE.liveRace; if(!l||!l.running||l.finished) return;
  v14PatchRaceState();
  l.tickProgress += 1;
  const threshold = 3; // reduz a velocidade: 1x precisa de 3 ciclos para uma volta
  if (l.tickProgress < threshold) { renderLiveRace(); return; }
  l.tickProgress = 0;
  l.lap++;
  const t=liveTeam(), stats=liveStats();
  l.grid.forEach(d=>{
    if(d.out) return;
    d.sector = ["S1","S2","S3"][Math.floor(Math.random()*3)];
    const user=d.teamId===t.id;
    const tyreBase = STATE.tyre==="soft"?1.55:STATE.tyre==="hard"?0.72:1.05;
    const paceWear = user&&STATE.pace==="attack"?0.8:user&&STATE.pace==="conserve"?-0.28:0.15;
    d.tyreLife -= Math.max(.25, tyreBase + paceWear + Math.random()*.38);
    d.fuel -= user&&STATE.pace==="attack"?0.95:user&&STATE.pace==="conserve"?0.48:0.68;
    d.ers = Math.max(0, Math.min(100, (d.ers||84) + (user&&STATE.pace==="attack"?-1.2:user&&STATE.pace==="conserve"?0.8:-0.2)));
    const rel=user?stats.reliability:(TEAMS.find(tm=>tm.id===d.teamId)?.car.reliability||80);
    if(l.lap>8 && Math.random()*1800>(1794+rel/22)){d.out=true;d.pos=l.grid.length;liveComment(`Problema mecânico para ${d.name}! Abandono.`);}
  });
  const userDrivers = l.grid.filter(d=>d.teamId===t.id&&!d.out);
  userDrivers.forEach(d=>{
    if(!d.pitted && l.lap>=l.pitWindowStart && l.lap<=l.pitWindowEnd && d.tyreLife<48 && Math.random()<0.45){
      addRadio(`${d.name}: Pneus caindo muito. Podemos ir ao box?`);
    }
    if(!d.pitted && l.lap>l.pitWindowEnd){
      d.pos=Math.min(l.grid.length,d.pos+2);
      addRadio(`Engenheiro: ${d.name}, parada obrigatória atrasada. Penalidade estratégica aplicada.`);
      requestPitStop();
    }
  });
  const active=[...l.grid].filter(d=>!d.out).sort((a,b)=>a.pos-b.pos);
  for(let i=1;i<active.length;i++){
    const car=active[i], ahead=active[i-1], user=car.teamId===t.id;
    const attack=(car.overall-ahead.overall)+(user&&STATE.pace==="attack"?1.35:user&&STATE.pace==="conserve"?-.5:.45)+(car.tyreLife-ahead.tyreLife)/28+(Math.random()*5.2-2.2);
    if(attack>4.4){const p=car.pos;car.pos=ahead.pos;ahead.pos=p;liveComment(`${car.name} passa ${ahead.name} na briga por P${car.pos}.`);break;}
  }
  l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{if(!d.out)d.pos=i+1;d.gap=i?Math.max(.2,d.gap+(Math.random()*0.9-.25)):0;});
  if(l.lap===1) liveComment("Largada! Os carros entram na primeira curva.");
  if(l.lap===l.pitWindowStart) addRadio("Engenheiro: Janela de pit stop aberta.");
  if(l.lap===Math.floor(l.totalLaps/2)) liveComment("Metade da corrida. Estratégia de box passa a ser decisiva.");
  if(l.lap%6===0) addRadio(`${t.short}: ${userDrivers.map(d=>`${d.name} P${d.pos} pneu ${Math.round(d.tyreLife)}%`).join(" / ")}.`);
  if(l.lap>=l.totalLaps) finishLiveRaceV14();
  renderLiveRace(); save();
}
function finishLiveRaceV14(){
  const l=STATE.liveRace;if(!l)return;l.running=false;l.finished=true;
  const ordered=[...l.grid].sort((a,b)=>a.pos-b.pos);
  ordered.forEach((d,i)=>{const pts=d.out?0:(POINTS[i]||0);const dr=STATE.standings.drivers.find(x=>x.id===d.id);if(dr){dr.points+=pts;if(i===0&&!d.out)dr.wins++}const tr=STATE.standings.teams.find(x=>x.id===d.teamId);if(tr){tr.points+=pts;if(i===0&&!d.out)tr.wins++}});
  l.podium = ordered.slice(0,3);
  liveComment(`Bandeirada! ${ordered[0].name} vence o ${l.raceName}.`);
  const res=document.getElementById("raceResult"), t=liveTeam();
  if(res) res.innerHTML=`<h3>Resultado final</h3>${ordered.filter(d=>d.teamId===t.id).map(d=>`<div class="calendar-row"><b>P${d.pos} • ${d.name}</b><span>${d.out?'Abandono':'Corrida concluída'}</span></div>`).join("")}`;
  STATE.round=Math.min(CALENDAR.length,STATE.round+1);
  if(typeof renderStandings==="function") renderStandings();
  renderPodium();
  save();
  setTimeout(()=>showScreen("screenPodium"), 900);
}
function renderPodium(){
  const l=STATE.liveRace;if(!l||!l.podium)return;
  const p=l.podium;
  const race=document.getElementById("podiumRaceName"); if(race) race.textContent=l.raceName;
  [["P1",p[0]],["P2",p[1]],["P3",p[2]]].forEach(([slot,d])=>{
    const img=document.getElementById(`podium${slot}Img`), name=document.getElementById(`podium${slot}Name`), team=document.getElementById(`podium${slot}Team`);
    if(img) img.src=d.asset; if(name) name.textContent=d.name; if(team) team.textContent=d.team;
  });
}
function startLiveRace(){ensureLiveRace();v14PatchRaceState();STATE.liveRace.running=true;addRadio("Engenheiro: Corrida iniciada. Foco na estratégia e no box obrigatório.");renderLiveRace();}
function pauseLiveRace(){ensureLiveRace();v14PatchRaceState();STATE.liveRace.running=false;addRadio("Engenheiro: Simulação pausada. Revise pneus, posição e janela de box.");renderLiveRace();}
function setupLiveRaceLoop(){if(LIVE_TIMER)clearInterval(LIVE_TIMER);LIVE_TIMER=setInterval(()=>{for(let i=0;i<(STATE.raceSpeed||1);i++)liveTickV14();},1300);}
document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    const pit=document.getElementById("pitNowBtn"); if(pit) pit.addEventListener("click",requestPitStop);
  },300);
});


/* v0.14.1 - pódio com foto/bandeira/logo + pit por piloto + narração mobile controlada */
function teamByDriverV141(d){
  return TEAMS.find(t => t.id === d.teamId) || liveTeam();
}
function driverAssetV141(d){
  if (d.asset) return d.asset;
  if (d.id) return `assets/drivers/${d.id}.png`;
  return "";
}
function renderPitDriverButtonsV141(){
  const panel = document.getElementById("pitDriverButtons");
  if(!panel || !STATE.liveRace) return;
  const userDrivers = STATE.liveRace.grid.filter(d => d.teamId === liveTeam().id && !d.out).sort((a,b)=>a.pos-b.pos);
  panel.innerHTML = userDrivers.map(d => `
    <button class="pit-driver-btn ${d.pitted?'done':''}" data-pit-driver="${d.id}">
      <img src="${driverAssetV141(d)}" onerror="this.style.display='none'">
      <span>${d.name}<small>P${d.pos} • pneu ${Math.max(0,Math.round(d.tyreLife))}%</small></span>
      <b>${d.pitted?'OK':'BOX'}</b>
    </button>`).join("");
  panel.querySelectorAll("[data-pit-driver]").forEach(btn => {
    btn.addEventListener("click", () => requestPitStopForDriver(btn.dataset.pitDriver));
  });
}
function requestPitStopForDriver(driverId){
  v14PatchRaceState();
  const l = STATE.liveRace;
  const target = l.grid.find(d => d.id === driverId && d.teamId === liveTeam().id && !d.out);
  if(!target) return;
  if(target.pitted){
    addRadio(`${target.name}: parada já concluída. Mantendo plano atual.`);
    renderLiveRace();
    return;
  }
  target.pitted = true;
  target.pitCooldown = 1;
  target.tyreLife = STATE.tyre === "soft" ? 92 : STATE.tyre === "medium" ? 96 : 98;
  target.fuel = Math.max(0, target.fuel - 1);
  const loss = 4 + Math.floor(Math.random()*4);
  target.pos = Math.min(l.grid.length, target.pos + loss);
  addRadio(`Box confirmado para ${target.name}. Parada obrigatória feita, perda aproximada de ${loss} posições.`);
  liveComment(`${target.name} entra no box e volta de pneus novos.`);
  l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{ if(!d.out) d.pos=i+1; });
  renderLiveRace();
  save();
}
function requestPitStop(){
  v14PatchRaceState();
  const l = STATE.liveRace;
  const target = l.grid.filter(d=>d.teamId===liveTeam().id && !d.out && !d.pitted).sort((a,b)=>a.tyreLife-b.tyreLife)[0];
  if(target) requestPitStopForDriver(target.id);
}
const oldRenderLiveRaceV141 = renderLiveRace;
renderLiveRace = function(){
  oldRenderLiveRaceV141();
  renderPitDriverButtonsV141();
  const comm = document.getElementById("liveCommentary");
  if(comm && STATE.liveRace){
    const limit = window.innerWidth < 720 ? 7 : 12;
    comm.innerHTML = STATE.liveRace.commentary.slice(-limit).reverse().map(x=>`<div>${x}</div>`).join("");
  }
  const radio = document.getElementById("radioPanel");
  if(radio && STATE.liveRace){
    const limit = window.innerWidth < 720 ? 5 : 8;
    radio.innerHTML = STATE.liveRace.radio.slice(-limit).reverse().map(x=>`<div>${x}</div>`).join("");
  }
};
function renderPodium(){
  const l = STATE.liveRace; if(!l || !l.podium) return;
  const p = l.podium;
  const race = document.getElementById("podiumRaceName");
  if(race) race.textContent = l.raceName;
  [["P1",p[0]],["P2",p[1]],["P3",p[2]]].forEach(([slot,d])=>{
    const tm = teamByDriverV141(d);
    const img = document.getElementById(`podium${slot}Img`);
    const name = document.getElementById(`podium${slot}Name`);
    const flag = document.getElementById(`podium${slot}Flag`);
    const logo = document.getElementById(`podium${slot}Logo`);
    const team = document.getElementById(`podium${slot}Team`);
    if(img){ img.style.display="block"; img.src = driverAssetV141(d); }
    if(name) name.textContent = d.name || "---";
    if(flag) flag.textContent = d.flag || "";
    if(logo){ logo.style.display="block"; logo.src = tm.logo; }
    if(team) team.textContent = tm.short || d.team || "---";
  });
}
document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    renderPitDriverButtonsV141();
    document.querySelectorAll("[data-pit-driver]").forEach(btn => {
      btn.addEventListener("click", () => requestPitStopForDriver(btn.dataset.pitDriver));
    });
  },500);
});


/* v0.15.0 REGEN - save/load + pit manual por piloto + podium logo robusto */
const SAVE_SLOT_KEY_V150 = "f1_ve_save_slot_main_v0150";

function saveGameManualV150(){
  try{
    localStorage.setItem(SAVE_SLOT_KEY_V150, JSON.stringify({
      version:"v0.15.0",
      savedAt:new Date().toISOString(),
      state:STATE
    }));
    localStorage.setItem("f1_ve_visual_state", JSON.stringify(STATE));
    const st=document.getElementById("saveStatus");
    if(st) st.textContent="Salvo agora";
    return true;
  }catch(e){
    const st=document.getElementById("saveStatus");
    if(st) st.textContent="Erro ao salvar";
    return false;
  }
}

function loadGameManualV150(){
  try{
    const raw=localStorage.getItem(SAVE_SLOT_KEY_V150);
    const st=document.getElementById("saveStatus");
    if(!raw){
      if(st) st.textContent="Nenhum save encontrado";
      return false;
    }
    const payload=JSON.parse(raw);
    Object.assign(STATE, payload.state || {});
    if(st) st.textContent="Save carregado";
    if(typeof applyAll==="function") applyAll();
    if(typeof renderLiveRace==="function") renderLiveRace();
    if(typeof renderStandings==="function") renderStandings();
    return true;
  }catch(e){
    const st=document.getElementById("saveStatus");
    if(st) st.textContent="Erro ao carregar";
    return false;
  }
}

function newCareerManualV150(){
  if(!confirm("Iniciar novo save? Isso apaga o progresso local desta carreira.")) return;
  localStorage.removeItem(SAVE_SLOT_KEY_V150);
  localStorage.removeItem("f1_ve_visual_state");
  location.reload();
}

function teamByDriverV150(d){
  return TEAMS.find(t=>t.id===d.teamId) || TEAMS.find(t=>t.short===d.team) || (typeof liveTeam==="function" ? liveTeam() : TEAMS[0]);
}
function driverAssetV150(d){
  return d.asset || (d.id ? `assets/drivers/${d.id}.png` : "");
}
function logoForTeamV150(tm){
  return (tm && (tm.logo || tm.card)) || "";
}

function renderPitDriverButtonsV150(){
  const panel=document.getElementById("pitDriverButtons");
  if(!panel) return;
  if(!STATE.liveRace && typeof ensureLiveRace==="function") ensureLiveRace();
  if(typeof v14PatchRaceState==="function") v14PatchRaceState();
  if(!STATE.liveRace) return;

  const currentTeam = typeof liveTeam==="function" ? liveTeam() : team();
  const l=STATE.liveRace;
  const userDrivers=l.grid.filter(d=>d.teamId===currentTeam.id && !d.out).sort((a,b)=>a.pos-b.pos);
  panel.innerHTML=userDrivers.map(d=>`
    <button class="pit-driver-btn ${d.pitted?'done':''}" data-pit-driver="${d.id}">
      <img src="${driverAssetV150(d)}" onerror="this.style.display='none'">
      <span>${d.name}<small>P${d.pos} • pneu ${Math.max(0,Math.round(d.tyreLife))}% • ${d.pitted?'parada feita':'box pendente'}</small></span>
      <b>${d.pitted?'OK':'BOX'}</b>
    </button>`).join("");

  panel.querySelectorAll("[data-pit-driver]").forEach(btn=>{
    btn.addEventListener("click",()=>requestPitStopForDriverV150(btn.dataset.pitDriver));
  });
}

function requestPitStopForDriverV150(driverId){
  if(!STATE.liveRace && typeof ensureLiveRace==="function") ensureLiveRace();
  if(typeof v14PatchRaceState==="function") v14PatchRaceState();
  const l=STATE.liveRace;
  if(!l) return;

  const currentTeam = typeof liveTeam==="function" ? liveTeam() : team();
  const target=l.grid.find(d=>d.id===driverId && d.teamId===currentTeam.id && !d.out);
  if(!target) return;

  if(target.pitted){
    if(typeof addRadio==="function") addRadio(`Engenheiro: ${target.name} já fez a parada obrigatória.`);
    renderLiveRace();
    return;
  }

  target.pitted=true;
  target.pitCooldown=1;
  target.tyreLife=STATE.tyre==="soft"?92:STATE.tyre==="medium"?96:98;
  target.fuel=Math.max(0,target.fuel-1);

  const loss=4+Math.floor(Math.random()*4);
  target.pos=Math.min(l.grid.length,target.pos+loss);

  if(typeof addRadio==="function") addRadio(`BOX AGORA: ${target.name} chamado manualmente para o pit. Parada concluída.`);
  if(typeof liveComment==="function") liveComment(`${target.name} faz pit stop manual e volta em tráfego.`);

  l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{if(!d.out)d.pos=i+1;});

  renderLiveRace();
  if(typeof save==="function") save();
  saveGameManualV150();
}

// Old single button fallback: chooses most worn pending driver; never auto-runs by itself.
function requestPitStop(){
  if(!STATE.liveRace && typeof ensureLiveRace==="function") ensureLiveRace();
  if(!STATE.liveRace) return;
  const currentTeam = typeof liveTeam==="function" ? liveTeam() : team();
  const target=STATE.liveRace.grid
    .filter(d=>d.teamId===currentTeam.id && !d.out && !d.pitted)
    .sort((a,b)=>a.tyreLife-b.tyreLife)[0];
  if(target) requestPitStopForDriverV150(target.id);
}

function applyPitPenaltyV150(){
  const l=STATE.liveRace;
  if(!l || l.pitPenaltyApplied) return;
  const currentTeam = typeof liveTeam==="function" ? liveTeam() : team();
  const pending=l.grid.filter(d=>d.teamId===currentTeam.id && !d.out && !d.pitted);

  if(l.lap>l.pitWindowEnd && pending.length){
    pending.forEach(d=>{
      d.pos=Math.min(l.grid.length,d.pos+5);
      d.pitPenalty=true;
      if(typeof addRadio==="function") addRadio(`Direção de prova: ${d.name} não cumpriu a parada obrigatória. Penalidade aplicada.`);
      if(typeof liveComment==="function") liveComment(`${d.name} perde posições por não cumprir a janela de pit.`);
    });
    l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{if(!d.out)d.pos=i+1;});
    l.pitPenaltyApplied=true;
  }
}

const oldRenderLiveRaceV150 = typeof renderLiveRace === "function" ? renderLiveRace : null;
renderLiveRace = function(){
  if(oldRenderLiveRaceV150) oldRenderLiveRaceV150();
  renderPitDriverButtonsV150();

  const pitStatus=document.getElementById("pitStatus");
  if(pitStatus && STATE.liveRace){
    const currentTeam = typeof liveTeam==="function" ? liveTeam() : team();
    const user=STATE.liveRace.grid.filter(d=>d.teamId===currentTeam.id && !d.out);
    const done=user.length && user.every(d=>d.pitted);
    const pending=user.filter(d=>!d.pitted).map(d=>d.name).join(" / ");
    pitStatus.textContent=done ? "Parada obrigatória concluída para os dois pilotos" : `Pit obrigatório pendente: ${pending || "nenhum"} • janela V${STATE.liveRace.pitWindowStart}-V${STATE.liveRace.pitWindowEnd}`;
    pitStatus.classList.toggle("done", done);
  }
};

if(typeof liveTickV14==="function"){
  const oldLiveTickV150 = liveTickV14;
  liveTickV14 = function(){
    const before=STATE.liveRace ? STATE.liveRace.lap : 0;
    oldLiveTickV150();
    if(STATE.liveRace && STATE.liveRace.lap!==before) applyPitPenaltyV150();
    renderPitDriverButtonsV150();
  };
}

function renderPodiumV150(){
  const l=STATE.liveRace;
  if(!l || !l.podium) return;
  const p=l.podium;

  const race=document.getElementById("podiumRaceName");
  if(race) race.textContent=l.raceName;

  [["P1",p[0]],["P2",p[1]],["P3",p[2]]].forEach(([slot,d])=>{
    const tm=teamByDriverV150(d);
    const img=document.getElementById(`podium${slot}Img`);
    const name=document.getElementById(`podium${slot}Name`);
    const flag=document.getElementById(`podium${slot}Flag`);
    const logo=document.getElementById(`podium${slot}Logo`);
    const team=document.getElementById(`podium${slot}Team`);

    if(img){
      img.style.display="block";
      img.src=driverAssetV150(d);
    }
    if(name) name.textContent=d.name || "---";
    if(flag) flag.textContent=d.flag || "";
    if(logo){
      logo.style.display="block";
      logo.src=logoForTeamV150(tm);
      logo.onerror=function(){
        this.onerror=null;
        this.src=(tm&&tm.card)?tm.card:"";
      };
    }
    if(team) team.textContent=(tm&&tm.short)?tm.short:(d.team||"---");
  });
}
renderPodium = renderPodiumV150;

if(typeof finishLiveRaceV14==="function"){
  const oldFinishV150 = finishLiveRaceV14;
  finishLiveRaceV14 = function(){
    oldFinishV150();
    renderPodiumV150();
    saveGameManualV150();
  };
}

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    renderPitDriverButtonsV150();

    const s=document.getElementById("manualSaveBtn");
    if(s) s.addEventListener("click",saveGameManualV150);

    const l=document.getElementById("manualLoadBtn");
    if(l) l.addEventListener("click",loadGameManualV150);

    const n=document.getElementById("newCareerBtn");
    if(n) n.addEventListener("click",newCareerManualV150);

    const st=document.getElementById("saveStatus");
    if(st) st.textContent=localStorage.getItem(SAVE_SLOT_KEY_V150) ? "Save local encontrado" : "Save local pronto";
  },500);
});


/* v0.15.1 - tela de capa inicial com continuar/novo jogo */
function hasAnySaveV151(){
  return !!(
    localStorage.getItem("f1_ve_save_slot_main_v0150") ||
    localStorage.getItem("f1_ve_visual_state") ||
    localStorage.getItem("f1_ve_state_v0120") ||
    localStorage.getItem("f1_ve_state_v0110")
  );
}

function updateCoverSaveInfoV151(){
  const info = document.getElementById("coverSaveInfo");
  const btn = document.getElementById("continueCareerBtn");
  const has = hasAnySaveV151();

  if(info) info.textContent = has ? "Save local encontrado. Você pode continuar sua carreira." : "Nenhum save encontrado. Inicie um novo jogo.";
  if(btn){
    btn.disabled = !has;
    btn.classList.toggle("disabled", !has);
  }
}

function continueCareerFromCoverV151(){
  const has = hasAnySaveV151();
  if(!has){
    updateCoverSaveInfoV151();
    return;
  }

  if(typeof loadGameManualV150 === "function"){
    loadGameManualV150();
  } else if(typeof load === "function"){
    load();
  }

  if(typeof showScreen === "function"){
    showScreen("screenLobby");
  }
}

function newGameFromCoverV151(){
  if(typeof showScreen === "function"){
    showScreen("screenStart");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    updateCoverSaveInfoV151();

    const cont = document.getElementById("continueCareerBtn");
    if(cont) cont.addEventListener("click", continueCareerFromCoverV151);

    const novo = document.getElementById("newGameFromCoverBtn");
    if(novo) novo.addEventListener("click", newGameFromCoverV151);
  }, 300);
});


/* v0.16.0 - evolução manager: pós-corrida, mensagens, moral e desenvolvimento */
const DEVELOPMENT_PACKAGES_V160 = [
  {id:"aero_light", title:"Pacote Aerodinâmico Leve", area:"aero", boost:2, cost:4500000, turns:1, desc:"+2 aerodinâmica. Bom para pistas de alta velocidade."},
  {id:"engine_map", title:"Mapa de Motor Otimizado", area:"power", boost:2, cost:5200000, turns:1, desc:"+2 motor. Ajuda ultrapassagens e defesa."},
  {id:"reliability", title:"Confiabilidade de Corrida", area:"reliability", boost:3, cost:4000000, turns:1, desc:"+3 confiabilidade. Reduz falhas mecânicas."},
  {id:"tyre_program", title:"Programa de Gestão de Pneus", area:"tyres", boost:3, cost:3600000, turns:1, desc:"+3 pneus. Menor desgaste em ritmo forte."},
  {id:"chassis", title:"Chassi Balanceado", area:"chassis", boost:2, cost:4800000, turns:1, desc:"+2 chassi. Melhora consistência em corrida."}
];

function ensureCareerMetaV160(){
  STATE.money = typeof STATE.money === "number" ? STATE.money : 48750000;
  STATE.reputation = typeof STATE.reputation === "number" ? STATE.reputation : 45;
  STATE.messages = Array.isArray(STATE.messages) ? STATE.messages : [
    {from:"Diretoria", title:"Objetivo da temporada", body:"Lutar por pódios e evoluir o carro antes da metade do campeonato.", type:"board"},
    {from:"Engenharia", title:"Plano inicial", body:"Use a oficina para atacar pontos fracos do carro. Confiabilidade será essencial.", type:"tech"}
  ];
  STATE.driverMorale = STATE.driverMorale || {};
  if(typeof selectedDrivers === "function"){
    selectedDrivers().forEach(d=>{
      if(typeof STATE.driverMorale[d.id] !== "number") STATE.driverMorale[d.id] = 82;
    });
  }
  STATE.pendingDevelopments = Array.isArray(STATE.pendingDevelopments) ? STATE.pendingDevelopments : [];
  STATE.lastRaceReview = STATE.lastRaceReview || null;
}

function addMessageV160(from,title,body,type="info"){
  ensureCareerMetaV160();
  STATE.messages.unshift({from,title,body,type, date:new Date().toLocaleDateString("pt-BR")});
  if(STATE.messages.length > 30) STATE.messages.length = 30;
}

function renderMessagesV160(){
  ensureCareerMetaV160();
  const list=document.getElementById("messageList");
  if(!list) return;
  list.innerHTML = STATE.messages.map(m=>`
    <div class="message-card ${m.type||"info"}">
      <b>${m.from}</b>
      <strong>${m.title}</strong>
      <p>${m.body}</p>
      <span>${m.date || "Carreira"}</span>
    </div>`).join("");
}

function renderDevelopmentV160(){
  ensureCareerMetaV160();
  const box=document.getElementById("developmentPackages");
  if(!box) return;
  box.innerHTML = DEVELOPMENT_PACKAGES_V160.map(p=>`
    <button class="development-card" data-dev-package="${p.id}">
      <b>${p.title}</b>
      <span>${p.desc}</span>
      <small>Custo R$ ${(p.cost/1000000).toFixed(1)} mi • ${p.turns} etapa</small>
    </button>`).join("");
  box.querySelectorAll("[data-dev-package]").forEach(btn=>{
    btn.addEventListener("click",()=>startDevelopmentV160(btn.dataset.devPackage));
  });
}

function startDevelopmentV160(id){
  ensureCareerMetaV160();
  const pack = DEVELOPMENT_PACKAGES_V160.find(p=>p.id===id);
  if(!pack) return;
  if(STATE.money < pack.cost){
    addMessageV160("Financeiro","Verba insuficiente",`Não há caixa para iniciar ${pack.title}.`, "finance");
    renderMessagesV160();
    alert("Caixa insuficiente para esse pacote.");
    return;
  }
  STATE.money -= pack.cost;
  STATE.pendingDevelopments.push({...pack, remaining:pack.turns});
  addMessageV160("Engenharia","Projeto iniciado",`${pack.title} entrou no cronograma. Conclusão prevista em ${pack.turns} etapa.`, "tech");
  updateLobbyFinanceV160();
  if(typeof saveGameManualV150==="function") saveGameManualV150();
  renderDevelopmentV160();
}

function processDevelopmentsV160(){
  ensureCareerMetaV160();
  const finished=[];
  STATE.pendingDevelopments.forEach(dev=>{
    dev.remaining -= 1;
    if(dev.remaining <= 0) finished.push(dev);
  });
  STATE.pendingDevelopments = STATE.pendingDevelopments.filter(dev=>dev.remaining > 0);
  finished.forEach(dev=>{
    STATE.carBoost = STATE.carBoost || {};
    STATE.carBoost[dev.area] = (STATE.carBoost[dev.area] || 0) + dev.boost;
    addMessageV160("Engenharia","Peça concluída",`${dev.title} concluído: +${dev.boost} em ${dev.area}.`, "tech");
  });
}

function updateLobbyFinanceV160(){
  const cards = document.querySelectorAll(".lobby-bottom div, .season-objective");
  // Não altera layout aprovado; apenas injeta dados onde houver espaço de texto.
  const financeCard = Array.from(cards).find(c=>c.textContent.includes("OBJETIVO")) || null;
  if(financeCard){
    const em = financeCard.querySelector("em");
    if(em) em.textContent = `R$ ${(STATE.money/1000000).toFixed(1)} mi`;
  }
}

function evaluateRaceV160(){
  ensureCareerMetaV160();
  if(!STATE.liveRace || !STATE.liveRace.podium) return;
  const t = typeof liveTeam === "function" ? liveTeam() : team();
  const userResults = STATE.liveRace.grid
    .filter(d=>d.teamId===t.id)
    .sort((a,b)=>a.pos-b.pos)
    .map(d=>({id:d.id,name:d.name,pos:d.pos,out:!!d.out,pitted:!!d.pitted}));

  const best = Math.min(...userResults.map(r=>r.pos));
  const worst = Math.max(...userResults.map(r=>r.pos));
  const gainedRep = best <= 3 ? 6 : best <= 6 ? 3 : best <= 10 ? 1 : -1;
  STATE.reputation = Math.max(0, Math.min(100, STATE.reputation + gainedRep));

  userResults.forEach(r=>{
    const delta = r.out ? -8 : r.pos <= 5 ? 5 : r.pos <= 10 ? 2 : -2;
    STATE.driverMorale[r.id] = Math.max(0, Math.min(100, (STATE.driverMorale[r.id] || 82) + delta));
  });

  const prize = Math.max(1500000, 9000000 - best*450000);
  STATE.money += prize;

  STATE.lastRaceReview = {
    gp: STATE.liveRace.raceName,
    results:userResults,
    reputationDelta:gainedRep,
    prize,
    best,
    worst
  };

  addMessageV160("Diretoria","Relatório pós-corrida",`${STATE.liveRace.raceName}: melhor posição P${best}. Prêmio recebido R$ ${(prize/1000000).toFixed(1)} mi.`, "board");
  if(best <= 3) addMessageV160("Imprensa","Pódio conquistado!",`A equipe ${t.short} ganha destaque após terminar no pódio.`, "media");
  if(worst > 15) addMessageV160("Pilotos","Frustração no box",`Resultado abaixo do esperado para um dos pilotos. Moral pode cair.`, "driver");
}

function renderPostRaceV160(){
  ensureCareerMetaV160();
  const summary=document.getElementById("postRaceSummary");
  const morale=document.getElementById("driverMoralePanel");
  if(summary){
    const r=STATE.lastRaceReview;
    summary.innerHTML = r ? `
      <div class="postrace-card"><b>${r.gp}</b><strong>Melhor posição: P${r.best}</strong><span>Reputação ${r.reputationDelta>=0?"+":""}${r.reputationDelta} • Prêmio R$ ${(r.prize/1000000).toFixed(1)} mi</span></div>
      <div class="postrace-card">${r.results.map(x=>`<p>${x.name}: P${x.pos} ${x.out?"• abandono":""}</p>`).join("")}</div>
    ` : `<div class="postrace-card"><b>Nenhuma corrida finalizada</b><span>Finalize um GP para gerar relatório.</span></div>`;
  }
  if(morale){
    const ds = typeof selectedDrivers === "function" ? selectedDrivers() : [];
    morale.innerHTML = ds.map(d=>`
      <div class="morale-card">
        <img src="${d.asset}" onerror="this.style.display='none'">
        <b>${d.name}</b>
        <span>Moral ${STATE.driverMorale[d.id] || 82}%</span>
        <i><em style="width:${STATE.driverMorale[d.id] || 82}%"></em></i>
      </div>`).join("");
  }
}

const oldFinishRaceV160 = typeof finishLiveRaceV14 === "function" ? finishLiveRaceV14 : null;
if(oldFinishRaceV160){
  finishLiveRaceV14 = function(){
    oldFinishRaceV160();
    evaluateRaceV160();
    processDevelopmentsV160();
    renderPostRaceV160();
    renderMessagesV160();
    if(typeof saveGameManualV150==="function") saveGameManualV150();
  };
}

function showPostRaceV160(){
  renderPostRaceV160();
  if(typeof showScreen==="function") showScreen("screenPostRace");
}

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    ensureCareerMetaV160();
    renderMessagesV160();
    renderDevelopmentV160();
    renderPostRaceV160();
    updateLobbyFinanceV160();

    const adv=document.getElementById("advanceCalendarBtn");
    if(adv) adv.addEventListener("click",()=>{
      processDevelopmentsV160();
      addMessageV160("Agenda","Semana avançada","A equipe concluiu a preparação para a próxima etapa.", "info");
      renderMessagesV160();
      if(typeof showScreen==="function") showScreen("screenLobby");
      if(typeof saveGameManualV150==="function") saveGameManualV150();
    });

    // Se o pódio abriu automaticamente, permite seguir para pós-corrida depois pelas classificações/lobby.
    const podiumLobbyButtons = document.querySelectorAll('#screenPodium [data-goto="screenLobby"]');
    podiumLobbyButtons.forEach(btn=>{
      btn.addEventListener("click",()=>{
        setTimeout(renderPostRaceV160,200);
      });
    });
  },600);
});

/* v0.17.0 - controle manual de pit e melhoria corrida */
function forcePitStopV170(driverId){
  if(!STATE.liveRace) return;
  const d=STATE.liveRace.grid.find(x=>x.id===driverId);
  if(!d || d.pitted) return;
  d.pitted=true;
  d.pitLap=STATE.liveRace.lap;
  addRaceLog("BOX","Piloto "+d.name+" chamado para pit stop.");
}

function renderPitControlsV170(){
  const box=document.getElementById("pitControls");
  if(!box || !STATE.liveRace) return;
  const teamDrivers=STATE.liveRace.grid.filter(d=>d.teamId===team().id);
  box.innerHTML=teamDrivers.map(d=>`
    <button onclick="forcePitStopV170('${d.id}')" class="cta compact">
      BOX ${d.name}
    </button>
  `).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{renderPitControlsV170();},500);
});


/* v0.18.0 - lobby central 100% funcional + IA pneus/pit */
function ensureV180State(){
  STATE.aiStrategy = STATE.aiStrategy || {};
  STATE.sponsors = STATE.sponsors || [
    {name:"Vale Energy", bonus:"Pódio", value:2500000, active:true},
    {name:"SpeedTech", bonus:"Top 10 duplo", value:1200000, active:true}
  ];
  STATE.marketing = STATE.marketing || {fans:1200000, media:42, pressure:35};
  STATE.financeLog = STATE.financeLog || [];
}

function renderBusinessScreensV180(){
  ensureV180State();

  const marketing = document.getElementById("marketingPanel");
  if(marketing){
    marketing.innerHTML = `
      <div><b>FÃS</b><span>${(STATE.marketing.fans/1000000).toFixed(1)} mi acompanhando a equipe</span></div>
      <div><b>MÍDIA</b><span>Exposição ${STATE.marketing.media}/100</span></div>
      <div><b>PRESSÃO</b><span>Pressão pública ${STATE.marketing.pressure}/100</span></div>
    `;
  }

  const sponsor = document.getElementById("sponsorPanel");
  if(sponsor){
    sponsor.innerHTML = STATE.sponsors.map(s=>`
      <div><b>${s.name}</b><span>Bônus: ${s.bonus}<br>Valor: R$ ${(s.value/1000000).toFixed(1)} mi</span></div>
    `).join("");
  }

  const finance = document.getElementById("financePanel");
  if(finance){
    const money = typeof STATE.money === "number" ? STATE.money : 48750000;
    const dev = (STATE.pendingDevelopments || []).length;
    const races = (STATE.raceHistory || []).length;
    finance.innerHTML = `
      <div class="stat-card"><b>CAIXA</b><strong>R$ ${(money/1000000).toFixed(1)} mi</strong><i><em style="width:${Math.min(100, money/1000000)}%"></em></i></div>
      <div class="stat-card"><b>PROJETOS</b><strong>${dev}</strong><i><em style="width:${Math.min(100, dev*20)}%"></em></i></div>
      <div class="stat-card"><b>CORRIDAS</b><strong>${races}</strong><i><em style="width:${Math.min(100, races*5)}%"></em></i></div>
      <div class="stat-card"><b>REPUTAÇÃO</b><strong>${STATE.reputation || 45}</strong><i><em style="width:${STATE.reputation || 45}%"></em></i></div>
    `;
  }
}

// Strengthen showScreen: works for central lobby buttons, even if added late.
document.addEventListener("click", (ev)=>{
  const btn = ev.target.closest("[data-goto]");
  if(!btn) return;
  const target = btn.dataset.goto;
  if(target && document.getElementById(target) && typeof showScreen === "function"){
    ev.preventDefault();
    showScreen(target);
    setTimeout(renderBusinessScreensV180, 120);
  }
});

function aiTyreChoiceV180(driver){
  const tm = TEAMS.find(t=>t.id===driver.teamId) || team();
  const avg = Object.values(tm.car).reduce((a,b)=>a+b,0)/5;
  if(avg > 88) return Math.random() > .55 ? "medium" : "soft";
  if(avg > 80) return "medium";
  return Math.random() > .5 ? "hard" : "medium";
}

function aiShouldPitV180(d, lap, totalLaps){
  if(d.out || d.pitted) return false;
  const pct = lap / totalLaps;
  const lowTyre = d.tyreLife < 42;
  const windowPhase = pct > .28 && pct < .78;
  return (windowPhase && lowTyre && Math.random() < .36) || (pct > .70 && d.tyreLife < 34);
}

if(typeof prepareLiveRace === "function"){
  const oldPrepareV180 = prepareLiveRace;
  prepareLiveRace = function(){
    oldPrepareV180();
    if(STATE.liveRace && !STATE.liveRace.v180){
      STATE.liveRace.v180 = true;
      STATE.liveRace.grid.forEach(d=>{
        if(d.teamId !== team().id){
          d.tyre = aiTyreChoiceV180(d);
          d.aiPitPlan = true;
        }
      });
      if(typeof addRadio === "function") addRadio("Engenheiro: IA das equipes rivais ativa. Eles também farão estratégia de pneus e box.");
    }
  };
}

if(typeof liveTickV14 === "function"){
  const oldTickV180 = liveTickV14;
  liveTickV14 = function(){
    oldTickV180();
    if(!STATE.liveRace || STATE.liveRace.finished) return;
    const l = STATE.liveRace;
    l.grid.forEach(d=>{
      if(d.teamId === team().id || d.out || d.pitted) return;
      if(aiShouldPitV180(d, l.lap, l.totalLaps)){
        d.pitted = true;
        d.tyreLife = d.tyre === "soft" ? 90 : d.tyre === "medium" ? 95 : 98;
        d.pos = Math.min(l.grid.length, d.pos + 4 + Math.floor(Math.random()*3));
        if(typeof liveComment === "function") liveComment(`${d.name} entra no box. Estratégia rival em andamento.`);
      }
    });
    l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>{ if(!d.out) d.pos=i+1; });
    if(typeof renderLiveRace === "function") renderLiveRace();
  };
}

// Better tyre wear by compound. Applies as small correction every rendered lap.
if(typeof updateRaceTelemetryLiveV14 === "function"){
  const oldTeleV180 = updateRaceTelemetryLiveV14;
  updateRaceTelemetryLiveV14 = function(){
    if(STATE.liveRace){
      STATE.liveRace.grid.forEach(d=>{
        if(d.out) return;
        const compound = d.teamId === team().id ? STATE.tyre : (d.tyre || "medium");
        if(compound === "soft") d.tyreLife -= 0.10;
        if(compound === "hard") d.tyreLife += 0.05;
        d.tyreLife = Math.max(0, Math.min(100, d.tyreLife));
      });
    }
    oldTeleV180();
  };
}

document.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>{
    ensureV180State();
    renderBusinessScreensV180();
  }, 700);
});


/* v0.19.0 - classificações visuais + mercado pilotos + agenda com bandeiras */
const FLAGS_V190 = {
  "Austrália":"🇦🇺","China":"🇨🇳","Japão":"🇯🇵","Bahrein":"🇧🇭","Arábia Saudita":"🇸🇦","EUA":"🇺🇸","Mônaco":"🇲🇨","Canadá":"🇨🇦","Espanha":"🇪🇸","Áustria":"🇦🇹","Reino Unido":"🇬🇧","Bélgica":"🇧🇪","Hungria":"🇭🇺","Holanda":"🇳🇱","Itália":"🇮🇹","Azerbaijão":"🇦🇿","Singapura":"🇸🇬","México":"🇲🇽","Brasil":"🇧🇷","Catar":"🇶🇦","Emirados Árabes":"🇦🇪"
};

function ensureDriverContractsV190(){
  STATE.contracts = STATE.contracts || {};
  DRIVERS.forEach(d=>{
    if(!STATE.contracts[d.id]){
      const baseSalary = Math.max(2500000, Math.round((d.overall || 75) * 180000));
      STATE.contracts[d.id] = {
        salary: baseSalary,
        years: d.overall >= 90 ? 3 : 2,
        available: d.teamId !== team().id,
        morale: 78 + Math.floor(Math.random()*14)
      };
    }
  });
}

function renderStandingsV190(type=null){
  const table = document.getElementById("standingsTable");
  if(!table || !STATE.standings) return;
  const selected = type || document.querySelector("[data-standings-tab].selected")?.dataset.standingsTab || "drivers";

  if(selected === "teams"){
    const rows = [...STATE.standings.teams].sort((a,b)=>b.points-a.points);
    table.innerHTML = rows.map((r,i)=>{
      const tm = TEAMS.find(t=>t.id===r.id) || {};
      return `<div class="standing-row visual">
        <b>${i+1}</b>
        <img class="standing-logo" src="${tm.logo || tm.card || ''}" onerror="this.style.display='none'">
        <span>${r.name}<small>${tm.name || ''}</small></span>
        <strong>${r.points} pts</strong>
      </div>`;
    }).join("");
  } else {
    const rows = [...STATE.standings.drivers].sort((a,b)=>b.points-a.points || b.overall-a.overall);
    table.innerHTML = rows.map((r,i)=>{
      const d = DRIVERS.find(x=>x.id===r.id) || {};
      return `<div class="standing-row visual">
        <b>${i+1}</b>
        <img class="standing-avatar" src="${d.asset || r.asset || ''}" onerror="this.style.display='none'">
        <span>${r.flag} ${r.name}<small>${r.team}</small></span>
        <strong>${r.points} pts</strong>
      </div>`;
    }).join("");
  }
}

// Override existing standings renderer safely
renderStandings = renderStandingsV190;

function renderCalendarV190(){
  const list = document.getElementById("calendarList");
  if(!list) return;
  list.innerHTML = CALENDAR.map(r => {
    const flag = FLAGS_V190[r.country] || "🏁";
    return `<div class="calendar-row calendar-flag-row ${r.round===STATE.round?'current':''}">
      <b><span class="calendar-flag">${flag}</span>${r.round}. ${r.gp}</b>
      <span>${r.track} • ${r.laps} voltas</span>
    </div>`;
  }).join("");
}
renderCalendar = renderCalendarV190;

function selectedDriverIdsV190(){
  const t = team();
  STATE.teamDrivers = STATE.teamDrivers || {};
  if(!STATE.teamDrivers[t.id]){
    STATE.teamDrivers[t.id] = [...(t.drivers || [])];
  }
  return STATE.teamDrivers[t.id];
}

function selectedDriversV190(){
  const names = selectedDriverIdsV190();
  return names.map(name => DRIVERS.find(d => d.name === name)).filter(Boolean);
}

// Override selectedDrivers globally so race/pilots reflect contracts
selectedDrivers = selectedDriversV190;

function renderDriverMarketV190(){
  ensureDriverContractsV190();
  const panel = document.getElementById("driverMarketPanel");
  if(!panel) return;

  const current = selectedDriversV190().map(d=>d.id);
  const available = DRIVERS
    .filter(d=>!current.includes(d.id))
    .sort((a,b)=>b.overall-a.overall)
    .slice(0,12);

  panel.innerHTML = available.map(d=>{
    const c = STATE.contracts[d.id];
    return `<div class="market-driver-card">
      <img src="${d.asset}" onerror="this.style.display='none'">
      <div>
        <b>${d.flag} ${d.name}</b>
        <span>${d.team} • ${d.number} • Geral ${d.overall}</span>
        <small>Salário R$ ${(c.salary/1000000).toFixed(1)} mi • contrato ${c.years} anos</small>
      </div>
      <button data-hire-driver="${d.id}">CONTRATAR</button>
    </div>`;
  }).join("");

  panel.querySelectorAll("[data-hire-driver]").forEach(btn=>{
    btn.addEventListener("click",()=>hireDriverV190(btn.dataset.hireDriver));
  });
}

function hireDriverV190(driverId){
  ensureDriverContractsV190();
  const d = DRIVERS.find(x=>x.id===driverId);
  if(!d) return;

  const c = STATE.contracts[d.id];
  STATE.money = typeof STATE.money === "number" ? STATE.money : 48750000;
  const signingFee = Math.round(c.salary * 0.45);

  if(STATE.money < signingFee){
    alert("Caixa insuficiente para contratar este piloto.");
    if(typeof addMessageV160==="function") addMessageV160("Financeiro","Contratação recusada",`Não há caixa para contratar ${d.name}.`, "finance");
    return;
  }

  const current = selectedDriversV190();
  let replaceIndex = 1;
  if(current.length >= 2){
    const choice = prompt(`Substituir qual piloto? Digite 1 para ${current[0].name} ou 2 para ${current[1].name}`, "2");
    replaceIndex = choice === "1" ? 0 : 1;
  }

  const t = team();
  STATE.teamDrivers = STATE.teamDrivers || {};
  STATE.teamDrivers[t.id] = STATE.teamDrivers[t.id] || [...t.drivers];
  const oldName = STATE.teamDrivers[t.id][replaceIndex] || STATE.teamDrivers[t.id][1];
  STATE.teamDrivers[t.id][replaceIndex] = d.name;
  STATE.money -= signingFee;

  if(typeof addMessageV160==="function"){
    addMessageV160("Mercado de pilotos","Contrato assinado",`${d.name} contratado para substituir ${oldName}. Taxa inicial R$ ${(signingFee/1000000).toFixed(1)} mi.`, "driver");
  }

  // Rebuild live race if it has not started, so grid reflects new pair.
  if(STATE.liveRace && STATE.liveRace.lap === 0) STATE.liveRace = null;

  if(typeof updateTeamLogic === "function") updateTeamLogic();
  renderDriverMarketV190();
  if(typeof renderBusinessScreensV180 === "function") renderBusinessScreensV180();
  if(typeof saveGameManualV150 === "function") saveGameManualV150();
}

function renderDriverPairV190(){
  const driverBox = document.getElementById("selectedTeamDrivers");
  if(driverBox){
    driverBox.innerHTML = selectedDriversV190().map(d => `
      <div class="pilot-card">
        <div class="pilot-img" style="background-image:url('${d.asset}')"></div>
        <b>${d.name.toUpperCase()}</b>
        <span>${d.flag} ${d.team} • ${d.number} • Geral ${d.overall}</span>
      </div>`).join("");
  }
}

// Patch updateTeamLogic to include new pair/market
const oldUpdateTeamLogicV190 = typeof updateTeamLogic === "function" ? updateTeamLogic : null;
updateTeamLogic = function(){
  if(oldUpdateTeamLogicV190) oldUpdateTeamLogicV190();
  renderDriverPairV190();
  renderDriverMarketV190();
  renderCalendarV190();
  renderStandingsV190();
};

// Light staff/workshop influence: staff boosts reliability in race calculations
function staffBonusV190(){
  STATE.staff = STATE.staff || { technical:1, strategy:1, raceOps:1 };
  return {
    reliability: STATE.staff.raceOps,
    aero: STATE.staff.technical,
    tyres: STATE.staff.strategy
  };
}
if(typeof carStats === "function"){
  const oldCarStatsV190 = carStats;
  carStats = function(){
    const stats = oldCarStatsV190();
    const b = staffBonusV190();
    Object.keys(b).forEach(k=>{ if(stats[k] !== undefined) stats[k] = Math.min(99, stats[k] + b[k]); });
    return stats;
  };
}

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    ensureDriverContractsV190();
    renderDriverPairV190();
    renderDriverMarketV190();
    renderCalendarV190();
    renderStandingsV190();
  },800);
});

/* v0.20.0 - staff/economia integrados */
const STAFF_PACKAGES_V200=[
{id:"technical",title:"Diretor Técnico",desc:"Melhora aerodinâmica e velocidade de upgrades.",cost:7000000,max:5},
{id:"strategy",title:"Estrategista",desc:"Melhora pneus, pit window e ritmo de corrida.",cost:5200000,max:5},
{id:"raceOps",title:"Operações de Pista",desc:"Aumenta confiabilidade e reduz falhas.",cost:4800000,max:5},
{id:"commercial",title:"Diretor Comercial",desc:"Aumenta receitas de marketing e patrocínio.",cost:4300000,max:5}
];
const SPONSORS_V200=[
{id:"podium",name:"Vale Energy",goal:"Conseguir pódio",reward:3200000,type:"podium"},
{id:"double_points",name:"SpeedTech",goal:"Pontuar com os dois pilotos",reward:1700000,type:"double_points"},
{id:"finish",name:"Global Motors",goal:"Terminar com os dois carros",reward:900000,type:"finish"}
];
function moneyV200(v){return "R$ "+(v/1000000).toFixed(1)+" mi";}
function ensureEcoV200(){STATE.money=typeof STATE.money==="number"?STATE.money:48750000;STATE.staff=STATE.staff||{technical:1,strategy:1,raceOps:1,commercial:1};STATE.activeSponsors=STATE.activeSponsors||["finish"];STATE.financeLog=STATE.financeLog||[];STATE.marketing=STATE.marketing||{fans:1200000,media:42,pressure:35};}
function renderStaffV200(){ensureEcoV200();const box=document.getElementById("staffUpgradePanel");if(!box)return;box.innerHTML=STAFF_PACKAGES_V200.map(p=>{const lvl=STATE.staff[p.id]||1,cost=Math.round(p.cost*(1+lvl*.35));return `<div class="staff-upgrade-card"><b>${p.title}</b><span>${p.desc}</span><div class="level-line"><strong>Nível ${lvl}/${p.max}</strong><i><em style="width:${(lvl/p.max)*100}%"></em></i></div><button ${lvl>=p.max?'disabled':''} data-staff-upgrade="${p.id}">${lvl>=p.max?'MÁXIMO':'UPGRADE '+moneyV200(cost)}</button></div>`;}).join("");box.querySelectorAll("[data-staff-upgrade]").forEach(btn=>btn.addEventListener("click",()=>upgradeStaffV200(btn.dataset.staffUpgrade)));}
function upgradeStaffV200(id){ensureEcoV200();const p=STAFF_PACKAGES_V200.find(x=>x.id===id);if(!p)return;const lvl=STATE.staff[id]||1;if(lvl>=p.max)return;const cost=Math.round(p.cost*(1+lvl*.35));if(STATE.money<cost){alert("Caixa insuficiente.");return;}STATE.money-=cost;STATE.staff[id]=lvl+1;STATE.financeLog.unshift({label:"Upgrade staff: "+p.title,value:-cost});renderStaffV200();renderBusinessV200();if(typeof saveGameManualV150==="function")saveGameManualV150();}
function renderBusinessV200(){ensureEcoV200();const marketing=document.getElementById("marketingPanel");if(marketing)marketing.innerHTML=`<div><b>FÃS</b><span>${(STATE.marketing.fans/1000000).toFixed(2)} mi</span></div><div><b>MÍDIA</b><span>${STATE.marketing.media}/100</span></div><div><b>COMERCIAL</b><span>Staff nível ${STATE.staff.commercial}</span></div><div><b>PRESSÃO</b><span>${STATE.marketing.pressure}/100</span></div>`;const sponsor=document.getElementById("sponsorPanel");if(sponsor){sponsor.innerHTML=SPONSORS_V200.map(s=>{const active=STATE.activeSponsors.includes(s.id);return `<div class="${active?'active-deal':''}"><b>${s.name}</b><span>${s.goal}<br>Bônus: ${moneyV200(s.reward)}</span><button data-sponsor-toggle="${s.id}">${active?'ATIVO':'ATIVAR'}</button></div>`;}).join("");sponsor.querySelectorAll("[data-sponsor-toggle]").forEach(btn=>btn.addEventListener("click",()=>toggleSponsorV200(btn.dataset.sponsorToggle)));}const finance=document.getElementById("financePanel");if(finance){const projected=STATE.activeSponsors.reduce((sum,id)=>sum+(SPONSORS_V200.find(s=>s.id===id)?.reward||0),0);finance.innerHTML=`<div class="stat-card"><b>CAIXA</b><strong>${moneyV200(STATE.money)}</strong><i><em style="width:${Math.min(100,STATE.money/1000000)}%"></em></i></div><div class="stat-card"><b>BÔNUS ATIVOS</b><strong>${moneyV200(projected)}</strong><i><em style="width:${Math.min(100,projected/100000)}%"></em></i></div><div class="stat-card"><b>REPUTAÇÃO</b><strong>${STATE.reputation||45}</strong><i><em style="width:${STATE.reputation||45}%"></em></i></div><div class="finance-log">${(STATE.financeLog||[]).slice(0,6).map(l=>`<p>${l.label}: <b>${moneyV200(Math.abs(l.value))}</b></p>`).join("")||"<p>Sem movimentações recentes.</p>"}</div>`;}}
function toggleSponsorV200(id){ensureEcoV200();if(STATE.activeSponsors.includes(id)){if(STATE.activeSponsors.length<=1){alert("Mantenha ao menos um patrocinador ativo.");return;}STATE.activeSponsors=STATE.activeSponsors.filter(x=>x!==id);}else{if(STATE.activeSponsors.length>=2){alert("Limite atual: 2 patrocinadores ativos.");return;}STATE.activeSponsors.push(id);}renderBusinessV200();if(typeof saveGameManualV150==="function")saveGameManualV150();}
function sponsorRewardsV200(){if(!STATE.liveRace||!STATE.liveRace.grid)return 0;ensureEcoV200();const t=typeof liveTeam==="function"?liveTeam():team();const user=STATE.liveRace.grid.filter(d=>d.teamId===t.id);let reward=0;STATE.activeSponsors.forEach(id=>{const s=SPONSORS_V200.find(x=>x.id===id);if(!s)return;let ok=false;if(s.type==="podium")ok=user.some(d=>d.pos<=3&&!d.out);if(s.type==="double_points")ok=user.every(d=>d.pos<=10&&!d.out);if(s.type==="finish")ok=user.every(d=>!d.out);if(ok)reward+=s.reward*(1+((STATE.staff.commercial||1)-1)*.12);});reward=Math.round(reward);if(reward>0){STATE.money+=reward;STATE.financeLog.unshift({label:"Bônus patrocinadores",value:reward});}return reward;}
if(typeof carStats==="function"){const oldCarStatsV200=carStats;carStats=function(){ensureEcoV200();const stats=oldCarStatsV200();if(stats.aero!==undefined)stats.aero=Math.min(99,stats.aero+(STATE.staff.technical||1));if(stats.reliability!==undefined)stats.reliability=Math.min(99,stats.reliability+(STATE.staff.raceOps||1)*2);if(stats.tyres!==undefined)stats.tyres=Math.min(99,stats.tyres+(STATE.staff.strategy||1)*2);return stats;};}
if(typeof finishLiveRaceV14==="function"){const oldFinishV200=finishLiveRaceV14;finishLiveRaceV14=function(){oldFinishV200();sponsorRewardsV200();renderBusinessV200();if(typeof saveGameManualV150==="function")saveGameManualV150();};}
document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{ensureEcoV200();renderStaffV200();renderBusinessV200();},800));
