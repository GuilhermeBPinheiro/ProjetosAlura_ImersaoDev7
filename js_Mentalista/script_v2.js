// Projeto Conversor de Moeda

/*
Versão: 2.0
Data: 22/11/2023
Descrição: Este programa vai gerar um número e você tem que digitar o número até acertar.
Observação: Modelo de script fornecido na primeira aula de imersão no Dev 7ª edição.
*/

let nomeUsuario = prompt('Digite seu nome:');
let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Faça o computador gerar um número aleatório entre 1 e 100
let numeroMaximoTentativas = parseInt(prompt('Digite o número máximo de tentativas:')); // Solicitar ao usuário o número máximo de tentativas

// Verificar se o valor inserido é um número válido
if (isNaN(numeroMaximoTentativas) || numeroMaximoTentativas <= 0) {
  alert('Por favor, digite um número válido maior que zero.');
} else {
  let tentativasRestantes = numeroMaximoTentativas;

  while (tentativasRestantes > 0) {
    let chute = prompt(`${nomeUsuario}, tente adivinhar o número entre 1 e 100. Você ainda tem ${tentativasRestantes} tentativas.`);

    // Verificar se o chute é um número válido
    if (isNaN(chute)) {
      alert('Por favor, digite um número válido.');
      continue;
    }

    chute = parseInt(chute);

    if (chute == numeroAleatorio) {
      alert(`Parabéns, ${nomeUsuario}! Você acertou o número em ${numeroMaximoTentativas - tentativasRestantes + 1} tentativas!`);
      break;
    } else if (chute < numeroAleatorio) {
      alert(`${nomeUsuario}, o número secreto é maior. Está abaixo do número correto.`);
    } else {
      alert(`${nomeUsuario}, o número secreto é menor. Está acima do número correto.`);
    }

    tentativasRestantes--;
  }

  if (tentativasRestantes === 0) {
    alert(`Você perdeu, ${nomeUsuario}. O número correto era ${numeroAleatorio}.`);
  }
}
