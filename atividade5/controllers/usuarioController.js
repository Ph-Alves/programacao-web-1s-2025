const usuario = require('../models/usuarioModels')

function getCadastroView(req, res){
    res.render('cadastro_usuario.html')
}

function getLoginView(req, res){
    res.render('login.html')
}

module.exports = {
    getCadastroView,
    getLoginView
}
