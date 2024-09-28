const cotacao = 5.4769
let carteira;

carteira = parseFloat(prompt("Quantos dólares você tem, para ser convertido em real?"));

document.getElementById("holder").innerHTML = `
<p>A sua carteira, que possui $${carteira} vale R$${carteira*cotacao}</p>
<p>A cotação do dólar é de R$${cotacao}, 20/09/2024</p>
`