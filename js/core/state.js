
const BUILD = {
  version: "v0.8.0",
  date: "2026-04-24",
  time: "20:58",
  progress: "44%"
};

const DEFAULT_SAVE = {
  managerName: "Jonatan Vale",
  careerName: "Vale Legacy",
  country: "Brasil",
  teamId: "vale_racing",
  reputation: 42,
  season: 1,
  money: 145000000,
  nextRace: "GP do Brasil",
  objective: "Pontuar em todos os GPs",
  drivers: ["Lucas Vale", "Nicolas Hart"],
  staff: ["Marina Costa", "Rafael Kim", "Otto Weber"],
  createdAt: new Date().toISOString()
};

function loadSave() {
  const raw = localStorage.getItem("f1_ve_save");
  if (!raw) {
    localStorage.setItem("f1_ve_save", JSON.stringify(DEFAULT_SAVE));
    return { ...DEFAULT_SAVE };
  }
  try { return { ...DEFAULT_SAVE, ...JSON.parse(raw) }; }
  catch {
    localStorage.setItem("f1_ve_save", JSON.stringify(DEFAULT_SAVE));
    return { ...DEFAULT_SAVE };
  }
}

function saveGame(data) {
  localStorage.setItem("f1_ve_save", JSON.stringify(data));
}
