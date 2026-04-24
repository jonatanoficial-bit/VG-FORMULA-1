const STORAGE_KEY = 'vg_formula1_manager_career_v017';

const state = {
  team: teams[0],
  driver: drivers[teams[0].drivers[0]],
  gp: calendar[0],
  lap: 1,
  pace: 1,
  tire: 100,
  fuel: 100,
  money: teams[0].budget,
  reputation: teams[0].reputation,
  completedRounds: 0,
  results: [],
  raceRows: [],
  raceLog: []
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function path(base, file){ return ASSETS[base] + file; }
function byId(list, id){ return list.find(item => item.id === id); }

function imgFallback(img){
  if(!img) return;
  img.onerror = () => {
    img.classList.add('missing');
    img.removeAttribute('src');
  };
}

function show(screen){
  $$('.screen').forEach(s => s.classList.remove('active'));
  const el = $('#screen-' + screen);
  if(el){
    el.classList.add('active');
    $('#miniRoute').textContent = el.dataset.screen || screen.toUpperCase();
  }
  if(screen === 'results' || screen === 'podium') renderResults();
  window.scrollTo(0,0);
  refresh();
}

function serializeCareer(){
  return {
    teamId: state.team.id,
    driverName: state.driver.name,
    gpRound: state.gp.round,
    lap: state.lap,
    pace: state.pace,
    tire: state.tire,
    fuel: state.fuel,
    money: state.money,
    reputation: state.reputation,
    completedRounds: state.completedRounds,
    results: state.results
  };
}

function saveCareer(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeCareer()));
  flashLog('Carreira salva localmente.');
}

function loadCareer(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return false;
    const save = JSON.parse(raw);
    const team = byId(teams, save.teamId) || teams[0];
    const driver = Object.values(drivers).find(d => d.name === save.driverName) || drivers[team.drivers[0]];
    state.team = team;
    state.driver = driver;
    state.gp = calendar.find(g => g.round === save.gpRound) || calendar[0];
    state.lap = save.lap || 1;
    state.pace = save.pace ?? 1;
    state.tire = save.tire ?? 100;
    state.fuel = save.fuel ?? 100;
    state.money = save.money ?? team.budget;
    state.reputation = save.reputation ?? team.reputation;
    state.completedRounds = save.completedRounds || 0;
    state.results = save.results || [];
    return true;
  }catch(err){
    console.warn('Save corrompido:', err);
    return false;
  }
}

function resetCareer(){
  localStorage.removeItem(STORAGE_KEY);
  state.team = teams[0];
  state.driver = drivers[teams[0].drivers[0]];
  state.gp = calendar[0];
  state.lap = 1;
  state.pace = 1;
  state.tire = 100;
  state.fuel = 100;
  state.money = teams[0].budget;
  state.reputation = teams[0].reputation;
  state.completedRounds = 0;
  state.results = [];
  state.raceRows = [];
  state.raceLog = [];
  renderDrivers();
  renderCalendar();
  refresh();
  flashLog('Carreira reiniciada.');
  show('splash');
}

function refresh(){
  $('#miniBuild').textContent = `${BUILD.version} · ${BUILD.date} · ${BUILD.time}`;
  $('#footerBuild').textContent = `Build ${BUILD.version} · ${BUILD.date} · ${BUILD.time} · ${BUILD.label}`;
  updateHub();
  updateRace();
}

function renderTeams(){
  const grid = $('#teamGrid');
  grid.innerHTML = '';
  teams.forEach(team => {
    const card = document.createElement('button');
    card.className = 'team-card';
    card.style.setProperty('--team', team.color);
    card.innerHTML = `
      <img src="${path('teamCards', team.card)}" alt="${team.name}" />
      <div class="team-strip">
        <img src="${path('teamLogos', team.logo)}" alt="" />
        <div>
          <strong>${team.name}</strong>
          <small>R$ ${team.budget} mi · Rep ${team.reputation}</small>
          <small>${team.objective}</small>
        </div>
      </div>`;
    card.onclick = () => {
      state.team = team;
      state.driver = drivers[team.drivers[0]];
      state.money = team.budget;
      state.reputation = team.reputation;
      state.completedRounds = 0;
      state.results = [];
      state.lap = 1;
      state.tire = 100;
      state.fuel = 100;
      renderDrivers(team);
      saveCareer();
      show('drivers');
    };
    grid.appendChild(card);
    card.querySelectorAll('img').forEach(imgFallback);
  });
}

function renderDrivers(team = state.team){
  $('#driverTeamLabel').textContent = team.name;
  const grid = $('#driverGrid');
  grid.innerHTML = '';
  team.drivers.forEach(id => {
    const d = drivers[id];
    const card = document.createElement('button');
    card.className = 'driver-card';
    card.style.setProperty('--team', team.color);
    card.innerHTML = `
      <img src="${path('drivers', d.img)}" alt="${d.name}" />
      <div class="driver-info">
        <span>#${d.num}</span>
        <strong>${d.name}</strong>
        <small>${team.name}</small>
        <small>Ritmo ${d.rating} · Consist. ${d.consistency}</small>
      </div>`;
    card.onclick = () => {
      state.driver = d;
      saveCareer();
      show('hub');
    };
    grid.appendChild(card);
    imgFallback(card.querySelector('img'));
  });
}

