let valido = [];
let brancos;
let nulos;
let total;

let cont;

for (cont = 1; cont <= 3; cont++) {
  valido[cont] = parseInt(
    prompt(`Digite a quantidade de votos válidos do candidato ${cont}`)
  );
}

brancos = parseInt(prompt("Digite quantos votos brancos houve nessa eleição"));
nulos = parseInt(prompt("Digite quantos votos nulos houve nessa eleição"));

total = valido[1] + valido[2] + valido[3] + brancos + nulos;

document.getElementById("holder").innerHTML = `
<p> O percentual de votos do candito 1 em relação ao total é: ${Math.round((valido[1]/total)*100)}% </p>
<p> O percentual de votos do candito 2 em relação ao total é: ${Math.round((valido[2]/total)*100)}% </p>
<p> O percentual de votos do candito 3 em relação ao total é: ${Math.round((valido[3]/total)*100)}% </p>
<p> O percentual de votos brancos em relação ao total é: ${Math.round((brancos/total)*100)}% </p>
<p> O percentual de votos nulos em relação ao total é: ${Math.round((nulos/total)*100)}% </p>`;
