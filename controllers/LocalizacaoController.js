const Localizacao = require('../models/localizacao');
const Local = require('../models/localizacao');

const addLocal = async (req, res) => {
	const {nome, lat, lng} = req.body;

	const geometria = {type: 'Point', coordinates:[lng, lat]}

	const local = Local.build({nome, geometria});
	local.save().then(() => {
		res.status(200).send('Localização salva!');
	}).catch(err => {
		res.status(400).send('Falha ao salvar!');
	})
};

const getPontos = async (request, response) =>{
    const pessoas = await Localizacao.findAll();
    response.status(200).send(pessoas);
}

const sync = async () =>{
	await Local.sync();
	console.log('Banco de dados sincronizado!');
}

module.exports = {addLocal, getPontos, sync};
