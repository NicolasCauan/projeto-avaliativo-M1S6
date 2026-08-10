import PromptSync from "prompt-sync";
import listarLivros from "./listarLivros.js";
import buscarLivros from "./buscarLivros.js";
import listarDisponiveis from "./listarDisponiveis.js";
import cadastrarLivro from "./cadastrarLivro.js";
import realizarEmprestimo from "./realizarEmprestimo.js";
import realizarDevolucao from "./realizarDevolucao.js";


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
    case '3':
      listarDisponiveis();
      break;
    case '4':
      cadastrarLivro();
      break;
    case '5':
      let livroEmprestado = prompt("Que livro você deseja pegar emprestado? ");
      realizarEmprestimo(livroEmprestado);
      break;
    case '6':
      let livroDevolvido = prompt("Que livro você deseja devolver? ");
      realizarDevolucao(livroDevolvido);
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
