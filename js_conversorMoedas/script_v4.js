// Projeto Conversor de Moeda

/*
Versão: 4.0
Data: 23/11/2023
Descrição: Este programa recebe um valor em Real e o converte em diferentes cotações de moedas e criptomoedas, utilizando uma API (open.er-api.com e api.coingecko.com) que fornece a cotação em tempo real. Além disso, há uma formatação diferente na exibição na tela. O nome do usuário é solicitado no início e incluído na mensagem final.
*/

var nomeUsuario = prompt("Digite o seu nome:"); // Solicitar ao usuário que insira o nome
var valorEmReais = prompt("Digite o valor em reais:"); // Solicitar ao usuário que insira o valor em Reais

valorEmReais = parseFloat(valorEmReais); // Converter o valor inserido para um número

if (!isNaN(valorEmReais)) { // Verificar se o valor inserido é um número válido

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

  // Lista de criptomoedas desejadas
  var criptomoedas = [
    { codigo: "bitcoin", simbolo: "₿", nome: "Bitcoin" },
    { codigo: "ethereum", simbolo: "Ξ", nome: "Ethereum" },
    { codigo: "ripple", simbolo: "XRP", nome: "Ripple" },
    { codigo: "litecoin", simbolo: "Ł", nome: "Litecoin" },
    { codigo: "cardano", simbolo: "ADA", nome: "Cardano" },
    // Adicione mais criptomoedas conforme necessário
  ];

  // Monta a URL da API de moedas com a chave de API
  var apiMoedasUrl =
    "https://open.er-api.com/v6/latest/BRL?apikey=SUA_CHAVE_DE_API";

  // Faz uma requisição AJAX para obter as taxas de câmbio em tempo real para moedas
  fetch(apiMoedasUrl)
    .then((response) => response.json())
    .then((dataMoedas) => {
      // Calcula os valores convertidos usando as taxas de câmbio em tempo real para moedas
      var valoresConvertidosMoedas = moedasDestino.map((moeda) => {
        var valorConvertido = valorEmReais * dataMoedas.rates[moeda.codigo];
        return {
          nome: moeda.nome,
          codigo: moeda.codigo,
          simbolo: moeda.simbolo,
          valor: valorConvertido.toFixed(2)
        };
      });

  // Monta a URL da API CoinGecko para criptomoedas
  var apiCriptoUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    criptomoedas.map((criptomoeda) => criptomoeda.codigo).join(",") + "&vs_currencies=brl";

  // Faz uma requisição AJAX para obter as taxas de câmbio em tempo real para criptomoedas
  fetch(apiCriptoUrl)
    .then((response) => response.json())
    .then((dataCripto) => {
      // Calcula os valores convertidos usando as taxas de câmbio em tempo real para criptomoedas
      var valoresConvertidosCriptomoedas = criptomoedas.map((criptomoeda) => {
        var valorConvertido = valorEmReais / dataCripto[criptomoeda.codigo].brl;
        return {
          nome: criptomoeda.nome,
          codigo: criptomoeda.codigo,
          simbolo: criptomoeda.simbolo,
          valor: valorConvertido.toFixed(6)
        };
      });

  // Exibe os resultados na tela para moedas e criptomoedas
  var mensagem = `Olá, ${nomeUsuario}! \n \n Valor em Real (BRL): R$ ${valorEmReais} \n \n Moedas:\n`;
  mensagem += valoresConvertidosMoedas.map((vc) =>
    `Valor em ${vc.nome} (${vc.codigo}): ${vc.simbolo} ${vc.valor}`).join("\n");
    mensagem += "\n\nCriptomoedas:\n";
    
  mensagem += valoresConvertidosCriptomoedas.map((vc) =>
    `Valor em ${vc.nome} (${vc.codigo}): ${vc.simbolo} ${vc.valor}`).join("\n");

  alert(mensagem);
    })
    .catch((errorCriptomoedas) => {
      alert("Erro ao obter as taxas de câmbio das criptomoedas: " + errorCriptomoedas.message);
    });
  })
    .catch((errorMoedas) => {
      alert("Erro ao obter as taxas de câmbio para moedas: " + errorMoedas.message);
  });
} else {
  alert("Por favor, insira um valor em reais válido.");
}