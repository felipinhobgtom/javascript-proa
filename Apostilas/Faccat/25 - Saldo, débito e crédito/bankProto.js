let conta;
let debito;
let credito;
let saldoholder;
let saldo

conta = parseInt(prompt("Qual o número da conta desse usuário?"));
saldoholder = parseFloat(prompt("Qual é o saldo desse usuário?"));
debito = parseFloat(prompt("Quanto de débito esse cliente tem?"));
credito = parseFloat(prompt("Quanto de crédito esse cliente tem?"));

saldo = (saldoholder-debito)+credito

if (saldo < 0 ){
    document.getElementById("holder").innerHTML = `Sua conta está negativa. R$${saldo}`
}else{
    document.getElementById("holder").innerHTML = `Sua conta está positiva. R$${saldo}`
}