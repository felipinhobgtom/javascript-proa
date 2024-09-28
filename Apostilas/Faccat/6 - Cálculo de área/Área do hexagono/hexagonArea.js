let lado;
let formula;

lado = parseInt(prompt("Qual o tamanho dos lados do hexágono?"));

formula = 6*(lado^2*Math.sqrt(3))/4

document.getElementById("holder").innerHTML = `A área do seu hexagono é: ${formula}`