let fahrenheit;
let celsius;

fahrenheit = parseFloat(prompt("Digite uma temperatura, em fahrenheit"))
celsius = (5*fahrenheit-160)/9

document.getElementById("holder").innerHTML = `Sua temperatura, em graus celsius, é ~${Math.round(celsius)}Cº`