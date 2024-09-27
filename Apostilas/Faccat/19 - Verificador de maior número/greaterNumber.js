let numeroum;
let numerodois;

while (numeroum == numerodois) {
  numeroum = parseInt(prompt("Digite o valor do primeiro número"));
  numerodois = parseInt(prompt("Digite o valor do segundo número"));

  if (numeroum == numerodois) {
    alert(`Você não pode digitar números iguais. Tente novamente.`);
  }

  if (numeroum > numerodois) {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o número ${numeroum}`;
  } else {
    document.getElementById(
      "holder"
    ).innerHTML = `O maior número é o número ${numerodois}`;
  }
}