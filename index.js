const config = require('./config.json');
const { getCoinGeckoData } = require('./services/coingecko');
const { getStoredATH, updateATH } = require('./services/athStorage');
const { sendNotification } = require('./services/notification');
const { createNotification } = require('./utils/embedFormatter');
const { sendErrorMessage } = require('./utils/errorHandler');

const notifyChannel = async () => {
	try {
		const embedInfoBoard = { fields: [] };
		const cryptoData = await getCoinGeckoData();
		let btcPrice = cryptoData.data["bitcoin"]["eur"];
		let btcATH = getStoredATH();

		if (btcPrice > btcATH) {
			updateATH(btcATH, btcPrice);
		}

		createNotification(cryptoData, embedInfoBoard);
		sendNotification(embedInfoBoard, btcPrice, btcATH);
	} catch (err) {
		console.error(err);
		sendErrorMessage(err);
	}
}

const delay = async () => {
	const interval = config.interval * 60 * 1000;
	return new Promise(resolve => setTimeout(resolve, interval));
}

(async () => {
	while (true) {
		await notifyChannel();
		await delay();
	}
})();