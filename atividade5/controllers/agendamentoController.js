const AgendamentoConsulta = require('../models/agendamentoConsultaModel');

function getIndexView(req, res){
    res.render('index.html');
}

function getAgendamentosView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});
    });
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {campos_invalidos, dados_consulta});
    }
}

function validarRequisicaoAgendamentoConsulta (dados_consulta){
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
}

module.exports = {
    getIndexView,
    postAgendarConsulta,
    getAgendamentosView
}
