const Discord = require('discord.js');


const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });


client.once('ready', () => {
    console.log('Ready!');
});


client.login('');