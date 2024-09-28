let base;
let altura;
let formula;

base = parseInt(prompt("Qual o tamanho da base do seu triângulo?"));
altura = parseInt(prompt("Qual o tamanho da altura do seu triângulo?"));
formula = (base*altura)/2

document.getElementById("holder").innerHTML = `A área do seu triângulo é: ${formula}`