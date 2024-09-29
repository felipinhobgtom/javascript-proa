let cont;
let soma = 0;

for (cont = 0; cont <= 500; cont++) {
  if (cont % 2 == 0) {
    soma += cont;
    document.getElementById("holder").innerHTML += `<p>Número ${soma}</p>`;
  }
}
