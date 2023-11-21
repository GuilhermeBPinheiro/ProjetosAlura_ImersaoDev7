// Projeto Conversor de Moeda

/*
Versão: 1.0
Data: 21/11/2023
Descrição: Este programa vai gerar um número e você tem que digitar o número até acertar.
Observação: Modelo de script fornecido na primeira aula de imersão no Dev 7ª edição.
*/

// Faça o computador gerar um número aleatório
var numeroSecreto = parseInt(Math.random() * 100);

while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 100')

  //se o chute for igual ao número secreto 
  if (chute == numeroSecreto) {
    alert('Acertou!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior')
  }
}