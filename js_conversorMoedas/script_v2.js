// Projeto Conversor de Moeda

/*
Versão: 2.0
Data: 21/11/2023
Descrição: Este programa recebe um valor em Real e converte nas cotações em Dólar, Euro e Libra.
*/

var valorEmReais = prompt("Digite o valor em reais:"); // Solicitar ao usuário que insira o valor em Reais
valorEmReais = parseFloat(valorEmReais); // Converter o valor inserido para um número

if (!isNaN(valorEmReais)) { // Verificar se o valor inserido é um número válido

  // Definição das cotações das moedas
  var cotacaoDoDolar = 4.89;
  var cotacaoEuro = 5.35;
  var cotacaoLibra = 6.13;

  // Calcular os valores convertidos
  var valorDolar = valorEmReais / cotacaoDoDolar;
  var valorEuro = valorEmReais / cotacaoEuro;
  var valorLibra = valorEmReais / cotacaoLibra;

  // Formatar os valores convertidos com duas casas decimais
  valorDolar = valorDolar.toFixed(2);
  valorEuro = valorEuro.toFixed(2);
  valorLibra = valorLibra.toFixed(2);

  // Exibir os resultados na tela
  alert(
    "Valor em Real: R$ " +
      valorEmReais +
      "\nValor em Dólar: US$ " +
      valorDolar +
      "\nValor em Euro: € " +
      valorEuro +
      "\nValor em Libra: £ " +
      valorLibra
  );
} else {
  alert("Por favor, insira um valor em reais válido.");
}

