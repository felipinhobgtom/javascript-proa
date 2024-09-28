let a;
let b;
let c;
let soma;

a = parseInt(prompt("Digite o valor de A"));
b = parseInt(prompt("Digite o valor de B"));
c = parseInt(prompt("Digite o valor de C"));

soma = a+b+c

document.getElementById("holder").innerHTML = `
<p>O quadrado da soma dos valores A, B e C é ${soma**2}</p>
`