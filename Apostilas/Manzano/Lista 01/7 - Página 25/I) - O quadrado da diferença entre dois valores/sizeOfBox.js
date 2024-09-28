let a;
let b;
let diferenca;

a = parseFloat(prompt("Digite o valor de A"));
b = parseFloat(prompt("Digite o valor de B"));

diferenca = a-b

document.getElementById("holder").innerHTML = `
<p>O quadrado da diferença entre ${a} e ${b} é: ${diferenca**2}</p>
`