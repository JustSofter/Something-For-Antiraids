const { Client, Intents, Collection, MessageEmbed, Util } = require("discord.js");
const fs = require("fs");
require('dotenv').config();
const client = new Client({
  intents: 32767,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { comandos } = require(`${__dirname}/src/utils/handler/comandos.js`);
const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);

comandos(fs, client, Collection)
eventos(fs, client, MessageEmbed, Util)

client.login(process.env.TOKEN);
