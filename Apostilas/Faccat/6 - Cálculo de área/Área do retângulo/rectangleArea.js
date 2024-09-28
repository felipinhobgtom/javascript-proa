let altura;
let largura;
let area;

altura = parseInt(prompt("Qual a altura do retangulo"));
largura = parseInt(prompt("Qual a largura do retangulo?"));

area = largura*altura

document.getElementById("holder").innerHTML = `A área do seu retangulo é ${area}`