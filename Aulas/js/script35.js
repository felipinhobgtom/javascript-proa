let numero1;
let numero2;

function soma(arg1, arg2) {
  return arg1 + arg2;
}

function subtracao(arg1, arg2) {
  let podenegativo = prompt("O valor que você deseja pode ser negativo?\ns/n");
  switch (podenegativo) {
    case "s":
      return arg1 - arg2;
      break;
    case "n":
      if (arg1 > arg2) {
        return arg1 - arg2;
      } else {
        return arg2 - arg1;
      }
      break;
    default:
      alert(`Você não especificou direito, então retornarei números negativos`);
      return arg1 - arg2;
  }
}

function divisao(arg1, arg2) {
  return arg1 / arg2;
}

function produto(arg1, arg2) {
  return arg1 * arg2;
}

numero1 = parseInt(prompt("Digite o primeiro valor"));
numero2 = parseInt(prompt("Digite o segundo valor"));

let escolha = parseInt(
  prompt("1 - Soma\n2 - Subtração\n3 - Divisão\n4 - Multiplicação")
);

switch (escolha) {
  case 1:
    resultado = soma(numero1, numero2);
    document.getElementById(
      "answer"
    ).innerHTML = `${numero1} + ${numero2} = ${resultado}`;
    break;
  case 2:
    resultado = subtracao(numero1, numero2);
    document.getElementById(
      "answer"
    ).innerHTML = `${numero1} - ${numero2} = ${resultado}`;
    break;
  case 3:
    resultado = divisao(numero1, numero2);
    document.getElementById(
      "answer"
    ).innerHTML = `${numero1} / ${numero2} = ${resultado}`;
    break;
  case 4:
    resultado = produto(numero1, numero2);
    document.getElementById(
      "answer"
    ).innerHTML = `${numero1} * ${numero2} = ${resultado}`;
    break;
  default:
    document.getElementById("answer").innerHTML = `Opção inválida`;
}
