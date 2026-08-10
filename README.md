# Sistema de Biblioteca

Mini projeto avaliativo do curso SCTEC, desenvolvido por Nícolas Cauan Nardelli.

## Descrição
Este projeto é uma aplicação simples de console em Node.js para gerenciar um sistema de biblioteca. Através do menu interativo, é possível listar livros, buscar por título, visualizar os livros disponíveis, cadastrar novos livros, realizar empréstimos, devolver livros e consultar estatísticas do acervo.

## Objetivo
O objetivo deste projeto é praticar conceitos fundamentais de programação em JavaScript, como:
- utilização de classes e módulos;
- manipulação de arrays e objetos;
- estruturação de um sistema simples com menu interativo;
- implementação de operações básicas de cadastro e controle de disponibilidade.

## Como executar
Para rodar o projeto localmente, siga os passos abaixo:

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   node index.js
   ```

## Estrutura do projeto
- index.js: ponto principal da aplicação com o menu interativo.
- Livro.js: classe utilizada para representar um livro.
- dadosLivros.js: lista inicial de livros do sistema.
- listarLivros.js: exibe todos os livros cadastrados.
- buscarLivros.js: busca um livro pelo título.
- listarDisponiveis.js: mostra apenas os livros disponíveis.
- cadastrarLivro.js: cadastra um novo livro no sistema.
- realizarEmprestimo.js: marca um livro como emprestado.
- realizarDevolucao.js: marca um livro como devolvido.
- exibirEstatisticas.js: exibe estatísticas gerais do acervo.
- package.json: configurações do projeto e dependências.

## Contato
Nícolas Cauan Nardelli  
Email: nicolascnardelli@gmail.com
