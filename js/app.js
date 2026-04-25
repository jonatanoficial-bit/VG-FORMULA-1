
const STATE = { career:"Rumo ao Topo", country:"🇧🇷 Brasil", avatar:"assets/avatar/avatar1.png", team:"McLaren", teamCard:"assets/teams/cards/mclaren.png", teamLogo:"assets/teams/cards/logos/mclaren.png" };
const TEAM_MAP = {
 "McLaren": ["McLaren","assets/teams/cards/mclaren.png","assets/teams/cards/logos/mclaren.png","Woking, Reino Unido"],
 "Red Bull Racing": ["Red Bull","assets/teams/cards/red_bull.png","assets/teams/cards/logos/red_bull.png","Milton Keynes, Reino Unido"],
 "Ferrari": ["Ferrari","assets/teams/cards/ferrari.png","assets/teams/cards/logos/ferrari.png","Maranello, Itália"],
 "Mercedes-AMG Petronas": ["Mercedes AMG Petronas","assets/teams/cards/mercedes.png","assets/teams/cards/logos/mercedes.png","Brackley, Reino Unido"],
 "Aston Martin Aramco-Mercedes": ["Aston Martin","assets/teams/cards/aston_martin.png","assets/teams/cards/logos/aston_martin.png","Silverstone, Reino Unido"],
 "Alpine": ["Alpine","assets/teams/cards/alpine.png","assets/teams/cards/logos/alpine.png","Viry-Châtillon, França"],
 "Williams": ["Williams","assets/teams/cards/williams.png","assets/teams/cards/logos/williams.png","Grove, Reino Unido"],
 "Audi F1 Team": ["Audi F1 Team","assets/teams/cards/audi.png","assets/teams/cards/logos/audi.png","Hinwil, Suíça"],
 "Haas": ["Haas","assets/teams/cards/haas.png","assets/teams/cards/logos/haas.png","Kannapolis, EUA"],
 "Racing Bulls": ["Racing Bulls","assets/teams/cards/rb.png","assets/teams/cards/logos/rb.png","Faenza, Itália"],
 "Cadillac": ["Cadillac","assets/teams/cards/cadillac.png","assets/teams/cards/logos/cadillac.png","Charlotte, EUA"]
};
const $=s=>document.querySelector(s); const $all=s=>Array.from(document.querySelectorAll(s));
function setTeam(name){ const t=TEAM_MAP[name]||TEAM_MAP.McLaren; STATE.team=name; STATE.teamShort=t[0]; STATE.teamCard=t[1]; STATE.teamLogo=t[2]; STATE.teamBase=t[3]; }
function applyAll(){ STATE.career=$("#careerNameInput")?.value||STATE.career; $all(".profile-img").forEach(el=>el.style.backgroundImage=`url(${STATE.avatar})`); if($("#confirmCareer"))$("#confirmCareer").textContent=STATE.career; if($("#confirmTeam"))$("#confirmTeam").textContent=(STATE.teamShort||STATE.team).toUpperCase(); if($("#confirmTeamLogo"))$("#confirmTeamLogo").src=STATE.teamLogo; if($("#confirmTeamCard"))$("#confirmTeamCard").src=STATE.teamCard; if($("#confirmTeamBase"))$("#confirmTeamBase").textContent="Base: "+(STATE.teamBase||""); if($("#confirmCarName"))$("#confirmCarName").textContent=(STATE.teamShort||STATE.team).toUpperCase()+" 2026"; if($("#lobbyCareer"))$("#lobbyCareer").textContent=STATE.career.toUpperCase(); if($("#lobbyTeam"))$("#lobbyTeam").textContent=(STATE.teamShort||STATE.team).toUpperCase(); if($("#lobbyTeamLogo"))$("#lobbyTeamLogo").src=STATE.teamLogo; const bg=$(".lobby-screen"); if(bg) bg.style.backgroundImage=`linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.10) 45%,#050505 83%),url(${STATE.teamCard})`; localStorage.setItem("f1_ve_visual_state",JSON.stringify(STATE));}
function showScreen(id){$all(".screen").forEach(s=>s.classList.remove("active")); const sc=document.getElementById(id); if(sc)sc.classList.add("active"); applyAll(); window.scrollTo({top:0,behavior:"smooth"});}
document.addEventListener("DOMContentLoaded",()=>{try{Object.assign(STATE,JSON.parse(localStorage.getItem("f1_ve_visual_state")||"{}"))}catch(e){}; setTeam(STATE.team||"McLaren"); $all("[data-goto]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.goto))); $all("[data-avatar]").forEach(b=>b.addEventListener("click",()=>{STATE.avatar=b.dataset.avatar;$all("[data-avatar]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");applyAll();})); $all("[data-team]").forEach(b=>b.addEventListener("click",()=>{setTeam(b.dataset.team);$all("[data-team]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");applyAll();})); const st=$("#startCareer"); if(st)st.addEventListener("click",()=>showScreen("screenLobby")); applyAll();});
