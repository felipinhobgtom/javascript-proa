let cont = 0;
let base = 3;
let expoente = 0; // o expoente tá aq só pra fazer a primeira condição kkkkkkkkkk

while(cont <= 15){
    if(cont == 0){
        if(expoente == 0){
            document.getElementById("holder").innerHTML += `<p>3^0 = 1</p>`
        }

        document.getElementById("holder").innerHTML += `<p>3^1 = ${base}</p>`
        cont++
    }else{
        base *= 3
        document.getElementById("holder").innerHTML += `<p>3^${cont} = ${base}</p>`
    }
    cont++
}