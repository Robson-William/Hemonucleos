// Dependencias
require('dotenv').config();
const express = require('express');
const LocalizacaoController = require('./controllers/LocalizacaoController');

const PORT = process.env.API_PORT
const app = express();
app.use(express.static('public'));

// Rotas

app.get('/', (req, res) => {
	res.send('Home');
});

app.post('/localizacao', LocalizacaoController.addLocal);

// Porta
app.listen(PORT, console.log(`A aplicação está rodando na porta ${PORT}`));

