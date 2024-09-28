// codiguinho gambiarra kkkkkkk

let cont = 1;
let i = 1;
let index = 1;

let numeros = []
let somatoria = 0;
let media = 0;

alert("Digite 10 números");

while(cont <= 10){
    numeros[cont] = parseInt(prompt(`Digite o número ${cont}`))
    cont++
}

cont = 1

while(cont <= 10){
    // somatoria aq

    while(i <= 10){
        somatoria += numeros[i]
        i++
    }

    cont++

    while(index <= 10){
        media += numeros[index]
        index++
    }
}

media /= 10

document.getElementById("holder").innerHTML = `
<p>A somatória desses 10 valores é de: ${somatoria}</p>
<p>A média aritmética desses 10 valores é de: ${media}</p>
`