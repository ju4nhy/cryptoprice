const Discord = require('discord.js');
const config = require('../config.json');

const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);

const sendErrorMessage = (err) => {
    console.error(err);
    webhookClient.send(`**Error:** **${err.name}** - ${err.message}`);
};

module.exports = { 
    sendErrorMessage
}