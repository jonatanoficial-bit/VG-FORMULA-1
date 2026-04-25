
const TEAMS = [{"id": "mclaren", "name": "McLaren", "short": "McLaren", "base": "Woking, Reino Unido", "drivers": ["Lando Norris", "Oscar Piastri"], "card": "assets/teams/cards/mclaren.png", "logo": "assets/teams/cards/logos/mclaren.png", "accent": "#ff8a00", "budget": 245000000, "car": {"aero": 93, "power": 90, "chassis": 92, "reliability": 88, "tyres": 91}}, {"id": "red_bull", "name": "Red Bull Racing", "short": "Red Bull", "base": "Milton Keynes, Reino Unido", "drivers": ["Max Verstappen", "Isack Hadjar"], "card": "assets/teams/cards/red_bull.png", "logo": "assets/teams/cards/logos/red_bull.png", "accent": "#1a4dff", "budget": 255000000, "car": {"aero": 91, "power": 92, "chassis": 89, "reliability": 86, "tyres": 88}}, {"id": "ferrari", "name": "Ferrari", "short": "Ferrari", "base": "Maranello, Itália", "drivers": ["Lewis Hamilton", "Charles Leclerc"], "card": "assets/teams/cards/ferrari.png", "logo": "assets/teams/cards/logos/ferrari.png", "accent": "#ff1010", "budget": 270000000, "car": {"aero": 90, "power": 91, "chassis": 88, "reliability": 87, "tyres": 86}}, {"id": "mercedes", "name": "Mercedes-AMG Petronas", "short": "Mercedes AMG Petronas", "base": "Brackley, Reino Unido", "drivers": ["Kimi Antonelli", "George Russell"], "card": "assets/teams/cards/mercedes.png", "logo": "assets/teams/cards/logos/mercedes.png", "accent": "#00b9ad", "budget": 268000000, "car": {"aero": 92, "power": 94, "chassis": 91, "reliability": 90, "tyres": 89}}, {"id": "aston_martin", "name": "Aston Martin Aramco-Mercedes", "short": "Aston Martin", "base": "Silverstone, Reino Unido", "drivers": ["Fernando Alonso", "Lance Stroll"], "card": "assets/teams/cards/aston_martin.png", "logo": "assets/teams/cards/logos/aston_martin.png", "accent": "#00a67a", "budget": 210000000, "car": {"aero": 84, "power": 87, "chassis": 83, "reliability": 85, "tyres": 82}}, {"id": "alpine", "name": "Alpine", "short": "Alpine", "base": "Viry-Châtillon, França", "drivers": ["Pierre Gasly", "Franco Colapinto"], "card": "assets/teams/cards/alpine.png", "logo": "assets/teams/cards/logos/alpine.png", "accent": "#2488ff", "budget": 160000000, "car": {"aero": 78, "power": 80, "chassis": 77, "reliability": 76, "tyres": 78}}, {"id": "williams", "name": "Williams", "short": "Williams", "base": "Grove, Reino Unido", "drivers": ["Carlos Sainz Jr.", "Alex Albon"], "card": "assets/teams/cards/williams.png", "logo": "assets/teams/cards/logos/williams.png", "accent": "#1b74ff", "budget": 170000000, "car": {"aero": 81, "power": 83, "chassis": 79, "reliability": 80, "tyres": 79}}, {"id": "audi", "name": "Audi F1 Team", "short": "Audi F1 Team", "base": "Hinwil, Suíça", "drivers": ["Gabriel Bortoleto", "Nico Hulkenberg"], "card": "assets/teams/cards/audi.png", "logo": "assets/teams/cards/logos/audi.png", "accent": "#d8d8d8", "budget": 190000000, "car": {"aero": 80, "power": 82, "chassis": 80, "reliability": 78, "tyres": 77}}, {"id": "haas", "name": "Haas", "short": "Haas", "base": "Kannapolis, EUA", "drivers": ["Oliver Bearman", "Esteban Ocon"], "card": "assets/teams/cards/haas.png", "logo": "assets/teams/cards/logos/haas.png", "accent": "#e32222", "budget": 125000000, "car": {"aero": 74, "power": 78, "chassis": 73, "reliability": 75, "tyres": 74}}, {"id": "racing_bulls", "name": "Racing Bulls", "short": "Racing Bulls", "base": "Faenza, Itália", "drivers": ["Liam Lawson", "Arvid Lindblad"], "card": "assets/teams/cards/rb.png", "logo": "assets/teams/cards/logos/rb.png", "accent": "#2a75ff", "budget": 135000000, "car": {"aero": 76, "power": 80, "chassis": 75, "reliability": 76, "tyres": 76}}, {"id": "cadillac", "name": "Cadillac", "short": "Cadillac", "base": "Charlotte, EUA", "drivers": ["Valtteri Bottas", "Sergio Perez"], "card": "assets/teams/cards/cadillac.png", "logo": "assets/teams/cards/logos/cadillac.png", "accent": "#c7a45a", "budget": 150000000, "car": {"aero": 72, "power": 77, "chassis": 72, "reliability": 73, "tyres": 71}}];
const DRIVERS = [{"id": "lando_norris", "name": "Lando Norris", "flag": "🇬🇧", "teamId": "mclaren", "team": "McLaren", "number": "#1", "asset": "assets/drivers/lando_norris.png", "overall": 94, "form": 92, "morale": 82, "attributes": {"pace": 95, "racecraft": 94, "qualifying": 93, "tyres": 92, "wet": 91, "focus": 94}}, {"id": "oscar_piastri", "name": "Oscar Piastri", "flag": "🇦🇺", "teamId": "mclaren", "team": "McLaren", "number": "#81", "asset": "assets/drivers/oscar_piastri.png", "overall": 91, "form": 89, "morale": 82, "attributes": {"pace": 92, "racecraft": 91, "qualifying": 90, "tyres": 89, "wet": 88, "focus": 91}}, {"id": "max_verstappen", "name": "Max Verstappen", "flag": "🇳🇱", "teamId": "red_bull", "team": "Red Bull", "number": "#3", "asset": "assets/drivers/max_verstappen.png", "overall": 95, "form": 93, "morale": 82, "attributes": {"pace": 96, "racecraft": 95, "qualifying": 94, "tyres": 93, "wet": 92, "focus": 95}}, {"id": "isack_hadjar", "name": "Isack Hadjar", "flag": "🇫🇷", "teamId": "red_bull", "team": "Red Bull", "number": "#6", "asset": "assets/drivers/isack_hadjar.png", "overall": 80, "form": 78, "morale": 82, "attributes": {"pace": 81, "racecraft": 80, "qualifying": 79, "tyres": 78, "wet": 77, "focus": 80}}, {"id": "lewis_hamilton", "name": "Lewis Hamilton", "flag": "🇬🇧", "teamId": "ferrari", "team": "Ferrari", "number": "#44", "asset": "assets/drivers/lewis_hamilton.png", "overall": 90, "form": 88, "morale": 82, "attributes": {"pace": 91, "racecraft": 90, "qualifying": 89, "tyres": 88, "wet": 87, "focus": 90}}, {"id": "charles_leclerc", "name": "Charles Leclerc", "flag": "🇲🇨", "teamId": "ferrari", "team": "Ferrari", "number": "#16", "asset": "assets/drivers/charles_leclerc.png", "overall": 92, "form": 90, "morale": 82, "attributes": {"pace": 93, "racecraft": 92, "qualifying": 91, "tyres": 90, "wet": 89, "focus": 92}}, {"id": "andrea_antonelli", "name": "Kimi Antonelli", "flag": "🇮🇹", "teamId": "mercedes", "team": "Mercedes AMG Petronas", "number": "#12", "asset": "assets/drivers/andrea_antonelli.png", "overall": 85, "form": 83, "morale": 82, "attributes": {"pace": 86, "racecraft": 85, "qualifying": 84, "tyres": 83, "wet": 82, "focus": 85}}, {"id": "george_russell", "name": "George Russell", "flag": "🇬🇧", "teamId": "mercedes", "team": "Mercedes AMG Petronas", "number": "#63", "asset": "assets/drivers/george_russell.png", "overall": 90, "form": 88, "morale": 82, "attributes": {"pace": 91, "racecraft": 90, "qualifying": 89, "tyres": 88, "wet": 87, "focus": 90}}, {"id": "fernando_alonso", "name": "Fernando Alonso", "flag": "🇪🇸", "teamId": "aston_martin", "team": "Aston Martin", "number": "#14", "asset": "assets/drivers/fernando_alonso.png", "overall": 88, "form": 86, "morale": 82, "attributes": {"pace": 89, "racecraft": 88, "qualifying": 87, "tyres": 86, "wet": 85, "focus": 88}}, {"id": "lance_stroll", "name": "Lance Stroll", "flag": "🇨🇦", "teamId": "aston_martin", "team": "Aston Martin", "number": "#18", "asset": "assets/drivers/lance_stroll.png", "overall": 78, "form": 76, "morale": 82, "attributes": {"pace": 79, "racecraft": 78, "qualifying": 77, "tyres": 76, "wet": 75, "focus": 78}}, {"id": "pierre_gasly", "name": "Pierre Gasly", "flag": "🇫🇷", "teamId": "alpine", "team": "Alpine", "number": "#10", "asset": "assets/drivers/pierre_gasly.png", "overall": 84, "form": 82, "morale": 82, "attributes": {"pace": 85, "racecraft": 84, "qualifying": 83, "tyres": 82, "wet": 81, "focus": 84}}, {"id": "franco_colapinto", "name": "Franco Colapinto", "flag": "🇦🇷", "teamId": "alpine", "team": "Alpine", "number": "#43", "asset": "assets/drivers/franco_colapinto.png", "overall": 79, "form": 77, "morale": 82, "attributes": {"pace": 80, "racecraft": 79, "qualifying": 78, "tyres": 77, "wet": 76, "focus": 79}}, {"id": "carlos_sainz_jr", "name": "Carlos Sainz Jr.", "flag": "🇪🇸", "teamId": "williams", "team": "Williams", "number": "#55", "asset": "assets/drivers/carlos_sainz_jr.png", "overall": 86, "form": 84, "morale": 82, "attributes": {"pace": 87, "racecraft": 86, "qualifying": 85, "tyres": 84, "wet": 83, "focus": 86}}, {"id": "alex_albon", "name": "Alex Albon", "flag": "🇹🇭", "teamId": "williams", "team": "Williams", "number": "#23", "asset": "assets/drivers/alex_albon.png", "overall": 83, "form": 81, "morale": 82, "attributes": {"pace": 84, "racecraft": 83, "qualifying": 82, "tyres": 81, "wet": 80, "focus": 83}}, {"id": "gabriel_bortoleto", "name": "Gabriel Bortoleto", "flag": "🇧🇷", "teamId": "audi", "team": "Audi F1 Team", "number": "#5", "asset": "assets/drivers/gabriel_bortoleto.png", "overall": 78, "form": 76, "morale": 82, "attributes": {"pace": 79, "racecraft": 78, "qualifying": 77, "tyres": 76, "wet": 75, "focus": 78}}, {"id": "nico_hulkenberg", "name": "Nico Hulkenberg", "flag": "🇩🇪", "teamId": "audi", "team": "Audi F1 Team", "number": "#27", "asset": "assets/drivers/nico_hulkenberg.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}}, {"id": "oliver_bearman", "name": "Oliver Bearman", "flag": "🇬🇧", "teamId": "haas", "team": "Haas", "number": "#87", "asset": "assets/drivers/oliver_bearman.png", "overall": 79, "form": 77, "morale": 82, "attributes": {"pace": 80, "racecraft": 79, "qualifying": 78, "tyres": 77, "wet": 76, "focus": 79}}, {"id": "esteban_ocon", "name": "Esteban Ocon", "flag": "🇫🇷", "teamId": "haas", "team": "Haas", "number": "#31", "asset": "assets/drivers/esteban_ocon.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}}, {"id": "liam_lawson", "name": "Liam Lawson", "flag": "🇳🇿", "teamId": "racing_bulls", "team": "Racing Bulls", "number": "#30", "asset": "assets/drivers/liam_lawson.png", "overall": 80, "form": 78, "morale": 82, "attributes": {"pace": 81, "racecraft": 80, "qualifying": 79, "tyres": 78, "wet": 77, "focus": 80}}, {"id": "arvid_lindblad", "name": "Arvid Lindblad", "flag": "🇬🇧", "teamId": "racing_bulls", "team": "Racing Bulls", "number": "#41", "asset": "assets/drivers/arvid_lindblad.png", "overall": 76, "form": 74, "morale": 82, "attributes": {"pace": 77, "racecraft": 76, "qualifying": 75, "tyres": 74, "wet": 73, "focus": 76}}, {"id": "valtteri_bottas", "name": "Valtteri Bottas", "flag": "🇫🇮", "teamId": "cadillac", "team": "Cadillac", "number": "#77", "asset": "assets/drivers/valtteri_bottas.png", "overall": 82, "form": 80, "morale": 82, "attributes": {"pace": 83, "racecraft": 82, "qualifying": 81, "tyres": 80, "wet": 79, "focus": 82}}, {"id": "sergio_perez", "name": "Sergio Perez", "flag": "🇲🇽", "teamId": "cadillac", "team": "Cadillac", "number": "#11", "asset": "assets/drivers/sergio_perez.png", "overall": 84, "form": 82, "morale": 82, "attributes": {"pace": 85, "racecraft": 84, "qualifying": 83, "tyres": 82, "wet": 81, "focus": 84}}];
const CALENDAR = [{"round": 1, "gp": "GP da Austrália", "country": "Austrália", "track": "Melbourne", "laps": 58, "asset": "assets/tracks/australia.png"}, {"round": 2, "gp": "GP da China", "country": "China", "track": "Shanghai", "laps": 56, "asset": "assets/tracks/china.png"}, {"round": 3, "gp": "GP do Japão", "country": "Japão", "track": "Suzuka", "laps": 53, "asset": "assets/tracks/japan.png"}, {"round": 4, "gp": "GP do Bahrein", "country": "Bahrein", "track": "Sakhir", "laps": 57, "asset": "assets/tracks/bahrain.png"}, {"round": 5, "gp": "GP da Arábia Saudita", "country": "Arábia Saudita", "track": "Jeddah", "laps": 50, "asset": "assets/tracks/jeddah.png"}, {"round": 6, "gp": "GP de Miami", "country": "EUA", "track": "Miami", "laps": 57, "asset": "assets/tracks/miami.png"}, {"round": 7, "gp": "GP de Mônaco", "country": "Mônaco", "track": "Monaco", "laps": 78, "asset": "assets/tracks/monaco.png"}, {"round": 8, "gp": "GP do Canadá", "country": "Canadá", "track": "Montreal", "laps": 70, "asset": "assets/tracks/canada.png"}, {"round": 9, "gp": "GP da Espanha", "country": "Espanha", "track": "Barcelona", "laps": 66, "asset": "assets/tracks/spain.png"}, {"round": 10, "gp": "GP da Áustria", "country": "Áustria", "track": "Red Bull Ring", "laps": 71, "asset": "assets/tracks/austria.png"}, {"round": 11, "gp": "GP da Inglaterra", "country": "Reino Unido", "track": "Silverstone", "laps": 52, "asset": "assets/tracks/silverstone.png"}, {"round": 12, "gp": "GP da Bélgica", "country": "Bélgica", "track": "Spa", "laps": 44, "asset": "assets/tracks/belgium.png"}, {"round": 13, "gp": "GP da Hungria", "country": "Hungria", "track": "Hungaroring", "laps": 70, "asset": "assets/tracks/hungary.png"}, {"round": 14, "gp": "GP da Holanda", "country": "Holanda", "track": "Zandvoort", "laps": 72, "asset": "assets/tracks/netherlands.png"}, {"round": 15, "gp": "GP da Itália", "country": "Itália", "track": "Monza", "laps": 53, "asset": "assets/tracks/italy.png"}, {"round": 16, "gp": "GP do Azerbaijão", "country": "Azerbaijão", "track": "Baku", "laps": 51, "asset": "assets/tracks/baku.png"}, {"round": 17, "gp": "GP de Singapura", "country": "Singapura", "track": "Marina Bay", "laps": 62, "asset": "assets/tracks/singapore.png"}, {"round": 18, "gp": "GP dos EUA", "country": "EUA", "track": "Austin", "laps": 56, "asset": "assets/tracks/austin.png"}, {"round": 19, "gp": "GP do México", "country": "México", "track": "Mexico City", "laps": 71, "asset": "assets/tracks/mexico.png"}, {"round": 20, "gp": "GP de São Paulo", "country": "Brasil", "track": "Interlagos", "laps": 71, "asset": "assets/tracks/interlagos.png"}, {"round": 21, "gp": "GP de Las Vegas", "country": "EUA", "track": "Las Vegas", "laps": 50, "asset": "assets/tracks/las_vegas.png"}, {"round": 22, "gp": "GP do Catar", "country": "Catar", "track": "Lusail", "laps": 57, "asset": "assets/tracks/qatar.png"}, {"round": 23, "gp": "GP de Abu Dhabi", "country": "Emirados Árabes", "track": "Yas Marina", "laps": 58, "asset": "assets/tracks/abu_dhabi.png"}];
const STORE = "f1_ve_state_v0110";

const STATE = {
  career: "Rumo ao Topo",
  country: "🇧🇷 Brasil",
  avatar: "assets/avatar/avatar1.png",
  teamName: "McLaren",
  round: 1,
  carBoost: { aero: 0, power: 0, chassis: 0, reliability: 0, tyres: 0 }
};

const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));

