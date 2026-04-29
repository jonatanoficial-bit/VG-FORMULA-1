
/* v0.23.0 - QA hardening + race events + board dashboard */
(function(){
  function $(s){ return document.querySelector(s); }
  function money(v){ return "R$ " + ((v||0)/1000000).toFixed(1) + " mi"; }
  function S(){ return window.STATE || {}; }
  function T(){ return window.TEAMS || []; }
  function D(){ return window.DRIVERS || []; }
  function team(){ const st=S(); return T().find(t=>t.name===st.teamName) || T()[0] || {id:"mclaren", short:"McLaren", car:{aero:80,power:80,chassis:80,tyres:80,reliability:80}}; }
  function save(){ if(typeof window.saveGameManualV150==="function") window.saveGameManualV150(); else try{localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()))}catch(e){} }
  function msg(a,b,c,d){ if(typeof window.addMessageV160==="function") window.addMessageV160(a,b,c,d||"info"); }

  function ensureCompat(){
    const st=S();
    st.money = typeof st.money === "number" ? st.money : 48750000;
    st.reputation = typeof st.reputation === "number" ? st.reputation : 45;
    st.round = st.round || 1;
    st.raceEvents = st.raceEvents || [];
    st.boardObjectives = st.boardObjectives || [
      {id:"points", title:"Pontuar regularmente", target:"Somar pontos em pelo menos 8 GPs", progress:0, reward:3500000},
      {id:"develop", title:"Evoluir o carro", target:"Concluir 4 projetos de oficina", progress:0, reward:2500000},
      {id:"finance", title:"Manter saúde financeira", target:"Fechar a temporada com caixa positivo", progress:0, reward:1500000}
    ];
    st.riskProfile = st.riskProfile || {finance:25, reliability:35, morale:28};
    st.seasonStats = st.seasonStats || {races:0, podiums:0, pointsFinishes:0, completedProjects:0};
    st.carParts = st.carParts || {};
    st.activeCarProjects = st.activeCarProjects || [];
    st.staff = st.staff || {technical:1,strategy:1,raceOps:1,commercial:1,mechanics:1};
    if(st.staff.mechanics === undefined) st.staff.mechanics = 1;
    st.activeSponsors = st.activeSponsors || ["global_motors"];
  }

  function avgCar(){
    ensureCompat();
    const parts = S().carParts || {};
    const vals = ["power","aero","chassis","tyres","reliability"].map(k => parts[k] || (team().car && team().car[k]) || 75);
    return Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
  }

  function riskUpdate(){
    ensureCompat();
    const st=S();
    st.riskProfile.finance = Math.max(0, Math.min(100, st.money < 10000000 ? 72 : st.money < 25000000 ? 45 : 22));
    st.riskProfile.reliability = Math.max(0, Math.min(100, 100 - ((st.carParts && st.carParts.reliability) || (team().car && team().car.reliability) || 78)));
    const moraleVals = st.driverMorale ? Object.values(st.driverMorale) : [82,82];
    const avgMorale = moraleVals.length ? moraleVals.reduce((a,b)=>a+b,0)/moraleVals.length : 82;
    st.riskProfile.morale = Math.max(0, Math.min(100, 100 - Math.round(avgMorale)));
  }

  function renderDashboard(){
    ensureCompat();
    riskUpdate();
    const box=$("#managerDashboardPanel");
    if(!box) return;
    const st=S();
    const projects=(st.activeCarProjects||[]).length;
    box.innerHTML = `
      <div class="board-card main">
        <b>${team().short || "Equipe"}</b>
        <strong>Força do carro ${avgCar()}</strong>
        <span>Rodada ${st.round || 1} • Reputação ${st.reputation || 45} • Caixa ${money(st.money)}</span>
      </div>
      <div class="board-grid">
        <div class="board-card"><b>RISCO FINANCEIRO</b><strong>${st.riskProfile.finance}%</strong><i><em style="width:${st.riskProfile.finance}%"></em></i></div>
        <div class="board-card"><b>RISCO MECÂNICO</b><strong>${st.riskProfile.reliability}%</strong><i><em style="width:${st.riskProfile.reliability}%"></em></i></div>
        <div class="board-card"><b>RISCO MORAL</b><strong>${st.riskProfile.morale}%</strong><i><em style="width:${st.riskProfile.morale}%"></em></i></div>
        <div class="board-card"><b>PROJETOS ATIVOS</b><strong>${projects}</strong><i><em style="width:${Math.min(100,projects*25)}%"></em></i></div>
      </div>
      <h3>Objetivos da Diretoria</h3>
      <div class="objective-list">
        ${(st.boardObjectives||[]).map(o=>`<div class="objective-card"><b>${o.title}</b><span>${o.target}</span><small>Progresso ${o.progress||0}% • bônus ${money(o.reward)}</small></div>`).join("")}
      </div>`;
  }

  function renderRaceEvents(){
    ensureCompat();
    const box=$("#raceEventPanel");
    if(!box) return;
    const st=S();
    const live=st.liveRace;
    const event = live && live.weather ? live.weather : "Seco";
    const safety = live && live.safetyCar ? "Safety Car" : "Pista livre";
    box.innerHTML = `<div><b>CLIMA</b><strong>${event}</strong></div><div><b>PISTA</b><strong>${safety}</strong></div><div><b>EVENTOS</b><strong>${(st.raceEvents||[]).length}</strong></div>`;
  }

  function addRaceEvent(type,text){
    ensureCompat();
    const st=S();
    st.raceEvents.unshift({type,text,lap:st.liveRace?st.liveRace.lap:0});
    if(st.raceEvents.length>20) st.raceEvents.length=20;
    if(typeof window.liveComment==="function") window.liveComment(text);
    if(typeof window.addRadio==="function") window.addRadio("Engenheiro: " + text);
  }

  // Add random race events without overriding existing race engine destructively
  const oldTick = window.liveTickV14;
  if(typeof oldTick === "function"){
    window.liveTickV14 = function(){
      oldTick();
      const st=S();
      if(!st.liveRace || !st.liveRace.running || st.liveRace.finished) return;
      const l=st.liveRace;
      if(!l.v23Init){
        l.v23Init=true;
        l.weather="Seco";
        l.safetyCar=false;
      }
      if(l.lap>3 && l.lap%9===0 && Math.random()<0.22){
        l.safetyCar = !l.safetyCar;
        addRaceEvent("safety", l.safetyCar ? "Safety Car na pista! Estratégias de pit podem mudar." : "Safety Car encerrado. Relargada autorizada.");
      }
      if(l.lap>5 && l.lap%11===0 && Math.random()<0.18){
        l.weather = l.weather==="Seco" ? "Chuva leve" : "Seco";
        addRaceEvent("weather", l.weather==="Chuva leve" ? "Chuva leve chegando. Pneus começam a perder temperatura." : "Pista secando. Ritmo volta a subir.");
      }
      if(l.safetyCar){
        l.grid.forEach(d=>{ if(!d.out){ d.gap = Math.min(d.gap, 1.4); d.tyreLife = Math.min(100, d.tyreLife + 0.15); }});
      }
      if(l.weather==="Chuva leve"){
        l.grid.forEach(d=>{ if(!d.out){ d.tyreLife = Math.max(0, d.tyreLife - 0.08); }});
      }
      renderRaceEvents();
    };
  }

  const oldFinish = window.finishLiveRaceV14;
  if(typeof oldFinish === "function"){
    window.finishLiveRaceV14 = function(){
      oldFinish();
      ensureCompat();
      const st=S(), t=team();
      st.seasonStats.races += 1;
      if(st.liveRace && st.liveRace.grid){
        const user=st.liveRace.grid.filter(d=>d.teamId===t.id);
        if(user.some(d=>d.pos<=3 && !d.out)) st.seasonStats.podiums += 1;
        if(user.some(d=>d.pos<=10 && !d.out)) st.seasonStats.pointsFinishes += 1;
      }
      (st.boardObjectives||[]).forEach(o=>{
        if(o.id==="points") o.progress=Math.min(100, Math.round((st.seasonStats.pointsFinishes/8)*100));
        if(o.id==="develop") o.progress=Math.min(100, Math.round((st.seasonStats.completedProjects/4)*100));
        if(o.id==="finance") o.progress=st.money>0?100:0;
      });
      renderDashboard();
      save();
    };
  }

  // Count projects completed from v0.22 module by observing messages lightly
  const oldMsg = window.addMessageV160;
  if(typeof oldMsg === "function"){
    window.addMessageV160 = function(from,title,body,type){
      oldMsg(from,title,body,type);
      if(title && String(title).toLowerCase().includes("peça conclu")) {
        ensureCompat();
        S().seasonStats.completedProjects += 1;
      }
    };
  }

  document.addEventListener("click", ev=>{
    if(ev.target.closest("[data-goto]")){
      setTimeout(()=>{ ensureCompat(); renderDashboard(); renderRaceEvents(); },150);
    }
  });
  document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{ ensureCompat(); renderDashboard(); renderRaceEvents(); },900));
})();
