const calc = require("./util/calculadora");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

//calculadora
app.get("/somar/:valor1/:valor2", (req, res) => {
  let soma = calc.soma(
    parseInt(req.params["valor1"]),
    parseInt(req.params["valor2"])
  );
  res.send(`Resultado da soma: ${soma}`);
});

app.get("/subtrair/:valor1/:valor2", (req, res) => {
  let subtracao = calc.subtracao(
    parseInt(req.params["valor1"]),
    parseInt(req.params["valor2"])
  );
  res.send(`Resultado da subtração: ${subtracao}`);
});

app.get("/multiplicar/:valor1/:valor2", (req, res) => {
  let multiplicacao = calc.multiplicacao(
    parseInt(req.params["valor1"]),
    parseInt(req.params["valor2"])
  );
  res.send(`Resultado da multiplicação: ${multiplicacao}`);
});

app.get("/dividir/:valor1/:valor2", (req, res) => {
  let divisao = calc.divisao(
    parseInt(req.params["valor1"]),
    parseInt(req.params["valor2"])
  );
  res.send(`Resultado da subtração: ${divisao}`);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
