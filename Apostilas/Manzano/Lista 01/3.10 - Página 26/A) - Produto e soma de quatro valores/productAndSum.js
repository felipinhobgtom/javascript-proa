let a;
let b;
let c;
let d;
let produto;
let soma;

a = parseInt(prompt("Digite o valor de A"));
b = parseInt(prompt("Digite o valor de B"));
c = parseInt(prompt("Digite o valor de C"));
d = parseInt(prompt("Digite o valor de D"));

produto = a * c;
soma = b + d;

document.getElementById(
  "holder"
).innerHTML = `<br>
<p> O produto dos valores é ${produto} </p>
<p> A soma dos valores é ${soma} </p>
`;
