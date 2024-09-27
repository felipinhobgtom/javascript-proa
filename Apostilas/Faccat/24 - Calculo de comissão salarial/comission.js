let salariofixo;
let valorvendas;
let comissao;

salariofixo = parseFloat(prompt("Digite o salário fixo de um funcionário"));
valorvendas = parseFloat(prompt("Digite o valor das vendas sucedidas desse funcionário"));

if(valorvendas <= 1500){
    comissao = valorvendas*1.03 // acrescimo de 3%
}else if(valorvendas > 1500){
    comissao = (valorvendas*1.03)*1.05
}

document.getElementById("holder").innerHTML = `O salário total desse funcionário é de: R$${salariofixo+comissao}`