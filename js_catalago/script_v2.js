// Projeto Catálogo

/*
Versão: 2.0
Data: 22/11/2023
Descrição: Este programa vai gerar um catálago de filme com a capacidade de adicionar filmes dinamicamente.
Observação: Modelo de script fornecido na terceira aula de imersão no Dev 7ª edição.
*/

// Lista inicial de filmes
var listaFilmes = [
    "https://img.elo7.com.br/product/zoom/26776B4/big-poster-filme-homem-aranha-2-2004-lo01-tamanho-90x60-cm-marvel.jpg",
    "https://img.elo7.com.br/product/zoom/2657D66/big-poster-indiana-jones-e-a-ultima-cruzada-lo01-90x60-cm-presente-nerd.jpg",
    "https://img.elo7.com.br/product/zoom/2C25AB8/big-poster-filme-star-wars-a-vinganca-dos-sith-lo01-90x60-cm-star-wars.jpg",
    "https://img.elo7.com.br/product/zoom/265E4B7/big-poster-filme-john-wick-um-novo-dia-para-matar-lo2-90x60-poster.jpg",
    "https://img.elo7.com.br/product/zoom/264FCC6/big-poster-filme-batman-o-cavaleiro-das-trevas-lo02-90x60-cm-batman.jpg",
    "https://img.elo7.com.br/product/zoom/2657658/big-poster-harry-potter-e-as-reliquias-da-morte-lo04-90x60-poster-cinema.jpg",
    "https://img.elo7.com.br/product/zoom/1E30435/big-poster-vingadores-guerra-infinita-tamanho-90x-0-cm-lo032-poster.jpg",
    "https://img.elo7.com.br/product/zoom/2694580/big-poster-filme-transformers-1-lo01-tamanho-90x60-cm-nerd.jpg",
    // Adicione mais URLs de filmes conforme necessário
];

function adicionarFilmeViaPrompt() {
    // Função para adicionar um novo filme à lista usando prompt
    var nomeUsuario = prompt("Insira seu nome:");
    var novaURL = prompt("Insira a URL do cartaz do filme (jpg ou png). Por exemplo: https://img.elo7.com.br/product/zoom/268B1FB/big-poster-filme-panico-1996-lo01-tamanho-90x60-cm-panico-1996.jpg"); // Obter a URL do filme do usuário
    if (novaURL) { // Verificar se o usuário inseriu uma URL
        listaFilmes.push(novaURL); // Adicionar a nova URL à lista de filmes
        exibirFilmes();
        alert(nomeUsuario + " Filme adicionado com sucesso!");
    } else {
        alert("URL inválida. Tente novamente.");
    }
}

function exibirFilmes() {
    var container = document.querySelector(".container"); // Limpar o conteúdo atual da tela
    container.innerHTML = "";

    for (var i = 0; i < listaFilmes.length; i++) { // Exibir todos os filmes novamente
        var filmeElement = document.createElement("img");
        filmeElement.src = listaFilmes[i];
        container.appendChild(filmeElement);
    }
}

exibirFilmes(); // Exibir filmes iniciais na tela
adicionarFilmeViaPrompt(); // Adicionar filme diretamente via prompt ao carregar a página