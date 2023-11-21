// Projeto Convesor Moeda

/*
Versão: 2.0v. 
Data: 21/11/2023
Descrição: O programa tem como objetivo receber um valor em Real e converter-lo na cotações em Dólar, Euro e Libra. 
Observação: Modelo de script fornecido na primeira aula de imersão dev 7ª edição. 
*/

var valorEmReais = prompt("Digite o valor em reais:"); // Inserir um valor
valorEmReais = parseFloat(valorEmReais); // Converter o valor da variável para um número

if (!isNaN(valorEmReais)) {
  // verificar se o valor inserido é um número valido
  // Definição das cotações das moedas:
  var cotacaoDoDolar = 4.89;
  var cotacaoEuro = 5.35;
  var cotacaoLibra = 6.13;

  // Calcular os valores convertidos:
  var valorDolar = valorEmReais / cotacaoDoDolar;
  var valorEuro = valorEmReais / cotacaoEuro;
  var valorLibra = valorEmReais / cotacaoLibra;

  // Formatar os valores convertidos com duas casas decimais:
  valorDolar = valorDolar.toFixed(2);
  valorEuro = valorEuro.toFixed(2);
  valorLibra = valorLibra.toFixed(2);

  // Exibe os resultados na tela:
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
