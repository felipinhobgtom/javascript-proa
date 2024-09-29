let cont = 1;
let i;
let numero;
let fatorial;
let somatorio = 0;

do {
  numero = parseInt(prompt("Digite um número"));

  fatorial = 1;
  i = 1;

  // loop do fatorial aq.
  do {
    fatorial *= i;
    i++
  } while (i < numero);

  somatorio += fatorial
cont++
} while (cont <= 15);

document.getElementById("holder").innerHTML = `<p>A somatória do fatorial de cada valor inserido é de: ${somatorio}</p>`