export default class Livro {
  titulo;
  autor;
  categoria;
  paginas;
  disponivel;

  constructor(titulo, autor, categoria, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.paginas = paginas;
    this.disponivel = true;
  }
}
