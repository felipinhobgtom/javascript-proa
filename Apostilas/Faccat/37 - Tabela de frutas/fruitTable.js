let morango = 2.5;
let maca = 1.8;
let quantidadepeso;
let opcao;
let preco;

while (opcao != "morango" && opcao != "maca") {
  opcao = prompt(
    "Você deseja comprar maçãs ou morangos?\nOpções: 'morango', 'maca'"
  ).toLowerCase();

  if (opcao != "morango" && opcao != "maca") {
    alert("Opção inválida");
  }
}

quantidadepeso = parseFloat(prompt(`Digite a quantidade em kg's de ${opcao}`));

if (quantidadepeso > 5) {
  morango = 2.2;
  maca = 1.5;
}

if (opcao == "morango") {
  preco = morango * quantidadepeso;
} else {
  preco = maca * quantidadepeso;
}

if(preco > 25){
    preco -= 10/100
}

document.getElementById('holder').innerHTML = `<p>O valor de ${opcao} será de: R$${preco} </p>`