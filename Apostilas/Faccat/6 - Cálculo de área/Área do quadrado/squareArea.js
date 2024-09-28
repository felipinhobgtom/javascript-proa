let altura;
let largura;
let area;

altura = parseInt(prompt("Qual a altura do quadrado"));
largura = parseInt(prompt("Qual a largura do quadrado?"));

area = largura*altura

document.getElementById("holder").innerHTML = `A área do seu quadrado é ${area}`