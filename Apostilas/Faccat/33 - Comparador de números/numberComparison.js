let numeroum;
let numerodois;

numeroum = parseInt(prompt("Digite quanto vale o primeiro número"));
numerodois = parseInt(prompt("Digite quanto vale o segundo número"));

if(numeroum > numerodois){
    document.getElementById("holder").innerHTML = `O primeiro número digitado é maior que o segundo número\n${numeroum} > ${numerodois}`
}else if(numeroum < numerodois){
    document.getElementById("holder").innerHTML = `O segundo número digitado é maior que o primeiro número.\n${numerodois} > ${numeroum}`
} else if(numeroum == numerodois){
    document.getElementById("holder").innerHTML = `Os dois números são iguais.\n${numeroum}=${numerodois}`
}