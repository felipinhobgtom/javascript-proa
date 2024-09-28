let anos;
let mes;
let dias;
let anosdias;
let mesdias;

anos = parseInt(prompt("Quantos anos você tem?"));
mes = parseInt(prompt("Há quantos meses foi o seu aniversário?"));
dias = parseInt(prompt("Há quantos dias você fez aniversário?"));

anosdias = anos*365
mesdias = anos*30

document.getElementById("holder").innerHTML = `A sua idade em dias é ${anosdias+mesdias+dias}`