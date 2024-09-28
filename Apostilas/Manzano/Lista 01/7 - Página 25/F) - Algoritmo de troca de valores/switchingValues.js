let numero = [];

let a;
let b;

let cont;

for (cont = 1; cont <= 2; cont++) {
  numero[cont] = parseInt(prompt(`Digite o valor ${cont}`));
}

// 1 - A
// 2 - B

a = numero[2];
b = numero[1];

document.getElementById("holder").innerHTML = `
<p>Antes:</p>
<p>A - ${numero[1]}</p>
<p>B - ${numero[2]}</p>
<p>----------------</p>
<p>Agora:</p>
<p>A - ${a}
<p>B - ${b}</p>
`;
