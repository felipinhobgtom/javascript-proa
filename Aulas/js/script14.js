let idade;

idade = parseInt(prompt("Digite um número: "))

if (idade < 16){
    alert("Você não pode votar!")
} else if(idade < 18){
    alert("Voto opcional!")
} else {
    alert("Voto obrigatório!")
}