let cont = 15;
let quadrado = 0;

do {
  quadrado += cont ** 2;
  document.getElementById("holder").innerHTML += `<p>${cont}² = ${quadrado}</p>`
  cont++
} while (cont <= 200); // lembre-se, o repita é o contrario dessa bomba aqui