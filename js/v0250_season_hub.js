
(function(){
  function $(s){return document.querySelector(s)}
  function S(){return window.STATE||{}}
  function T(){return window.TEAMS||[]}
  function C(){return window.CALENDAR||[]}
  function team(){const st=S();return T().find(t=>t.name===st.teamName)||T()[0]||{id:"mclaren",short:"McLaren"}}
  function money(v){return"R$ "+((v||0)/1000000).toFixed(1)+" mi"}
  function save(){if(typeof window.saveGameManualV150==="function")window.saveGameManualV150();else try{localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()))}catch(e){}}
  function msg(a,b,c,d){if(typeof window.addMessageV160==="function")window.addMessageV160(a,b,c,d||"info")}

  function ensure(){
    const st=S();
    st.season=st.season||2026;
    st.round=st.round||1;
    st.trophyRoom=st.trophyRoom||[];
    st.raceHistory=st.raceHistory||[];
    st.seasonStats=st.seasonStats||{races:0,podiums:0,wins:0,pointsFinishes:0,completedProjects:0};
    st.careerSaveVersion="v0.25.0";
    st.endSeasonReady=st.round>(C().length||23);
  }

  function userResults(){
    const st=S(),tm=team();
    if(!st.liveRace||!st.liveRace.grid)return[];
    return st.liveRace.grid.filter(d=>d.teamId===tm.id).sort((a,b)=>a.pos-b.pos);
  }

  function recordRace(){
    ensure();
    const st=S();
    if(!st.liveRace||!st.liveRace.finished)return;
    const key=(st.liveRace.raceName||"GP")+"_"+(st.liveRace.lap||0)+"_"+(st.round||0);
    if(st.lastRecordedRaceKey===key)return;
    st.lastRecordedRaceKey=key;
    const results=userResults();
    const best=results.length?Math.min(...results.map(d=>d.pos)):99;
    const win=best===1,podium=best<=3,points=results.some(d=>d.pos<=10&&!d.out);
    st.seasonStats.races++;
    if(win)st.seasonStats.wins++;
    if(podium)st.seasonStats.podiums++;
    if(points)st.seasonStats.pointsFinishes++;
    st.raceHistory.unshift({gp:st.liveRace.raceName,season:st.season,best,results:results.map(d=>({name:d.name,pos:d.pos,out:!!d.out})),date:new Date().toLocaleDateString("pt-BR")});
    if(win)st.trophyRoom.unshift({type:"win",title:"Vitória",gp:st.liveRace.raceName,season:st.season});
    else if(podium)st.trophyRoom.unshift({type:"podium",title:"Pódio",gp:st.liveRace.raceName,season:st.season});
    st.trophyRoom=st.trophyRoom.slice(0,30);
    st.raceHistory=st.raceHistory.slice(0,50);
  }

  function renderSeasonHub(){
    ensure();recordRace();
    const st=S(),box=$("#seasonHubPanel");if(!box)return;
    const total=C().length||23;
    const progress=Math.min(100,Math.round(((st.round||1)-1)/total*100));
    box.innerHTML=`
      <div class="season-card main"><b>Temporada ${st.season}</b><strong>${progress}%</strong><span>Rodada ${Math.min(st.round,total)} de ${total} • ${team().short}</span><i><em style="width:${progress}%"></em></i></div>
      <div class="season-grid">
        <div class="season-card"><b>Corridas</b><strong>${st.seasonStats.races}</strong></div>
        <div class="season-card"><b>Vitórias</b><strong>${st.seasonStats.wins}</strong></div>
        <div class="season-card"><b>Pódios</b><strong>${st.seasonStats.podiums}</strong></div>
        <div class="season-card"><b>Top 10</b><strong>${st.seasonStats.pointsFinishes}</strong></div>
      </div>
      <h3>Histórico recente</h3>
      <div class="season-history">${(st.raceHistory||[]).slice(0,8).map(r=>`<div><b>${r.gp}</b><span>Melhor posição: P${r.best}</span></div>`).join("")||"<div><b>Nenhuma corrida registrada</b><span>Finalize um GP para gerar histórico.</span></div>"}</div>
      <h3>Sala de Troféus</h3>
      <div class="trophy-room">${(st.trophyRoom||[]).slice(0,8).map(t=>`<div><b>${t.title}</b><span>${t.gp} • ${t.season}</span></div>`).join("")||"<div><b>Sem troféus ainda</b><span>Busque seu primeiro pódio.</span></div>"}</div>
      ${st.endSeasonReady?'<button class="cta compact" id="finishSeasonBtn">ENCERRAR TEMPORADA</button>':""}`;
    const btn=$("#finishSeasonBtn");if(btn)btn.onclick=finishSeason;
  }

  function finishSeason(){
    ensure();
    const st=S();
    const bonus=st.seasonStats.wins*4000000+st.seasonStats.podiums*1800000+st.seasonStats.pointsFinishes*450000;
    st.money=(st.money||0)+bonus;
    msg("Diretoria","Temporada encerrada",`Bônus anual recebido: ${money(bonus)}. Nova temporada iniciada.`,"board");
    st.season++;st.round=1;st.endSeasonReady=false;st.gridOrder=null;st.qualifying={};st.liveRace=null;st.raceEvents=[];
    st.seasonStats={races:0,podiums:0,wins:0,pointsFinishes:0,completedProjects:0};
    save();renderSeasonHub();if(typeof window.showScreen==="function")window.showScreen("screenLobby");
  }

  const oldFinish=window.finishLiveRaceV14;
  if(typeof oldFinish==="function"){
    window.finishLiveRaceV14=function(){oldFinish();setTimeout(()=>{recordRace();renderSeasonHub();save()},300)}
  }

  document.addEventListener("click",ev=>{if(ev.target.closest("[data-goto]"))setTimeout(renderSeasonHub,150)});
  document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{ensure();renderSeasonHub();save()},900));
})();
