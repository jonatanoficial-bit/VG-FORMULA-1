
const TEAMS = [{"name": "McLaren", "short": "McLaren", "base": "Woking, Reino Unido", "drivers": "Norris • Piastri", "card": "assets/teams/cards/mclaren.png", "logo": "assets/teams/cards/logos/mclaren.png", "accent": "#ff8a00"}, {"name": "Red Bull Racing", "short": "Red Bull", "base": "Milton Keynes, Reino Unido", "drivers": "Verstappen • Hadjar", "card": "assets/teams/cards/red_bull.png", "logo": "assets/teams/cards/logos/red_bull.png", "accent": "#1a4dff"}, {"name": "Ferrari", "short": "Ferrari", "base": "Maranello, Itália", "drivers": "Hamilton • Leclerc", "card": "assets/teams/cards/ferrari.png", "logo": "assets/teams/cards/logos/ferrari.png", "accent": "#ff1010"}, {"name": "Mercedes-AMG Petronas", "short": "Mercedes AMG Petronas", "base": "Brackley, Reino Unido", "drivers": "Antonelli • Russell", "card": "assets/teams/cards/mercedes.png", "logo": "assets/teams/cards/logos/mercedes.png", "accent": "#00b9ad"}, {"name": "Aston Martin Aramco-Mercedes", "short": "Aston Martin", "base": "Silverstone, Reino Unido", "drivers": "Alonso • Stroll", "card": "assets/teams/cards/aston_martin.png", "logo": "assets/teams/cards/logos/aston_martin.png", "accent": "#00a67a"}, {"name": "Alpine", "short": "Alpine", "base": "Viry-Châtillon, França", "drivers": "Gasly • Colapinto", "card": "assets/teams/cards/alpine.png", "logo": "assets/teams/cards/logos/alpine.png", "accent": "#2488ff"}, {"name": "Williams", "short": "Williams", "base": "Grove, Reino Unido", "drivers": "Sainz Jr. • Albon", "card": "assets/teams/cards/williams.png", "logo": "assets/teams/cards/logos/williams.png", "accent": "#1b74ff"}, {"name": "Audi F1 Team", "short": "Audi F1 Team", "base": "Hinwil, Suíça", "drivers": "Bortoleto • Hulkenberg", "card": "assets/teams/cards/audi.png", "logo": "assets/teams/cards/logos/audi.png", "accent": "#d8d8d8"}, {"name": "Haas", "short": "Haas", "base": "Kannapolis, EUA", "drivers": "Bearman • Ocon", "card": "assets/teams/cards/haas.png", "logo": "assets/teams/cards/logos/haas.png", "accent": "#e32222"}, {"name": "Racing Bulls", "short": "Racing Bulls", "base": "Faenza, Itália", "drivers": "Lawson • Lindblad", "card": "assets/teams/cards/rb.png", "logo": "assets/teams/cards/logos/rb.png", "accent": "#2a75ff"}, {"name": "Cadillac", "short": "Cadillac", "base": "Charlotte, EUA", "drivers": "Bottas • Perez", "card": "assets/teams/cards/cadillac.png", "logo": "assets/teams/cards/logos/cadillac.png", "accent": "#c7a45a"}];
const DRIVERS_2026 = [{"name": "A. Antonelli", "flag": "🇮🇹", "team": "Mercedes", "#": "#12", "asset": "assets/drivers/andrea_antonelli.png"}, {"name": "G. Russell", "flag": "🇬🇧", "team": "Mercedes", "#": "#63", "asset": "assets/drivers/george_russell.png"}, {"name": "L. Hamilton", "flag": "🇬🇧", "team": "Ferrari", "#": "#44", "asset": "assets/drivers/lewis_hamilton.png"}, {"name": "C. Leclerc", "flag": "🇲🇨", "team": "Ferrari", "#": "#16", "asset": "assets/drivers/charles_leclerc.png"}, {"name": "M. Verstappen", "flag": "🇳🇱", "team": "Red Bull", "#": "#3", "asset": "assets/drivers/max_verstappen.png"}, {"name": "L. Norris", "flag": "🇬🇧", "team": "McLaren", "#": "#1", "asset": "assets/drivers/lando_norris.png"}, {"name": "O. Piastri", "flag": "🇦🇺", "team": "McLaren", "#": "#81", "asset": "assets/drivers/oscar_piastri.png"}, {"name": "G. Bortoleto", "flag": "🇧🇷", "team": "Audi F1 Team", "#": "#5", "asset": "assets/drivers/gabriel_bortoleto.png"}];
const STORAGE_KEY = "f1_ve_visual_state_v0104";

const STATE = {
  career: "Rumo ao Topo",
  country: "🇧🇷 Brasil",
  avatar: "assets/avatar/avatar1.png",
  teamName: "McLaren"
};

const $ = (sel) => document.querySelector(sel);
const $all = (sel) => Array.from(document.querySelectorAll(sel));

function currentTeam() {
  return TEAMS.find(t => t.name === STATE.teamName) || TEAMS[0];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
  localStorage.setItem("f1_ve_visual_state", JSON.stringify(STATE));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("f1_ve_visual_state");
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.career) STATE.career = saved.career;
    if (saved.country) STATE.country = saved.country;
    if (saved.avatar) STATE.avatar = saved.avatar;
    if (saved.teamName) STATE.teamName = saved.teamName;
    if (saved.team && typeof saved.team === "string") STATE.teamName = saved.team;
  } catch (e) {}
}