function updateHub(){
  $('#hubTitle').textContent = `${state.team.name} Career`;
  $('#hubTeamName').textContent = state.team.name;
  $('#hubDriverName').textContent = `${state.driver.name} · #${state.driver.num}`;
  $('#hubTeamLogo').src = path('teamLogos', state.team.logo);
  $('#hubBudget').textContent = `R$ ${Math.max(0, state.money).toFixed(1)} mi`;
  $('#hubReputation').textContent = `${Math.round(state.reputation)}/100`;
  $('#hubObjective').textContent = state.team.objective;
  $('#hubRound').textContent = `R${String(state.gp.round).padStart(2,'0')}`;
}

function renderCalendar(){
  const grid = $('#calendarGrid');
  grid.innerHTML = '';
  calendar.forEach(gp => {
    const done = gp.round <= state.completedRounds;
    const card = document.createElement('button');
    card.className = 'gp-card' + (done ? ' done' : '') + (gp.round === state.gp.round ? ' current' : '');
    card.innerHTML = `
      <img class="gp-flag" src="${path('flags', gp.flag)}" alt="" />
      <img class="gp-track" src="${path('tracks', gp.track)}" alt="" />
      <div>
        <span>R${String(gp.round).padStart(2,'0')}</span>
        <strong>${gp.gp}</strong>
        <small>${gp.laps} voltas · ${gp.night ? 'noturna' : 'diurna'} · dificuldade ${gp.difficulty}</small>
        <small>${done ? 'Concluída' : gp.round === state.gp.round ? 'Próxima etapa' : 'Bloqueada por progressão'}</small>
      </div>`;
    card.onclick = () => {
      state.gp = gp;
      state.lap = 1;
      resetRaceStats();
      saveCareer();
      show('race');
    };
    grid.appendChild(card);
    card.querySelectorAll('img').forEach(imgFallback);
  });
}

function resetRaceStats(){
  state.pace = 1;
  state.tire = 100;
  state.fuel = 100;
  state.raceRows = [];
  state.raceLog = [`Box: ${state.driver.name} pronto para o ${state.gp.gp}.`];
}

function driverTeam(driverName){
  return teams.find(t => t.drivers.some(id => drivers[id].name === driverName)) || state.team;
}

function createRaceRows(){
  const rows = teams.flatMap(t => t.drivers.map(id => {
    const d = drivers[id];
    const isPlayer = d.name === state.driver.name;
    const power = (d.rating * .55) + (d.consistency * .18) + (t.car.pace * .22) + (t.car.reliability * .05);
    const noise = Math.sin((d.num + state.gp.round) * 2.17) * 2.6;
    return {
      name: d.name,
      short: d.name.split(' ').slice(-1)[0],
      team: t.name,
      color: t.color,
      img: d.img,
      isPlayer,
      base: power + noise,
      gap: 0,
      lastLap: 0,
      tire: isPlayer ? state.tire : 100 - ((state.lap + d.num) % 22),
      pit: false
    };
  }));
  rows.sort((a,b) => b.base - a.base);
  rows.forEach((r,i) => r.gap = Math.max(0, i * 1.25 + (state.lap * .11)));
  return rows;
}

function simulateOneLap(){
  if(state.lap >= state.gp.laps){
    finishRace();
    return;
  }
  const d = state.driver;
  const car = state.team.car;
  const paceImpact = [0.9, 1.0, 1.12, 1.22][state.pace] || 1;
  const tireWear = (1.7 + state.gp.difficulty/80) * paceImpact * (100 - d.tire + 55) / 100;
  const fuelUse = (1.45 + state.pace * .35) * (state.gp.difficulty / 82);
  state.tire = Math.max(0, state.tire - tireWear);
  state.fuel = Math.max(0, state.fuel - fuelUse);

  const risk = Math.max(0, (state.pace * 4) + (state.gp.difficulty - car.reliability)/4 + (35 - state.tire)/9);
  const eventRoll = (Math.sin((state.lap + d.num + state.gp.round) * 3.91) + 1) * 50;
  if(eventRoll < risk){
    const loss = (risk / 12).toFixed(1);
    state.raceLog.unshift(`Volta ${state.lap}: erro pequeno, perda de ${loss}s.`);
    state.reputation = Math.max(0, state.reputation - .2);
  } else if(state.pace >= 2 && state.tire > 45){
    state.raceLog.unshift(`Volta ${state.lap}: ritmo forte, chance de undercut melhorou.`);
  } else if(state.pace === 0){
    state.raceLog.unshift(`Volta ${state.lap}: piloto conservando pneus.`);
  }

  state.lap += 1;
  const playerPerformance = d.rating + car.pace + (state.tire/4) + (state.pace*3) - (state.gp.difficulty/8);
  state.raceRows = createRaceRows().map(row => {
    if(row.isPlayer) row.base = playerPerformance / 2.15;
    return row;
  }).sort((a,b)=> b.base-a.base).map((r,i)=> ({...r, gap: Math.max(0, i*1.18 + (r.isPlayer ? 0 : (state.lap % 7)*.19))}));

  saveCareer();
  updateRace();
}

