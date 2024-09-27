let nome = "";
let sexo = "";
let altura = 0;
let pesoideal;

nome = prompt("Digite o seu nome.");

while (altura < 0.65 || altura > 2.5) {
  altura = parseFloat(prompt("Digite sua altura em metros."));
  if (altura > 2.5 || altura < 0.65) {
    alert(`${nome}, acredito que você digitou a sua altura incorretamente.`);
  }
}

sexo = prompt(
  `${nome}, você é do sexo masculino ou feminino?\nM = Masculino, F = Feminino`
);

if (sexo == "m" || sexo == "M") {
  pesoideal = 72.7 * altura - 58;
} else if (sexo == "f" || sexo == "F") {
    pesoideal = (62.1*altura)-44.7

}

document.getElementById("holder").innerHTML = `${nome}, o seu peso ideal é de: ${pesoideal}kg`