function markSelected() {
  $all("[data-avatar]").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.avatar === STATE.avatar);
  });

  $all("[data-team]").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.team === STATE.teamName);
  });
}

function setProfileAvatar() {
  $all(".profile-img").forEach(el => {
    el.style.backgroundImage = `url("${STATE.avatar}")`;
    el.setAttribute("data-avatar-current", STATE.avatar);
  });

  const preview = $("#confirmAvatarImg");
  if (preview) preview.src = STATE.avatar;
}

function readFormState() {
  const careerInput = $("#careerNameInput");
  if (careerInput && careerInput.value.trim()) STATE.career = careerInput.value.trim();

  const countryInput = $("#countryInput");
  if (countryInput) {
    STATE.country = countryInput.value
      .replace("BRASIL", "Brasil")
      .replace("REINO UNIDO", "Reino Unido")
      .replace("ITÁLIA", "Itália")
      .replace("ALEMANHA", "Alemanha");
  }
}

function updateConfirm() {
  readFormState();
  const team = currentTeam();

  const confirmCareer = $("#confirmCareer");
  if (confirmCareer) confirmCareer.textContent = STATE.career;

  const confirmCountry = $("#confirmCountry");
  if (confirmCountry) confirmCountry.textContent = `${STATE.country} • Avatar selecionado`;

  const confirmTeam = $("#confirmTeam");
  if (confirmTeam) confirmTeam.textContent = team.short.toUpperCase();

  const confirmTeamBase = $("#confirmTeamBase");
  if (confirmTeamBase) confirmTeamBase.textContent = "Base: " + team.base;

  const confirmTeamDrivers = $("#confirmTeamDrivers");
  if (confirmTeamDrivers) confirmTeamDrivers.textContent = "Pilotos: " + team.drivers;

  const confirmTeamLogo = $("#confirmTeamLogo");
  if (confirmTeamLogo) confirmTeamLogo.src = team.logo;

  const confirmTeamCard = $("#confirmTeamCard");
  if (confirmTeamCard) confirmTeamCard.src = team.card;

  const confirmCarName = $("#confirmCarName");
  if (confirmCarName) confirmCarName.textContent = team.short.toUpperCase() + " 2026";

  setProfileAvatar();
  markSelected();
  saveState();
}

function updateLobby() {
  readFormState();
  const team = currentTeam();

  const lobbyCareer = $("#lobbyCareer");
  if (lobbyCareer) lobbyCareer.textContent = STATE.career.toUpperCase();

  const lobbyCountry = $("#lobbyCountry");
  if (lobbyCountry) lobbyCountry.textContent = STATE.country.toUpperCase();

  const lobbyTeam = $("#lobbyTeam");
  if (lobbyTeam) lobbyTeam.textContent = team.short.toUpperCase();

  const lobbyTeamLogo = $("#lobbyTeamLogo");
  if (lobbyTeamLogo) lobbyTeamLogo.src = team.logo;

  const lobby = $(".lobby-screen");
  if (lobby) {
    lobby.style.backgroundImage =
      `linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.10) 45%,#050505 83%), url("${team.card}")`;
  }

  document.documentElement.style.setProperty("--cyan", team.accent || "#00b9ad");
  setProfileAvatar();
  markSelected();
  saveState();
}

function showScreen(id) {
  $all(".screen").forEach(screen => screen.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  $all(".game-nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.goto === id));

  if (id === "screenConfirm") updateConfirm();
  if (id === "screenLobby") updateLobby();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDriversList() {
  const list = $("#driverList2026");
  if (!list) return;

  list.innerHTML = DRIVERS_2026.map(d => `
    <div class="driver-mini">
      <img src="${d.asset}" onerror="this.style.display='none'">
      <div><b>${d.flag} ${d.name}</b><span>${d.team}</span></div>
      <em>${d["#"]}</em>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderDriversList();

  $all("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => showScreen(btn.dataset.goto));
  });

  $all("[data-avatar]").forEach(btn => {
    btn.addEventListener("click", () => {
      STATE.avatar = btn.dataset.avatar;
      setProfileAvatar();
      markSelected();
      saveState();
    });
  });

  $all("[data-team]").forEach(btn => {
    btn.addEventListener("click", () => {
      STATE.teamName = btn.dataset.team;
      markSelected();
      updateConfirm();
      saveState();
    });
  });

  $all("[data-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      $all("[data-mode]").forEach(x => x.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  $all("[data-difficulty]").forEach(btn => {
    btn.addEventListener("click", () => {
      $all("[data-difficulty]").forEach(x => x.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  const start = $("#startCareer");
  if (start) {
    start.addEventListener("click", () => {
      updateConfirm();
      updateLobby();
      showScreen("screenLobby");
    });
  }

  const careerInput = $("#careerNameInput");
  if (careerInput) {
    careerInput.addEventListener("input", () => {
      STATE.career = careerInput.value || "Rumo ao Topo";
      saveState();
    });
  }

  const countryInput = $("#countryInput");
  if (countryInput) {
    countryInput.addEventListener("change", () => {
      readFormState();
      saveState();
    });
  }

  markSelected();
  setProfileAvatar();
  updateConfirm();
});
