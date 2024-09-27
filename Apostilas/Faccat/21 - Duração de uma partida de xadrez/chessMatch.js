let iniciojogo;
let fimjogo;
let duracao;

iniciojogo = parseInt(
  prompt("Digite o horário em que a partida de xadrez começou")
);
fimjogo = parseInt(
  prompt("Agora, digite que horas essa partida de xadrez acabou")
);

duracao = fimjogo - iniciojogo;

if (duracao < 0) {
  duracao *= -1;
}

if (duracao == 24 || duracao == 0) {
  document.getElementById(
    "holder"
  ).innerHTML = `O seu jogo de xadrez teve um dia de duração!`;
} else if (duracao > 24) {
  document.getElementById(
    "holder"
  ).innerHTML = `O seu jogo teve mais de 24h de duração (${duracao}h), logo sua partida foi inválida.`;
} else if (duracao < 24) {
  document.getElementById(
    "holder"
  ).innerHTML = `O seu jogo teve ${duracao}h de duração!`;
}