import dadosLivros from "./dadosLivros.js";

export default function listarDisponiveis() {
  let livrosDisponiveis = dadosLivros.filter(livro => (livro.disponivel == true))

  if (livrosDisponiveis.length > 0) {
    livrosDisponiveis.forEach(livro => {
      console.log(`
      Título: ${livro.titulo.toUpperCase()}
      Autor: ${livro.autor}
      Categoria: ${livro.categoria}
      Número de páginas: ${livro.paginas}
      Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}
    `)
    });
  } else {
    console.log("Não há livros disponíveis")
  }
}