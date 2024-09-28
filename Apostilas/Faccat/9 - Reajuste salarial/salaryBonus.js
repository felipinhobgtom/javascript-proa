let salario;
let percentual;
let reajuste;

salario = parseFloat(prompt("Digite um salário mensal"));
percentual = parseFloat(prompt("Agora, digite um percentual de reajuste"));

reajuste = salario+(salario*(percentual/100))
document.getElementById("holder").innerHTML = `O reajuste salarial é de: R$${reajuste}`