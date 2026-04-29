
(function(){
  const FLAGS={"Austrália":"🇦🇺","China":"🇨🇳","Japão":"🇯🇵","Bahrein":"🇧🇭","Arábia Saudita":"🇸🇦","EUA":"🇺🇸","Mônaco":"🇲🇨","Canadá":"🇨🇦","Espanha":"🇪🇸","Áustria":"🇦🇹","Reino Unido":"🇬🇧","Bélgica":"🇧🇪","Hungria":"🇭🇺","Holanda":"🇳🇱","Itália":"🇮🇹","Azerbaijão":"🇦🇿","Singapura":"🇸🇬","México":"🇲🇽","Brasil":"🇧🇷","Catar":"🇶🇦","Emirados Árabes":"🇦🇪"};
  const COUNTRY_BY_GP={"GP da Austrália":"Austrália","GP da China":"China","GP do Japão":"Japão","GP do Bahrein":"Bahrein","GP da Arábia Saudita":"Arábia Saudita","GP de Miami":"EUA","GP de Mônaco":"Mônaco","GP do Canadá":"Canadá","GP da Espanha":"Espanha","GP da Áustria":"Áustria","GP da Grã-Bretanha":"Reino Unido","GP da Hungria":"Hungria","GP da Bélgica":"Bélgica","GP da Itália":"Itália","GP do Azerbaijão":"Azerbaijão","GP de Singapura":"Singapura","GP dos EUA":"EUA","GP do México":"México","GP do Brasil":"Brasil","GP do Catar":"Catar","GP de Abu Dhabi":"Emirados Árabes"};
  const DRIVER_FIX={"Nico Hulkenberg":["🇩🇪","audi","Audi F1 Team"],"Nico Hülkenberg":["🇩🇪","audi","Audi F1 Team"],"Gabriel Bortoleto":["🇧🇷","audi","Audi F1 Team"],"Alexander Albon":["🇹🇭","williams","Williams"],"Esteban Ocon":["🇫🇷","haas","Haas"],"Oliver Bearman":["🇬🇧","haas","Haas"],"Lando Norris":["🇬🇧","mclaren","McLaren"],"Oscar Piastri":["🇦🇺","mclaren","McLaren"],"Max Verstappen":["🇳🇱","redbull","Red Bull Racing"],"Charles Leclerc":["🇲🇨","ferrari","Ferrari"],"Lewis Hamilton":["🇬🇧","ferrari","Ferrari"],"George Russell":["🇬🇧","mercedes","Mercedes"],"Kimi Antonelli":["🇮🇹","mercedes","Mercedes"],"Fernando Alonso":["🇪🇸","aston","Aston Martin"],"Lance Stroll":["🇨🇦","aston","Aston Martin"],"Pierre Gasly":["🇫🇷","alpine","Alpine"],"Franco Colapinto":["🇦🇷","alpine","Alpine"],"Carlos Sainz Jr.":["🇪🇸","williams","Williams"],"Liam Lawson":["🇳🇿","racingbulls","Racing Bulls"],"Isack Hadjar":["🇫🇷","racingbulls","Racing Bulls"],"Valtteri Bottas":["🇫🇮","cadillac","Cadillac"],"Sergio Perez":["🇲🇽","cadillac","Cadillac"]};
  function q(s){return document.querySelector(s)} function qa(s){return Array.from(document.querySelectorAll(s))}
  function S(){return window.STATE||(window.STATE={})} function C(){return Array.isArray(window.CALENDAR)?window.CALENDAR:[]} function T(){return Array.isArray(window.TEAMS)?window.TEAMS:[]} function D(){return Array.isArray(window.DRIVERS)?window.DRIVERS:[]}
  function clean(n){return String(n||"").replace(/\s+/g," ").trim()}
  function flagRace(r){return FLAGS[r.country]||FLAGS[COUNTRY_BY_GP[r.gp]]||"🏁"}
  function logo(teamId){const t=T().find(x=>x.id===teamId)||{};return t.logo||("assets/teams/cards/logos/"+(teamId||"mclaren")+".png")}
  function asset(d){return d.asset||("assets/drivers/"+clean(d.name).toLowerCase().replaceAll(" ","_").replaceAll(".","")+".png")}
  function fixD(d){if(!d)return d;d.name=clean(d.name);const f=DRIVER_FIX[d.name];if(f){d.flag=f[0];d.teamId=d.teamId||f[1];d.team=d.team||f[2];}return d}
  function repair(){D().forEach(fixD);const l=S().liveRace;if(l&&Array.isArray(l.grid))l.grid.forEach(fixD)}
  function agenda(){
    const list=q("#calendarList")||q(".calendar-list")||q("#agendaList"); if(!list||!C().length)return;
    const round=S().round||1;
    list.innerHTML=C().map(r=>`<div class="calendar-row ${r.round===round?'current':''}"><b><span class="flag-emoji">${flagRace(r)}</span> ${r.round}. ${r.gp}</b><span>${r.track} • ${r.laps} voltas</span></div>`).join("");
  }
  function race(){
    repair(); const l=S().liveRace; if(!l)return;
    const grid=q("#liveGrid")||q("#raceGrid")||q(".live-grid")||qa("#screenRace .panel,#screenRace .card").find(x=>(x.textContent||"").includes("GRID"));
    if(grid){
      grid.innerHTML=`<h3 data-v273="1">GRID AO VIVO</h3>`+l.grid.slice(0,20).map(d=>{fixD(d);return `<div class="race-row-v273"><b>P${d.pos}</b><img class="race-driver-img" src="${asset(d)}" onerror="this.style.display='none'"><span><strong>${d.flag||""} ${d.name}</strong><small>${d.team||""} • pneu ${Math.round(d.tyreLife||0)}%</small></span><img class="race-team-logo" src="${logo(d.teamId)}" onerror="this.style.display='none'"></div>`}).join("");
    }
    const comm=q("#liveCommentary")||q("#raceCommentary")||q(".commentary")||qa("#screenRace .panel,#screenRace .card").find(x=>(x.textContent||"").includes("NARRAÇÃO"));
    if(comm){comm.innerHTML=`<h3 data-v273="1">NARRAÇÃO AO VIVO</h3>`+(l.commentary||[]).slice(0,8).map(x=>`<p>${x}</p>`).join("")+`<h3 data-v273="1">RÁDIO</h3>`+(l.radio||[]).slice(0,5).map(x=>`<p>${x}</p>`).join("");}
    qa("#screenRace strong,#screenRace .stat-card strong,#screenRace .race-stat strong").forEach(el=>{const tx=(el.textContent||"").trim();if(/^\d+\s*\/\s*\d+$/.test(tx)||tx==="0 / 58")el.textContent=`${l.lap||0} / ${l.totalLaps||58}`;if(["Pré-corrida","Em andamento","Finalizada"].includes(tx))el.textContent=l.finished?"Finalizada":"Em andamento";});
  }
  function patch(){
    const oldStart=window.startLiveRace;if(typeof oldStart==="function"&&!oldStart.__v273){window.startLiveRace=function(){const r=oldStart.apply(this,arguments);setTimeout(()=>{repair();race()},120);return r};window.startLiveRace.__v273=true}
    const oldRender=window.renderLiveRace;if(typeof oldRender==="function"&&!oldRender.__v273){window.renderLiveRace=function(){const r=oldRender.apply(this,arguments);race();return r};window.renderLiveRace.__v273=true}
  }
  function run(){repair();agenda();patch();race()}
  document.addEventListener("DOMContentLoaded",()=>setTimeout(run,500));
  window.addEventListener("load",()=>setTimeout(run,900));
  document.addEventListener("click",ev=>{if(ev.target.closest("[data-goto]"))setTimeout(run,180);if((ev.target.textContent||"").toLowerCase().includes("iniciar corrida"))setTimeout(run,250)});
  setInterval(()=>{if(S().liveRace)race()},1500);
})();
