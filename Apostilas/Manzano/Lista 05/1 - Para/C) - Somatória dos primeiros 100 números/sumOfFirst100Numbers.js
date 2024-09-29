let cont = 0;
let soma = 0;

for(cont = 1; cont <= 100; cont++){
    soma += cont
    document.getElementById("holder").innerHTML += `<p>${soma}</p>`
}