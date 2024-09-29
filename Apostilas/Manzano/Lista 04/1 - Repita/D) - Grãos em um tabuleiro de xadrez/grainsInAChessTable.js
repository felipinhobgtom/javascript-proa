let graos = 1;
let somatoria = 0;
let cont = 0;

do{
    somatoria += graos
    document.getElementById("holder").innerHTML += `<p>Quantidade de grãos: ${graos}, Quantidade total:</p>`
    graos *= 2
    cont++
}while(cont <= 64)