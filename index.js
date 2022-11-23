// Dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const LocalizacaoController = require('./controllers/LocalizacaoController');

const PORT = process.env.API_PORT
const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.post('/localizacao', LocalizacaoController.addLocal);

// Porta
app.listen(PORT, console.log(`A aplicação está rodando na porta ${PORT}`));

app.get('/pontos', LocalizacaoController.getPontos);

LocalizacaoController.sync();