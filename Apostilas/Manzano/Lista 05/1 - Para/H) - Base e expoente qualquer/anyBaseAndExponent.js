let cont = 0;
let base;
let expoente;
let resultado = 1;

base = parseInt(prompt("Digite a base do número, para realizar a potenciação"));
expoente = parseInt(prompt("Digite quanto vale o expoente"));

// se o expoente for negativo o algoritmo nao realiza o calculo
if(expoente >= 0){
    for(cont = 1; cont <= expoente; cont++){
        resultado *= base
        document.getElementById("holder").innerHTML += `<p>${base}^${cont} = ${resultado}</p>`
    }
}else{
    document.getElementById("holder").innerHTML += `<p>Não vou fazer conta de expoente negativo não</p>`
}