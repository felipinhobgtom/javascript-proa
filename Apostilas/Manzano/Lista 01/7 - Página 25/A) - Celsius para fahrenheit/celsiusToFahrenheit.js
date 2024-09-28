let celsius;
let fahrenheit;

celsius = parseFloat(prompt("Digite uma temperatura, em graus celsius, para ser convertida em fahrenheit."));
fahrenheit = (9*celsius+160)/5

document.getElementById("holder").innerHTML = `Sua temperatura em fahrenheit é: ${fahrenheit}Fº`