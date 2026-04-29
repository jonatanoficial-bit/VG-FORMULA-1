
// Staff impact v0.21.0
window.staff = {
 mechanic:1,
 engineer:1
};

function getPitTime(){
 return 3.5 - (staff.mechanic * 0.3);
}
