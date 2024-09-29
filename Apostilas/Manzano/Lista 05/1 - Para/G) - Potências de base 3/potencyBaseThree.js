let cont = 1;
let base = 3;
let expoente = 0;

for(cont = 1; cont <= 14; cont++){
    if(cont == 0){
        if(expoente == 0){
            document.getElementById("holder").innerHTML += `<p>3^0 = 1</p>`
        }
    }else{
        base *= 3
        document.getElementById("holder").innerHTML += `<p>3^${cont+1} = ${base}</p>`
    }
}