import dadosLivros from "./dadosLivros.js";
import PromptSync from "prompt-sync";
import Livro from "./Livro.js";

const prompt = PromptSync();

export default function cadastrarLivro() {
  let nomeLivro = prompt("Digite o nome do livro: ");
  let categoria = prompt("Digite a categoria do livro: ");
  let autor = prompt('Digite o nome do autor: ');
  let paginas = prompt('Digite o número de páginas: ');
  paginas = Number(paginas);

  let livro = new Livro(nomeLivro, autor, categoria, paginas);
  dadosLivros.push(livro);
  console.log(`Livro "${nomeLivro}" cadastrado com sucesso!`);
}