function finishRace(){
  const rows = (state.raceRows.length ? state.raceRows : createRaceRows());
  const playerIndex = rows.findIndex(r => r.isPlayer);
  const pos = playerIndex < 0 ? 10 : playerIndex + 1;
  const prize = Math.max(2, 18 - pos) * 0.75;
  const repGain = Math.max(-3, 8 - pos);
  state.money += prize;
  state.reputation = Math.min(100, Math.max(0, state.reputation + repGain));
  state.completedRounds = Math.max(state.completedRounds, state.gp.round);
  state.results.unshift({ gp: state.gp.gp, pos, money: prize, repGain, driver: state.driver.name });
  const next = calendar.find(g => g.round === state.gp.round + 1);
  if(next) state.gp = next;
  saveCareer();
  renderCalendar();
  renderResults();
  show('results');
}

function pitStop(){
  state.tire = 100;
  state.money = Math.max(0, state.money - 0.35);
  state.raceLog.unshift(`Volta ${state.lap}: pit stop executado. Pneus novos.`);
  state.lap = Math.min(state.gp.laps, state.lap + 1);
  saveCareer();
  updateRace();
}

function updateRace(){
  const gp = state.gp;
  $('#raceBg').src = path('backgrounds', gp.night ? 'race_night.png' : 'race_day.png');
  $('#raceFlag').src = path('flags', gp.flag);
  $('#raceTrack').src = path('tracks', gp.track);
  $('#raceRound').textContent = `R${String(gp.round).padStart(2,'0')}`;
  $('#raceName').textContent = gp.gp;
  $('#raceStrategy').textContent = ['Conservador','Normal','Agressivo','Ataque total'][state.pace] || 'Normal';
  $('#lapCounter').textContent = `${state.lap}/${gp.laps}`;
  $('#bestLap').textContent = `1:${String(26 + Math.floor(gp.difficulty/8)).padStart(2,'0')}.${String(842 - Math.min(gp.round*7, 600)).padStart(3,'0')}`;
  $('#trackTemp').textContent = `${gp.night ? 25 : 34}°C`;
  $('#tireLife').textContent = `${Math.round(state.tire)}%`;
  $('#fuelLife').textContent = `${Math.round(state.fuel)}%`;
  renderStandings();
  renderRaceLog();
}

function renderStandings(){
  const rows = state.raceRows.length ? state.raceRows : createRaceRows();
  $('#liveStandings').innerHTML = rows.slice(0,10).map((d,i)=>`
    <li class="${d.isPlayer?'selected':''}">
      <b>P${i+1}</b>
      <span>${d.short}</span>
      <em>${i===0 ? 'LÍDER' : '+' + d.gap.toFixed(1) + 's'}</em>
    </li>`).join('');
}

function renderRaceLog(){
  const log = $('#raceLog');
  if(!log) return;
  log.innerHTML = state.raceLog.slice(0,3).map(item => `<p>${item}</p>`).join('');
}

function flashLog(message){
  state.raceLog.unshift(message);
  renderRaceLog();
}

function renderResults(){
  const rows = state.raceRows.length ? state.raceRows : createRaceRows();
  const ordered = rows.slice().sort((a,b)=> a.gap-b.gap);
  $('#resultList').innerHTML = `
    <div class="result-title"><span>${state.gp.gp}</span><strong>Resultado</strong></div>` +
    ordered.slice(0,10).map((d,i)=>`
      <div class="result-row ${d.isPlayer?'selected':''}">
        <b>${i+1}</b><span>${d.name}</span><em>${d.team}</em><strong>${i===0 ? 'Vencedor' : '+' + (i*3.8).toFixed(3)}</strong>
      </div>`).join('');
  $('#podiumDrivers').innerHTML = ordered.slice(0,3).map((d,i)=>`
    <article>
      <img src="${path('drivers', d.img)}" alt="${d.name}" />
      <b>P${i+1}</b><strong>${d.name}</strong><span>${d.team}</span>
    </article>`).join('');
  $('#podiumDrivers').querySelectorAll('img').forEach(imgFallback);
}

function bind(){
  document.body.addEventListener('click', e => {
    const go = e.target.closest('[data-go]');
    if(go){
      show(go.dataset.go);
    }
  });
  $('#paceUp').onclick = () => { state.pace = Math.min(3, state.pace + 1); simulateOneLap(); };
  $('#paceDown').onclick = () => { state.pace = Math.max(0, state.pace - 1); simulateOneLap(); };
  $('#pitBtn').onclick = () => pitStop();
  $('#finishRaceBtn').onclick = () => finishRace();
  $('#saveCareerBtn').onclick = () => saveCareer();
  $('#resetCareerBtn').onclick = () => resetCareer();
  $$('.screen-bg, img').forEach(imgFallback);
}

loadCareer();
renderTeams();
renderDrivers();
renderCalendar();
resetRaceStats();
bind();
refresh();
