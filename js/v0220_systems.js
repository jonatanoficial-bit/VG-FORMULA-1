
(function(){
  function $(s){ return document.querySelector(s); }
  function money(v){ return "R$ " + ((v||0)/1000000).toFixed(1) + " mi"; }
  function state(){ return window.STATE || {}; }
  function teams(){ return window.TEAMS || []; }
  function drivers(){ return window.DRIVERS || []; }
  function currentTeam(){ const S=state(); return teams().find(t=>t.name===S.teamName) || teams()[0] || {id:"mclaren", short:"McLaren", drivers:["Lando Norris","Oscar Piastri"], car:{aero:85,power:85,chassis:85,tyres:85,reliability:85}}; }
  function save(){ if(typeof window.saveGameManualV150==="function") window.saveGameManualV150(); else try{localStorage.setItem("f1_ve_visual_state",JSON.stringify(state()))}catch(e){} }
  function msg(a,b,c,d){ if(typeof window.addMessageV160==="function") window.addMessageV160(a,b,c,d||"info"); }

  const PARTS=[
    ["power","Motor","Velocidade de reta e defesa"],
    ["aero","Aerodinâmica","Curvas, classificação e ritmo"],
    ["chassis","Chassi","Estabilidade e consistência"],
    ["tyres","Pneus","Desgaste e stint longo"],
    ["reliability","Confiabilidade","Reduz falhas e abandonos"]
  ];
  const PROJECTS=[
    {id:"engine1",part:"power",name:"Mapa de motor agressivo",boost:2,cost:5200000,races:1},
    {id:"floor1",part:"aero",name:"Assoalho redesenhado",boost:3,cost:8200000,races:2},
    {id:"chassis1",part:"chassis",name:"Chassi aliviado",boost:2,cost:6100000,races:1},
    {id:"tyres1",part:"tyres",name:"Modelo térmico de pneus",boost:3,cost:4700000,races:1},
    {id:"reliability1",part:"reliability",name:"Pacote anti-falha",boost:3,cost:4300000,races:1},
    {id:"all1",part:"all",name:"Pacote integrado",boost:2,cost:14500000,races:3}
  ];

  function ensure(){
    const S=state(), t=currentTeam();
    S.money = typeof S.money==="number" ? S.money : 48750000;
    S.carParts = S.carParts || {};
    S.activeCarProjects = S.activeCarProjects || [];
    S.contracts = S.contracts || {};
    S.teamDrivers = S.teamDrivers || {};
    S.driverTeamMap = S.driverTeamMap || {};
    S.transferHistory = S.transferHistory || [];
    const car=t.car||{};
    PARTS.forEach(([k])=>{ if(typeof S.carParts[k]!=="number") S.carParts[k]=car[k]||78; });
    drivers().forEach(d=>{
      if(!S.contracts[d.id]){
        const salary=Math.max(1800000,Math.round((d.overall||75)*185000));
        S.contracts[d.id]={salary,years:(d.overall||75)>=90?3:2,buyout:Math.round(salary*((d.overall||75)>=90?2.2:1.4)),morale:80};
      }
      if(!S.driverTeamMap[d.id]) S.driverTeamMap[d.id]=d.teamId;
    });
    if(!S.teamDrivers[t.id]) S.teamDrivers[t.id]=(t.drivers||[]).slice(0,2);
  }

  function currentDrivers(){
    ensure();
    const names=state().teamDrivers[currentTeam().id]||[];
    return names.map(n=>drivers().find(d=>d.name===n)).filter(Boolean);
  }

  function renderParts(){
    ensure();
    const S=state(), box=$("#carPartsPanel");
    if(!box) return;
    box.innerHTML=PARTS.map(([k,n,d])=>{
      const v=Math.max(1,Math.min(99,S.carParts[k]||70));
      return `<div class="car-part-card"><b>${n}</b><strong>${v}</strong><span>${d}</span><i><em style="width:${v}%"></em></i></div>`;
    }).join("");
  }

  function renderProjects(){
    ensure();
    const S=state(), box=$("#carProjectsPanel");
    if(!box) return;
    box.innerHTML=PROJECTS.map(p=>{
      const run=S.activeCarProjects.find(x=>x.id===p.id);
      const label=p.part==="all"?"Todas as áreas":(PARTS.find(x=>x[0]===p.part)||[])[1];
      return `<div class="project-card ${run?'running':''}"><b>${p.name}</b><span>${label} +${p.boost}</span><small>Custo: ${money(p.cost)} • ${p.races} corrida(s)</small><button ${run?'disabled':''} data-start-project="${p.id}">${run?'EM ANDAMENTO ('+run.remaining+')':'DESENVOLVER'}</button></div>`;
    }).join("");
    box.querySelectorAll("[data-start-project]").forEach(btn=>btn.onclick=()=>startProject(btn.dataset.startProject));
  }

  function startProject(id){
    ensure();
    const S=state(), p=PROJECTS.find(x=>x.id===id);
    if(!p || S.activeCarProjects.find(x=>x.id===id)) return;
    if(S.money<p.cost){ alert("Caixa insuficiente."); return; }
    S.money-=p.cost;
    S.activeCarProjects.push({...p,remaining:p.races});
    msg("Oficina","Projeto iniciado",`${p.name} começou. Conclusão em ${p.races} corrida(s).`,"tech");
    renderParts(); renderProjects(); save();
  }

  function processProjects(){
    ensure();
    const S=state(), done=[];
    S.activeCarProjects.forEach(p=>{p.remaining--; if(p.remaining<=0) done.push(p);});
    S.activeCarProjects=S.activeCarProjects.filter(p=>p.remaining>0);
    done.forEach(p=>{
      if(p.part==="all") PARTS.forEach(([k])=>S.carParts[k]=Math.min(99,(S.carParts[k]||70)+p.boost));
      else S.carParts[p.part]=Math.min(99,(S.carParts[p.part]||70)+p.boost);
      msg("Oficina","Peça concluída",`${p.name} concluído. O carro evoluiu.`,"tech");
    });
  }

  function renderContracts(){
    ensure();
    const S=state(), summary=$("#contractSummaryPanel"), market=$("#contractMarketPanel"), cur=currentDrivers();
    if(summary){
      summary.innerHTML=cur.map(d=>{
        const c=S.contracts[d.id];
        return `<div class="contract-driver-card"><img src="${d.asset}" onerror="this.style.display='none'"><div><b>${d.flag} ${d.name}</b><span>${d.team} • ${d.number} • Geral ${d.overall}</span><small>Salário ${money(c.salary)} • ${c.years} anos • multa ${money(c.buyout)}</small></div></div>`;
      }).join("");
    }
    if(market){
      const curIds=cur.map(d=>d.id);
      const list=drivers().filter(d=>!curIds.includes(d.id)).sort((a,b)=>(b.overall||0)-(a.overall||0)).slice(0,18);
      market.innerHTML=list.map(d=>{
        const c=S.contracts[d.id];
        return `<div class="market-driver-card contract-market"><img src="${d.asset}" onerror="this.style.display='none'"><div><b>${d.flag} ${d.name}</b><span>${d.team} • ${d.number} • Geral ${d.overall}</span><small>Salário ${money(c.salary)} • multa ${money(c.buyout)}</small></div><button data-buy-driver="${d.id}">NEGOCIAR</button></div>`;
      }).join("");
      market.querySelectorAll("[data-buy-driver]").forEach(btn=>btn.onclick=()=>buyDriver(btn.dataset.buyDriver));
    }
  }

  function buyDriver(id){
    ensure();
    const S=state(), d=drivers().find(x=>x.id===id);
    if(!d) return;
    const c=S.contracts[id], total=c.buyout+Math.round(c.salary*.4);
    if(S.money<total){ alert("Caixa insuficiente para multa e luvas."); return; }
    const cur=currentDrivers();
    let rep=1;
    if(cur.length>=2){
      const pick=prompt(`Substituir qual piloto? 1 = ${cur[0].name}, 2 = ${cur[1].name}`,"2");
      rep=pick==="1"?0:1;
    }
    const t=currentTeam(), old=cur[rep];
    S.money-=total;
    S.teamDrivers[t.id][rep]=d.name;
    S.driverTeamMap[id]=t.id;
    if(old) S.driverTeamMap[old.id]="free";
    S.transferHistory.unshift({in:d.name,out:old?old.name:"",value:total,date:new Date().toLocaleDateString("pt-BR")});
    msg("Mercado","Contratação concluída",`${d.name} assinou com ${t.short}. Custo total ${money(total)}.`,"driver");
    if(S.liveRace && S.liveRace.lap===0) S.liveRace=null;
    renderContracts(); save();
    if(typeof window.updateTeamLogic==="function") window.updateTeamLogic();
  }

  window.selectedDrivers=currentDrivers;
  const oldCarStats=window.carStats;
  window.carStats=function(){
    ensure();
    const S=state(), out=oldCarStats?oldCarStats():{};
    PARTS.forEach(([k])=>out[k]=Math.max(out[k]||0,S.carParts[k]||70));
    return out;
  };

  const oldFinish=window.finishLiveRaceV14;
  if(typeof oldFinish==="function"){
    window.finishLiveRaceV14=function(){
      oldFinish();
      processProjects();
      renderParts(); renderProjects(); renderContracts(); save();
    };
  }

  document.addEventListener("click",ev=>{
    if(ev.target.closest("[data-goto]")) setTimeout(()=>{renderContracts(); renderParts(); renderProjects();},150);
  });
  document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{ensure(); renderContracts(); renderParts(); renderProjects();},800));
})();
