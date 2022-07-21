var express = require('express');
var router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');

router.get('/produtoInterna', ProdutoController.card)