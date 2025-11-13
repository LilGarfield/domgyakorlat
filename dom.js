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
    const divek = container.getElementsByTagName("div");
    const utolsoDiv = divek[divek.length-1];
    p.innerHTML = "Ez egy bekezdés";
    
    if (divek.length > 0) {
        utolsoDiv.appendChild(p);
    }
    else{
        alert("Először hozzon létre egy div-et");
    }
}

function cssHozzaad() {
    const head = document.getElementsByTagName("head");
    
}