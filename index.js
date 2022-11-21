// Dependencias
require('dotenv').config();
const express = require('express');
const LocalizacaoController = require('./controllers/LocalizacaoController');

const PORT = process.env.API_PORT
const app = express();
app.use(express.json());
/*async function  testar() {try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}*/
LocalizacaoController.sync();

// Rotas
app.post('/localizacao', LocalizacaoController.addLocal);

// Porta
app.listen(PORT, console.log(`A aplicação está rodando na porta ${PORT}`));

