// Dependencias
require('dotenv').config();
const express = require('express');

const PORT = process.env.API_PORT
const app = express();
app.use(express.json());

// Rotas

app.listen(PORT, console.log(`A aplicação está rodando na porta ${PORT}`));
