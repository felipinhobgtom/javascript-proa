let cont = 0;

while (cont <= 20) {
  if (cont % 2 != 0) {
    document.getElementById("holder").innerHTML += `<p>Número ${cont} </p>`;
  }
  cont++;
}
