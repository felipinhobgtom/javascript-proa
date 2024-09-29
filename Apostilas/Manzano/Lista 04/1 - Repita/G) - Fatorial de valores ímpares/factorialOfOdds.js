let cont = 1
let i;
let fatorial;

do{
    if(cont % 2 != 0){
        
        fatorial = 1
        i = 1
        do{
            fatorial *= i
            i++
        }while(i <= cont)
            document.getElementById("holder").innerHTML += `<p>O fatorial de ${cont} é igual a ${fatorial}</p>`
    }
    cont++
}while(cont <= 10)