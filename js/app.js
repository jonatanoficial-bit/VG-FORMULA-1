
const TEAMS = [{"name": "McLaren", "short": "McLaren", "base": "Woking, Reino Unido", "drivers": "Norris • Piastri", "card": "assets/teams/cards/mclaren.png", "logo": "assets/teams/cards/logos/mclaren.png", "accent": "#ff8a00"}, {"name": "Red Bull Racing", "short": "Red Bull", "base": "Milton Keynes, Reino Unido", "drivers": "Verstappen • Hadjar", "card": "assets/teams/cards/red_bull.png", "logo": "assets/teams/cards/logos/red_bull.png", "accent": "#1a4dff"}, {"name": "Ferrari", "short": "Ferrari", "base": "Maranello, Itália", "drivers": "Hamilton • Leclerc", "card": "assets/teams/cards/ferrari.png", "logo": "assets/teams/cards/logos/ferrari.png", "accent": "#ff1010"}, {"name": "Mercedes-AMG Petronas", "short": "Mercedes AMG Petronas", "base": "Brackley, Reino Unido", "drivers": "Antonelli • Russell", "card": "assets/teams/cards/mercedes.png", "logo": "assets/teams/cards/logos/mercedes.png", "accent": "#00b9ad"}, {"name": "Aston Martin Aramco-Mercedes", "short": "Aston Martin", "base": "Silverstone, Reino Unido", "drivers": "Alonso • Stroll", "card": "assets/teams/cards/aston_martin.png", "logo": "assets/teams/cards/logos/aston_martin.png", "accent": "#00a67a"}, {"name": "Alpine", "short": "Alpine", "base": "Viry-Châtillon, França", "drivers": "Gasly • Colapinto", "card": "assets/teams/cards/alpine.png", "logo": "assets/teams/cards/logos/alpine.png", "accent": "#2488ff"}, {"name": "Williams", "short": "Williams", "base": "Grove, Reino Unido", "drivers": "Sainz Jr. • Albon", "card": "assets/teams/cards/williams.png", "logo": "assets/teams/cards/logos/williams.png", "accent": "#1b74ff"}, {"name": "Audi F1 Team", "short": "Audi F1 Team", "base": "Hinwil, Suíça", "drivers": "Bortoleto • Hulkenberg", "card": "assets/teams/cards/audi.png", "logo": "assets/teams/cards/logos/audi.png", "accent": "#d8d8d8"}, {"name": "Haas", "short": "Haas", "base": "Kannapolis, EUA", "drivers": "Bearman • Ocon", "card": "assets/teams/cards/haas.png", "logo": "assets/teams/cards/logos/haas.png", "accent": "#e32222"}, {"name": "Racing Bulls", "short": "Racing Bulls", "base": "Faenza, Itália", "drivers": "Lawson • Lindblad", "card": "assets/teams/cards/rb.png", "logo": "assets/teams/cards/logos/rb.png", "accent": "#2a75ff"}, {"name": "Cadillac", "short": "Cadillac", "base": "Charlotte, EUA", "drivers": "Bottas • Perez", "card": "assets/teams/cards/cadillac.png", "logo": "assets/teams/cards/logos/cadillac.png", "accent": "#c7a45a"}];
const STORE = "f1_ve_state_v0105";

const STATE = {
  career: "Rumo ao Topo",
  country: "🇧🇷 Brasil",
  avatar: "assets/avatar/avatar1.png",
  teamName: "McLaren"
};

const $ = (s) => document.querySelector(s);
const $all = (s) => Array.from(document.querySelectorAll(s));

function team() {
  return TEAMS.find(t => t.name === STATE.teamName) || TEAMS[0];
}

function save() {
  localStorage.setItem(STORE, JSON.stringify(STATE));
  localStorage.setItem("f1_ve_visual_state", JSON.stringify(STATE));
}

function load() {
  try {
    const old = JSON.parse(localStorage.getItem(STORE) || localStorage.getItem("f1_ve_visual_state") || "null");
    if (!old) return;
    STATE.career = old.career || STATE.career;
    STATE.country = old.country || STATE.country;
    STATE.avatar = old.avatar || STATE.avatar;
    STATE.teamName = old.teamName || old.team || STATE.teamName;
  } catch(e) {}
}

