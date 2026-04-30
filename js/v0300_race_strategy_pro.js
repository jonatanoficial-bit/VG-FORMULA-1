
/* v0.30.0 - Race Strategy Pro: pit window, penalties, compounds and race report */
(function(){
  const BUILD="v0.30.0";
  const COMPOUNDS = {
    "Macio": {life: 34, pace: 1.10, loss: 1.35},
    "Médio": {life: 48, pace: 1.00, loss: 0.95},
    "Duro": {life: 64, pace: 0.92, loss: 0.70},
    "Chuva": {life: 42, pace: 0.82, loss: 1.05}
  };
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.from(document.querySelectorAll(s))}
  function S(){return window.STATE||(window.STATE={})}
  function T(){return Array.isArray(window.TEAMS)?window.TEAMS:[]}
  function D(){return Array.isArray(window.DRIVERS)?window.DRIVERS:[]}
  function C(){return Array.isArray(window.CALENDAR)?window.CALENDAR:[]}
  function currentTeam(){const st=S();return T().find(t=>t.id===st.teamId||t.name===st.teamName||t.short===st.teamName)||T()[0]||{}}
  function money(v){return "R$ "+((v||0)/1000000).toFixed(1)+" mi"}
  function save(){
    try{
      S().lastAutosave=new Date().toISOString();
      S().stableBuild=BUILD;
      localStorage.setItem("f1_ve_save_slot_main_v0150",JSON.stringify({version:BUILD,savedAt:S().lastAutosave,state:S()}));
      localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()));
    }catch(e){}
  }
  function selectedDrivers(){
    if(typeof window.selectedDrivers==="function"){
      try{return window.selectedDrivers()}catch(e){}
    }
    return D().filter(d=>d.teamId===currentTeam().id).slice(0,2);
  }
  function ensure(){
    S().raceReports=S().raceReports||[];
    S().financeLog=S().financeLog||[];
    S().strategyStats=S().strategyStats||{cleanPits:0,latePits:0,missedMandatory:0,perfectCalls:0};
  }
  function currentRace(){
    return C()[(S().round||1)-1]||C()[0]||{gp:"GP",track:"Circuito",laps:58};
  }

  function patchRaceStart(){
    const oldStart=window.startLiveRace;
    if(typeof oldStart!=="function"||oldStart.__v0300)return;
    window.startLiveRace=function(){
      const result=oldStart.apply(this,arguments);
      setupStrategy();
      renderStrategy();
      return result;
    };
    window.startLiveRace.__v0300=true;
  }

  function setupStrategy(){
    const l=S().liveRace;
    if(!l)return;
    const race=currentRace();
    const pitStart=Math.max(8,Math.floor((l.totalLaps||race.laps)*0.28));
    const pitEnd=Math.max(pitStart+5,Math.floor((l.totalLaps||race.laps)*0.72));
    l.strategy = l.strategy || {
      pitWindowStart: pitStart,
      pitWindowEnd: pitEnd,
      mandatoryPit: true,
      weather: "Seco",
      events: [],
      userPitCalls: [],
      penalties: []
    };
    l.grid.forEach(d=>{
      d.compound=d.compound||"Médio";
      d.stintLaps=d.stintLaps||0;
      d.pitCount=d.pitCount||0;
      d.pitHistory=d.pitHistory||[];
      d.tyreLife=typeof d.tyreLife==="number"?d.tyreLife:100;
    });
  }

  function patchPitButtons(){
    const oldPit = window.pitDriver;
    // v0.28 pitDriver is scoped, not global; intercept by replacing button handlers after render.
    qa("[data-pit]").forEach(btn=>{
      if(btn.dataset.v0300==="1")return;
      btn.dataset.v0300="1";
      btn.onclick=(ev)=>{
        ev.preventDefault();
        callPit(btn.dataset.pit, btn.dataset.compound||"Médio");
      };
    });
  }

  function callPit(id, compound){
    const l=S().liveRace;
    if(!l||l.finished)return;
    setupStrategy();
    const d=l.grid.find(x=>x.id===id);
    if(!d||d.out)return;
    const comp=COMPOUNDS[compound]||COMPOUNDS["Médio"];
    const inWindow=l.lap>=l.strategy.pitWindowStart && l.lap<=l.strategy.pitWindowEnd;
    const mechanic=S().staff&&S().staff.mechanics?S().staff.mechanics:1;
    const baseLoss=3+Math.max(0,4-mechanic);
    const risk=!inWindow?1:0;
    const error=Math.random() < (0.06 + risk*0.09) ? 2 : 0;
    const loss=baseLoss+error;
    d.pitted=true;
    d.pitCount=(d.pitCount||0)+1;
    d.compound=compound;
    d.tyreLife=100;
    d.stintLaps=0;
    d.pos=Math.min(l.grid.length,d.pos+loss);
    d.pitHistory=d.pitHistory||[];
    d.pitHistory.push({lap:l.lap,compound,loss,inWindow,error:error>0});
    l.strategy.userPitCalls.push({driver:d.name,lap:l.lap,compound,loss,inWindow,error:error>0});
    l.radio.unshift(`Box: ${d.name} colocou ${compound}. ${inWindow?"Janela correta":"Fora da janela"} • perda ${loss} posições.`);
    l.commentary.unshift(`Volta ${l.lap}: pit stop de ${d.name} para pneus ${compound}.`);
    l.grid.sort((a,b)=>a.pos-b.pos).forEach((x,i)=>{if(!x.out)x.pos=i+1});
    renderStrategy();
    if(typeof window.renderLiveRace==="function")window.renderLiveRace();
    save();
  }
  window.callPitStrategyV0300=callPit;

  function patchRender(){
    const oldRender=window.renderLiveRace;
    if(typeof oldRender!=="function"||oldRender.__v0300)return;
    window.renderLiveRace=function(){
      const result=oldRender.apply(this,arguments);
      setupStrategy();
      patchPitButtons();
      renderStrategy();
      return result;
    };
    window.renderLiveRace.__v0300=true;
  }

  function patchTick(){
    // The existing tick is internal; use observer interval to apply strategy effects.
    if(window._strategyObserver0300)return;
    window._strategyObserver0300=setInterval(()=>{
      const l=S().liveRace;
      if(!l||!l.running||l.paused||l.finished)return;
      setupStrategy();
      l.grid.forEach(d=>{
        if(d.out)return;
        d.stintLaps=(d.stintLaps||0)+0.25;
        const comp=COMPOUNDS[d.compound]||COMPOUNDS["Médio"];
        if(d.tyreLife<18 && Math.random()<0.10){
          d.pos=Math.min(l.grid.length,d.pos+1);
          if(l.commentary&&Math.random()<0.25)l.commentary.unshift(`${d.name} perde rendimento: pneus ${d.compound} no limite.`);
        }
        if(d.tyreLife<4 && Math.random()<0.03){
          d.out=true;
          l.strategy.events.unshift({lap:l.lap,type:"DNF",text:`${d.name} abandonou por desgaste extremo.`});
        }
      });
      renderStrategy();
    },1200);
  }

  function patchFinish(){
    const oldRender=window.renderLiveRace;
    // handled by monitor because finish is internal.
    if(window._finishMonitor0300)return;
    window._finishMonitor0300=setInterval(()=>{
      const l=S().liveRace;
      if(l&&l.finished&&!l.v0300ReportDone){
        l.v0300ReportDone=true;
        finalizeStrategyReport();
      }
    },1200);
  }

  function finalizeStrategyReport(){
    ensure();
    const l=S().liveRace;
    if(!l)return;
    setupStrategy();
    const userIds=selectedDrivers().map(d=>d.id);
    const user=l.grid.filter(d=>userIds.includes(d.id)).sort((a,b)=>a.pos-b.pos);
    const missed=user.filter(d=>!d.pitted);
    const late=user.filter(d=>(d.pitHistory||[]).some(p=>!p.inWindow));
    missed.forEach(d=>{
      d.pos=Math.min(l.grid.length,d.pos+3);
      l.strategy.penalties.push({driver:d.name,type:"Sem pit obrigatório",loss:3});
    });
    if(missed.length){
      S().strategyStats.missedMandatory+=missed.length;
      l.commentary.unshift(`Direção de prova: penalidade aplicada por não cumprir pit obrigatório.`);
    }
    if(late.length)S().strategyStats.latePits+=late.length;
    const clean=user.filter(d=>d.pitted && !(d.pitHistory||[]).some(p=>p.error));
    S().strategyStats.cleanPits+=clean.length;
    const best=user[0];
    const sponsorImpact=(S().lastSponsorSettlement||[]).reduce((a,b)=>a+(b.value||0),0);
    const repairCost=user.reduce((sum,d)=>sum+(d.out?1200000:Math.round((100-(d.tyreLife||50))*12000)),0);
    S().money-=repairCost;
    S().financeLog.unshift({date:new Date().toLocaleDateString("pt-BR"),label:"Custos pós-corrida",value:-repairCost});
    const report={
      gp:l.raceName,
      lap:l.totalLaps,
      best:best?best.pos:null,
      user:user.map(d=>({name:d.name,pos:d.pos,pitted:!!d.pitted,pits:d.pitHistory||[],tyreLife:Math.round(d.tyreLife||0),out:!!d.out})),
      penalties:l.strategy.penalties||[],
      sponsorImpact,
      repairCost,
      verdict:missed.length?"Estratégia incompleta: pit obrigatório ignorado.":(late.length?"Estratégia arriscada: pit fora da janela.":"Estratégia limpa.")
    };
    S().lastRaceTechnicalReport=report;
    S().raceReports.unshift(report);
    S().raceReports=S().raceReports.slice(0,40);
    renderRaceReport();
    save();
  }

  function renderStrategy(){
    const box=q("#stableRaceControls");
    const l=S().liveRace;
    if(!box||!l)return;
    setupStrategy();
    let info=q("#strategyWindowPanel");
    if(!info){
      info=document.createElement("div");
      info.id="strategyWindowPanel";
      info.className="strategy-window-panel";
      box.prepend(info);
    }
    const user=selectedDrivers();
    info.innerHTML=`<div><b>Janela de pit</b><strong>V${l.strategy.pitWindowStart} - V${l.strategy.pitWindowEnd}</strong><span>${l.strategy.mandatoryPit?"Pit obrigatório ativo":"Pit livre"}</span></div>
      <div><b>Clima</b><strong>${l.strategy.weather||"Seco"}</strong><span>Use composto correto se chover.</span></div>
      <div><b>Seus pilotos</b><strong>${user.map(d=>d.name.split(" ").slice(-1)[0]).join(" / ")}</strong><span>Chame box individualmente.</span></div>`;
    patchPitButtons();
  }

  function renderRaceReport(){
    const box=q("#raceReportPanel");
    if(!box)return;
    const r=S().lastRaceTechnicalReport;
    if(!r){
      box.innerHTML=`<div class="race-report-card"><b>Nenhum relatório ainda</b><span>Finalize uma corrida para gerar análise técnica.</span></div>`;
      return;
    }
    box.innerHTML=`<div class="race-report-card main"><b>${r.gp}</b><strong>${r.verdict}</strong><span>Melhor posição da equipe: ${r.best?("P"+r.best):"N/A"}</span></div>
      <div class="race-report-grid">
        ${r.user.map(d=>`<div class="race-report-card"><b>${d.name}</b><strong>P${d.pos}</strong><span>${d.pitted?"Pit realizado":"Sem pit"} • pneus ${d.tyreLife}% ${d.out?"• abandonou":""}</span>${d.pits.map(p=>`<small>Volta ${p.lap}: ${p.compound}, perda ${p.loss}, ${p.inWindow?"janela correta":"fora da janela"}</small>`).join("")}</div>`).join("")}
      </div>
      <div class="race-report-card"><b>Financeiro</b><p>Patrocínios: ${money(r.sponsorImpact||0)}</p><p>Custos pós-corrida: ${money(r.repairCost||0)}</p></div>
      <button class="cta compact" data-goto="screenStableStandings">VER CLASSIFICAÇÕES</button>`;
  }

  function patchPodiumReportButton(){
    const panel=q("#stablePodiumPanel");
    if(!panel||panel.dataset.v0300==="1")return;
    panel.dataset.v0300="1";
    const btn=document.createElement("button");
    btn.className="secondary compact";
    btn.textContent="RELATÓRIO TÉCNICO";
    btn.dataset.goto="screenRaceReport";
    panel.appendChild(btn);
  }

  function attachNav(){
    qa("[data-goto]").forEach(btn=>{
      if(btn.dataset.v0300nav==="1")return;
      btn.dataset.v0300nav="1";
      btn.addEventListener("click",()=>setTimeout(()=>{renderRaceReport();renderStrategy();patchPodiumReportButton();},120));
    });
  }

  function run(){
    ensure();
    patchRaceStart();
    patchRender();
    patchTick();
    patchFinish();
    attachNav();
    renderStrategy();
    renderRaceReport();
    patchPodiumReportButton();
    save();
  }
  document.addEventListener("DOMContentLoaded",()=>setTimeout(run,800));
  window.addEventListener("load",()=>setTimeout(run,1200));
  document.addEventListener("click",ev=>{
    if(ev.target.closest("[data-goto]"))setTimeout(run,160);
  });
})();
