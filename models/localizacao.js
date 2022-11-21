const sequelize = require('sequelize');
const database = require('../database/db');

const Localizacao = database.define('ponto', {
	id:{
		type: sequelize.UUID,
		defaultValue: sequelize.UUIDV4,
		primaryKey: true
	},
	nome:{
		type: sequelize.STRING,
		allowNull: false
	},
	geometria:{
		type: sequelize.GEOMETRY,
		allowNull: false
	}
});

module.exports = Localizacao;
