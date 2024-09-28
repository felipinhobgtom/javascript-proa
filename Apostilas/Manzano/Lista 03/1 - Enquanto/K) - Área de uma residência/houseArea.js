let opcao;
let nome = [];
let areacomodo = [];
let largura = [];
let comprimento = [];
let area = 0;

let cont = 1;
let i = 1;
let index = 1;

while(opcao != "nao" && opcao != "não"){
    nome[cont] = prompt("Digite o nome do cômodo");
    largura[cont] = parseFloat(prompt(`Digite a largura do cômodo "${nome[cont]}"`));
    comprimento[cont] = parseFloat(prompt(`Digite o comprimento do cômodo "${nome[cont]}"`));

    areacomodo[cont] = largura[cont]*comprimento[cont]
    document.getElementById("holder").innerHTML += `<p>A área do cômodo ${nome[cont]} é de: ${areacomodo[cont]}</p>`

    opcao = prompt("Deseja continuar?\nDigite 'sim' para continuar, ou digite 'não' para encerrar e ver a área total.")

    while(i <= cont){
        area += areacomodo[i];
        i++
    }

    cont++
}

document.getElementById("holder").innerHTML += `<p>A área residêncial total acumulada é de: ${area}m²</p>`