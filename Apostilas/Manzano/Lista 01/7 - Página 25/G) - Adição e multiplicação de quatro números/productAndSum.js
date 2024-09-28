let a;
let b;
let c;
let d;

let soma;
let produto;

a = parseInt(prompt("Digite o valor de A"));
b = parseInt(prompt("Digite o valor de B"));
c = parseInt(prompt("Digite o valor de C"));
d = parseInt(prompt("Digite o valor de D"));

// a com b
// a com c
// a com d
// b com c
// b com d
// c com d

soma = (a+b)+(a+c)+(a+d)+(b+c)+(b+d)+(c+d)
produto = (a*b)+(a*c)+(a*d)+(b*c)+(b*d)+(c*d)

document.getElementById("holder").innerHTML = `
<p>O produto e soma dos valores inseridos é:</p>
<p>Produto: ${produto}</p>
<p>Soma: ${soma}</p>
`