const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('App rodando na porta ' + PORT)
})

app.get('/', (req, res) =>{
    res.render('index.html')
})

app.post('/agendar_consulta', (req, res)=>{
    let form_invalido = false
    let campos_invalidos = []

    let dados_consulta = req.body;

    if(dados_consulta.nome.length == 0){
        form_invalido = true
    } 
    if (dados_consulta.sobrenome.length == 0){
        form_invalido = true
        campos_invalidos.push("Sobrenome")
    } 
    if (dados_consulta.cpf.length == 0){
        form_invalido = true
        campos_invalidos.push("CPF")
    }
    if (dados_consulta.data_nascimento.length == 0){
        form_invalido = true
        campos_invalidos.push("Data de nascimento")
    }
    if (dados_consulta.telefone.length == 0){
        form_invalido = true
        campos_invalidos.push("Telefone")
    }
    if (dados_consulta.cep.length == 0){
        form_invalido = true
        campos_invalidos.push("CEP")
    }
    if (dados_consulta.endereco.length == 0){
        form_invalido = true
        campos_invalidos.push("Endereço")
    }
    if (dados_consulta.clinica.length == 0){
        form_invalido = true
        campos_invalidos.push("Clínica")
    }
    if (dados_consulta.especialidade.length == 0){
        form_invalido = true
        campos_invalidos.push("Especialidade")
    }
    if (dados_consulta.data_consulta.length == 0){
        form_invalido = true
        campos_invalidos.push("Data da consulta")
    }
    if (dados_consulta.hora_consulta.length == 0){
        form_invalido = true
        campos_invalidos.push("Hora da consulta")
    }

    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta})
})

