let numero;

numero = parseInt(prompt("Digite um número."));

if (numero >= 0) {
  document.getElementById("holder").innerHTML = `O número ${numero} é positivo.`;
} else {
    document.getElementById("holder").innerHTML  = `O número ${numero} é negativo.`
}