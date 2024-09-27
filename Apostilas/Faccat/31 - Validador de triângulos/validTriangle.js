let ladoum;
let ladodois;
let ladotres;

ladoum = parseInt(prompt("Digite o tamanho do primeiro lado"));
ladodois = parseInt(prompt("Digite o tamanho do segundo lado"));
ladotres = parseInt(prompt("Digite o tamanho do terceiro lado"));

if (
  ladoum < ladodois + ladotres &&
  ladodois < ladoum + ladotres &&
  ladotres < ladoum + ladodois
) {
  document.getElementById(
    "holder"
  ).innerHTML = `Esses lados formam um triângulo válido.`;
} else {
  document.getElementById(
    "holder"
  ).innerHTML = `Esses lados não formam um triângulo valido.`;
}