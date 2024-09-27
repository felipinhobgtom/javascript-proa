let numeroum;
let numerodois;
let numerotres;

while (
  numeroum == numerodois ||
  numeroum == numerotres ||
  numerodois == numerotres
) {
  numeroum = parseInt(prompt("Digite o primeiro número"));
  numerodois = parseInt(prompt("Digite o segundo número"));
  numerotres = parseInt(prompt("Digite o terceiro número"));

  if (
    numeroum == numerodois ||
    numeroum == numerotres ||
    numerodois == numerotres
  ) {
    alert("Dois ou mais números são iguais... tente novamente.");
  }
}

if (numeroum > numerodois) {
  if (numeroum > numerotres) {
    document.getElementById(
      "holder"
    ).innerHTML = `A ordem dos números é: ${numerotres}, ${numerodois}, ${numeroum}`;
  } else {
    document.getElementById(
      "holder"
    ).innerHTML = `A ordem dos números é: ${numerodois}, ${numeroum}, ${numerotres}`;
  }
} else if (numerodois > numeroum) {
  if (numerodois > numerotres) {
    document.getElementById(
      "holder"
    ).innerHTML = `A ordem dos números é: ${numerotres}, ${numeroum}, ${numerodois}`;
  } else {
    document.getElementById(
      "holder"
    ).innerHTML = `A ordem dos números é: ${numeroum}, ${numerodois}, ${numerotres}`;
  }
}