import dadosLivros from './dadosLivros.js';

export default function realizarDevolucao(titulo) {
  let livrosFiltrados = dadosLivros.filter(livro => (livro.titulo.toLowerCase() == titulo.toLowerCase()))

  if (livrosFiltrados.length > 0) {
    let livro = livrosFiltrados[0];

    if (livro.disponivel == false) {
      livro.disponivel = true;
      console.log('Livro devolvido com sucesso!')
    } else {
      console.log('Esse livro já foi devolvido e está disponivel!')
    }
  } else {
    console.log('Livro não encontrado!')
  }
}