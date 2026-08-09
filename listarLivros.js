import dadosLivros from "./dadosLivros.js";

export default function listarLivros() {
  dadosLivros.forEach(livro => {
    console.log(`
      Título: ${livro.titulo.toUpperCase()}
      Autor: ${livro.autor}
      Categoria: ${livro.categoria}
      Número de páginas: ${livro.paginas}
      Disponibilidade: ${livro.disponivel ? "Disponível": "Indisponível"}
    `)
  });
}

