let notaum;
let notadois;
let notatres;
let media;

notaum = parseInt(prompt("Digite a nota do primeiro bimestre."))
notadois = parseInt(prompt("Digite a nota do segundo bimestre."))
notatres = parseInt(prompt("Por fim, digite a nota do terceiro bimestre."))

media = (notaum+notadois+notatres)/3

document.getElementById("holder").innerHTML = `A média desse aluno nos três bimestres é de: ${media}`