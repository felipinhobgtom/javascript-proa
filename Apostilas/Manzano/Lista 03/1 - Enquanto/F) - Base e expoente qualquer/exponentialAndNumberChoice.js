let base;
let cont = 0;
let i = 1;
let expoente;
let resultado = 1;

base = parseInt(prompt("Digite qual o valor da base."));
expoente = parseInt(prompt("Digite quanto vale o expoente."));

if (expoente >= 0) {
  while (cont < expoente) {
    resultado *= base;
    document.getElementById("holder").innerHTML += `<p>O resultado de ${base} elevado a ${i} é igual a: ${resultado}</p>`;
    i++
    cont++;
  }
} else {
  document.getElementById("holder").innerHTML = `<p>Expoente negativo.</p>`;
}