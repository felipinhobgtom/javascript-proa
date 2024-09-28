let codigo = "";
let pedido = "";
let anonasc;
let anoempresa;
let idade;
let anoscontribuidos;

codigo = prompt("Digite o identificador do funcionário");
anonasc = parseInt(
  prompt(`Digite somente o ano de nascimento do funcionário ${codigo}.`)
);
anoempresa = parseInt(
  prompt(`Digite o ano em que o funcionário ${codigo} ingressou na empresa.`)
);

let hoje = new Date();

idade = hoje.getFullYear() - anonasc;

while (pedido != "requerer" && pedido != "nao requerer") {
  if (idade >= 65 && anoscontribuidos >= 25) {
    alert(`O funcionário ${codigo} pode exigir aposentadoria`);
    pedido = prompt(
      "Digite 'requerer' para validar a aposentadoria\nDigite 'nao requerer' para negar a aposentadoria"
    );
  } else if (idade >= 65 || anoscontribuidos >= 30) {
    alert(`O funcionário ${codigo} pode exigir aposentadoria`);
    pedido = prompt(
      "Digite 'requerer' para validar a aposentadoria\nDigite 'nao requerer' para negar a aposentadoria"
    );
  } else {
    alert(`O funcionário ${codigo} não tem direito a aposentadoria`);
    pedido = "nao requerer";
  }

  if (pedido != "requerer" && pedido != "nao requerer") {
    alert("Você especificou o pedido de aposentadoria incorretamente.");
  }
}

if (pedido == "requerer") {
  document.getElementById(
    "holder"
  ).innerHTML = `O seu pedido de aposentadoria foi permitido com sucesso!`;
} else {
  document.getElementById(
    "holder"
  ).innerHTML = `O seu pedido de aposentadoria foi negado.`;
}