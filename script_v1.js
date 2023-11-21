// Projeto Conversor de Moeda

/*
Versão: 1.0
Data: 21/11/2023
Descrição: Este programa converte um valor fixo em Real para Dólar.
Observação: Modelo de script fornecido na primeira aula de imersão no Dev 7ª edição.
*/

var valorEmReal = 54; // Valor em Real a ser convertido
var cotacaoDoDolar = 5.32; // Cotação do Dólar

var valorEmDolar = valorEmReal / cotacaoDoDolar; // Calcula o valor em Dólar
valorEmDolar = valorEmDolar.toFixed(2); // Formata o valor em Dólar com duas casas decimais

alert("O valor em Dólar é: $ " + valorEmDolar); // Exibe o resultado em um alerta
