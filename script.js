var valorEmReais = prompt("Digite o valor em reais:");
valorEmReais = parseFloat(valorEmReais);

if (!isNaN(valorEmReais)) {
  var moedasDestino = [
    { codigo: "USD", simbolo: "$", nome: "Dólar Americano" },
    { codigo: "EUR", simbolo: "€", nome: "Euro" },
    { codigo: "JPY", simbolo: "¥", nome: "Iene Japonês" },
    { codigo: "GBP", simbolo: "£", nome: "Libra Esterlina" },
    { codigo: "ARS", simbolo: "$", nome: "Peso Argentino" },
    { codigo: "CNY", simbolo: "¥", nome: "Renminbi (Yuan)" },
    { codigo: "CHF", simbolo: "CHF", nome: "Franco Suíço" },
    { codigo: "RUB", simbolo: "₽", nome: "Rublo Russo" },
    { codigo: "TRY", simbolo: "₺", nome: "Lira Turca" }
    // Adicione mais moedas conforme necessário
  ];

  var apiKey = "SUA_CHAVE_DE_API";
  var apiUrl =
    "https://open.er-api.com/v6/latest/" + "BRL" + "?apikey=" + apiKey;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var valoresConvertidos = moedasDestino.map((moeda) => {
        var valorConvertido = valorEmReais * data.rates[moeda.codigo];
        return {
          codigo: moeda.codigo,
          simbolo: moeda.simbolo,
          nome: moeda.nome,
          valor: valorConvertido.toFixed(2)
        };
      });

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

if (!isNaN(valorEmReais)) {
  var criptomoedas = [
    { codigo: "bitcoin", simbolo: "₿", nome: "Bitcoin" },
    { codigo: "ethereum", simbolo: "Ξ", nome: "Ethereum" }
    // Adicione mais criptomoedas conforme necessário
  ];

  var apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var valoresConvertidos = criptomoedas.map((criptomoeda) => {
        var taxaCambio = data[criptomoeda.codigo].brl;
        var valorConvertido = valorEmReais / taxaCambio;
        return {
          codigo: criptomoeda.codigo,
          simbolo: criptomoeda.simbolo,
          nome: criptomoeda.nome,
          valor: valorConvertido.toFixed(6)
        };
      });

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
