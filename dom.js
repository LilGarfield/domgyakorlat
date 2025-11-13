var szamlalo = 1;
function ujDivHozzaad() {
    const ujDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = "Cikk" + szamlalo;
    szamlalo++;
    const container = document.getElementById("container");
    ujDiv.append(h2);
    container.append(ujDiv);
    

}

function UjPHozzaad() {
    const p = document.createElement("p");
    const container = document.getElementById("container");
    
}