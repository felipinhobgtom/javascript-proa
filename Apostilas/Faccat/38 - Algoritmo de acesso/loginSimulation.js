let usuario = "";
let senha = "";

//usuario 1234
// senha 9999

while(usuario != "1234"){
    usuario = prompt("Digite o código do usuário.");
    if(usuario != "1234"){
        alert("Código de usuário incorreto.");
    }
}

while(senha != "9999"){
    senha = prompt("Digite a sua senha.");
    if(senha != "9999"){
        alert("Senha incorreta.");
    }
}

if(usuario == "1234" && senha == "9999"){
    document.getElementById("holder").innerHTML = `<p>Seja bem-vindo, usuário!</p>`
}