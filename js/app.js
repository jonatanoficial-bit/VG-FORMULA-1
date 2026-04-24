const DRIVERS_2026 = [{"name": "A. Antonelli", "flag": "🇮🇹", "team": "Mercedes", "number": "#12", "asset": "assets/drivers/andrea_antonelli.png"}, {"name": "G. Russell", "flag": "🇬🇧", "team": "Mercedes", "number": "#63", "asset": "assets/drivers/george_russell.png"}, {"name": "L. Hamilton", "flag": "🇬🇧", "team": "Ferrari", "number": "#44", "asset": "assets/drivers/lewis_hamilton.png"}, {"name": "C. Leclerc", "flag": "🇲🇨", "team": "Ferrari", "number": "#16", "asset": "assets/drivers/charles_leclerc.png"}, {"name": "O. Bearman", "flag": "🇬🇧", "team": "Haas", "number": "#87", "asset": "assets/drivers/oliver_bearman.png"}, {"name": "P. Gasly", "flag": "🇫🇷", "team": "Alpine", "number": "#10", "asset": "assets/drivers/pierre_gasly.png"}, {"name": "L. Lawson", "flag": "🇳🇿", "team": "Racing Bulls", "number": "#30", "asset": "assets/drivers/liam_lawson.png"}, {"name": "I. Hadjar", "flag": "🇫🇷", "team": "Red Bull", "number": "#6", "asset": "assets/drivers/isack_hadjar.png"}, {"name": "C. Sainz Jr.", "flag": "🇪🇸", "team": "Williams", "number": "#55", "asset": "assets/drivers/carlos_sainz_jr.png"}, {"name": "F. Colapinto", "flag": "🇦🇷", "team": "Alpine", "number": "#43", "asset": "assets/drivers/franco_colapinto.png"}, {"name": "N. Hulkenberg", "flag": "🇩🇪", "team": "Audi F1 Team", "number": "#27", "asset": "assets/drivers/nico_hulkenberg.png"}, {"name": "A. Lindblad", "flag": "🇬🇧", "team": "Racing Bulls", "number": "#41", "asset": "assets/drivers/arvid_lindblad.png"}, {"name": "V. Bottas", "flag": "🇫🇮", "team": "Cadillac", "number": "#77", "asset": "assets/drivers/valtteri_bottas.png"}, {"name": "E. Ocon", "flag": "🇫🇷", "team": "Haas", "number": "#31", "asset": "assets/drivers/esteban_ocon.png"}, {"name": "S. Perez", "flag": "🇲🇽", "team": "Cadillac", "number": "#11", "asset": "assets/drivers/sergio_perez.png"}, {"name": "M. Verstappen", "flag": "🇳🇱", "team": "Red Bull", "number": "#3", "asset": "assets/drivers/max_verstappen.png"}, {"name": "F. Alonso", "flag": "🇪🇸", "team": "Aston Martin Aramco-Mercedes", "number": "#4", "asset": "assets/drivers/fernando_alonso.png"}, {"name": "L. Stroll", "flag": "🇨🇦", "team": "Aston Martin Aramco-Mercedes", "number": "#18", "asset": "assets/drivers/lance_stroll.png"}, {"name": "L. Norris", "flag": "🇬🇧", "team": "McLaren", "number": "#1", "asset": "assets/drivers/lando_norris.png"}, {"name": "O. Piastri", "flag": "🇦🇺", "team": "McLaren", "number": "#81", "asset": "assets/drivers/oscar_piastri.png"}, {"name": "G. Bortoleto", "flag": "🇧🇷", "team": "Audi F1 Team", "number": "#5", "asset": "assets/drivers/gabriel_bortoleto.png"}, {"name": "A. Albon", "flag": "🇹🇭", "team": "Williams", "number": "#23", "asset": "assets/drivers/alex_albon.png"}];
const TEAMS_2026 = [{"name": "McLaren", "short": "McLaren", "driver1": "Norris", "driver2": "Piastri", "base": "Woking, Reino Unido", "id": "mclaren"}, {"name": "Red Bull Racing", "short": "Red Bull", "driver1": "Verstappen", "driver2": "Hadjar", "base": "Milton Keynes, Reino Unido", "id": "redbull"}, {"name": "Ferrari", "short": "Ferrari", "driver1": "Hamilton", "driver2": "Leclerc", "base": "Maranello, Itália", "id": "ferrari"}, {"name": "Mercedes-AMG Petronas", "short": "Mercedes", "driver1": "Antonelli", "driver2": "Russell", "base": "Brackley, Reino Unido", "id": "mercedes"}, {"name": "Aston Martin Aramco-Mercedes", "short": "Aston Martin", "driver1": "Alonso", "driver2": "Stroll", "base": "Silverstone, Reino Unido", "id": "aston"}, {"name": "Alpine", "short": "Alpine", "driver1": "Gasly", "driver2": "Colapinto", "base": "Viry-Châtillon, França", "id": "alpine"}, {"name": "Williams", "short": "Williams", "driver1": "Sainz Jr.", "driver2": "Albon", "base": "Grove, Reino Unido", "id": "williams"}, {"name": "Audi F1 Team", "short": "Audi", "driver1": "Bortoleto", "driver2": "Hulkenberg", "base": "Hinwil, Suíça", "id": "audi"}, {"name": "Haas", "short": "Haas", "driver1": "Bearman", "driver2": "Ocon", "base": "Kannapolis, EUA", "id": "haas"}, {"name": "Racing Bulls", "short": "Racing Bulls", "driver1": "Lawson", "driver2": "Lindblad", "base": "Faenza, Itália", "id": "racingbulls"}, {"name": "Cadillac", "short": "Cadillac", "driver1": "Bottas", "driver2": "Perez", "base": "Charlotte, EUA", "id": "cadillac"}];

