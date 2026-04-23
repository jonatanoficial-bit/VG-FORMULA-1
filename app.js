const build = { version: 'v0.1.5', date: '2026-04-23', time: '20:45' };

const assetPaths = {
  root: 'VG-FORMULA-1-main/',
  backgrounds: 'assets/backgrounds/',
  buttons: 'assets/buttons/',
  drivers: 'assets/drivers/',
  flags: 'assets/flags/',
  hud: 'assets/hud/',
  icons: 'assets/icons/',
  teamCards: 'assets/teams/cards/',
  teamLogos: 'assets/teams/logos/',
  tracks: 'assets/tracks/'
};

const teams = [
  { id: 'mercedes', name: 'Mercedes', card: 'mercedes.png', logo: 'mercedes.png', drivers: [
    { name: 'Andrea Antonelli', file: 'andrea_antonelli.png' },
    { name: 'George Russell', file: 'george_russell.png' }
  ]},
  { id: 'ferrari', name: 'Ferrari', card: 'ferrari.png', logo: 'ferrari.png', drivers: [
    { name: 'Lewis Hamilton', file: 'lewis_hamilton.png' },
    { name: 'Charles Leclerc', file: 'charles_leclerc.png' }
  ]},
  { id: 'mclaren', name: 'McLaren', card: 'mclaren.png', logo: 'mclaren.png', drivers: [
    { name: 'Lando Norris', file: 'lando_norris.png' },
    { name: 'Oscar Piastri', file: 'oscar_piastri.png' }
  ]},
  { id: 'red_bull', name: 'Red Bull', card: 'red_bull.png', logo: 'red_bull.png', drivers: [
    { name: 'Max Verstappen', file: 'max_verstappen.png' },
    { name: 'Isack Hadjar', file: 'isack_hadjar.png' }
  ]},
  { id: 'rb', name: 'Racing Bulls', card: 'rb.png', logo: 'rb.png', drivers: [
    { name: 'Liam Lawson', file: 'liam_lawson.png' },
    { name: 'Arvid Lindblad', file: 'arvid_lindblad.png' }
  ]},
  { id: 'audi', name: 'Audi F1 Team', card: 'audi.png', logo: 'audi.png', drivers: [
    { name: 'Nico Hulkenberg', file: 'nico_hulkenberg.png' },
    { name: 'Gabriel Bortoleto', file: 'gabriel_bortoleto.png' }
  ]},
  { id: 'williams', name: 'Williams', card: 'williams.png', logo: 'williams.png', drivers: [
    { name: 'Carlos Sainz Jr.', file: 'carlos_sainz_jr.png' },
    { name: 'Alex Albon', file: 'alex_albon.png' }
  ]},
  { id: 'alpine', name: 'Alpine', card: 'alpine.png', logo: 'alpine.png', drivers: [
    { name: 'Pierre Gasly', file: 'pierre_gasly.png' },
    { name: 'Franco Colapinto', file: 'franco_colapinto.png' }
  ]},
  { id: 'aston_martin', name: 'Aston Martin', card: 'aston_martin.png', logo: 'aston_martin.png', drivers: [
    { name: 'Fernando Alonso', file: 'fernando_alonso.png' },
    { name: 'Lance Stroll', file: 'lance_stroll.png' }
  ]},
  { id: 'haas', name: 'Haas', card: 'haas.png', logo: 'haas.png', drivers: [
    { name: 'Esteban Ocon', file: 'esteban_ocon.png' },
    { name: 'Oliver Bearman', file: 'oliver_bearman.png' }
  ]},
  { id: 'cadillac', name: 'Cadillac', card: 'cadillac.png', logo: 'cadillac.png', drivers: [
    { name: 'Sergio Perez', file: 'sergio_perez.png' },
    { name: 'Valtteri Bottas', file: 'valtteri_bottas.png' }
  ]}
];

let selectedTeam = null;
let selectedDriver = null;

const teamGrid = document.getElementById('teamGrid');
const driversWrap = document.getElementById('driversWrap');
const selectedTeamLabel = document.getElementById('selectedTeamLabel');
const selectedDriverLabel = document.getElementById('selectedDriverLabel');
const buildLabel = document.getElementById('buildLabel');
const resultHeadline = document.getElementById('resultHeadline');
const resultText = document.getElementById('resultText');
const resultTeam = document.getElementById('resultTeam');
const resultDriver = document.getElementById('resultDriver');
const resultLap = document.getElementById('resultLap');
const resultFuel = document.getElementById('resultFuel');

buildLabel.textContent = `${build.version} · ${build.date} · ${build.time}`;
document.getElementById('pathsContent').textContent = Object.entries(assetPaths)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n');

