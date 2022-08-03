const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');


router.get('/produtoInterna', produtosController.getProdutos);


module.exports = router;