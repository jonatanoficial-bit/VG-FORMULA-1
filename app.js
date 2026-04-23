const build = { version: 'v0.1.3', date: '2026-04-23', time: '20:10' };
const correctedGrid = {
  'Mercedes': ['Andrea Antonelli', 'George Russell'],
  'Ferrari': ['Lewis Hamilton', 'Charles Leclerc'],
  'McLaren': ['Lando Norris', 'Oscar Piastri'],
  'Red Bull': ['Max Verstappen', 'Isack Hadjar'],
  'Racing Bulls': ['Liam Lawson', 'Arvid Lindblad'],
  'Audi F1 Team': ['Nico Hulkenberg', 'Gabriel Bortoleto'],
  'Williams': ['Carlos Sainz Jr.', 'Alex Albon'],
  'Alpine': ['Pierre Gasly', 'Franco Colapinto'],
  'Aston Martin': ['Fernando Alonso', 'Lance Stroll'],
  'Haas': ['Esteban Ocon', 'Oliver Bearman'],
  'Cadillac': ['Sergio Perez', 'Valtteri Bottas']
};
const teamsEl = document.getElementById('teams');
Object.entries(correctedGrid).forEach(([team, drivers]) => {
  const card = document.createElement('article');
  card.className = 'team';
  card.innerHTML = `<h4>${team}</h4><p>${drivers.join(' · ')}</p>`;
  teamsEl.appendChild(card);
});
document.getElementById('buildLabel').textContent = `${build.version} · ${build.date} · ${build.time}`;
document.getElementById('footerBuild').textContent = `${build.version} · ${build.date} · ${build.time}`;
