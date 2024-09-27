let numeroum;
let numerodois;

while(numeroum == numerodois){
    numeroum = parseInt(prompt("Digite o valor do primeiro número."));
    numerodois = parseInt(prompt("Digite o valor do segundo número."));

    if(numeroum == numerodois){
        alert("Os dois números são iguais. Tente novamente.")
    }

    if(numeroum > numerodois){
        document.getElementById("holder").innerHTML = `A ordem crescente desses números é: ${numerodois}, ${numeroum}`
    }else{
        document.getElementById("holder").innerHTML = `A ordem crescente desses números é: ${numeroum}, ${numerodois}`
    }
}