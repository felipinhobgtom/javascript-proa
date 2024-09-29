let cont = 1;

do {
  if (cont % 4 == 0) {
    document.getElementById(
      "holder"
    ).innerHTML += `<p>${cont} é divisível por 4</p>`;
  }
  cont++;
} while (cont <= 200);