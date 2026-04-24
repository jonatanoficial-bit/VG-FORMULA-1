
function moneyBR(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function setActiveScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(id)?.classList.add("active");
  document.querySelectorAll("[data-nav]").forEach(btn => btn.classList.toggle("active", btn.dataset.nav === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindNavigation() {
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => setActiveScreen(btn.dataset.nav));
  });
}
