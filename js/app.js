
const STATE = {
  career: "Rumo ao Topo",
  team: "Mercedes-AMG Petronas",
  avatar: "assets/drivers/charles_leclerc.png"
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
      if(btn.dataset.team) STATE.team = btn.dataset.team;
      if(btn.dataset.avatar) STATE.avatar = btn.dataset.avatar;
    });
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-goto]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.goto)));
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
      document.getElementById("lobbyTeam").textContent = STATE.team.toUpperCase();
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
