let numero;
let maior;
let menor;

numero = parseInt(prompt("Digite um número")); // primeira entrada de dados

if(numero >= 0){ // se o valor for negativo ele nao vai entrar no loop.
    maior = numero;
    menor = numero;
}else{
    menor = numero;
}

// loop

while(numero >= 0){
    numero = parseInt(prompt("Digite um número"));

    if(numero > maior){
        maior = numero
    }else if(numero < menor){
        menor = numero
    }
}

document.getElementById("holder").innerHTML += `<p>O maior número digitado foi o ${maior}</p>`
document.getElementById("holder").innerHTML += `<p>O menor número digitado foi o ${menor}</p>`