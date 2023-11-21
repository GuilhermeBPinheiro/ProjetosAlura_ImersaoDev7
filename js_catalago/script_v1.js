// Projeto Catálogo

/*
Versão: 1.0
Data: 21/11/2023
Descrição: Este programa vai gerar um catálago de filme.
Observação: Modelo de script fornecido na terceira aula de imersão no Dev 7ª edição.
*/

//Insrir a URL da imagem do filme - JGP ou PNG
var listaFilmes = [
  "https://img.elo7.com.br/product/zoom/26776B4/big-poster-filme-homem-aranha-2-2004-lo01-tamanho-90x60-cm-marvel.jpg",
  "https://img.elo7.com.br/product/zoom/2657D66/big-poster-indiana-jones-e-a-ultima-cruzada-lo01-90x60-cm-presente-nerd.jpg",
  "https://img.elo7.com.br/product/zoom/2C25AB8/big-poster-filme-star-wars-a-vinganca-dos-sith-lo01-90x60-cm-star-wars.jpg",
  "https://img.elo7.com.br/product/zoom/265E4B7/big-poster-filme-john-wick-um-novo-dia-para-matar-lo2-90x60-poster.jpg",
  "https://img.elo7.com.br/product/zoom/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg",
  "https://img.elo7.com.br/product/zoom/2657658/big-poster-harry-potter-e-as-reliquias-da-morte-lo04-90x60-poster-cinema.jpg",
  "https://img.elo7.com.br/product/zoom/1E30435/big-poster-vingadores-guerra-infinita-tamanho-90x-0-cm-lo032-poster.jpg",
  "https://img.elo7.com.br/product/zoom/2694580/big-poster-filme-transformers-1-lo01-tamanho-90x60-cm-nerd.jpg",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
