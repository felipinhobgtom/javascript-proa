const pessoa={

    nome:"Felipe",
    sobrenome:"Barros",
    idade:"17"
}

let dados="";  // declarando que a variavel dados é string

for (const x in pessoa) {
    dados += pessoa[x] + " "
}

// console.table(pessoa)
console.log(dados);

