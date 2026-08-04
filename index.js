const prompt = require("prompt-sync")();

let menuEscolhido = '';
let continuar = true;

do {
  menuEscolhido = prompt(`
    SISTEMA DE BIBLIOTECA

    1 - Listar livros
    2 - Buscar livro
    3 - Listar livros disponíveis 
    4 - Cadastrar livro
    5 - Realizar empréstimo
    6 - Realizar devolução
    7 - Exibir estatísticas
    0 - Sair
  `); 

  if (menuEscolhido === '0') {
    continuar = false;
    console.log('Saindo do sistema...');
  }

} while (continuar);
