let estoque;
let estoquemaximo;
let estoqueminimo;
let media;

estoque = parseInt(prompt("Digite a quantidade de estoque atualmente"));
estoquemaximo = parseInt(prompt("Qual a quantidade máxima de estoque desse produto?"));
estoqueminimo = parseInt(prompt("Digite a quantidade mínima de estoque desse produto?"));

media = (estoquemaximo+estoqueminimo)/2;

if (media >= estoque){
    document.getElementById("holder").innerHTML = `Não efetue a compra. A média é de: ${media}`
} else{
    document.getElementById("holder").innerHTML = `Efetue a compra. A média é de: ${media}`
}