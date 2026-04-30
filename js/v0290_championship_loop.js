
/* v0.29.0 - Championship loop: standings, next race, race summary and strategic polish */
(function(){
  const BUILD="v0.29.0";
  const POINTS=[25,18,15,12,10,8,6,4,2,1];
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.from(document.querySelectorAll(s))}
  function S(){return window.STATE||(window.STATE={})}
  function T(){return Array.isArray(window.TEAMS)?window.TEAMS:[]}
  function D(){return Array.isArray(window.DRIVERS)?window.DRIVERS:[]}
  function C(){return Array.isArray(window.CALENDAR)?window.CALENDAR:[]}
  function money(v){return "R$ "+((v||0)/1000000).toFixed(1)+" mi"}
  function save(){
    try{
      S().lastAutosave=new Date().toISOString();
      S().stableBuild=BUILD;
      localStorage.setItem("f1_ve_save_slot_main_v0150",JSON.stringify({version:BUILD,savedAt:S().lastAutosave,state:S()}));
      localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()));
    }catch(e){}
  }
  function driverById(id){return D().find(d=>d.id===id)||{}}
  function teamById(id){return T().find(t=>t.id===id)||{}}
  function currentTeam(){const st=S();return T().find(t=>t.id===st.teamId||t.name===st.teamName||t.short===st.teamName)||T()[0]||{}}
  function logo(id){const t=teamById(id);return t.logo||("assets/teams/cards/logos/"+(id||"mclaren")+".png")}
  function asset(d){return d.asset||("assets/drivers/"+String(d.name||"").toLowerCase().replaceAll(" ","_").replaceAll(".","")+".png")}
  function ensure(){
    S().driverPoints=S().driverPoints||{};
    S().teamPoints=S().teamPoints||{};
    S().raceHistory=S().raceHistory||[];
    S().lastRaceSummary=S().lastRaceSummary||null;
    S().round=S().round||1;
    S().season=S().season||2026;
    S().money=typeof S().money==="number"?S().money:48750000;
    D().forEach(d=>{if(S().driverPoints[d.id]===undefined)S().driverPoints[d.id]=0});
    T().forEach(t=>{if(S().teamPoints[t.id]===undefined)S().teamPoints[t.id]=0});
  }

  function standingsDrivers(){
    ensure();
    return D().map(d=>({
      id:d.id,name:d.name,flag:d.flag||"",team:d.team||teamById(d.teamId).short||"",teamId:d.teamId,asset:asset(d),points:S().driverPoints[d.id]||0
    })).sort((a,b)=>b.points-a.points);
  }
  function standingsTeams(){
    ensure();
    return T().map(t=>({id:t.id,name:t.short||t.name,logo:logo(t.id),points:S().teamPoints[t.id]||0})).sort((a,b)=>b.points-a.points);
  }

  function renderStandings(){
    const box=q("#stableStandingsPanel");
    if(!box)return;
    const drivers=standingsDrivers();
    const teams=standingsTeams();
    box.innerHTML=`
      <div class="standings-grid">
        <div class="standings-card">
          <h3>CAMPEONATO DE PILOTOS</h3>
          ${drivers.slice(0,20).map((d,i)=>`<div class="standing-row ${d.teamId===currentTeam().id?'user':''}">
            <b>${i+1}</b><img src="${d.asset}" onerror="this.style.display='none'">
            <span>${d.flag} ${d.name}<small>${d.team}</small></span><strong>${d.points}</strong>
          </div>`).join("")}
        </div>
        <div class="standings-card">
          <h3>CONSTRUTORES</h3>
          ${teams.map((t,i)=>`<div class="standing-row ${t.id===currentTeam().id?'user':''}">
            <b>${i+1}</b><img src="${t.logo}" onerror="this.style.display='none'">
            <span>${t.name}<small>Equipe</small></span><strong>${t.points}</strong>
          </div>`).join("")}
        </div>
      </div>
      <div class="race-summary-card">
        <h3>ÚLTIMA CORRIDA</h3>
        ${S().lastRaceSummary?`<p><b>${S().lastRaceSummary.gp}</b> • vencedor: ${S().lastRaceSummary.winner}</p><p>Melhor resultado da equipe: P${S().lastRaceSummary.userBest}</p>`:"<p>Nenhuma corrida finalizada nesta carreira.</p>"}
      </div>`;
  }

  function renderNextRaceCards(){
    const race=C()[(S().round||1)-1]||C()[0];
    if(!race)return;
    qa(".next-race-card,.proxima-corrida,.nextRaceCard").forEach(el=>{
      el.innerHTML=`<b>PRÓXIMA CORRIDA</b><strong>${race.gp}</strong><span>${race.track} • ${race.laps} voltas</span>`;
    });
  }

  function awardRaceOnce(){
    const l=S().liveRace;
    if(!l||!l.finished||l.v0290Awarded)return;
    l.v0290Awarded=true;
    ensure();
    const sorted=l.grid.slice().sort((a,b)=>a.pos-b.pos);
    sorted.slice(0,10).forEach((d,i)=>{
      const pts=POINTS[i]||0;
      S().driverPoints[d.id]=(S().driverPoints[d.id]||0)+pts;
      S().teamPoints[d.teamId]=(S().teamPoints[d.teamId]||0)+pts;
    });
    const userTeam=currentTeam().id;
    const user=sorted.filter(d=>d.teamId===userTeam);
    const best=user.length?Math.min(...user.map(d=>d.pos)):99;
    S().lastRaceSummary={gp:l.raceName,winner:sorted[0].name,userBest:best,podium:sorted.slice(0,3).map(d=>d.name)};
    S().raceHistory.unshift({gp:l.raceName,season:S().season,round:S().round,best,winner:sorted[0].name,date:new Date().toLocaleDateString("pt-BR")});
    S().raceHistory=S().raceHistory.slice(0,60);
    renderStandings();
    renderNextRaceCards();
    save();
  }

  function improveRaceStrategyUI(){
    const box=q("#stableRaceControls");
    if(!box||box.dataset.v0290==="1")return;
    box.dataset.v0290="1";
    const hint=document.createElement("div");
    hint.className="race-strategy-hint";
    hint.innerHTML="<b>Estratégia</b><span>Pit manual é obrigatório para cumprir alguns contratos. Use pausa para decidir pneus e janela.</span>";
    box.prepend(hint);
  }

  const oldRender=window.renderLiveRace;
  if(typeof oldRender==="function"&&!oldRender.__v0290){
    window.renderLiveRace=function(){
      const r=oldRender.apply(this,arguments);
      improveRaceStrategyUI();
      awardRaceOnce();
      return r;
    };
    window.renderLiveRace.__v0290=true;
  }

  const oldStart=window.startLiveRace;
  if(typeof oldStart==="function"&&!oldStart.__v0290){
    window.startLiveRace=function(){
      const r=oldStart.apply(this,arguments);
      improveRaceStrategyUI();
      return r;
    };
    window.startLiveRace.__v0290=true;
  }

  function patchPodiumButton(){
    const panel=q("#stablePodiumPanel");
    if(!panel||panel.dataset.v0290==="1")return;
    panel.dataset.v0290="1";
    const btn=document.createElement("button");
    btn.className="cta compact";
    btn.textContent="VER CLASSIFICAÇÕES";
    btn.dataset.goto="screenStableStandings";
    panel.appendChild(btn);
  }

  function renderAll(){
    ensure();
    awardRaceOnce();
    renderStandings();
    renderNextRaceCards();
    improveRaceStrategyUI();
    patchPodiumButton();
    save();
  }

  document.addEventListener("DOMContentLoaded",()=>setTimeout(renderAll,700));
  window.addEventListener("load",()=>setTimeout(renderAll,1000));
  document.addEventListener("click",ev=>{
    if(ev.target.closest("[data-goto]"))setTimeout(renderAll,180);
  });
  setInterval(()=>{if(S().liveRace&&S().liveRace.finished)renderAll()},2000);

  window.v0290RenderChampionshipLoop=renderAll;
})();
