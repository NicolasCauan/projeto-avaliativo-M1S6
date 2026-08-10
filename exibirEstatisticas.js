import dadosLivros from './dadosLivros.js';

export default function exibirEstatisticas() {
  let totalLivros = dadosLivros.length;
  let livrosDisponiveis = 0;
  let livrosIndisponiveis = 0;
  let totalGeralPaginas = 0;
  let mediaPaginas = 0;

    dadosLivros.forEach(livro => {
      if (livro.disponivel) {
        livrosDisponiveis++
      } else {
        livrosIndisponiveis++
      }
      totalGeralPaginas = totalGeralPaginas + livro.paginas
  })
  mediaPaginas = totalGeralPaginas / totalLivros;

  console.log(`
    Total de Livros Cadastrados: ${totalLivros}
    Total de Livros Disponiveis: ${livrosDisponiveis}
    Total de Livros Indisponiveis: ${livrosIndisponiveis}
    Total de Paginas Considerando Todos os Livros: ${totalGeralPaginas}
    Média de Páginas Por Livro: ${mediaPaginas.toFixed(0)} 
    `)
}

