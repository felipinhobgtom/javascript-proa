let produto;

function calculo(fator1,fator2){
    return fator1*fator2;
}

produto = calculo(4,3);
document.getElementById("demo").innerHTML = `A multiplicação de 4 e 3 é igual a ${produto}`;