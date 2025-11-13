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
    //barmilyen p ami egy div belsejeben van
    const divBenP = document.querySelectorAll("div p");
    divBenP.forEach(function(p){
        p.style.color = "blue";
    })

    // minden p ami div gyereke
    const divChildP = document.querySelectorAll("div > p");
    divChildP.forEach(function(p){
        p.style.fontWeight = "bold";
    })

    // minden p ami div testvere
    const divTesoP = document.querySelectorAll("div ~ p");
    divTesoP.forEach(function(p){
        p.style.textDecoration = "underline";
    })

    // minden p ami div masodik gyereke
    const divMasodikP = document.querySelectorAll("p:nth-child(3)");
    divMasodikP.forEach(function(p){
        p.style.backgroundColor = "lightyellow";
    })

    // minden masodik p testver
    const divMasodikTesoP = document.querySelectorAll("p:nth-of-type(2)");
    divMasodikTesoP.forEach(function(p){
        p.style.border = "1px red solid";
    })


}