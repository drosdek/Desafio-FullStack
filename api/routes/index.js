var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Bem-vindo a API para o Desafio FullStack');
});

module.exports = router;
