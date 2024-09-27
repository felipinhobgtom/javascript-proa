let timeum = "";
let timedois = "";
let timeumgol;
let timedoisgol;

timeum = prompt("Digite o nome do primeiro time");
timedois = prompt("Digite o nome do segundo time");

goltimeum = parseInt(prompt(`Digite quantos gols o ${timeum} fez`));
goltimedois = parseInt(prompt(`Digite quantos gols o ${timedois} fez`));

if (goltimeum > goltimedois) {
  document.getElementById(
    "holder"
  ).innerHTML = `O time ${timeum} foi o vencedor dessa partida de ${goltimeum} x ${goltimedois} gols!`;
} else if (goltimeum == goltimedois) {
  document.getElementById(
    "holder"
  ).innerHTML = `O time ${timeum} empatou com o time ${timedois} de ${goltimeum} x ${goltimedois}`;
} else {
  document.getElementById(
    "holder"
  ).innerHTML = `O time ${timedois} foi o vencedor dessa partida de ${goltimedois} x ${goltimeum} gols!`;
}
