const cotacao = 0.182585
let carteira;

carteira = parseFloat(prompt("Digite quantos reais você possui, para ser convertido em dólar."));

document.getElementById("holder").innerHTML = `
<p>A sua carteira, que possui R$${carteira} vale $${carteira*cotacao}</p>
<p>A cotação do real é de: $${cotacao}, 20/09/2024</p>
`