const STATE = {
  career: "Rumo ao Topo",
  team: "Mercedes-AMG Petronas",
  avatar: "assets/avatar/avatar1.png"
};

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const screen = document.getElementById(id);
  if(screen) screen.classList.add("active");
  document.querySelectorAll(".game-nav button").forEach(b=>b.classList.toggle("active", b.dataset.goto === id));
  window.scrollTo({top:0,behavior:"smooth"});
}

function bindChoices(selector){
  document.querySelectorAll(selector).forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(selector).forEach(x=>x.classList.remove("selected"));
      btn.classList.add("selected");
      if(btn.dataset.team) { STATE.team = btn.dataset.team; STATE.teamShort = btn.dataset.short || btn.dataset.team; }
      if(btn.dataset.avatar) STATE.avatar = btn.dataset.avatar;
    });
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-goto]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.goto)));

  const list2026 = document.getElementById("driverList2026");
  if(list2026){
    list2026.innerHTML = DRIVERS_2026.map(d=>`<div class="driver-mini"><img src="${d.asset}" onerror="this.style.display='none'"><div><b>${d.flag} ${d.name}</b><span>${d.team}</span></div><em>${d.number}</em></div>`).join("");
  }

  bindChoices("[data-mode]");
  bindChoices("[data-difficulty]");
  bindChoices("[data-team]");
  bindChoices("[data-avatar]");

  const start = document.getElementById("startCareer");
  if(start){
    start.addEventListener("click",()=>{
      const name = document.getElementById("careerNameInput")?.value || "Rumo ao Topo";
      STATE.career = name;
      document.getElementById("confirmCareer").textContent = name;
      document.getElementById("lobbyCareer").textContent = name.toUpperCase();
      document.getElementById("confirmTeam").textContent = STATE.team;
      document.getElementById("lobbyTeam").textContent = (STATE.teamShort || STATE.team).toUpperCase();
      document.querySelectorAll(".profile-img").forEach(el=>el.style.backgroundImage=`url(${STATE.avatar})`);
      localStorage.setItem("f1_ve_visual_state", JSON.stringify(STATE));
      showScreen("screenLobby");
    });
  }

  const cont = document.querySelector('[data-goto="screenLobby"]');
  try {
    const saved = JSON.parse(localStorage.getItem("f1_ve_visual_state") || "null");
    if(saved) Object.assign(STATE, saved);
  } catch(e) {}
});
