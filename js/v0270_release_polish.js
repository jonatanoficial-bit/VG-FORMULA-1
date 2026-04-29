
(function(){
  function $(s){return document.querySelector(s)}
  function S(){return window.STATE||{}}
  function save(){if(typeof window.saveGameManualV150==="function")window.saveGameManualV150();else try{localStorage.setItem("f1_ve_visual_state",JSON.stringify(S()))}catch(e){}}
  const modules=[
    ["Capa inicial","Continuar carreira / novo jogo"],["Criação de carreira","Nome, país, avatar e equipe"],["Lobby premium","Navegação central"],["Corrida ao vivo","Grid, narração, rádio e pit"],["Classificação","Q1/Q2/Q3"],["Pódio","Resultado e troféus"],["Oficina","Peças e projetos"],["Staff","Mercado e impacto"],["Patrocínio","Contratos e metas"],["Finanças","Caixa e receitas"],["Mercado de pilotos","Contratos e troca"],["Temporada","Histórico e troféus"],["Diagnóstico","Export/import save"]
  ];
  function ensure(){const st=S();st.releaseVersion="v0.27.0";st.lastStableBuild="v0.27.0";st.testChecklist=st.testChecklist||{};modules.forEach((m,i)=>{if(st.testChecklist[i]===undefined)st.testChecklist[i]=false})}
  function render(){
    ensure();
    const box=$("#releaseNotesPanel");if(!box)return;
    const st=S(),done=Object.values(st.testChecklist).filter(Boolean).length;
    box.innerHTML=`<div class="release-card main"><b>F1 MANAGER - VALE EDITION</b><strong>v0.27.0</strong><span>Build de teste completo. ${done}/${modules.length} áreas marcadas como testadas.</span></div><h3>Checklist de teste</h3><div class="release-checklist">${modules.map((m,i)=>`<button class="${st.testChecklist[i]?'done':''}" data-test-item="${i}"><b>${st.testChecklist[i]?'✓':'○'}</b><span>${m[0]}<small>${m[1]}</small></span></button>`).join("")}</div><h3>Observações importantes</h3><div class="release-card"><p>Esta versão preserva os sistemas anteriores e adiciona organização, checklist e compatibilidade. Ideal para testar tudo da v0.20 em diante.</p></div>`;
    box.querySelectorAll("[data-test-item]").forEach(btn=>btn.onclick=()=>{st.testChecklist[btn.dataset.testItem]=!st.testChecklist[btn.dataset.testItem];save();render()});
  }
  function patchNav(){document.querySelectorAll("[data-goto]").forEach(btn=>{const id=btn.dataset.goto;if(id&&!document.getElementById(id)){btn.classList.add("disabled");btn.title="Tela ainda não encontrada nesta build"}})}
  document.addEventListener("DOMContentLoaded",()=>setTimeout(()=>{ensure();render();patchNav();save()},900));
  document.addEventListener("click",ev=>{if(ev.target.closest("[data-goto]"))setTimeout(()=>{render();patchNav()},180)});
})();
