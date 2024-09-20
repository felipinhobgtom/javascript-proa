let numero = parseInt(prompt("Digite um número para fazer a tabuada"))

let contadora;

for(contadora = 0; contadora < 11; contadora++){
    console.log(`${numero} x ${contadora} = ${numero*contadora}`)
}