let cont = 1;
let fahrenheit;
let celsius = 10; // começa com 10 na atividade

while (cont <= 10) {
  fahrenheit = (9 * celsius + 160) / 5;

  document.getElementById("holder").innerHTML += `<p>${celsius}Cº - ${fahrenheit}Fº</p>`;

  celsius += 10;
  cont++;
}