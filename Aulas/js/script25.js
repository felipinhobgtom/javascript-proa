let contador;
let numero = 0;

for(contador = 0; contador < 101; contador++){
    // contador ++; contador ja ta embutido no laço
    numero += contador
}

console.log(`A soma dos 100 primeiros números é: ${numero}`);