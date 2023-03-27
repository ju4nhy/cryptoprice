const Discord = require('discord.js');
const config = require('../config.json');
const { createAthNotification } = require('../utils/embedFormatter')

const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);

const sendNotification = (embedInfoBoard, btcPrice, btcATH) => {
	webhookClient.send({embeds: [embedInfoBoard]}); 

	if (btcPrice > btcATH) {
		webhookClient.send({embeds: [createAthNotification(btcPrice)]});
	}
}

module.exports = {
	sendNotification
}