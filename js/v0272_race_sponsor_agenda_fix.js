
/* v0.27.2 HOTFIX - agenda bandeiras, patrocinio clicavel, corrida visual/contador */
(function(){
  const FLAG = {
    "Austrália":"🇦🇺","China":"🇨🇳","Japão":"🇯🇵","Bahrein":"🇧🇭","Arábia Saudita":"🇸🇦","EUA":"🇺🇸","Mônaco":"🇲🇨","Canadá":"🇨🇦","Espanha":"🇪🇸","Áustria":"🇦🇹","Reino Unido":"🇬🇧","Bélgica":"🇧🇪","Hungria":"🇭🇺","Holanda":"🇳🇱","Itália":"🇮🇹","Azerbaijão":"🇦🇿","Singapura":"🇸🇬","México":"🇲🇽","Brasil":"🇧🇷","Catar":"🇶🇦","Emirados Árabes":"🇦🇪"
  };

  const REAL_SPONSORS = [
    {id:"aramco",name:"Aramco",kind:"Energia",goal:"Terminar com os dois carros",bonus:1800000,penalty:350000},
    {id:"pirelli",name:"Pirelli",kind:"Pneus",goal:"Fazer pit obrigatório sem penalidade",bonus:1400000,penalty:300000},
    {id:"dhl",name:"DHL",kind:"Logística",goal:"Pontuar com 1 piloto",bonus:1200000,penalty:250000},
    {id:"lenovo",name:"Lenovo",kind:"Tecnologia",goal:"Top 10 duplo",bonus:2200000,penalty:500000},
    {id:"heineken",name:"Heineken 0.0",kind:"Mídia",goal:"Chegar ao Top 8",bonus:1500000,penalty:320000},
    {id:"crypto",name:"Crypto.com",kind:"Digital",goal:"Pódio",bonus:4200000,penalty:900000},
    {id:"rolex",name:"Rolex",kind:"Premium",goal:"Vitória",bonus:6000000,penalty:1300000},
    {id:"aws",name:"AWS",kind:"Dados",goal:"Classificar no Top 10",bonus:1600000,penalty:350000}
  ];

  function q(s){return document.querySelector(s)}
  function qa(s){return Array.from(document.querySelectorAll(s))}
  function S(){return window.STATE || (window.STATE={})}
  function T(){return Array.isArray(window.TEAMS)?window.TEAMS:[]}
  function D(){return Array.isArray(window.DRIVERS)?window.DRIVERS:[]}
  function C(){return Array.isArray(window.CALENDAR)?window.CALENDAR:[]}
  function money(v){return "R$ "+(v/1000000).toFixed(1)+" mi"}
  function save(){
    try{
      localStorage.setItem("f1_ve_save_slot_main_v0150", JSON.stringify({version:"v0.27.2",savedAt:new Date().toISOString(),state:S()}));
      localStorage.setItem("f1_ve_visual_state", JSON.stringify(S()));
    }catch(e){}
  }
  function teamById(id){return T().find(t=>t.id===id)||T()[0]||{}}
  function currentTeam(){const st=S();return T().find(t=>t.name===st.teamName||t.id===st.teamId||t.short===st.teamName)||T()[0]||{}}
  function logoFor(teamId){const t=teamById(teamId);return t.logo||("assets/teams/cards/logos/"+(t.id||teamId||"mclaren")+".png")}
  function driverAsset(d){return d.asset||("assets/drivers/"+String(d.name||"").toLowerCase().replaceAll(" ","_")+".png")}
  function ensure(){
    const st=S();
    st.money=typeof st.money==="number"?st.money:48750000;
    st.round=st.round||1;
    st.teamName=st.teamName||((T()[0]&&T()[0].name)||"McLaren");
    st.activeSponsors=Array.isArray(st.activeSponsors)?st.activeSponsors:[];
    if(!st.activeSponsors.length) st.activeSponsors=["aramco"];
    st.sponsorContracts=st.sponsorContracts||{};
    st.raceHistory=st.raceHistory||[];
  }

  function renderAgendaFlags(){
    const list=q("#calendarList")||q(".calendar-list")||q("#agendaList");
    if(!list||!C().length) return;
    const round=S().round||1;
    list.innerHTML=C().map(r=>{
      const flag=FLAG[r.country]||"🏁";
      return `<div class="calendar-row ${r.round===round?'current':''}">
        <b><span class="flag-emoji">${flag}</span> ${r.round}. ${r.gp}</b>
        <span>${r.track} • ${r.laps} voltas</span>
      </div>`;
    }).join("");
  }

  function renderSponsors(){
    ensure();
    const box=q("#sponsorPanel");
    if(!box) return;
    box.innerHTML=REAL_SPONSORS.map(s=>{
      const active=S().activeSponsors.includes(s.id);
      return `<div class="sponsor-contract ${active?'active':''}">
        <div class="sponsor-top"><b>${s.name}</b><span>${active?'ATIVO':s.kind}</span></div>
        <strong>${s.goal}</strong>
        <p>Bônus ${money(s.bonus)} • Penalidade ${money(s.penalty)}</p>
        <button type="button" data-real-sponsor="${s.id}">${active?'REMOVER CONTRATO':'ASSINAR CONTRATO'}</button>
      </div>`;
    }).join("");
    qa("[data-real-sponsor]").forEach(btn=>{
      btn.onclick=(ev)=>{
        ev.preventDefault(); ev.stopPropagation();
        const id=btn.dataset.realSponsor;
        const arr=S().activeSponsors;
        if(arr.includes(id)){
          if(arr.length<=1){alert("Mantenha pelo menos 1 patrocinador ativo.");return}
          S().activeSponsors=arr.filter(x=>x!==id);
        }else{
          if(arr.length>=2){alert("Você pode manter no máximo 2 patrocinadores ativos.");return}
          arr.push(id);
        }
        save();
        renderSponsors();
      };
    });
  }

  function getRace(){
    return C()[(S().round||1)-1]||C()[0]||{gp:"GP",track:"Circuito",laps:58,country:""};
  }

  function makeGrid(){
    const selected = typeof window.selectedDrivers==="function"?window.selectedDrivers():[];
    const current=currentTeam();
    let grid=D().map((d,i)=>({
      id:d.id,name:d.name,flag:d.flag||"",team:d.team||"",teamId:d.teamId||"",asset:driverAsset(d),number:d.number||"",pos:i+1,tyreLife:100,pitted:false,out:false
    }));
    selected.forEach((d,i)=>{
      const g=grid.find(x=>x.id===d.id);
      if(g){
        g.teamId=current.id;
        g.team=current.short||current.name;
        g.pos=i+7;
      }
    });
    grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>d.pos=i+1);
    return grid;
  }

  function updateHeader(){
    const l=S().liveRace;
    const statusBoxes=qa("#screenRace .stat-card, #screenRace .race-stat, #screenRace [class*='stat']");
    // robust direct text by labels
    const body=q("#screenRace");
    if(!body) return;
    const textNodes=qa("#screenRace *");
    textNodes.forEach(el=>{
      const tx=(el.textContent||"").trim();
      if(/^0\s*\/\s*\d+|^\d+\s*\/\s*\d+/.test(tx) && l) el.textContent=`${l.lap} / ${l.totalLaps}`;
      if(tx==="Pré-corrida" && l) el.textContent=l.finished?"Finalizada":"Em andamento";
    });
    let lapBox=q("#raceLapCounter");
    if(!lapBox){
      const firstStrong=qa("#screenRace strong").find(x=>(x.textContent||"").includes("/"));
      if(firstStrong) firstStrong.id="raceLapCounter";
      lapBox=q("#raceLapCounter");
    }
    if(lapBox&&l) lapBox.textContent=`${l.lap} / ${l.totalLaps}`;
    let status=q("#raceStatusLabel");
    if(!status){
      const cand=qa("#screenRace strong").find(x=>(x.textContent||"").includes("Pré")||(x.textContent||"").includes("corrida")||(x.textContent||"").includes("Final"));
      if(cand) cand.id="raceStatusLabel";
      status=q("#raceStatusLabel");
    }
    if(status&&l) status.textContent=l.finished?"Finalizada":"Em andamento";
  }

  function ensureRaceButton(){
    const screen=q("#screenRace");
    if(!screen) return;
    let btn=q("#startRaceBtn")||qa("#screenRace button").find(b=>(b.textContent||"").toLowerCase().includes("iniciar corrida"));
    if(!btn){
      btn=document.createElement("button");
      btn.id="startRaceBtn";
      btn.className="cta compact";
      btn.textContent="INICIAR CORRIDA";
      const target=q("#liveGrid")||q(".live-grid")||screen.children[3];
      screen.insertBefore(btn,target||null);
    }
    btn.id="startRaceBtn";
    btn.onclick=(ev)=>{ev.preventDefault();startRace();};
  }

  function startRace(){
    ensure();
    const race=getRace();
    S().liveRace={
      running:true,finished:false,lap:0,totalLaps:race.laps,raceName:race.gp,grid:makeGrid(),
      commentary:["Largada autorizada."],radio:["Engenheiro: corrida iniciada. Escolha o momento do box."]
    };
    if(window._raceTimer272) clearInterval(window._raceTimer272);
    window._raceTimer272=setInterval(tickRace,1100);
    renderRace();
    save();
  }

  function tickRace(){
    const l=S().liveRace;
    if(!l||!l.running||l.finished) return;
    l.lap++;
    l.grid.forEach(d=>{
      if(d.out) return;
      d.tyreLife=Math.max(0,d.tyreLife-(d.pitted?0.45:0.9));
      if(Math.random()<0.15){
        d.pos=Math.max(1,Math.min(l.grid.length,d.pos+(Math.random()<.5?-1:1)));
      }
    });
    l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>d.pos=i+1);
    if(l.lap%3===0) l.commentary.unshift(`Volta ${l.lap}: disputas no pelotão e pneus em queda.`);
    if(l.lap>=l.totalLaps){
      l.finished=true; l.running=false; clearInterval(window._raceTimer272);
      l.podium=l.grid.slice(0,3);
      l.commentary.unshift(`Bandeirada final: ${l.podium[0].name} vence ${l.raceName}.`);
    }
    renderRace();
    save();
  }

  function renderRace(){
    ensureRaceButton();
    const l=S().liveRace;
    const race=getRace();
    const p=q("#screenRace p");
    if(p) p.textContent=`${race.gp} • ${race.track} • ${race.laps} voltas`;
    const gridBox=q("#liveGrid")||q("#raceGrid")||q(".live-grid")||qa("#screenRace .panel, #screenRace .card").find(x=>(x.textContent||"").includes("GRID"));
    if(gridBox&&l){
      gridBox.innerHTML=`<h3>GRID AO VIVO</h3>`+l.grid.slice(0,20).map(d=>`<div class="race-row-v272">
        <b>P${d.pos}</b>
        <img class="race-driver-img" src="${d.asset}" onerror="this.style.display='none'">
        <span>${d.flag||''} ${d.name}<small>${d.team||teamById(d.teamId).short||''} • pneu ${Math.round(d.tyreLife)}%</small></span>
        <img class="race-team-logo" src="${logoFor(d.teamId)}" onerror="this.style.display='none'">
      </div>`).join("");
    }
    const comm=q("#liveCommentary")||q("#raceCommentary")||q(".commentary")||qa("#screenRace .panel, #screenRace .card").find(x=>(x.textContent||"").includes("NARRAÇÃO"));
    if(comm&&l){
      comm.innerHTML=`<h3>NARRAÇÃO AO VIVO</h3>`+(l.commentary||[]).slice(0,9).map(x=>`<p>${x}</p>`).join("")+`<h3>RÁDIO</h3>`+(l.radio||[]).slice(0,5).map(x=>`<p>${x}</p>`).join("");
    }
    updateHeader();
  }

  window.startLiveRace=startRace;
  window.renderLiveRace=renderRace;

  function runAll(){
    ensure();
    renderAgendaFlags();
    renderSponsors();
    ensureRaceButton();
    renderRace();
  }

  document.addEventListener("DOMContentLoaded",()=>setTimeout(runAll,600));
  window.addEventListener("load",()=>setTimeout(runAll,900));
  document.addEventListener("click",ev=>{
    if(ev.target.closest("[data-goto]")) setTimeout(runAll,180);
  });
})();
