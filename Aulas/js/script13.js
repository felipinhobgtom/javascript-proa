let celsius;
let fahrenheit;


fahrenheit = parseFloat(prompt("Digite uma temperatura em fahrenheit para ser convertido em celsius."))

celsius = (fahrenheit-32)*(5/9);

alert("A temperatura em celsius é: "+celsius+" Cº")

if (celsius<100) {
    alert("Não atingiu o ponto de ebulição.")
}else{
    alert("Atingiu o ponto de ebulição")
}

