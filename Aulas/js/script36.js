// ### Exercício: Validação de Dados de Usuário

// **Descrição:**
// Crie uma função em JavaScript que valide os dados de um usuário. A função deve verificar se o nome de usuário e a senha atendem aos seguintes critérios:
// 1. O nome de usuário não deve ser vazio.
// 2. O nome de usuário não deve ser igual à senha.
// 3. A senha deve ter pelo menos 8 caracteres.
// 4. A senha não deve conter o nome de usuário.

// **Requisitos:**
// - Utilize os operadores `!=`, `!==` e `!` para realizar as verificações.
// - A função deve retornar um objeto com as mensagens de erro correspondentes, caso existam.

// **Exemplo de Entrada:**

// **Requisitos:**
// - Utilize os operadores `!=`, `!==` e `!` para realizar as verificações.
// - A função deve retornar um objeto com as mensagens de erro correspondentes, caso existam.

// **Exemplo de Entrada:**

// const usuario = {
//   nome: "usuario123",
//   senha: "senha1234"
// };

// **Exemplo de Saída:**

// **Exemplo de Saída:**

// {
//   nomeValido: true,
//   senhaValida: true,
//   erros: []
// }

let nomeCorreto = false;
let senhaCorreto = false;

while (!nomeCorreto && !senhaCorreto) {
  let nomeUsuario = prompt("Digite seu nome de usuário");

  if (nomeUsuario.length > 0 && nomeUsuario.length < 8) {
    nomeCorreto = true;

    while (!senhaCorreto) {
      let senhaUsuario = prompt("Digite sua palavra-passe");

      if (senhaUsuario == nomeUsuario) {
        alert("A senha não pode ser igual ao nome de usuário.");
        senhaCorreto = false;
      } else if (senhaUsuario.length < 8 && senhaUsuario.length > 0) {
        senhaCorreto = true;
      } else {
        alert("A senha está incorreta.");
      }
    }
  } else {
    alert("Nome de usuário incorreto");
  }
}
