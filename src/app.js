'use strict';

//Importando módulos
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const config = require('./config');

//Criando aplicação
const app = express();
const router = express.Router();

//Limitando tamanho da requisição
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(fileUpload());

//Habilita o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

//Atribuindo rotas
//app.use('/', indexroute);

//Exportando APP
module.exports = app;