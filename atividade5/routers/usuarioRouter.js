const express = require('express')
const router = express.Router()

const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro_usuario', usuarioController.getCadastroView)
router.get('/acessar', usuarioController.getLoginView)

module.exports = router