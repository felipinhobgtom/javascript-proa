let volume;
let raio;
let altura;

altura = parseFloat(prompt("Digite a altura da sua lata de óleo (cilindro)"));
raio = parseFloat(prompt("Digite o raio dessa lata"));

volume = Math.PI*raio^2*altura

document.getElementById("holder").innerHTML = `O volume dessa lata é de: ${volume}`