let nota = {}
let mediaexerc;
let mediatotal;
let cont;

mediaexerc = parseInt(prompt("Digite qual foi a média de aproveitamento dos exercícios do seu aluno."));

for(cont = 1; cont <= 3; cont++){
    nota[cont]=parseInt(prompt(`Avaliação nº${cont}:`))
}

mediatotal = (nota[1]+nota[2] * 2 +nota[3] * 3 +mediaexerc)/7

document.getElementById("holder").innerHTML = `A média total desse aluno é de: ${mediatotal}`