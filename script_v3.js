// Projeto Convesor Moeda

/*
Versão: 3.0v. 
Data: 22/11/2023
Descrição: O programa tem como objetivo receber um valor em Real e converter-lo em diferentes tipos de cotações, com base no valor atual da API (open.er-api.com). Além da mudação de formatação na exibição da tela.
*/

var valorEmReais = prompt("Digite o valor em reais:"); // Inserir um valor
valorEmReais = parseFloat(valorEmReais); // Converter o valor da variável para um número

if (!isNaN(valorEmReais)) { // verificar se o valor inserido é um número válido
  // Lista de moedas desejadas
  var moedasDestino = [
    { codigo: "USD", simbolo: "$", nome: "Dólar Americano" },
    { codigo: "EUR", simbolo: "€", nome: "Euro" },
    { codigo: "JPY", simbolo: "¥", nome: "Iene Japonês" },
    { codigo: "GBP", simbolo: "£", nome: "Libra Esterlina" },
    { codigo: "ARS", simbolo: "$", nome: "Peso Argentino" },
    { codigo: "CNY", simbolo: "¥", nome: "Renminbi (Yuan)" },
    { codigo: "CHF", simbolo: "CHF", nome: "Franco Suíço" },
    { codigo: "RUB", simbolo: "₽", nome: "Rublo Russo" },
    { codigo: "TRY", simbolo: "₺", nome: "Lira Turca" },
    { codigo: "AUD", simbolo: "$", nome: "Dólar Australiano" },
    { codigo: "CAD", simbolo: "$", nome: "Dólar Canadense" },
    { codigo: "INR", simbolo: "₹", nome: "Rupia Indiana" },
    { codigo: "BRL", simbolo: "R$", nome: "Real Brasileiro" },
  // Adicione mais moedas conforme necessário
  ];

  // Monta a URL da API com a chave de API
  var apiKey = "SUA_CHAVE_DE_API"; // Substitua pela sua chave de API
  var apiUrl =
    "https://open.er-api.com/v6/latest/" + "BRL" + "?apikey=" + apiKey;

  // Faz uma requisição AJAX para obter as taxas de câmbio em tempo real
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Calcula os valores convertidos usando as taxas de câmbio em tempo real
      var valoresConvertidos = moedasDestino.map((moeda) => {
        var valorConvertido = valorEmReais / data.rates[moeda.codigo];
        return {
          nome: moeda.nome,
          codigo: moeda.codigo,
          simbolo: moeda.simbolo,
          valor: valorConvertido.toFixed(2)
        };
      });

      // Exibe os resultados na tela
      var mensagem = `Valor em Real (BRL): R$ ${valorEmReais}\n`;
      mensagem += valoresConvertidos
        .map(
          (vc) =>
            `Valor em ${vc.nome} (${vc.codigo}): ${vc.simbolo} ${vc.valor}`
        )
        .join("\n");
      alert(mensagem);
    })
    .catch((error) => {
      alert("Erro ao obter as taxas de câmbio: " + error.message);
    });
} else {
  alert("Por favor, insira um valor em reais válido.");
}