function team() { return TEAMS.find(t => t.name === STATE.teamName) || TEAMS[0]; }
function selectedDrivers() { const t = team(); return DRIVERS.filter(d => d.teamId === t.id); }
function nextRace() { return CALENDAR.find(r => r.round === STATE.round) || CALENDAR[0]; }

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
}

function markSelected() {
  $all("[data-avatar]").forEach(btn => btn.classList.toggle("selected", btn.dataset.avatar === STATE.avatar));
  $all("[data-team]").forEach(btn => btn.classList.toggle("selected", btn.dataset.team === STATE.teamName));
}

function applyAvatar() {
  $all(".profile-avatar-img").forEach(img => { img.src = STATE.avatar; });
  $all(".profile-img").forEach(el => { el.style.backgroundImage = "none"; });
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

  const race = nextRace();
  if ($("#racePreview")) {
    const avgDriver = Math.round(ds.reduce((s,d)=>s+d.overall,0) / Math.max(1, ds.length));
    const carAvg = Math.round(Object.values(stats).reduce((a,b)=>a+b,0) / 5);
    const predicted = Math.round((avgDriver * .55) + (carAvg * .45));
    $("#racePreview").innerHTML = `<div class="race-card"><h3>${race.gp}</h3><p>${race.track} • ${race.laps} voltas • ${race.country}</p><b>${t.short}</b><span>Dupla: ${ds.map(d=>d.name).join(" + ")}</span><strong>Força prevista: ${predicted}</strong></div>`;
  }

  const list = $("#calendarList");
  if (list) {
    list.innerHTML = CALENDAR.map(r => `<div class="calendar-row ${r.round===STATE.round?'current':''}"><b>${r.round}. ${r.gp}</b><span>${r.track} • ${r.laps} voltas</span></div>`).join("");
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
  const ordered = ds.map(d => {
    const score = Math.round(d.overall*.58 + teamPower*.42 + Math.random()*8);
    return {...d, score};
  }).sort((a,b)=>b.score-a.score);
  const result = $("#raceResult");
  if (result) result.innerHTML = `<h3>Resultado simulado</h3>${ordered.map((d,i)=>`<div class="calendar-row"><b>P${i+1} • ${d.name}</b><span>${t.short} • score ${d.score}</span></div>`).join("")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  load();

  $all("[data-goto]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.goto)));

  $all("[data-avatar]").forEach(btn => btn.addEventListener("click", () => { STATE.avatar = btn.dataset.avatar; applyAll(); }));

  $all("[data-team]").forEach(btn => btn.addEventListener("click", () => { STATE.teamName = btn.dataset.team; applyAll(); }));

  $all("[data-mode]").forEach(btn => btn.addEventListener("click", () => { $all("[data-mode]").forEach(x=>x.classList.remove("selected")); btn.classList.add("selected"); }));
  $all("[data-difficulty]").forEach(btn => btn.addEventListener("click", () => { $all("[data-difficulty]").forEach(x=>x.classList.remove("selected")); btn.classList.add("selected"); }));

  const start = $("#startCareer"); if (start) start.addEventListener("click", () => showScreen("screenLobby"));

  const dev = $("#developAero"); if (dev) dev.addEventListener("click", () => { STATE.carBoost.aero = (STATE.carBoost.aero || 0) + 2; applyAll(); });
  const sim = $("#simulateRace"); if (sim) sim.addEventListener("click", simulateRace);

  const name = $("#careerNameInput"); if (name) name.addEventListener("input", applyAll);
  const country = $("#countryInput"); if (country) country.addEventListener("change", applyAll);

  applyAll();
});
