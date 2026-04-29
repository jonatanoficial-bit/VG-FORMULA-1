
(function(){
  function $(s){return document.querySelector(s)}
  function S(){return window.STATE||{}}
  function T(){return window.TEAMS||[]}
  function D(){return window.DRIVERS||[]}
  function C(){return window.CALENDAR||[]}
  function key(){return"f1_ve_save_slot_main_v0150"}

  function normalize(){
    const st=S();
    st.version="v0.26.0";
    st.money=typeof st.money==="number"?st.money:48750000;
    st.round=st.round||1;st.season=st.season||2026;
    st.teamName=st.teamName||(T()[0]&&T()[0].name)||"McLaren";
    st.avatar=st.avatar||"assets/avatar/avatar1.png";
    st.career=st.career||"Rumo ao Topo";st.country=st.country||"🇧🇷 Brasil";
    st.carParts=st.carParts||{};st.contracts=st.contracts||{};
    st.teamDrivers=st.teamDrivers||{};st.driverTeamMap=st.driverTeamMap||{};
    st.activeSponsors=st.activeSponsors||["global_motors"];
    st.staff=st.staff||{technical:1,strategy:1,raceOps:1,commercial:1,mechanics:1};
    if(st.staff.mechanics===undefined)st.staff.mechanics=1;
    st.raceHistory=st.raceHistory||[];st.trophyRoom=st.trophyRoom||[];
    st.messages=st.messages||[];st.diagnostics=st.diagnostics||{lastCheck:null,errors:[]};
    return st;
  }
  function localSave(){
    try{const p={version:"v0.26.0",savedAt:new Date().toISOString(),state:normalize()};localStorage.setItem(key(),JSON.stringify(p));localStorage.setItem("f1_ve_visual_state",JSON.stringify(p.state));return true}catch(e){return false}
  }
  function exportSave(){
    const box=$("#saveTransferBox");
    const p={version:"v0.26.0",exportedAt:new Date().toISOString(),state:normalize()};
    if(box)box.value=btoa(unescape(encodeURIComponent(JSON.stringify(p))));
    renderDiagnostics("Save exportado.");
  }
  function importSave(){
    const box=$("#saveTransferBox");
    if(!box||!box.value.trim()){alert("Cole um save exportado na caixa.");return}
    try{const json=decodeURIComponent(escape(atob(box.value.trim())));const p=JSON.parse(json);if(!p.state)throw new Error("sem state");Object.assign(S(),p.state);localSave();renderDiagnostics("Save importado.");if(typeof window.applyAll==="function")window.applyAll();if(typeof window.showScreen==="function")window.showScreen("screenLobby")}
    catch(e){alert("Save inválido ou corrompido.");renderDiagnostics("Erro ao importar save.")}
  }
  function rows(){
    normalize();
    const st=S();
    return [
      ["STATE base",!!window.STATE,window.STATE?"OK":"Ausente"],
      ["Equipes",T().length>=10,T().length+" equipes"],
      ["Pilotos",D().length>=20,D().length+" pilotos"],
      ["Calendário",C().length>=20,C().length+" etapas"],
      ["Salvar manual",typeof window.saveGameManualV150==="function",typeof window.saveGameManualV150==="function"?"OK":"Ausente"],
      ["Corrida ao vivo",typeof window.startLiveRace==="function",typeof window.startLiveRace==="function"?"OK":"Ausente"],
      ["Tela/lógica",typeof window.showScreen==="function",typeof window.showScreen==="function"?"OK":"Ausente"],
      ["Equipe escolhida",!!st.teamName,st.teamName||"não definido"],
      ["Caixa",typeof st.money==="number",typeof st.money==="number"?"OK":"inválido"],
      ["Staff mecânicos",st.staff&&st.staff.mechanics!==undefined,st.staff&&st.staff.mechanics!==undefined?"OK":"ausente"],
      ["Patrocinadores",Array.isArray(st.activeSponsors),(st.activeSponsors||[]).length+" ativos"],
      ["Contratos",!!st.contracts,Object.keys(st.contracts||{}).length+" registros"],
      ["Peças do carro",!!st.carParts,Object.keys(st.carParts||{}).length+" peças"],
      ["Histórico",Array.isArray(st.raceHistory),(st.raceHistory||[]).length+" corridas"]
    ].map(x=>({name:x[0],ok:x[1],detail:x[2]}));
  }
  function renderDiagnostics(note){
    const panel=$("#diagnosticsPanel");if(!panel)return;
    const r=rows(),ok=r.filter(x=>x.ok).length,total=r.length;
    S().diagnostics={lastCheck:new Date().toISOString(),errors:r.filter(x=>!x.ok).map(x=>x.name)};
    panel.innerHTML=`<div class="diagnostic-summary ${ok===total?'ok':'warn'}"><b>Integridade</b><strong>${ok}/${total}</strong><span>${note||"Verificação concluída"}</span></div><div class="diagnostic-list">${r.map(x=>`<div class="${x.ok?'ok':'fail'}"><b>${x.ok?'✓':'!'}</b><span>${x.name}<small>${x.detail}</small></span></div>`).join("")}</div>`;
    localSave();
  }
  function safe(name){
    const original=window[name];if(typeof original!=="function")return;
    window[name]=function(){try{return original.apply(this,arguments)}catch(e){console.error("F1VE",name,e);normalize();renderDiagnostics("Erro capturado em "+name+".")}}
  }
  ["showScreen","applyAll","renderLiveRace","startLiveRace","finishLiveRaceV14","renderStandings","prepareLiveRace"].forEach(safe);
  document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{normalize();const e=$("#exportSaveBtn");if(e)e.onclick=exportSave;const i=$("#importSaveBtn");if(i)i.onclick=importSave;renderDiagnostics()},900));
  document.addEventListener("click",ev=>{if(ev.target.closest("[data-goto]"))setTimeout(()=>{normalize();renderDiagnostics()},180)});
})();
