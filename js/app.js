
let save = loadSave();
let staffRoster = [];
let staffState = null;
let driverRoster = [];
let driverState = null;


function rowTemplate(row) {
  return `<div class="row-card"><div><strong>${row[0]}</strong><small>${row[1]}</small></div><span>${row[2]}</span></div>`;
}

function staffCard(staff, hired) {
  const isHired = hired.includes(staff.id);
  const impactText = Object.entries(staff.impact || {}).map(([k,v]) => `${k}+${v}`).join(" • ");
  return `
    <article class="staff-card ${isHired ? "hired" : ""}">
      <div class="staff-head">
        <div>
          <div class="staff-role">${staff.role}</div>
          <h3>${staff.name}</h3>
          <p>${staff.department} • ${staff.specialty}</p>
        </div>
        <div class="level-badge">${staff.level}</div>
      </div>
      <div class="staff-impact">${impactText}</div>
      <div class="staff-money">
        <span>Salário: ${moneyBR(staff.salary)}/ano</span>
        <span>Bônus: ${moneyBR(staff.signingBonus || 0)}</span>
      </div>
      <button class="staff-action" data-staff-action="${isHired ? "fire" : "hire"}" data-staff-id="${staff.id}">
        ${isHired ? "Na equipe" : "Contratar"}
      </button>
    </article>
  `;
}

function renderStaffScreen() {
  if (!staffRoster.length || !staffState) return;
  const hired = staffState.hired;
  const hiredStaff = staffRoster.filter(s => hired.includes(s.id));
  const marketStaff = staffRoster.filter(s => !hired.includes(s.id));
  const boosts = calculateTeamStaffBoost(staffRoster, hired);
  const cost = annualStaffCost(staffRoster, hired);

  const hiredEl = document.querySelector("[data-hired-staff]");
  const marketEl = document.querySelector("[data-market-staff]");
  const boostEl = document.querySelector("[data-staff-boosts]");
  const costEl = document.querySelector("[data-staff-cost]");

  if (hiredEl) hiredEl.innerHTML = hiredStaff.map(s => staffCard(s, hired)).join("");
  if (marketEl) marketEl.innerHTML = marketStaff.map(s => staffCard(s, hired)).join("");
  if (boostEl) {
    boostEl.innerHTML = Object.entries(boosts)
      .filter(([,v]) => v > 0)
      .map(([k,v]) => `<div class="kpi"><strong>+${v}</strong><span>${k}</span></div>`)
      .join("");
  }
  if (costEl) costEl.textContent = moneyBR(cost);

  document.querySelectorAll("[data-staff-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.staffId;
      const action = btn.dataset.staffAction;
      const result = action === "hire" ? hireStaff(id, staffRoster) : fireStaff(id);
      showToast(result.message);
      staffState = getStaffState();
      render();
    });
  });
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}


function driverCard(driver, signedIds, lineupIds) {
  const isSigned = signedIds.includes(driver.id);
  const lineupIndex = lineupIds.indexOf(driver.id);
  const attr = driver.attributes || {};
  return `
    <article class="driver-card ${isSigned ? "signed" : ""}">
      <div class="driver-top">
        <div class="driver-photo">${driver.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</div>
        <div class="driver-info">
          <div class="staff-role">${driver.country} • ${driver.style}</div>
          <h3>${driver.name}</h3>
          <p>${driver.age} anos • Overall ${driver.overall} • Forma ${driver.form}</p>
        </div>
        <div class="level-badge">${driver.overall}</div>
      </div>

      <div class="driver-bars">
        <div><span>Ritmo</span><b style="width:${attr.pace || 0}%"></b></div>
        <div><span>Corrida</span><b style="width:${attr.racecraft || 0}%"></b></div>
        <div><span>Classificação</span><b style="width:${attr.qualifying || 0}%"></b></div>
        <div><span>Pneus</span><b style="width:${attr.tyres || 0}%"></b></div>
      </div>

      <div class="staff-impact">${(driver.traits || []).join(" • ")}</div>
      <div class="staff-money">
        <span>Salário: ${moneyBR(driver.salary)}/ano</span>
        <span>Bônus: ${moneyBR(driver.signingBonus || 0)} • Valor: ${moneyBR(driver.marketValue || 0)}</span>
      </div>

      <div class="driver-actions">
        ${isSigned ? `<button data-driver-lineup="0" data-driver-id="${driver.id}">Carro 1</button><button data-driver-lineup="1" data-driver-id="${driver.id}">Carro 2</button>` : `<button data-driver-sign="${driver.id}">Contratar</button>`}
        ${isSigned && lineupIndex < 0 ? `<button class="secondary" data-driver-release="${driver.id}">Liberar</button>` : ""}
      </div>
      ${lineupIndex >= 0 ? `<div class="driver-tag">Titular • Carro ${lineupIndex + 1}</div>` : ""}
    </article>
  `;
}

