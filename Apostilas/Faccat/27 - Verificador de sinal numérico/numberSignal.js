let numero;

numero = parseInt(prompt("Digite um número para ser verificado"));

if(numero > 0){
    document.getElementById("holder").innerHTML = `O número ${numero} é positivo.`
}else if(numero == 0){
    document.getElementById("holder").innerHTML = `O número ${numero} é neutro (zero).`
}else{
    document.getElementById("holder").innerHTML = `O número ${numero} é negativo.`
}