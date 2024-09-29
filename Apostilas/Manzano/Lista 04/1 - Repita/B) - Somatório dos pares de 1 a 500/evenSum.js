let cont = 1;
let numero = 0;

do {
  if (cont % 2 == 0) {
    numero += cont
    document.getElementById("holder").innerHTML += `
    <p>Número ${numero}</p>
    `
  }
  cont++;
} while (cont <= 500);

document.getElementById("holder").innerHTML += `A somatória dos valores pares de 1 até 500 é: ${numero}`