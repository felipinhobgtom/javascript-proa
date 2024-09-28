let sm;
let ns;
let pr;

sm = parseFloat(prompt("Digite o salário mensal do seu funcionário"));
pr = parseFloat(prompt("Digite a porcentagem de reajuste a ser atribuída."));

ns = sm + (sm * pr/100)

document.getElementById("holder").innerHTML = `O salário reajustado é de: R$${ns}`