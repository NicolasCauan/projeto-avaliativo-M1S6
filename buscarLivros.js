import dadosLivros from "./dadosLivros.js";

export default function buscarLivros(titulo) {
  let livrosFiltrados = dadosLivros.filter(livro => (livro.titulo.toLowerCase() == titulo.toLowerCase()))

  if (livrosFiltrados.length > 0) {
    let livro = livrosFiltrados[0];

    console.log(`
      Título: ${livro.titulo.toUpperCase()}
      Autor: ${livro.autor}
      Categoria: ${livro.categoria}
    `)
  } else {
    console.log("Livro não encontrado! Por favor digite um título válido")
  }
}

