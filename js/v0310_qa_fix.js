
(function(){
  const BUILD="v0.31.0";
  const FLAGS={"Austrália":"🇦🇺","China":"🇨🇳","Japão":"🇯🇵","Bahrein":"🇧🇭","Arábia Saudita":"🇸🇦","EUA":"🇺🇸","Mônaco":"🇲🇨","Canadá":"🇨🇦","Espanha":"🇪🇸","Áustria":"🇦🇹","Reino Unido":"🇬🇧","Hungria":"🇭🇺","Bélgica":"🇧🇪","Itália":"🇮🇹","Azerbaijão":"🇦🇿","Singapura":"🇸🇬","México":"🇲🇽","Brasil":"🇧🇷","Catar":"🇶🇦","Emirados Árabes":"🇦🇪"};
  const COUNTRY_BY_GP={"GP da Austrália":"Austrália","GP da China":"China","GP do Japão":"Japão","GP do Bahrein":"Bahrein","GP da Arábia Saudita":"Arábia Saudita","GP de Miami":"EUA","GP de Mônaco":"Mônaco","GP do Canadá":"Canadá","GP da Espanha":"Espanha","GP da Áustria":"Áustria","GP da Grã-Bretanha":"Reino Unido","GP da Hungria":"Hungria","GP da Bélgica":"Bélgica","GP da Itália":"Itália","GP do Azerbaijão":"Azerbaijão","GP de Singapura":"Singapura","GP dos EUA":"EUA","GP do México":"México","GP do Brasil":"Brasil","GP do Catar":"Catar","GP de Abu Dhabi":"Emirados Árabes"};
  const DRIVER_DATA={
    lando:"Lando Norris|🇬🇧|mclaren|McLaren|#4|assets/drivers/lando_norris.png",
    piastri:"Oscar Piastri|🇦🇺|mclaren|McLaren|#81|assets/drivers/oscar_piastri.png",
    verstappen:"Max Verstappen|🇳🇱|redbull|Red Bull Racing|#1|assets/drivers/max_verstappen.png",
    leclerc:"Charles Leclerc|🇲🇨|ferrari|Ferrari|#16|assets/drivers/charles_leclerc.png",
    hamilton:"Lewis Hamilton|🇬🇧|ferrari|Ferrari|#44|assets/drivers/lewis_hamilton.png",
    russell:"George Russell|🇬🇧|mercedes|Mercedes|#63|assets/drivers/george_russell.png",
    antonelli:"Kimi Antonelli|🇮🇹|mercedes|Mercedes|#12|assets/drivers/kimi_antonelli.png",
    alonso:"Fernando Alonso|🇪🇸|aston|Aston Martin|#14|assets/drivers/fernando_alonso.png",
    stroll:"Lance Stroll|🇨🇦|aston|Aston Martin|#18|assets/drivers/lance_stroll.png",
    gasly:"Pierre Gasly|🇫🇷|alpine|Alpine|#10|assets/drivers/pierre_gasly.png",
    colapinto:"Franco Colapinto|🇦🇷|alpine|Alpine|#43|assets/drivers/franco_colapinto.png",
    sainz:"Carlos Sainz Jr.|🇪🇸|williams|Williams|#55|assets/drivers/carlos_sainz.png",
    albon:"Alexander Albon|🇹🇭|williams|Williams|#23|assets/drivers/alexander_albon.png",
    hulkenberg:"Nico Hulkenberg|🇩🇪|audi|Audi F1 Team|#27|assets/drivers/nico_hulkenberg.png",
    bortoleto:"Gabriel Bortoleto|🇧🇷|audi|Audi F1 Team|#5|assets/drivers/gabriel_bortoleto.png",
    bearman:"Oliver Bearman|🇬🇧|haas|Haas|#87|assets/drivers/oliver_bearman.png",
    ocon:"Esteban Ocon|🇫🇷|haas|Haas|#31|assets/drivers/esteban_ocon.png",
    lawson:"Liam Lawson|🇳🇿|racingbulls|Racing Bulls|#30|assets/drivers/liam_lawson.png",
    hadjar:"Isack Hadjar|🇫🇷|racingbulls|Racing Bulls|#6|assets/drivers/isack_hadjar.png",
    bottas:"Valtteri Bottas|🇫🇮|cadillac|Cadillac|#77|assets/drivers/valtteri_bottas.png",
    perez:"Sergio Perez|🇲🇽|cadillac|Cadillac|#11|assets/drivers/sergio_perez.png"
  };
  function q(s){return document.querySelector(s)}
  function qa(s){return Array.from(document.querySelectorAll(s))}
  function S(){return window.STATE||(window.STATE={})}
  function T(){return Array.isArray(window.TEAMS)?window.TEAMS:[]}
  function D(){return Array.isArray(window.DRIVERS)?window.DRIVERS:[]}
  function C(){return Array.isArray(window.CALENDAR)?window.CALENDAR:[]}
  function clean(n){return String(n||"").replace(/\s+/g," ").trim()}
  function keyFromName(name){
    const n=clean(name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\./g,"");
    for(const k of Object.keys(DRIVER_DATA)){ if(n.includes(k)) return k; }
    if(n.includes("hulk"))return"hulkenberg"; if(n.includes("sainz"))return"sainz"; if(n.includes("perez"))return"perez";
    return null;
  }
  function fixDriver(d){
    if(!d)return d;
    const k=(d.id&&DRIVER_DATA[d.id])?d.id:keyFromName(d.name);
    if(k){
      const p=DRIVER_DATA[k].split("|");
      d.id=k; d.name=p[0]; d.flag=p[1]; d.teamId=d.teamId||p[2]; d.team=d.team||p[3]; d.number=d.number||p[4]; d.asset=d.asset||p[5];
    } else { d.name=clean(d.name); d.flag=d.flag||"🏁"; }
    return d;
  }
  function canonicalize(){D().forEach(fixDriver); const l=S().liveRace; if(l&&Array.isArray(l.grid))l.grid.forEach(fixDriver);}
  function teamLogo(id){const t=T().find(x=>x.id===id)||{};return t.logo||("assets/teams/cards/logos/"+(id||"mclaren")+".png")}
  function driverAsset(d){fixDriver(d);return d.asset||("assets/drivers/"+clean(d.name).toLowerCase().replaceAll(" ","_")+".png")}
  function countryFlag(r){return FLAGS[r.country]||FLAGS[COUNTRY_BY_GP[r.gp]]||"🏁"}
  function save(){try{S().stableBuild=BUILD;localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()))}catch(e){}}

  function renderAgenda(){
    const list=q("#calendarList")||q(".calendar-list")||q("#agendaList");
    if(!list||!C().length)return;
    const round=S().round||1;
    list.innerHTML=C().map(r=>`<div class="calendar-row ${r.round===round?'current':''}"><b><span class="flag-img">${countryFlag(r)}</span><span>${r.round}. ${r.gp}</span></b><span>${r.track} • ${r.laps} voltas</span></div>`).join("");
  }

  function gridBox(){return q("#liveGrid")||q("#raceGrid")||q(".live-grid")||qa("#screenRace .panel,#screenRace .card,#screenRace [class*='grid']").find(x=>(x.textContent||"").toUpperCase().includes("GRID"))}
  function narrBox(){return q("#liveCommentary")||q("#raceCommentary")||q(".commentary")||qa("#screenRace .panel,#screenRace .card,#screenRace [class*='comment']").find(x=>(x.textContent||"").toUpperCase().includes("NARRAÇÃO"))}
  function show(id){
    if(typeof window.showScreen==="function"){try{window.showScreen(id);return}catch(e){}}
    qa(".screen").forEach(s=>s.classList.remove("active")); const el=q("#"+id); if(el)el.classList.add("active");
  }
  function ensurePodium(){
    if(q("#screenStablePodium"))return;
    const sec=document.createElement("section"); sec.id="screenStablePodium"; sec.className="screen data-screen stable-podium-screen";
    sec.innerHTML='<button class="back" data-goto="screenLobby">‹</button><h2>PÓDIO</h2><p>Resultado oficial da corrida.</p><div id="stablePodiumPanel" class="stable-podium-panel"></div>';
    const nav=q(".game-nav"); if(nav&&nav.parentNode)nav.parentNode.insertBefore(sec,nav); else document.body.appendChild(sec);
  }
  function renderPodium(){
    ensurePodium();
    const box=q("#stablePodiumPanel"), l=S().liveRace; if(!box||!l)return;
    const podium=(l.podium&&l.podium.length?l.podium:l.grid.slice().sort((a,b)=>a.pos-b.pos).slice(0,3));
    l.podium=podium;
    box.innerHTML='<div class="podium-grid-v0310">'+podium.map((d,i)=>{fixDriver(d);return `<div class="podium-card-v0310 p${i+1}"><img class="driver" src="${driverAsset(d)}" onerror="this.style.display='none'"><b>${i+1}º</b><strong>${d.flag||"🏁"} ${d.name}</strong><span>${d.team||""}</span><img class="team" src="${teamLogo(d.teamId)}" onerror="this.style.display='none'"></div>`}).join("")+'</div><div class="podium-actions-v0310"><button class="cta compact" data-goto="screenStableStandings">VER CLASSIFICAÇÕES</button><button class="secondary compact" data-goto="screenRaceReport">RELATÓRIO TÉCNICO</button><button class="secondary compact" data-goto="screenLobby">LOBBY</button></div>';
  }
  function renderRace(){
    canonicalize();
    const l=S().liveRace; if(!l)return;
    const g=gridBox();
    if(g){
      g.innerHTML='<h3 class="single-title-v0310">GRID AO VIVO</h3>'+l.grid.slice().sort((a,b)=>a.pos-b.pos).slice(0,20).map(d=>{fixDriver(d);return `<div class="race-row-v0310"><b>P${d.pos}</b><img class="driver" src="${driverAsset(d)}" onerror="this.style.display='none'"><span><strong>${d.flag||"🏁"} ${d.name}</strong><small>${d.team||""} • ${d.compound||"Médio"} • pneu ${Math.round(d.tyreLife||0)}%</small></span><img class="team" src="${teamLogo(d.teamId)}" onerror="this.style.display='none'"></div>`}).join("");
    }
    const n=narrBox();
    if(n){
      n.innerHTML='<h3 class="single-title-v0310">NARRAÇÃO AO VIVO</h3>'+(l.commentary||[]).slice(0,7).map(x=>`<p>${x}</p>`).join("")+'<h3 class="single-title-v0310">RÁDIO</h3>'+(l.radio||[]).slice(0,5).map(x=>`<p>${x}</p>`).join("");
    }
    qa("#screenRace strong,#screenRace .stat-card strong,#screenRace .race-stat strong").forEach(el=>{const tx=(el.textContent||"").trim();if(/^\d+\s*\/\s*\d+$/.test(tx))el.textContent=`${l.lap||0} / ${l.totalLaps||58}`;if(["Pré-corrida","Em andamento","Finalizada","Pausada"].includes(tx))el.textContent=l.finished?"Finalizada":l.paused?"Pausada":"Em andamento";});
    if(l.finished&&!l.v0310PodiumShown){l.v0310PodiumShown=true;setTimeout(()=>{renderPodium();show("screenStablePodium")},400)}
  }
  function patch(){
    const oldR=window.renderLiveRace;
    if(typeof oldR==="function"&&!oldR.__v0310){window.renderLiveRace=function(){let r;try{r=oldR.apply(this,arguments)}catch(e){}renderRace();return r};window.renderLiveRace.__v0310=true}
    const oldS=window.startLiveRace;
    if(typeof oldS==="function"&&!oldS.__v0310){window.startLiveRace=function(){const r=oldS.apply(this,arguments);setTimeout(()=>{canonicalize();renderRace()},200);return r};window.startLiveRace.__v0310=true}
  }
  function run(){canonicalize();ensurePodium();renderAgenda();patch();renderRace();renderPodium();save();}
  document.addEventListener("DOMContentLoaded",()=>setTimeout(run,600));
  window.addEventListener("load",()=>setTimeout(run,900));
  document.addEventListener("click",ev=>{if(ev.target.closest("[data-goto]"))setTimeout(run,160);if((ev.target.textContent||"").toLowerCase().includes("iniciar corrida"))setTimeout(run,280)});
  setInterval(()=>{if(S().liveRace)renderRace()},1200);
})();