function markSelected() {
  $all("[data-avatar]").forEach(btn => btn.classList.toggle("selected", btn.dataset.avatar === STATE.avatar));
  $all("[data-team]").forEach(btn => btn.classList.toggle("selected", btn.dataset.team === STATE.teamName));
}

function applyAvatar() {
  // New reliable img-based avatar.
  $all(".profile-avatar-img").forEach(img => {
    img.src = STATE.avatar;
    img.dataset.currentAvatar = STATE.avatar;
  });

  // Fallback for any remaining old background elements.
  $all(".profile-img").forEach(el => {
    el.style.backgroundImage = "none";
    el.dataset.avatarCurrent = STATE.avatar;
  });
}

function readForm() {
  const name = $("#careerNameInput");
  if (name && name.value.trim()) STATE.career = name.value.trim();

  const country = $("#countryInput");
  if (country) {
    STATE.country = country.value
      .replace("BRASIL", "Brasil")
      .replace("REINO UNIDO", "Reino Unido")
      .replace("ITÁLIA", "Itália")
      .replace("ALEMANHA", "Alemanha");
  }
}

function applyTeam() {
  const t = team();

  if ($("#confirmTeam")) $("#confirmTeam").textContent = t.short.toUpperCase();
  if ($("#confirmTeamBase")) $("#confirmTeamBase").textContent = "Base: " + t.base;
  if ($("#confirmTeamDrivers")) $("#confirmTeamDrivers").textContent = "Pilotos: " + t.drivers;
  if ($("#confirmTeamLogo")) $("#confirmTeamLogo").src = t.logo;
  if ($("#confirmTeamCard")) $("#confirmTeamCard").src = t.card;
  if ($("#confirmCarName")) $("#confirmCarName").textContent = t.short.toUpperCase() + " 2026";

  if ($("#lobbyTeam")) $("#lobbyTeam").textContent = t.short.toUpperCase();
  if ($("#lobbyTeamLogo")) $("#lobbyTeamLogo").src = t.logo;

  const lobby = $(".lobby-screen");
  if (lobby) {
    lobby.style.backgroundImage = `linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.10) 45%,#050505 83%), url("${t.card}")`;
  }

  document.documentElement.style.setProperty("--cyan", t.accent || "#00b9ad");
}

function applyText() {
  if ($("#confirmCareer")) $("#confirmCareer").textContent = STATE.career;
  if ($("#confirmCountry")) $("#confirmCountry").textContent = STATE.country + " • Avatar selecionado";
  if ($("#lobbyCareer")) $("#lobbyCareer").textContent = STATE.career.toUpperCase();
  if ($("#lobbyCountry")) $("#lobbyCountry").textContent = STATE.country.toUpperCase();
}

function applyAll() {
  readForm();
  applyAvatar();
  applyTeam();
  applyText();
  markSelected();
  save();
}

function showScreen(id) {
  $all(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  $all(".game-nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.goto === id));
  applyAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  load();

  $all("[data-goto]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.goto)));

  $all("[data-avatar]").forEach(btn => {
    btn.addEventListener("click", () => {
      STATE.avatar = btn.dataset.avatar;
      markSelected();
      applyAvatar();
      save();
    });
  });

  $all("[data-team]").forEach(btn => {
    btn.addEventListener("click", () => {
      STATE.teamName = btn.dataset.team;
      markSelected();
      applyTeam();
      save();
    });
  });

  $all("[data-mode]").forEach(btn => btn.addEventListener("click", () => {
    $all("[data-mode]").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  }));

  $all("[data-difficulty]").forEach(btn => btn.addEventListener("click", () => {
    $all("[data-difficulty]").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  }));

  const start = $("#startCareer");
  if (start) start.addEventListener("click", () => showScreen("screenLobby"));

  const name = $("#careerNameInput");
  if (name) name.addEventListener("input", applyAll);

  const country = $("#countryInput");
  if (country) country.addEventListener("change", applyAll);

  applyAll();
});
