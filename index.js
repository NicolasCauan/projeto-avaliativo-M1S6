import listarLivros from "./listarLivros.js"; 
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let menuEscolhido = '';
let continuar = true;

do {
  console.log(`
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

  menuEscolhido = prompt("Escolha uma opção do menu: "); 

  switch (menuEscolhido) {
    case '0':
      continuar = false;
      console.log('Saindo do sistema...');
      break;
    case '1':
      listarLivros();
      break;

    default:
      break;
  }
} while (continuar);
