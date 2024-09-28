let raio;
let area;

raio = parseFloat(prompt("Qual o raio do seu circulo?"));

area = Math.PI*raio^2

document.getElementById("holder").innerHTML = `A área do seu círculo é de: ${Math.round(area)}`