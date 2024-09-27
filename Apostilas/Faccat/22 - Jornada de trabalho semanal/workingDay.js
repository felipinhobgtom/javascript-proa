let horasmes;
let salariohora;
let salariototal;
let salariohoraextra;
let jornadatrabalho = 40*4;
let horaextra;

horasmes = parseInt(prompt("Digite quantas horas são trabalhadas no mês"));
salariohora = parseInt(prompt("Digite quanto recebe de salário por hora"));

if(horasmes > jornadatrabalho){
    horaextra = horasmes-jornadatrabalho

    salariohoraextra = horaextra*salariohora*1.5 //1.5 quer dizer 50%
    salariototal = (jornadatrabalho*salariohora)+salariohoraextra
    document.getElementById("holder").innerHTML = `O seu salário possui horas extras, logo seu salário mensal normal será de: R$${salariototal-salariohoraextra}, e seu salário com horas extras é de R$${salariototal}, (foi adicionado um acréscimo de R$${salariohoraextra})`
}else{
    salariototal = horasmes*salariohora
    document.getElementById("holder").innerHTML = `Você não possui horas extras, logo seu salário é de: R$${salariototal}`
}