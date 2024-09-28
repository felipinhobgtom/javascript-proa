let a;
let b;
let c;
let quadrados;

a = parseInt(prompt("Digite o valor de A"));
b = parseInt(prompt("Digite o valor de B"));
c = parseInt(prompt("Digite o valor de C"));

quadrados = (a**2)+(b**2)+(c**2)

document.getElementById("holder").innerHTML = `
<p>A soma dos quadrados dos valores A, B e C é de: ${quadrados}</p>
`