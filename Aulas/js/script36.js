// ### Exercício: Validação de Dados de Usuário
<<<<<<< HEAD

=======
 
>>>>>>> 424ed0f8e40d076de943d13d034dcb774ca3c36f
// **Descrição:**
// Crie uma função em JavaScript que valide os dados de um usuário. A função deve verificar se o nome de usuário e a senha atendem aos seguintes critérios:
// 1. O nome de usuário não deve ser vazio.
// 2. O nome de usuário não deve ser igual à senha.
// 3. A senha deve ter pelo menos 8 caracteres.
// 4. A senha não deve conter o nome de usuário.
<<<<<<< HEAD

// **Requisitos:**
// - Utilize os operadores `!=`, `!==` e `!` para realizar as verificações.
// - A função deve retornar um objeto com as mensagens de erro correspondentes, caso existam.

// **Exemplo de Entrada:**

=======
 
// **Requisitos:**
// - Utilize os operadores `!=`, `!==` e `!` para realizar as verificações.
// - A função deve retornar um objeto com as mensagens de erro correspondentes, caso existam.
 
// **Exemplo de Entrada:**
 
>>>>>>> 424ed0f8e40d076de943d13d034dcb774ca3c36f
// const usuario = {
//   nome: "usuario123",
//   senha: "senha1234"
// };
<<<<<<< HEAD


// **Exemplo de Saída:**

=======
 
 
// **Exemplo de Saída:**
 
>>>>>>> 424ed0f8e40d076de943d13d034dcb774ca3c36f
// {
//   nomeValido: true,
//   senhaValida: true,
//   erros: []
// }

let nomeCorreto = false;
let senhaCorreto = false;

<<<<<<< HEAD
while (!nomeCorreto && !senhaCorreto) {
    let nomeUsuario = prompt("Digite seu nome de usuário")

    if (nomeUsuario.length > 0 && nomeUsuario.length < 8) {
        nomeCorreto = true

        while (!senhaCorreto) {

            let senhaUsuario = prompt("Digite sua palavra-passe")

            if (senhaUsuario.length < 8 && senhaUsuario.length > 0) {
                senhaCorreto = true;
            } else {
                alert("A senha está incorreta.")
            }
        }

    } else {
        alert("Nome de usuário incorreto")
    }

}
=======
while(!nomeCorreto){
    let nomeUsuario = prompt("Digite seu nome de usuário")

    if(nomeUsuario.length > 0 && nomeUsuario.length < 8){
        nomeCorreto = true
    }else{
        alert("Nome de usuário incorreto")
    }
}

>>>>>>> 424ed0f8e40d076de943d13d034dcb774ca3c36f
