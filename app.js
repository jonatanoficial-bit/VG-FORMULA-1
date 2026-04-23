const build = { version: 'v0.1.4', date: '2026-04-23', time: '21:55' };

const teams = [
  { key: 'mercedes', name: 'Mercedes', drivers: ['Andrea Antonelli', 'George Russell'] },
  { key: 'ferrari', name: 'Ferrari', drivers: ['Lewis Hamilton', 'Charles Leclerc'] },
  { key: 'mclaren', name: 'McLaren', drivers: ['Lando Norris', 'Oscar Piastri'] },
  { key: 'red_bull', name: 'Red Bull', drivers: ['Max Verstappen', 'Isack Hadjar'] },
  { key: 'rb', name: 'Racing Bulls', drivers: ['Liam Lawson', 'Arvid Lindblad'] },
  { key: 'audi', name: 'Audi F1 Team', drivers: ['Nico Hulkenberg', 'Gabriel Bortoleto'] },
  { key: 'williams', name: 'Williams', drivers: ['Carlos Sainz Jr.', 'Alex Albon'] },
  { key: 'alpine', name: 'Alpine', drivers: ['Pierre Gasly', 'Franco Colapinto'] },
  { key: 'aston_martin', name: 'Aston Martin', drivers: ['Fernando Alonso', 'Lance Stroll'] },
  { key: 'haas', name: 'Haas', drivers: ['Esteban Ocon', 'Oliver Bearman'] },
  { key: 'cadillac', name: 'Cadillac', drivers: ['Sergio Perez', 'Valtteri Bottas'] }
];

const driverImageMap = {
  'Andrea Antonelli': 'assets/drivers/andrea_antonelli.png',
  'George Russell': 'assets/drivers/george_russell.png',
  'Lewis Hamilton': 'assets/drivers/lewis_hamilton.png',
  'Charles Leclerc': 'assets/drivers/charles_leclerc.png',
  'Lando Norris': 'assets/drivers/lando_norris.png',
  'Oscar Piastri': 'assets/drivers/oscar_piastri.png',
  'Max Verstappen': 'assets/drivers/max_verstappen.png',
  'Isack Hadjar': 'assets/drivers/isack_hadjar.png',
  'Liam Lawson': 'assets/drivers/liam_lawson.png',
  'Arvid Lindblad': 'assets/drivers/arvid_lindblad.png',
  'Nico Hulkenberg': 'assets/drivers/nico_hulkenberg.png',
  'Gabriel Bortoleto': 'assets/drivers/gabriel_bortoleto.png',
  'Carlos Sainz Jr.': 'assets/drivers/carlos_sainz_jr.png',
  'Alex Albon': 'assets/drivers/alex_albon.png',
  'Pierre Gasly': 'assets/drivers/pierre_gasly.png',
  'Franco Colapinto': 'assets/drivers/franco_colapinto.png',
  'Fernando Alonso': 'assets/drivers/fernando_alonso.png',
  'Lance Stroll': 'assets/drivers/lance_stroll.png',
  'Esteban Ocon': 'assets/drivers/esteban_ocon.png',
  'Oliver Bearman': 'assets/drivers/oliver_bearman.png',
  'Sergio Perez': 'assets/drivers/sergio_perez.png',
  'Valtteri Bottas': 'assets/drivers/valtteri_bottas.png',
};

const teamsEl = document.getElementById('teams');
const driversEl = document.getElementById('drivers');
const currentTeamEl = document.getElementById('currentTeam');

document.getElementById('buildLabel').textContent = `${build.version} · ${build.date} · ${build.time}`;
document.getElementById('footerBuild').textContent = `${build.version} · ${build.date} · ${build.time}`;

document.getElementById('assetNote').textContent = 'Manifesto oficial criado: consulte ASSET_PATHS.md antes de cada upgrade.';

document.getElementById('roadmapVersion').textContent = build.version;

function safeCardImage(teamKey) {
  return `assets/teams/cards/${teamKey}.png`;
}

function safeLogoImage(teamKey) {
  return `assets/teams/cards/logos/${teamKey}.png`;
}

function renderTeams() {
  teamsEl.innerHTML = '';
  teams.forEach((team, index) => {
    const btn = document.createElement('button');
    btn.className = 'team-card';
    btn.innerHTML = `
      <div class="team-thumb">
        <img src="${safeCardImage(team.key)}" alt="${team.name}" onerror="this.style.display='none'; this.parentNode.classList.add('fallback')">
      </div>
      <div class="team-meta">
        <img class="team-logo" src="${safeLogoImage(team.key)}" alt="Logo ${team.name}" onerror="this.style.display='none'">
        <h3>${team.name}</h3>
        <p>${team.drivers.join(' · ')}</p>
      </div>`;
    btn.addEventListener('click', () => renderDrivers(team));
    teamsEl.appendChild(btn);
    if(index === 0) renderDrivers(team);
  });
}

function renderDrivers(team) {
  currentTeamEl.textContent = team.name;
  driversEl.innerHTML = '';
  team.drivers.forEach((driver) => {
    const article = document.createElement('article');
    article.className = 'driver-card';
    article.innerHTML = `
      <div class="driver-portrait">
        <img src="${driverImageMap[driver] || ''}" alt="${driver}" onerror="this.parentNode.classList.add('missing')">
      </div>
      <div class="driver-name">${driver}</div>`;
    driversEl.appendChild(article);
  });
}

renderTeams();
