
const DRIVER_STORAGE_KEY = "f1_ve_drivers_v1";
const DEFAULT_DRIVER_IDS = ["drv_lucas_vale", "drv_nicolas_hart"];

async function loadDriverRoster() {
  const res = await fetch("data/drivers/drivers.json");
  return await res.json();
}

function getDriverState() {
  const raw = localStorage.getItem(DRIVER_STORAGE_KEY);
  if (!raw) {
    const initial = { signed: DEFAULT_DRIVER_IDS, lineup: DEFAULT_DRIVER_IDS, academy: ["drv_hugo_almeida"], history: [] };
    localStorage.setItem(DRIVER_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try { return JSON.parse(raw); }
  catch {
    const initial = { signed: DEFAULT_DRIVER_IDS, lineup: DEFAULT_DRIVER_IDS, academy: ["drv_hugo_almeida"], history: [] };
    localStorage.setItem(DRIVER_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
}

function saveDriverState(state) {
  localStorage.setItem(DRIVER_STORAGE_KEY, JSON.stringify(state));
}

function calculateDriverPairScore(roster, lineup) {
  const drivers = roster.filter(d => lineup.includes(d.id));
  if (!drivers.length) return 0;
  const avg = drivers.reduce((sum, d) => sum + d.overall, 0) / drivers.length;
  const morale = drivers.reduce((sum, d) => sum + d.morale, 0) / drivers.length;
  const form = drivers.reduce((sum, d) => sum + d.form, 0) / drivers.length;
  return Math.round((avg * .62) + (morale * .18) + (form * .20));
}

function annualDriverCost(roster, signedIds) {
  return roster.filter(d => signedIds.includes(d.id)).reduce((sum, d) => sum + d.salary, 0);
}

function signDriver(driverId, roster) {
  const state = getDriverState();
  const driver = roster.find(d => d.id === driverId);
  if (!driver || state.signed.includes(driverId)) return { ok:false, message:"Piloto já contratado ou inválido." };
  if (save.money < (driver.signingBonus || 0)) return { ok:false, message:"Caixa insuficiente para bônus de assinatura." };
  save.money -= driver.signingBonus || 0;
  state.signed.push(driverId);
  state.history.unshift({ type:"sign", driverId, name:driver.name, cost:driver.signingBonus || 0, date:new Date().toISOString() });
  saveGame(save);
  saveDriverState(state);
  return { ok:true, message:`${driver.name} contratado.` };
}

function promoteToLineup(driverId, slot) {
  const state = getDriverState();
  if (!state.signed.includes(driverId)) return { ok:false, message:"Contrate o piloto antes de escalar." };
  const safeSlot = slot === 1 ? 1 : 0;
  const next = [...state.lineup];
  next[safeSlot] = driverId;
  if (next[0] === next[1]) return { ok:false, message:"O mesmo piloto não pode ocupar os dois carros." };
  state.lineup = next;
  state.history.unshift({ type:"lineup", driverId, slot:safeSlot+1, date:new Date().toISOString() });
  saveDriverState(state);
  return { ok:true, message:"Escalação atualizada." };
}

function releaseDriver(driverId) {
  const state = getDriverState();
  if (DEFAULT_DRIVER_IDS.includes(driverId)) return { ok:false, message:"Piloto base protegido nesta fase." };
  if (state.lineup.includes(driverId)) return { ok:false, message:"Remova o piloto da dupla titular antes de liberar." };
  state.signed = state.signed.filter(id => id !== driverId);
  state.history.unshift({ type:"release", driverId, date:new Date().toISOString() });
  saveDriverState(state);
  return { ok:true, message:"Piloto liberado." };
}
