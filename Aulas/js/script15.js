let numero1;
let numero2;

let diferenca;

numero1=parseInt(prompt("Digite um número: "));
numero2=parseInt(prompt("Digite um número: "));

if(numero1 > numero2){
    diferenca = numero1-numero2
    alert(`A diferença entre ${numero1} e ${numero2} é: ${diferenca}`)
} else {
    diferenca = numero2-numero1
    alert(`A diferença entre ${numero1} e ${numero2} é: ${diferenca}`)
}

// template string é uma maneira melhor de concatenação, aq eu to misturando texto com variavel