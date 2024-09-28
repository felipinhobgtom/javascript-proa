let a;
let b;
let c;
let msg = ""

a = parseInt(prompt("Digite o tamanho do lado A de um triângulo qualquer"));
b = parseInt(prompt("Digite o tamanho do lado B de um triângulo qualquer"))
c = parseInt(prompt("Digite o tamanho do lado C de um triângulo qualquer"))

if(a < b+c && b < a+c && c < a+b){
    if(a==b && b==c){
        msg = "Triângulo Equilátero";
    }else if(a==b || b==c || a==c){
        msg = "Triângulo Isosceles";
    }else
    msg = "Triângulo Escaleno";
}else{
    msg = "Não é possível formar um triângulo"
}

document.getElementById("holder").innerHTML = `<p>${msg}</p>`