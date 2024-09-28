let cont = 1;
let num = 0;


while(cont <= 100){
    num += cont
    cont++
}

document.getElementById("holder").innerHTML = `A soma dos 100 primeiros números é: ${num}`