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
    alert("Dois ou mais números são iguais");
  }
}

if (numeroum < numerodois) {
  if (numerodois < numerotres) {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o ${numerotres}`;
  } else {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o ${numerodois}`;
  }
} else if (numeroum > numerodois) {
  if (numeroum > numerotres) {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o ${numeroum}`;
  } else {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o ${numerotres}`;
  }
}