const estq = require('./util/deposito')
const express = require('express')

const app = express()

app.get("/", (req, res)=> {
    let html = '<h1> Bem-vindo(a) ao controle de estoque!!<h1>'
    html += '<h3>Selecione o que quer fazer:<h3>'
    html += '<p><a href=/adicionar/1/tv/300> Adicionar elemento <a><p>'
    html += '<p><a href=/listar> Listar elemento <a><p>'
    html += '<p><a href=/remover/0> Remover elemento <a><p>'
    html += '<p><a href=/editar/0/800> Editar elemento <a><p>'
    res.send(html)
})

app.get("/adicionar/:id/:nome/:qtd", (req, res)=>{
    let elemento = estq.adicionar(
        parseInt(req.params["id"]),
        req.params["nome"],
        parseInt(req.params["qtd"])
    )
    res.send("Elemento adicionado!!")
})

app.get("/listar", (req, res)=>{
    res.send(estq.listar())
})

app.get("/remover/:id", (req, res)=>{
    estq.remover(
        parseInt(req.params["id"])
    )
    res.send("Elemento removido!")
})

app.get("/editar/:id/:qtd", (req, res)=>{
    estq.editar(
        parseInt(req.params["id"]),
        parseInt(req.params["qtd"])
    )
    res.send("Elemento editado!")
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});