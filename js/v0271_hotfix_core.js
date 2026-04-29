
/* v0.27.1 HOTFIX - restaura dados globais, seleção, módulos vazios e início de corrida */
(function(){
  const AVATARS = [
    "assets/avatar/avatar1.png","assets/avatar/avatar2.png","assets/avatar/avatar3.png","assets/avatar/avatar4.png",
    "assets/avatar/avatar5.png","assets/avatar/avatar6.png","assets/avatar/avatar7.png"
  ];

  const FALLBACK_TEAMS = [
    {id:"mclaren",name:"McLaren",short:"McLaren",card:"assets/teams/cards/mclaren.png",logo:"assets/teams/cards/logos/mclaren.png",drivers:["Lando Norris","Oscar Piastri"],car:{aero:91,power:88,chassis:90,tyres:90,reliability:86}},
    {id:"redbull",name:"Red Bull Racing",short:"Red Bull",card:"assets/teams/cards/redbull.png",logo:"assets/teams/cards/logos/redbull.png",drivers:["Max Verstappen","Isack Hadjar"],car:{aero:90,power:90,chassis:88,tyres:87,reliability:85}},
    {id:"ferrari",name:"Ferrari",short:"Ferrari",card:"assets/teams/cards/ferrari.png",logo:"assets/teams/cards/logos/ferrari.png",drivers:["Charles Leclerc","Lewis Hamilton"],car:{aero:89,power:89,chassis:87,tyres:86,reliability:84}},
    {id:"mercedes",name:"Mercedes-AMG Petronas",short:"Mercedes",card:"assets/teams/cards/mercedes.png",logo:"assets/teams/cards/logos/mercedes.png",drivers:["George Russell","Kimi Antonelli"],car:{aero:88,power:87,chassis:88,tyres:89,reliability:86}},
    {id:"aston",name:"Aston Martin Aramco-Mercedes",short:"Aston Martin",card:"assets/teams/cards/aston_martin.png",logo:"assets/teams/cards/logos/aston_martin.png",drivers:["Fernando Alonso","Lance Stroll"],car:{aero:82,power:84,chassis:82,tyres:80,reliability:81}},
    {id:"alpine",name:"Alpine",short:"Alpine",card:"assets/teams/cards/alpine.png",logo:"assets/teams/cards/logos/alpine.png",drivers:["Pierre Gasly","Franco Colapinto"],car:{aero:80,power:80,chassis:79,tyres:78,reliability:77}},
    {id:"williams",name:"Williams",short:"Williams",card:"assets/teams/cards/williams.png",logo:"assets/teams/cards/logos/williams.png",drivers:["Carlos Sainz Jr.","Alexander Albon"],car:{aero:79,power:82,chassis:78,tyres:76,reliability:77}},
    {id:"audi",name:"Audi F1 Team",short:"Audi",card:"assets/teams/cards/audi.png",logo:"assets/teams/cards/logos/audi.png",drivers:["Nico Hulkenberg","Gabriel Bortoleto"],car:{aero:76,power:78,chassis:75,tyres:75,reliability:74}},
    {id:"haas",name:"Haas",short:"Haas",card:"assets/teams/cards/haas.png",logo:"assets/teams/cards/logos/haas.png",drivers:["Oliver Bearman","Esteban Ocon"],car:{aero:75,power:77,chassis:74,tyres:73,reliability:73}},
    {id:"racingbulls",name:"Racing Bulls",short:"Racing Bulls",card:"assets/teams/cards/rb.png",logo:"assets/teams/cards/logos/rb.png",drivers:["Liam Lawson","Isack Hadjar"],car:{aero:77,power:76,chassis:76,tyres:74,reliability:74}},
    {id:"cadillac",name:"Cadillac",short:"Cadillac",card:"assets/teams/cards/cadillac.png",logo:"assets/teams/cards/logos/cadillac.png",drivers:["Valtteri Bottas","Sergio Perez"],car:{aero:72,power:75,chassis:72,tyres:72,reliability:70}}
  ];

  const DRIVER_LIST = [
    ["lando","Lando Norris","🇬🇧","McLaren","#4","mclaren",94,"assets/drivers/lando_norris.png"],
    ["piastri","Oscar Piastri","🇦🇺","McLaren","#81","mclaren",91,"assets/drivers/oscar_piastri.png"],
    ["verstappen","Max Verstappen","🇳🇱","Red Bull","#1","redbull",96,"assets/drivers/max_verstappen.png"],
    ["hadjar","Isack Hadjar","🇫🇷","Racing Bulls","#6","racingbulls",78,"assets/drivers/isack_hadjar.png"],
    ["leclerc","Charles Leclerc","🇲🇨","Ferrari","#16","ferrari",92,"assets/drivers/charles_leclerc.png"],
    ["hamilton","Lewis Hamilton","🇬🇧","Ferrari","#44","ferrari",90,"assets/drivers/lewis_hamilton.png"],
    ["russell","George Russell","🇬🇧","Mercedes","#63","mercedes",90,"assets/drivers/george_russell.png"],
    ["antonelli","Kimi Antonelli","🇮🇹","Mercedes","#12","mercedes",82,"assets/drivers/kimi_antonelli.png"],
    ["alonso","Fernando Alonso","🇪🇸","Aston Martin","#14","aston",87,"assets/drivers/fernando_alonso.png"],
    ["stroll","Lance Stroll","🇨🇦","Aston Martin","#18","aston",78,"assets/drivers/lance_stroll.png"],
    ["gasly","Pierre Gasly","🇫🇷","Alpine","#10","alpine",83,"assets/drivers/pierre_gasly.png"],
    ["colapinto","Franco Colapinto","🇦🇷","Alpine","#43","alpine",77,"assets/drivers/franco_colapinto.png"],
    ["sainz","Carlos Sainz Jr.","🇪🇸","Williams","#55","williams",88,"assets/drivers/carlos_sainz.png"],
    ["albon","Alexander Albon","🇹🇭","Williams","#23","williams",82,"assets/drivers/alexander_albon.png"],
    ["hulkenberg","Nico Hulkenberg","🇩🇪","Audi F1 Team","#27","audi",81,"assets/drivers/nico_hulkenberg.png"],
    ["bortoleto","Gabriel Bortoleto","🇧🇷","Audi F1 Team","#5","audi",78,"assets/drivers/gabriel_bortoleto.png"],
    ["bearman","Oliver Bearman","🇬🇧","Haas","#87","haas",79,"assets/drivers/oliver_bearman.png"],
    ["ocon","Esteban Ocon","🇫🇷","Haas","#31","haas",82,"assets/drivers/esteban_ocon.png"],
    ["lawson","Liam Lawson","🇳🇿","Racing Bulls","#30","racingbulls",78,"assets/drivers/liam_lawson.png"],
    ["bottas","Valtteri Bottas","🇫🇮","Cadillac","#77","cadillac",80,"assets/drivers/valtteri_bottas.png"],
    ["perez","Sergio Perez","🇲🇽","Cadillac","#11","cadillac",82,"assets/drivers/sergio_perez.png"]
  ];

  const FALLBACK_CALENDAR = [
    {round:1,gp:"GP da Austrália",country:"Austrália",track:"Melbourne",laps:58},
    {round:2,gp:"GP da China",country:"China",track:"Shanghai",laps:56},
    {round:3,gp:"GP do Japão",country:"Japão",track:"Suzuka",laps:53},
    {round:4,gp:"GP do Bahrein",country:"Bahrein",track:"Bahrain International Circuit",laps:57},
    {round:5,gp:"GP da Arábia Saudita",country:"Arábia Saudita",track:"Jeddah",laps:50},
    {round:6,gp:"GP de Miami",country:"EUA",track:"Miami",laps:57},
    {round:7,gp:"GP de Mônaco",country:"Mônaco",track:"Monte Carlo",laps:78},
    {round:8,gp:"GP do Canadá",country:"Canadá",track:"Gilles-Villeneuve",laps:70},
    {round:9,gp:"GP da Espanha",country:"Espanha",track:"Barcelona-Catalunya",laps:66},
    {round:10,gp:"GP da Áustria",country:"Áustria",track:"Red Bull Ring",laps:71},
    {round:11,gp:"GP da Grã-Bretanha",country:"Reino Unido",track:"Silverstone",laps:52},
    {round:12,gp:"GP da Hungria",country:"Hungria",track:"Hungaroring",laps:70},
    {round:13,gp:"GP da Bélgica",country:"Bélgica",track:"Spa-Francorchamps",laps:44},
    {round:14,gp:"GP da Itália",country:"Itália",track:"Monza",laps:53},
    {round:15,gp:"GP do Azerbaijão",country:"Azerbaijão",track:"Baku",laps:51},
    {round:16,gp:"GP de Singapura",country:"Singapura",track:"Marina Bay",laps:62},
    {round:17,gp:"GP dos EUA",country:"EUA",track:"COTA",laps:56},
    {round:18,gp:"GP do México",country:"México",track:"Hermanos Rodríguez",laps:71},
    {round:19,gp:"GP do Brasil",country:"Brasil",track:"Interlagos",laps:71},
    {round:20,gp:"GP do Catar",country:"Catar",track:"Lusail",laps:57},
    {round:21,gp:"GP de Abu Dhabi",country:"Emirados Árabes",track:"Yas Marina",laps:58}
  ];

  function q(sel){ return document.querySelector(sel); }
  function qa(sel){ return Array.from(document.querySelectorAll(sel)); }

  function forceGlobals(){
    if(!Array.isArray(window.TEAMS) || window.TEAMS.length < 5) window.TEAMS = FALLBACK_TEAMS;
    if(!Array.isArray(window.DRIVERS) || window.DRIVERS.length < 10){
      window.DRIVERS = DRIVER_LIST.map(r=>({id:r[0],name:r[1],flag:r[2],team:r[3],number:r[4],teamId:r[5],overall:r[6],asset:r[7]}));
    }
    if(!Array.isArray(window.CALENDAR) || window.CALENDAR.length < 5) window.CALENDAR = FALLBACK_CALENDAR;
    if(!window.STATE || typeof window.STATE !== "object") window.STATE = {};
    const s = window.STATE;
    s.money = typeof s.money === "number" ? s.money : 48750000;
    s.round = s.round || 1;
    s.season = s.season || 2026;
    s.teamName = s.teamName || "McLaren";
    s.avatar = s.avatar || AVATARS[0];
    s.career = s.career || "Rumo ao Topo";
    s.country = s.country || "🇧🇷 Brasil";
    s.staff = s.staff || {technical:1,strategy:1,raceOps:1,commercial:1,mechanics:1};
    if(s.staff.mechanics === undefined) s.staff.mechanics = 1;
    s.activeSponsors = Array.isArray(s.activeSponsors) && s.activeSponsors.length ? s.activeSponsors : ["global_motors"];
    s.carParts = s.carParts || {};
    s.contracts = s.contracts || {};
    s.teamDrivers = s.teamDrivers || {};
    s.driverTeamMap = s.driverTeamMap || {};
    const t = getTeam();
    if(!s.teamDrivers[t.id]) s.teamDrivers[t.id] = (t.drivers || []).slice(0,2);
    ["power","aero","chassis","tyres","reliability"].forEach(k=>{
      if(typeof s.carParts[k] !== "number") s.carParts[k] = (t.car && t.car[k]) || 78;
    });
  }

  function getTeam(){
    forceArraysOnly();
    const s=window.STATE||{};
    return window.TEAMS.find(t=>t.name===s.teamName || t.short===s.teamName || t.id===s.teamId) || window.TEAMS[0];
  }
  function forceArraysOnly(){
    if(!Array.isArray(window.TEAMS) || window.TEAMS.length < 5) window.TEAMS = FALLBACK_TEAMS;
    if(!Array.isArray(window.DRIVERS) || window.DRIVERS.length < 10) window.DRIVERS = DRIVER_LIST.map(r=>({id:r[0],name:r[1],flag:r[2],team:r[3],number:r[4],teamId:r[5],overall:r[6],asset:r[7]}));
    if(!Array.isArray(window.CALENDAR) || window.CALENDAR.length < 5) window.CALENDAR = FALLBACK_CALENDAR;
  }
  function getSelectedDrivers(){
    forceGlobals();
    const t=getTeam();
    const names = (window.STATE.teamDrivers && window.STATE.teamDrivers[t.id]) || t.drivers || [];
    let out = names.map(n=>window.DRIVERS.find(d=>d.name===n)).filter(Boolean);
    if(out.length < 2) out = window.DRIVERS.filter(d=>d.teamId===t.id).slice(0,2);
    return out;
  }
  window.selectedDrivers = getSelectedDrivers;

  function save(){
    try{
      localStorage.setItem("f1_ve_save_slot_main_v0150", JSON.stringify({version:"v0.27.1",savedAt:new Date().toISOString(),state:window.STATE}));
      localStorage.setItem("f1_ve_visual_state", JSON.stringify(window.STATE));
    }catch(e){}
  }

  function showScreen(id){
    qa(".screen").forEach(s=>s.classList.remove("active"));
    const el=q("#"+id);
    if(el) el.classList.add("active");
    setTimeout(renderAllHotfix,50);
  }
  window.showScreen = window.showScreen || showScreen;

  function attachSelection(){
    // avatar cards
    qa("[data-avatar], .avatar-card").forEach((el,i)=>{
      el.style.cursor="pointer";
      if(!el.dataset.avatar) el.dataset.avatar = AVATARS[i] || AVATARS[0];
      el.onclick = ()=>{
        window.STATE.avatar = el.dataset.avatar;
        qa("[data-avatar], .avatar-card").forEach(x=>x.classList.remove("selected"));
        el.classList.add("selected");
        save();
      };
    });
    // team cards
    qa("[data-team], .team-card").forEach((el,i)=>{
      el.style.cursor="pointer";
      if(!el.dataset.team && window.TEAMS[i]) el.dataset.team = window.TEAMS[i].id;
      el.onclick = ()=>{
        const tm = window.TEAMS.find(t=>t.id===el.dataset.team || t.name===el.dataset.team || t.short===el.dataset.team) || window.TEAMS[i] || window.TEAMS[0];
        window.STATE.teamName = tm.name;
        window.STATE.teamId = tm.id;
        window.STATE.teamDrivers[tm.id] = (tm.drivers||[]).slice(0,2);
        ["power","aero","chassis","tyres","reliability"].forEach(k=>window.STATE.carParts[k]=(tm.car&&tm.car[k])||78);
        qa("[data-team], .team-card").forEach(x=>x.classList.remove("selected"));
        el.classList.add("selected");
        save(); renderAllHotfix();
      };
    });
    qa("[data-goto]").forEach(btn=>{
      btn.onclick = (ev)=>{ ev.preventDefault(); showScreen(btn.dataset.goto); };
    });
  }

  function renderWorkshop(){
    const parts=q("#carPartsPanel"), projects=q("#carProjectsPanel"), dev=q("#developmentPackages");
    const s=window.STATE;
    const projectList=[
      ["power","Motor",2,5200000],["aero","Aerodinâmica",3,8200000],["chassis","Chassi",2,6100000],["tyres","Pneus",3,4700000],["reliability","Confiabilidade",3,4300000]
    ];
    if(parts){
      parts.innerHTML=["power","aero","chassis","tyres","reliability"].map(k=>`<div class="car-part-card"><b>${k.toUpperCase()}</b><strong>${s.carParts[k]||75}</strong><span>Peça ativa no carro escolhido</span><i><em style="width:${s.carParts[k]||75}%"></em></i></div>`).join("");
    }
    const html=projectList.map(p=>`<div class="project-card"><b>Desenvolver ${p[1]}</b><span>+${p[2]} desempenho</span><small>Custo R$ ${(p[3]/1000000).toFixed(1)} mi</small><button data-devpart="${p[0]}" data-cost="${p[3]}" data-boost="${p[2]}">DESENVOLVER</button></div>`).join("");
    if(projects) projects.innerHTML=html;
    if(dev) dev.innerHTML=html;
    qa("[data-devpart]").forEach(btn=>btn.onclick=()=>{
      const cost=Number(btn.dataset.cost), boost=Number(btn.dataset.boost), part=btn.dataset.devpart;
      if(window.STATE.money<cost){alert("Caixa insuficiente.");return}
      window.STATE.money-=cost;
      window.STATE.carParts[part]=Math.min(99,(window.STATE.carParts[part]||75)+boost);
      save(); renderAllHotfix();
    });
  }

  function renderSponsors(){
    const box=q("#sponsorPanel");
    if(!box) return;
    const sponsors=[
      ["global_motors","Global Motors","Terminar com dois carros",950000,180000],
      ["vale_energy","Vale Energy","Conseguir pódio",3600000,900000],
      ["speedtech","SpeedTech","Top 10 duplo",1900000,450000],
      ["prime_fuel","Prime Fuel","Pit obrigatório sem penalidade",1100000,300000]
    ];
    box.innerHTML=sponsors.map(s=>{
      const active=window.STATE.activeSponsors.includes(s[0]);
      return `<div class="sponsor-contract ${active?'active':''}"><div class="sponsor-top"><b>${s[1]}</b><span>${active?'ATIVO':'LIVRE'}</span></div><strong>${s[2]}</strong><p>Bônus R$ ${(s[3]/1000000).toFixed(1)} mi • Penalidade R$ ${(s[4]/1000000).toFixed(1)} mi</p><button data-sponsor-id="${s[0]}">${active?'DESATIVAR':'ATIVAR'}</button></div>`;
    }).join("");
    qa("[data-sponsor-id]").forEach(btn=>btn.onclick=()=>{
      const id=btn.dataset.sponsorId;
      const arr=window.STATE.activeSponsors;
      if(arr.includes(id)){
        if(arr.length<=1){alert("Mantenha ao menos 1 patrocinador.");return}
        window.STATE.activeSponsors=arr.filter(x=>x!==id);
      }else{
        if(arr.length>=2){alert("Máximo 2 patrocinadores ativos.");return}
        arr.push(id);
      }
      save(); renderSponsors();
    });
  }

  function renderBoardSeason(){
    const board=q("#managerDashboardPanel");
    if(board) board.innerHTML=`<div class="board-card main"><b>${getTeam().short}</b><strong>Caixa R$ ${(window.STATE.money/1000000).toFixed(1)} mi</strong><span>Temporada ${window.STATE.season} • rodada ${window.STATE.round}</span></div><div class="board-grid"><div class="board-card"><b>Carro</b><strong>${avgCar()}</strong></div><div class="board-card"><b>Staff</b><strong>${window.STATE.staff.mechanics}</strong></div></div>`;
    const season=q("#seasonHubPanel");
    if(season) season.innerHTML=`<div class="season-card main"><b>Temporada ${window.STATE.season}</b><strong>${window.STATE.round}</strong><span>Rodada atual</span></div><div class="season-grid"><div class="season-card"><b>Corridas</b><strong>${(window.STATE.raceHistory||[]).length}</strong></div><div class="season-card"><b>Equipe</b><strong>${getTeam().short}</strong></div></div>`;
  }
  function avgCar(){
    const vals=["power","aero","chassis","tyres","reliability"].map(k=>window.STATE.carParts[k]||75);
    return Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
  }

  function renderRace(){
    const st=window.STATE;
    const race=window.CALENDAR[(st.round||1)-1]||window.CALENDAR[0];
    const title=q("#screenRace h2");
    if(title) title.textContent="CORRIDA";
    const p=q("#screenRace p");
    if(p) p.textContent=`${race.gp} • ${race.track} • ${race.laps} voltas`;
    let btn=q("#startRaceBtn") || q("[data-start-race]");
    if(!btn){
      const screen=q("#screenRace");
      if(screen){
        btn=document.createElement("button");
        btn.id="startRaceBtn"; btn.className="cta compact"; btn.textContent="INICIAR CORRIDA";
        screen.insertBefore(btn, screen.children[3]||null);
      }
    }
    if(btn) btn.onclick=startRace;
  }

  function startRace(){
    forceGlobals();
    const race=window.CALENDAR[(window.STATE.round||1)-1]||window.CALENDAR[0];
    const grid=window.DRIVERS.map((d,i)=>({id:d.id,name:d.name,flag:d.flag,team:d.team,teamId:d.teamId,asset:d.asset,number:d.number,pos:i+1,tyreLife:100,fuel:100,pitted:false,out:false}));
    const selected=getSelectedDrivers();
    selected.forEach((d,i)=>{
      const g=grid.find(x=>x.id===d.id);
      if(g){g.pos=i+8; g.teamId=getTeam().id; g.team=getTeam().short;}
    });
    grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>d.pos=i+1);
    window.STATE.liveRace={running:true,finished:false,lap:0,totalLaps:race.laps,raceName:race.gp,grid,commentary:["Largada autorizada."],radio:["Engenheiro: corrida iniciada."]};
    renderLiveRaceHF();
    if(window._hfRaceTimer) clearInterval(window._hfRaceTimer);
    window._hfRaceTimer=setInterval(tickRace,900);
    save();
  }

  function tickRace(){
    const l=window.STATE.liveRace;
    if(!l||!l.running||l.finished) return;
    l.lap+=1;
    l.grid.forEach(d=>{
      if(d.out)return;
      d.tyreLife=Math.max(0,d.tyreLife-(d.pitted?0.5:0.9));
      if(Math.random()<0.18){
        const move=Math.random()<0.5?-1:1;
        d.pos=Math.max(1,Math.min(l.grid.length,d.pos+move));
      }
    });
    l.grid.sort((a,b)=>a.pos-b.pos).forEach((d,i)=>d.pos=i+1);
    if(l.lap%3===0) l.commentary.unshift(`Volta ${l.lap}: disputas no pelotão e pneus em queda.`);
    if(l.lap>=l.totalLaps){
      l.finished=true; l.running=false; clearInterval(window._hfRaceTimer);
      l.podium=l.grid.slice(0,3);
      l.commentary.unshift(`Bandeirada final: ${l.podium[0].name} vence ${l.raceName}.`);
    }
    renderLiveRaceHF(); save();
  }

  function renderLiveRaceHF(){
    const l=window.STATE.liveRace;
    const gridBox=q("#liveGrid")||q("#raceGrid")||q(".live-grid");
    if(gridBox&&l) gridBox.innerHTML=l.grid.slice(0,20).map(d=>`<div class="race-row"><b>P${d.pos}</b><span>${d.flag||''} ${d.name}<small>${d.team} • pneu ${Math.round(d.tyreLife)}%</small></span></div>`).join("");
    const comm=q("#liveCommentary")||q("#raceCommentary")||q(".commentary");
    if(comm&&l) comm.innerHTML=(l.commentary||[]).slice(0,8).map(x=>`<p>${x}</p>`).join("");
    const radio=q("#liveRadio")||q("#raceRadio")||q(".radio");
    if(radio&&l) radio.innerHTML=(l.radio||[]).slice(0,6).map(x=>`<p>${x}</p>`).join("");
    const status=q("#raceStatus");
    if(status&&l) status.textContent=l.finished?"Finalizada":`Volta ${l.lap}/${l.totalLaps}`;
  }
  window.startLiveRace=startRace;
  window.renderLiveRace=renderLiveRaceHF;

  function renderAllHotfix(){
    forceGlobals();
    attachSelection();
    renderWorkshop();
    renderSponsors();
    renderBoardSeason();
    renderRace();
  }
  window.renderAllHotfix=renderAllHotfix;

  document.addEventListener("DOMContentLoaded",()=>setTimeout(renderAllHotfix,500));
  window.addEventListener("load",()=>setTimeout(renderAllHotfix,700));
})();
