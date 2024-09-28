let cont = 50;
let i = 0;
let somatoria = 0;
let media;

while (cont <= 70){
    if(cont % 2 == 0){
        somatoria += cont
        document.getElementById("holder").innerHTML += `<p>Número ${cont}</p>`
        i++
    }
    cont++
}

media = somatoria/i

document.getElementById("holder").innerHTML += `
<p>A somatória dos valores pares de 50 a 70 é: ${somatoria}</p>
`

document.getElementById("holder").innerHTML += `
<p>A média aritmética dos números pares de 50 a 70 é ${media}</p>
`