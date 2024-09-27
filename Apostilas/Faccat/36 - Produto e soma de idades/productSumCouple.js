let homemum;
let homemdois;
let mulherum;
let mulherdois;
let produto;
let soma;

while (homemum == homemdois) {
  homemum = parseInt(prompt("Digite a idade do primeiro homem"));
  homemdois = parseInt(prompt("Digite a idade do segundo homem"));

  if (homemum == homemdois) {
    alert("A idade entre os dois homens não podem ser iguais");
  }
}

while (mulherum == mulherdois) {
  mulherum = parseInt(prompt("Digite a idade da primeira mulher"));
  mulherdois = parseInt(prompt("Digite a idade da segunda mulher"));

  if (mulherum == mulherdois) {
    alert("A idade das duas mulheres não podem ser iguais.");
  }
}

if (homemum > homemdois) {
  if (mulherum > mulherdois) {
    soma = homemum + mulherdois;
    produto = homemdois * mulherum;
  } else if (mulherum < mulherdois) {
    soma = homemum + mulherum;
    produto = homemdois * mulherdois;
  }
} else if (homemum < homemdois) {
    if(mulherum > mulherdois){
        soma = homemdois + mulherdois
        produto = homemum * mulherum
    }else if(mulherum < mulherdois){
        soma = homemdois + mulherum
        produto = homemum*mulherdois
    }
}

document.getElementById("holder").innerHTML = `<p>A soma do homem mais velho com a mulher mais nova é: ${soma}</p><p>O produto do homem mais novo com a mulher mais velha é: ${produto}</p>`