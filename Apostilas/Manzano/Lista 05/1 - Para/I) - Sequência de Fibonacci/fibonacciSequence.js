let cont = 3;
let primeiro = 1;
let segundo = 1;
let proximo;

document.getElementById("holder").innerHTML += `<p>1º Termo - ${primeiro}</p>`
document.getElementById("holder").innerHTML += `<p>2º Termo - ${segundo}</p>`

for(cont = 3; cont <= 15; cont++){
    proximo = primeiro+segundo
    document.getElementById("holder").innerHTML += `<p>${cont}º Termo - ${proximo}</p>`

    primeiro = segundo
    segundo = proximo
}