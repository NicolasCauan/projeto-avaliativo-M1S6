export default class Livro {
  titulo;
  autor;
  categoria;
  numeroPaginas;
  disponibilidade;

  constructor(titulo, autor, categoria, numeroPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.numeroPaginas = numeroPaginas;
    this.disponibilidade = true;
  }
}
