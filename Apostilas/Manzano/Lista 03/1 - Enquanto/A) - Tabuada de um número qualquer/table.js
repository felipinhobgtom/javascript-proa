let numero;
let cont = 1;

numero = parseInt(prompt("Digite um número para formar uma tabuada até o 10"))

while(cont <= 10){
    document.getElementById("holder").innerHTML += `<p> ${cont} x ${numero} = ${numero*cont} </p>`
    cont++
}