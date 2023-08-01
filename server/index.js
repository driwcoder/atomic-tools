const express = require("express");
const colecao = require("./data/ipca/dados");
const { calcularReajuste, validacaoErro } = require("./service/funcoes");
const app = express();

app.get("/historicoIPCA", (req, res) => {
  let historicoCompleto = colecao.historicoInflacao;
  res.json({ msg: historicoCompleto });
});
app.get("/historicoIPCA/pesquisa", (req, res) => {
  let anoQ = parseInt(req.query.ano);
  let anoP = colecao.historicoInflacao.filter((index) => index.ano === anoQ);
  res.json({ msg: anoP });
});
app.get("/historicoIPCA/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let mesP = colecao.historicoInflacao.find((idx) => idx.id === id);
  res.json({ msg: mesP });
});
app.get('/reajuste', (req, res) => {
  const valor = parseFloat(req.query.valor);
  const dataInicialMes = parseInt(req.query.mesInicial);
  const dataInicialAno = parseInt(req.query.anoInicial);
  const dataFinalMes = parseInt(req.query.mesFinal);
  const dataFinalAno = parseInt(req.query.anoFinal);

  if (validacaoErro(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno)) {
    res.status(400).json({ erro: 'Parâmetros inválidos' });
    return;
  }

  const resultado = calcularReajuste(valor, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno);
  res.json({ resultado: resultado });
});


app.listen(8000, () => {
  let data = new Date();
  let msg = `Server aberto ${data.toLocaleString()}`;
  console.log(msg);
});
