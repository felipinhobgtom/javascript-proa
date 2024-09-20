let numero;
let contadora = 1;

numero=parseInt(prompt("Digite um número para fazer a tabuada."))

while(contadora < 11){
    console.log(`${numero} * ${contadora} = ${numero*contadora}`)
    contadora++
}

// template string e mt bom slk