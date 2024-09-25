let primeiraProva;
let segundaProva;
let mediaSimples;

primeiraProva = parseFloat(prompt("Digite a nota da primeira avaliação de um aluno"));
segundaProva = parseFloat(prompt("Digite a nota da segunda avaliação de um aluno"));

mediaSimples = (primeiraProva+segundaProva)/2

if(mediaSimples >= 6){
    document.getElementById("holder").innerHTML = `Parabéns, o aluno passou com nota: ${mediaSimples}`
} else{
    document.getElementById("holder").innerHTML = `Infelizmente, o aluno não passou. Sua nota é de: ${mediaSimples}`
}