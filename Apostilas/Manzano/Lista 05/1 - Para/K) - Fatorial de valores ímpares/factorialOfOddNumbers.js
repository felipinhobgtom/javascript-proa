let cont;
let i;
let fatorial;

for(cont = 1; cont <= 10; cont++){
    if(cont % 2 == 0){
        i = 1;
        fatorial = 1;

        for(i = 1; i <= cont; i++){
            fatorial*=i
        }

        document.getElementById("holder").innerHTML += `<p>O fatorial de ${cont} é igual a ${fatorial}</p>`
    }
}