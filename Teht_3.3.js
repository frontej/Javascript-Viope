function tervehdi() {
   console.log("Moikka!");
}

function lisaaPainike() {
var nappula = document.createElement("button");
nappula.id = "luotuPainike";
nappula.innerHTML = "";	
nappula.setAttribute("onclick", "tervehdi();");
document.body.appendChild(nappula);

}
