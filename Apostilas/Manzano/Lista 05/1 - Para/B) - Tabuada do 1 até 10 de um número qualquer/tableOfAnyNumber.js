let numero;
let cont = 0;

numero = parseInt(prompt("Digite um número para realizar a tabuada."));

for(cont = 1; cont <= 10; cont++){
    document.getElementById("holder").innerHTML += `<p>${numero} x ${cont} = ${numero*cont}</p>`
}