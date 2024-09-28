let celsius;
let fahrenheit;

fahrenheit = parseFloat(prompt("Digite uma temperatura, em graus celsius, para ser convertida em fahrenheit."));
celsius = (fahrenheit-32)*(5/9)

document.getElementById("holder").innerHTML = `Sua temperatura em celsius é: ${celsius}Cº`