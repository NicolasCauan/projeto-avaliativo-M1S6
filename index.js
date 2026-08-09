import listarLivros from "./listarLivros.js";
import buscarLivros from "./buscarLivros.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let menuEscolhido = '';
let continuar = true;
let mostrarMenu = true;
let resposta = '';

do {
  if (mostrarMenu == true) {
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
  }

  menuEscolhido = prompt("Escolha uma opção do menu: ");

  switch (menuEscolhido) {
    case '0':
      continuar = false;
      console.log('Saindo do sistema...');
      break;
    case '1':
      listarLivros();
      break;
    case '2':
      let livroEscolhido = prompt("Que livro você deseja buscar? ");
      buscarLivros(livroEscolhido);
      break;

    default:
      console.log('Opção inválida!')
      break;
  }

  resposta = prompt("Deseja voltar ao Menu? (S/N) ");
  mostrarMenu = resposta.toUpperCase() == 'S';
  if (mostrarMenu == false) {
    continuar = false;
    console.log('Saindo do sistema...');
  }

} while (continuar);
