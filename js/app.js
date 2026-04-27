
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
