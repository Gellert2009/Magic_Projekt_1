let erdekessegek = [
  "📜 A Szent Borbála-székesegyház a bányászok védőszentjéről kapta a nevét.",
  "📜 Kutná Hora Prága után a középkori Csehország második legfontosabb városa volt.",
  "📜 A belváros 1995 óta UNESCO Világörökség.",
  "📜 A prágai garas a középkor egyik legkeresettebb ezüstpénze volt.",
  "📜 A város neve valószínűleg a német Kutte (azaz akna) szóból ered."
]

var funfactBtn = document.getElementById("funfactBtn").addEventListener("click", kiiras);
var funfact = document.getElementById("funfact");
funfact.style.visibility = "hidden";

function kiiras(){
  funfact.style.visibility = "visible";
  var rnd = Math.floor(Math.random() * erdekessegek.length);
  funfact.innerHTML = erdekessegek[rnd];
}

console.log("szíkröt");