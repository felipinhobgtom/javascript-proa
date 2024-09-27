let idade; 
let anonascimento;
let hoje = new Date

// hoje.getFullYear()

anonascimento = parseInt(prompt("Digite o ano de seu nascimento."))

idade = hoje.getFullYear() - anonascimento;

if (idade < 16){
    document.getElementById("holder").innerHTML = `Você tem ${idade} anos, portanto ainda não pode votar.`
}else if(idade < 18){
    document.getElementById("holder").innerHTML = `Você tem ${idade} anos, o voto é opcional.`
} else if(idade >= 18){
    document.getElementById("holder").innerHTML = `Você tem ${idade} anos, é maior de idade e o voto é obrigatório.`
}