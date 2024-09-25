let valorMaca;
let produto;
let quantidadeMacas;

quantidadeMacas = parseInt(prompt("Quantas maçãs você deseja comprar?"));

if (quantidadeMacas < 12){
    produto = quantidadeMacas*1.30
    document.getElementById("holder").innerHTML = `${quantidadeMacas} maçãs custarão R$${produto}`
} else if(quantidadeMacas >= 12) {
    produto = quantidadeMacas*1
    document.getElementById("holder").innerHTML = `${quantidadeMacas} maçãs custarão R$${produto}`
}