document.getElementById('openPaths').addEventListener('click', () => {
  document.getElementById('pathsDialog').showModal();
});
document.getElementById('closePaths').addEventListener('click', () => {
  document.getElementById('pathsDialog').close();
});
document.getElementById('startCareer').addEventListener('click', () => {
  document.querySelector('.flow-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('jumpRace').addEventListener('click', () => {
  document.querySelector('.race-screen').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
document.getElementById('simulateRace').addEventListener('click', simulateRace);

function makeAssetUrl(section, file) {
  return `${assetPaths[section]}${file}`;
}

function renderTeams() {
  teamGrid.innerHTML = '';
  teams.forEach((team) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'team-card';
    button.dataset.teamId = team.id;

    const cardBg = makeAssetUrl('teamCards', team.card);
    const logo = makeAssetUrl('teamLogos', team.logo);

    button.innerHTML = `
      <img src="${cardBg}" class="team-card-bg" alt="${team.name}" onerror="this.style.display='none'">
      <div class="team-card-overlay"></div>
      <div class="team-card-content">
        <img src="${logo}" class="team-logo" alt="Logo ${team.name}" onerror="this.style.display='none'">
        <strong>${team.name}</strong>
        <span>${team.drivers.map((d) => d.name).join(' · ')}</span>
      </div>
    `;

    button.addEventListener('click', () => selectTeam(team.id));
    teamGrid.appendChild(button);
  });
}

function selectTeam(teamId) {
  selectedTeam = teams.find((team) => team.id === teamId) || null;
  selectedDriver = null;
  selectedTeamLabel.textContent = selectedTeam ? selectedTeam.name : 'Nenhuma equipe selecionada';
  selectedDriverLabel.textContent = 'Nenhum piloto selecionado';

  document.querySelectorAll('.team-card').forEach((card) => {
    card.classList.toggle('is-active', card.dataset.teamId === teamId);
  });

  renderDrivers();
  updateRaceCard();
}

function renderDrivers() {
  if (!selectedTeam) {
    driversWrap.className = 'drivers-wrap empty-state';
    driversWrap.textContent = 'Selecione uma equipe para carregar os pilotos.';
    return;
  }

  driversWrap.className = 'drivers-wrap';
  driversWrap.innerHTML = '';

  selectedTeam.drivers.forEach((driver) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'driver-card';
    card.innerHTML = `
      <div class="driver-portrait-frame">
        <img src="${makeAssetUrl('drivers', driver.file)}" alt="${driver.name}" class="driver-portrait" onerror="this.closest('.driver-portrait-frame').classList.add('portrait-missing')">
      </div>
      <div class="driver-meta">
        <strong>${driver.name}</strong>
        <span>${selectedTeam.name}</span>
      </div>
    `;
    card.addEventListener('click', () => selectDriver(driver));
    driversWrap.appendChild(card);
  });
}

function selectDriver(driver) {
  selectedDriver = driver;
  selectedDriverLabel.textContent = driver.name;
  document.querySelectorAll('.driver-card').forEach((card) => {
    const name = card.querySelector('.driver-meta strong')?.textContent;
    card.classList.toggle('is-active', name === driver.name);
  });
  updateRaceCard();
  document.querySelector('.race-screen').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateRaceCard() {
  const raceTeamName = document.getElementById('raceTeamName');
  const raceDriverName = document.getElementById('raceDriverName');
  const raceDriverPortrait = document.getElementById('raceDriverPortrait');

  raceTeamName.textContent = selectedTeam ? selectedTeam.name : 'Equipe';
  raceDriverName.textContent = selectedDriver ? selectedDriver.name : 'Selecione um piloto';
  if (selectedDriver) {
    raceDriverPortrait.src = makeAssetUrl('drivers', selectedDriver.file);
    raceDriverPortrait.alt = selectedDriver.name;
    raceDriverPortrait.style.display = 'block';
  } else {
    raceDriverPortrait.removeAttribute('src');
    raceDriverPortrait.style.display = 'none';
  }

  resultTeam.textContent = selectedTeam ? selectedTeam.name : '--';
  resultDriver.textContent = selectedDriver ? selectedDriver.name : '--';
}

function simulateRace() {
  if (!selectedTeam || !selectedDriver) {
    resultHeadline.textContent = 'Seleção incompleta';
    resultText.textContent = 'Escolha equipe e piloto antes de simular a corrida.';
    return;
  }

  const lapSeconds = 87 + Math.random() * 6;
  const mins = Math.floor(lapSeconds / 60);
  const secs = (lapSeconds % 60).toFixed(3).padStart(6, '0');
  const formattedLap = `${mins}:${secs}`;
  const fuel = `${Math.max(18, Math.floor(40 - Math.random() * 12))}%`;
  const ers = `${Math.max(42, Math.floor(80 - Math.random() * 18))}%`;
  const tyres = `${['Médio','Duro','Macio'][Math.floor(Math.random()*3)]} · ${Math.max(55, Math.floor(82 - Math.random() * 20))}%`;
  const speed = `${Math.max(246, Math.floor(272 + Math.random() * 18))} km/h`;
  const pos = `P${Math.max(1, Math.floor(Math.random() * 10) + 1)}`;

  document.getElementById('lapTime').textContent = formattedLap;
  document.getElementById('raceFuel').textContent = fuel;
  document.getElementById('raceErs').textContent = ers;
  document.getElementById('raceTyres').textContent = tyres;
  document.getElementById('raceSpeed').textContent = speed;
  document.getElementById('racePosition').textContent = pos;
  document.getElementById('trackState').textContent = ['Quente','Estável','Emborrachada'][Math.floor(Math.random()*3)];
  document.getElementById('weatherText').textContent = ['Seco','Nublado','Vento leve'][Math.floor(Math.random()*3)];

  resultHeadline.textContent = `${selectedDriver.name} pronto para a largada`;
  resultText.textContent = `${selectedTeam.name} entrou no fluxo completo do jogo com HUD, piloto selecionado e corrida demo ativa.`;
  resultLap.textContent = formattedLap;
  resultFuel.textContent = fuel;
}

function setupAssetFallbacks() {
  document.querySelectorAll('.asset-check').forEach((img) => {
    img.addEventListener('error', () => {
      const mode = img.dataset.fallback;
      if (mode === 'hide') {
        img.style.display = 'none';
      }
      if (mode === 'hero-fallback') {
        document.querySelector('.hero-fallback')?.classList.add('show');
      }
      if (mode === 'race-fallback') {
        document.querySelector('.race-fallback')?.classList.add('show');
      }
    });
  });
  document.querySelectorAll('.portrait-asset').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
}

renderTeams();
renderDrivers();
updateRaceCard();
setupAssetFallbacks();
