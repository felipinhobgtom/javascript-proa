let numeros = [10,20,30,40,50];
console.log(numeros)
console.log(numeros[1],numeros[3])

let frutas = []
frutas.push(
    "Banana",
    "Laranja",
    "Maçã"
);
console.log(frutas)

let cores = [
    "Rosa",
    "Roxo",
    "Vermelho",
    "Azul"
]
cores.pop(3)
console.log(cores)

// criar tipo um cont, com a length da array somatoria

let somatoria = [1,2,3,4]

function somar(){
    let sum = 0;
    
    for(cont = 0; cont < somatoria.length; cont++){
        sum += somatoria[cont];
    }

    return console.log(sum)
}

somar() // deu certo eba

let matriz = [
    [1,2],
    [3,4]
]

console.log(matriz[1][0]) // segunda linha e primeira coluna
matriz[0][1] = 10
console.log(matriz);

let nomes = [
    "Ana",
    "Carlos",
    "Pedro"
]

console.log("/-/-/-/-/-/-/-/-/-/-/-/-/")

for(cont = 0; cont < nomes.length; cont++){
    console.log(nomes[cont]);
}

let elementos = [
    [1,2,3],
    [4,5,6]
]