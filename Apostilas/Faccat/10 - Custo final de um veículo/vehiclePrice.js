let custo;
let distribuidor;
let impostos;
let custofinal;

custo = parseFloat(prompt("Digite o valor de custo de um veículo."))

distribuidor = custo*28/100
impostos = custo*45/100

custofinal = custo + distribuidor + impostos

document.getElementById("holder").innerHTML = `O custo final desse veículo é de: R$${custofinal},00`