let graos=0;
let somatoria=0;
let contadora=0;

graos = 1;
do {
    somatoria+=graos;
    console.log(`Quantidade de grãos: ${graos}, Quantidade total: ${somatoria}`);
    graos*= 2;
    contadora++;
}while (contadora < 65) // no repita é o contrário