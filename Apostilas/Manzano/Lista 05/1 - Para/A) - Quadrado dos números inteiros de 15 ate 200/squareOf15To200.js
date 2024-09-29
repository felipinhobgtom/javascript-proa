let cont = 0;

for(cont = 15; cont <= 200; cont++){
    document.getElementById("holder").innerHTML += `<p>${cont}² = ${cont**2}</p>`
}