const fs = require('fs');

const getStoredATH = () => {
	const storedAth = fs.readFileSync('ath.json', 'utf8');
	const json = JSON.parse(storedAth);
	const ath = json.ath;
	return ath;
};

const updateATH = (btcATH, btcPrice) => {
	const newATH = {
	  "ath": btcATH
	}
	newATH.ath = btcPrice
	fs.writeFileSync('ath.json', JSON.stringify(newATH));
};

module.exports = {
    getStoredATH,
    updateATH
}