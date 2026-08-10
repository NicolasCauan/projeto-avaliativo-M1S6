import dadosLivros from './dadosLivros.js';

export default function realizarEmprestimo(titulo) {
  let livrosFiltrados = dadosLivros.filter(livro => (livro.titulo.toLowerCase() == titulo.toLowerCase()))

  if (livrosFiltrados.length > 0) {
    let livro = livrosFiltrados[0];

    if (livro.disponivel) {
      livro.disponivel = false;
      console.log('Livro emprestado com sucesso!')
    } else {
      console.log('Livro indisponível!')
    }
  } else {
    console.log('Nenhum livro encontrado pelo título fornecido!')
  }
}