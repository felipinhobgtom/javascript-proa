let prestacao;
let valor;
let porcentagem;
let dias;

valor = parseInt(prompt("Qual o preço padrão dessa conta?"));
porcentagem = parseFloat(prompt("Qual é a taxa de atraso dessa prestação? (porcentagem)"));
dias = parseInt(prompt("Há quantos dias está em atraso"))

prestacao = valor + (valor*porcentagem/100)*dias

document.getElementById("holder").innerHTML = `O valor dessa prestação em atraso é de: R$${prestacao}`