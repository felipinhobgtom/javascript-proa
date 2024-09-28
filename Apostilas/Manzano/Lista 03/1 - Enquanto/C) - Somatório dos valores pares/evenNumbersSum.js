let num = 0;
let cont = 0;

while (cont <= 500) {
  if (cont % 2 == 0) {
    document.getElementById("holder").innerHTML += `<p>${cont} - ${num}</p>`;
    num += cont;
  }
  cont++;
}