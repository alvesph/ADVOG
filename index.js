const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

app.use(express.static('public'));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize('advoga', 'ph', 'recruta154', {
    host: 'mysql669.umbler.com',
    port: 41890,
    dialect: 'mysql'
})

//ROTAS

app.get('/cad', function(req, res) {
    res.render('cliente')
})

app.post('/add', function(req, res) {
    res.send('FORMULÁRIO ENVIADO!')
})

app.listen(8081, function() {
    console.log("servidor rodando na url http://localhost:8081");
});