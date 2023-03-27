
const CoinGecko = require('coingecko-api');
const config = require('../config.json');
const sendErrorMessage = require('../utils/errorHandler.js')

const CoinGeckoClient = new CoinGecko();

const getCoinGeckoData = async () => {
	try {
		const cryptoData = await CoinGeckoClient.simple.price({
			ids: config.watchlist,
			vs_currencies: config.compare
		});
		return cryptoData;
	} catch(err) {
        sendErrorMessage(err);
		throw new Error('Failed to get coin data');
	}
};

module.exports = { 
	getCoinGeckoData 
}