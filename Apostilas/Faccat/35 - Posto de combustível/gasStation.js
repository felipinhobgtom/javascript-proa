let opcao = "";
let litrovendido;
let precogasolina = 3.3;
let precoalcool = 2.9;
let custo;
let valor;

while (opcao != "g" && opcao != "a") {

  opcao = prompt("Qual é o tipo de combustível?\nG = Gasolina A = Álcool").toLowerCase();
  litrovendido = parseFloat(
    prompt("Digite quantos litros de gasolina foram vendidos")
  );

  if(opcao != "g" && opcao != "a"){
    alert("Opção inválida.");
  }
}

// verificacao gasolina

if(litrovendido <= 20 && opcao == "g"){
    custo = litrovendido*precogasolina
    valor = custo-(custo*0.03)
    document.getElementById("holder").innerHTML = `${litrovendido} litros de gasolina custarão R$${Math.round(valor)} e possui um desconto de 3%`
}else if(litrovendido > 20 && opcao == "g"){
    custo = litrovendido*precogasolina
    valor = custo-(custo*0.05)
    document.getElementById("holder").innerHTML = `${litrovendido} litros de gasolina custarão R$${Math.round(valor)} e possui um desconto de 5%`
}

// verificação alcool

if (litrovendido <= 20 && opcao == "a"){
    custo = litrovendido*precoalcool
    valor = custo-(custo*0.04)
    document.getElementById("holder").innerHTML = `${litrovendido} litros de álcool custarão R$${Math.round(valor)} e possui um desconto de 4%`
}else if(litrovendido > 20 && opcao == "a"){
    custo = litrovendido*precoalcool
    valor = custo-(custo*0.06)
    document.getElementById("holder").innerHTML = `${litrovendido} litros de álcool custarão R$${Math.round(valor)} e possui um desconto de 6%`
}