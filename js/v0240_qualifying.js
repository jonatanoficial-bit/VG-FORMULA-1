
/* v0.24.0 - Qualifying + grid real + preview pré-GP */
(function(){
  function $(s){ return document.querySelector(s); }
  function S(){ return window.STATE || {}; }
  function T(){ return window.TEAMS || []; }
  function D(){ return window.DRIVERS || []; }
  function C(){ return window.CALENDAR || []; }
  function team(){ const st=S(); return T().find(t=>t.name===st.teamName) || T()[0] || {id:"mclaren",short:"McLaren",car:{aero:80,power:80,chassis:80,tyres:80,reliability:80}}; }
  function race(){ return (typeof window.nextRace==="function" ? window.nextRace() : C()[0]) || {gp:"GP",track:"Pista",laps:58,country:""}; }
  function save(){ if(typeof window.saveGameManualV150==="function") window.saveGameManualV150(); else try{localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()))}catch(e){} }
  function msg(a,b,c,d){ if(typeof window.addMessageV160==="function") window.addMessageV160(a,b,c,d||"info"); }
  function selected(){ return typeof window.selectedDrivers==="function" ? window.selectedDrivers() : D().filter(d=>d.teamId===team().id); }
  function carFor(driver){
    const tm=T().find(t=>t.id===driver.teamId) || team();
    return tm.car || {aero:78,power:78,chassis:78,tyres:78,reliability:78};
  }
  function userCarStats(){
    return typeof window.carStats==="function" ? window.carStats() : team().car;
  }
  function avg(obj, keys){ return Math.round(keys.map(k=>obj[k]||75).reduce((a,b)=>a+b,0)/keys.length); }
  function ensure(){
    const st=S();
    st.qualifying = st.qualifying || {};
    st.gridOrder = st.gridOrder || null;
    st.qualifyingHistory = st.qualifyingHistory || [];
  }

  function qualifyingScore(d, phase){
    const isUser = d.teamId === team().id;
    const car = isUser ? userCarStats() : carFor(d);
    const qualiCar = (car.aero||75)*0.38 + (car.power||75)*0.30 + (car.chassis||75)*0.22 + (car.tyres||75)*0.10;
    const driver = (d.overall||75)*0.72 + ((d.attributes && d.attributes.qualifying) || d.overall || 75)*0.28;
    const phasePressure = phase === "Q3" ? (Math.random()*7-2) : (Math.random()*9-3);
    const teamBonus = isUser ? 1.2 : 0;
    return Math.round((driver*0.56 + qualiCar*0.44 + phasePressure + teamBonus)*100)/100;
  }

  function runQualifying(){
    ensure();
    const st=S(), r=race();
    let all=D().map(d=>({...d, q1:qualifyingScore(d,"Q1")}));
    all.sort((a,b)=>b.q1-a.q1);
    const q2=all.slice(0,15).map(d=>({...d, q2:qualifyingScore(d,"Q2")}));
    q2.sort((a,b)=>b.q2-a.q2);
    const q3=q2.slice(0,10).map(d=>({...d, q3:qualifyingScore(d,"Q3")}));
    q3.sort((a,b)=>b.q3-a.q3);

    const restQ2=q2.slice(10).sort((a,b)=>b.q2-a.q2);
    const restQ1=all.slice(15).sort((a,b)=>b.q1-a.q1);
    const grid=[...q3,...restQ2,...restQ1].map((d,i)=>({
      id:d.id,name:d.name,flag:d.flag,team:d.team,teamId:d.teamId,asset:d.asset,number:d.number,overall:d.overall,
      pos:i+1,score:d.q3||d.q2||d.q1
    }));

    st.gridOrder = grid;
    st.qualifying[r.round || st.round || 1] = grid;
    st.qualifyingHistory.unshift({round:st.round||1,gp:r.gp,grid:grid.slice(0,10)});
    if(st.qualifyingHistory.length>20) st.qualifyingHistory.length=20;

    msg("Pista","Classificação finalizada",`${r.gp}: pole position de ${grid[0].name}.`, "race");
    renderQualifying();
    save();
  }

  function renderQualifying(){
    ensure();
    const r=race(), st=S();
    const meta=$("#qualifyingMeta");
    if(meta){
      const car=userCarStats();
      meta.innerHTML = `
        <div><b>GP</b><strong>${r.gp}</strong><span>${r.track} • ${r.country||""}</span></div>
        <div><b>FORÇA QUALI</b><strong>${avg(car,["aero","power","chassis"])}</strong><span>Aero + Motor + Chassi</span></div>
        <div><b>STATUS</b><strong>${st.gridOrder ? "Grid definido" : "Pendente"}</strong><span>Execute a classificação antes da corrida</span></div>`;
    }
    const box=$("#qualifyingResults");
    if(!box) return;
    const grid=st.gridOrder || [];
    if(!grid.length){
      box.innerHTML = `<div class="qual-empty">Nenhuma classificação simulada ainda.</div>`;
      return;
    }
    box.innerHTML = grid.map(d=>`
      <div class="qual-row ${d.teamId===team().id?'user-team':''}">
        <b>P${d.pos}</b>
        <img src="${d.asset}" onerror="this.style.display='none'">
        <span>${d.flag} ${d.name}<small>${d.team} • score ${d.score}</small></span>
        <strong>${d.number||""}</strong>
      </div>`).join("");
  }

  // Use qualifying grid when live race is prepared
  const oldPrepare = window.prepareLiveRace;
  if(typeof oldPrepare === "function"){
    window.prepareLiveRace = function(){
      oldPrepare();
      const st=S();
      if(st.liveRace && st.gridOrder && st.gridOrder.length){
        const byId = {};
        st.liveRace.grid.forEach(d=>byId[d.id]=d);
        const ordered = st.gridOrder.map(g=>Object.assign(byId[g.id] || {}, g)).filter(d=>d.id);
        st.liveRace.grid.forEach(d=>{ if(!ordered.find(x=>x.id===d.id)) ordered.push(d); });
        ordered.forEach((d,i)=>{d.pos=i+1; d.gap=i?Math.round((i*1.45+Math.random()*1.5)*10)/10:0;});
        st.liveRace.grid = ordered;
        st.liveRace.commentary = st.liveRace.commentary || [];
        st.liveRace.commentary.push(`Grid definido pela classificação: pole de ${ordered[0].name}.`);
      }
    };
  }

  // If race starts with no qualifying, generate a quick hidden quali for fairness
  const oldStart = window.startLiveRace;
  if(typeof oldStart === "function"){
    window.startLiveRace = function(){
      ensure();
      if(!S().gridOrder || !S().gridOrder.length) runQualifying();
      oldStart();
    };
  }

  document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
      ensure(); renderQualifying();
      const btn=$("#runQualifyingBtn");
      if(btn) btn.addEventListener("click", runQualifying);
    },800);
  });

  document.addEventListener("click",ev=>{
    if(ev.target.closest("[data-goto]")) setTimeout(renderQualifying,150);
  });
})();
