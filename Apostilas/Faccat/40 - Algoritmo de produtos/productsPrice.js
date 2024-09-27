let descricao;
let quantidade;
let precounidade;
let total;
let pagamento;
let desconto;

descricao = prompt("Digite o nome desse produto").toLowerCase();
quantidade = prompt(`Digite quantos ${descricao} você adquiriu`)
precounidade = parseInt(prompt(`Digite o valor da unidade de ${descricao}`));

// <= 5 - 2%
// > 5 e <= 10 - 3%
// > 10 - 5%

if(quantidade <= 5){
    desconto = 2/100
}else if(quantidade > 5 && quantidade <= 10){
    desconto = 3/100
}else if(quantidade > 10){
    desconto = 5/100
}

total = quantidade*precounidade
pagamento = total-desconto

document.getElementById("holder").innerHTML = `<p>O total a pagar desses produtos será de R$${pagamento}</p>`