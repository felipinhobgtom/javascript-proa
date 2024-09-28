let nulos;
let validos;
let brancos;
let total;

nulos = parseInt(prompt("Quantos votos nulos teve em seu município?"));
brancos = parseInt(prompt("Quantos votos brancos teve em seu município?"));
validos = parseInt(prompt("Quantos votos válidos teve em seu município?"));

total = nulos+brancos+validos

document.getElementById("holder").innerHTML = `
<p>O percentual de votos nulos é de: ${(nulos/total)*100}%</p>
<p>O percentual de votos brancos é de: ${(brancos/total)*100}%</p>
<p>O percentual de votos validos é de: ${(validos/total)*100}%</p>
`