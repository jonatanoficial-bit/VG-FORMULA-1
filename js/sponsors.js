
// Sponsors system v0.21.0
window.SPONSORS = [
 {name:"Vale Energy", bonus:"Podio", value:2500000},
 {name:"SpeedTech", bonus:"Top 10", value:1200000},
 {name:"PetroMax", bonus:"Volta rapida", value:1800000}
];

window.activeSponsors = [];

function toggleSponsor(name){
 if(activeSponsors.includes(name)){
   activeSponsors = activeSponsors.filter(s=>s!==name);
 } else {
   if(activeSponsors.length>=2){
     alert("Máximo 2 patrocinadores");
     return;
   }
   activeSponsors.push(name);
 }
 localStorage.setItem("sponsors", JSON.stringify(activeSponsors));
}
