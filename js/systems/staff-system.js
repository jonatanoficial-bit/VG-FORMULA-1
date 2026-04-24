
const STAFF_STORAGE_KEY = "f1_ve_staff_v1";

const DEFAULT_STAFF_IDS = ["stf_aero_01", "stf_strat_01", "stf_power_01"];

async function loadStaffRoster() {
  const res = await fetch("data/staff/staff.json");
  return await res.json();
}

function getStaffState() {
  const raw = localStorage.getItem(STAFF_STORAGE_KEY);
  if (!raw) {
    const initial = { hired: DEFAULT_STAFF_IDS, history: [] };
    localStorage.setItem(STAFF_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try { return JSON.parse(raw); }
  catch {
    const initial = { hired: DEFAULT_STAFF_IDS, history: [] };
    localStorage.setItem(STAFF_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
}

function saveStaffState(state) {
  localStorage.setItem(STAFF_STORAGE_KEY, JSON.stringify(state));
}

function annualStaffCost(roster, hiredIds) {
  return roster.filter(s => hiredIds.includes(s.id)).reduce((sum, s) => sum + s.salary, 0);
}

function calculateTeamStaffBoost(roster, hiredIds) {
  const hired = roster.filter(s => hiredIds.includes(s.id));
  const totals = { aero:0, strategy:0, power:0, reliability:0, pitStop:0, marketing:0, finance:0, driverDev:0 };
  hired.forEach(s => {
    Object.entries(s.impact || {}).forEach(([key, val]) => {
      if (totals[key] === undefined) totals[key] = 0;
      totals[key] += val;
    });
  });
  return totals;
}

function canAffordStaff(save, staff) {
  return save.money >= (staff.signingBonus || 0);
}

function hireStaff(staffId, roster) {
  const state = getStaffState();
  const staff = roster.find(s => s.id === staffId);
  if (!staff || state.hired.includes(staffId)) return { ok:false, message:"Staff já contratado ou inválido." };
  if (!canAffordStaff(save, staff)) return { ok:false, message:"Caixa insuficiente para bônus de assinatura." };
  save.money -= staff.signingBonus || 0;
  state.hired.push(staffId);
  state.history.unshift({
    type:"hire",
    staffId,
    name:staff.name,
    cost:staff.signingBonus || 0,
    date:new Date().toISOString()
  });
  saveGame(save);
  saveStaffState(state);
  return { ok:true, message:`${staff.name} contratado(a).` };
}

function fireStaff(staffId) {
  const state = getStaffState();
  if (DEFAULT_STAFF_IDS.includes(staffId)) return { ok:false, message:"Funcionário base protegido nesta fase." };
  state.hired = state.hired.filter(id => id !== staffId);
  state.history.unshift({ type:"fire", staffId, date:new Date().toISOString() });
  saveStaffState(state);
  return { ok:true, message:"Funcionário removido da equipe." };
}