function renderDriversScreen() {
  if (!driverRoster.length || !driverState) return;
  const signed = driverState.signed || [];
  const lineup = driverState.lineup || [];
  const lineupDrivers = driverRoster.filter(d => lineup.includes(d.id)).sort((a,b) => lineup.indexOf(a.id) - lineup.indexOf(b.id));
  const signedDrivers = driverRoster.filter(d => signed.includes(d.id) && !lineup.includes(d.id));
  const marketDrivers = driverRoster.filter(d => !signed.includes(d.id));

  const lineupEl = document.querySelector("[data-lineup-drivers]");
  const signedEl = document.querySelector("[data-signed-drivers]");
  const marketEl = document.querySelector("[data-market-drivers]");
  const scoreEl = document.querySelector("[data-driver-pair-score]");
  const costEl = document.querySelector("[data-driver-cost]");

  if (lineupEl) lineupEl.innerHTML = lineupDrivers.map(d => driverCard(d, signed, lineup)).join("");
  if (signedEl) signedEl.innerHTML = signedDrivers.length ? signedDrivers.map(d => driverCard(d, signed, lineup)).join("") : `<div class="row-card"><div><strong>Nenhum reserva contratado</strong><small>Contrate pilotos no mercado para criar profundidade de elenco.</small></div><span>—</span></div>`;
  if (marketEl) marketEl.innerHTML = marketDrivers.map(d => driverCard(d, signed, lineup)).join("");
  if (scoreEl) scoreEl.textContent = calculateDriverPairScore(driverRoster, lineup);
  if (costEl) costEl.textContent = moneyBR(annualDriverCost(driverRoster, signed));

  document.querySelectorAll("[data-driver-sign]").forEach(btn => {
    btn.addEventListener("click", () => {
      const result = signDriver(btn.dataset.driverSign, driverRoster);
      showToast(result.message);
      driverState = getDriverState();
      render();
    });
  });
  document.querySelectorAll("[data-driver-lineup]").forEach(btn => {
    btn.addEventListener("click", () => {
      const result = promoteToLineup(btn.dataset.driverId, Number(btn.dataset.driverLineup));
      showToast(result.message);
      driverState = getDriverState();
      render();
    });
  });
  document.querySelectorAll("[data-driver-release]").forEach(btn => {
    btn.addEventListener("click", () => {
      const result = releaseDriver(btn.dataset.driverRelease);
      showToast(result.message);
      driverState = getDriverState();
      render();
    });
  });
}

function render() {
  document.querySelectorAll("[data-manager]").forEach(el => el.textContent = save.managerName);
  document.querySelectorAll("[data-career]").forEach(el => el.textContent = save.careerName);
  document.querySelectorAll("[data-team]").forEach(el => el.textContent = "Vale Racing");
  document.querySelectorAll("[data-season]").forEach(el => el.textContent = `Temporada ${save.season}`);
  document.querySelectorAll("[data-money]").forEach(el => el.textContent = moneyBR(save.money));
  document.querySelectorAll("[data-reputation]").forEach(el => el.textContent = `${save.reputation}/100`);
  const rep = document.querySelector(".rep-fill");
  if (rep) rep.style.width = `${save.reputation}%`;
  const build = document.querySelector("[data-build]");
  if (build) build.textContent = `Build ${BUILD.version} - ${BUILD.date} - ${BUILD.time}`;

  renderDriversScreen();
  renderStaffScreen();
}

document.addEventListener("DOMContentLoaded", async () => {
  bindNavigation();
  staffRoster = await loadStaffRoster();
  staffState = getStaffState();
  driverRoster = await loadDriverRoster();
  driverState = getDriverState();
  render();
});
