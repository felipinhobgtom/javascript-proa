let distancia;
let litros;
let tempo;
let velocidade;

tempo = parseFloat(prompt("Digite quantas horas durou a viagem"));
velocidade = parseFloat(prompt("Digite a velocidade em que percorreu essa viagem"));

distancia = tempo*velocidade
litros = distancia/12 // O veiculo consome 12 litros p/ km

document.getElementById("holder").innerHTML = `
<p>Nessa viagem, a velocidade percorrida foi de: ${velocidade}km/h </p>
<p>O tempo gasto total no percurso foi de: ${tempo}h </p>
<p>A distância percorrida da viagem é de: ${distancia}km </p>
<p>E a quantidade gasta de gasolina foi de: ${Math.round(litros)}L </p>
`