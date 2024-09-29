let num;
let cont = 0;
let somatoria = 0;
let media;

do {
  numero = parseInt(
    prompt(
      "Digite um número. Será requisitado a entrada de um outro valor até que seja negativo."
    )
  );

  somatoria += numero;
  cont++;
} while (numero > 0);

media = somatoria / cont;

document.getElementById(
  "holder"
).innerHTML = `
<p>A somatória de todos os valores inseridos é ${somatoria}</p>
<p>A média aritmética de todos os valores inseridos é de: ${media}</p>
`;
