// Dependencias
require('dotenv').config();
const express = require('express');
const {engine} = require('express-handlebars');
const LocalizacaoController = require('./controllers/LocalizacaoController');

const PORT = process.env.API_PORT
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Rotas

app.get('/', (req, res) => {
	res.render('map');
});
app.post('/localizacao', LocalizacaoController.addLocal);

// Porta
app.listen(PORT, console.log(`A aplicação está rodando na porta ${PORT}`));

