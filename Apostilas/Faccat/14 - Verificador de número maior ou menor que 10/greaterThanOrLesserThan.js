let numero;

numero = parseInt(prompt("Digite um número"))

if(numero > 10){
    document.getElementById("holder").innerHTML = `O número digitado é maior que 10.`
} else {
    document.getElementById("holder").innerHTML = `O número digitado é menor que 10.`
}