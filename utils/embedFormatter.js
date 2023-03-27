const { MessageEmbed } = require('discord.js');

const createNotification = (cryptoData, embedInfoBoard) => {
    for (const i in cryptoData.data) {
		for (const j in cryptoData.data[i]) {	
			embedInfoBoard.fields.push({
                name: i.toUpperCase(), 
                value: "**" + cryptoData.data[i][j].toLocaleString('fi-FI') + "**" + " EUR"
            });
		}	
	}
    sortAlphabetically(embedInfoBoard);
    return embedInfoBoard;
};

const sortAlphabetically = (embedInfoBoard) => {
    embedInfoBoard.fields.sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
};

const createAthNotification = (btcPrice) => {
    const athNotification = new MessageEmbed()
        .setColor(0xFFA500)
        .setTitle('**BITCOIN** HITS NEW **ALL TIME HIGH!**')
        .setDescription("**```1 BTC = " + btcPrice.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }) + '```**')
        .setThumbnail('https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079_1280.png')

    return athNotification;
};

module.exports = { 
    createNotification, 
    createAthNotification 
}