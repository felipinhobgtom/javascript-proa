let carrosVendidos;
let vendasTotal;
let salario;
let comissaoCarro;
let carroTotal;
let bonus;
let salarioFinal;

salario = parseFloat(prompt("Digite um salário fixo, de uma revendedora de carros."));
carrosVendidos = parseInt(prompt("Agora, digite o número de carros vendidos"));
comissaoCarro = parseFloat(prompt("Quanto ganhará de comissão por carro?"));
vendasTotal = parseFloat(prompt("Qual será o valor total de suas vendas?"));

carroTotal = carrosVendidos*comissaoCarro
bonus = vendasTotal*5/100

salarioFinal = salario+carroTotal+bonus
document.getElementById("holder").innerHTML = `O salário final da revendedora de carros será de: R$ ${salarioFinal}`