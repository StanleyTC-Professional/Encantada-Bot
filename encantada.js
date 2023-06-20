const Discord = require('discord.js');
const piadas = require('./piadas.js');
require('dotenv').config();
const token = process.env.TOKEN;

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });


client.once('ready', () => {
    console.log('Ready!');

    const { REST } = require('@discordjs/rest');
    const { Routes } = require('discord-api-types/v9');

    const commands = [ // Irei colocar todos os comandos em uma array com esse nome, onde cada comando será um objeto {}, com chave-valor, no caso name-description
    {
        name: 'piada',
        description: 'Obtenha uma piada engraçada do bot.',
    },
    {
        name:'ping',
        description: 'Obtenha o ping do bot'
    }
    ];

    const rest = new REST({ version: '9' }).setToken(token);

    (async () => {
    try {
        await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands },
        );


    } catch (error) {
        console.error(error);
    }
    })();


      
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;   
  
    const { commandName } = interaction;
  
    if (commandName === 'piada') {
      // Lógica para obter uma piada engraçada (você pode usar uma API ou um array de piadas)
        const joke = piadas[Math.floor(Math.random() * piadas.length)]; // ele percorrerá uma lista que é a lista de piadas e escolherá uma aleatória com math.random()
        await interaction.reply(joke);
    }

    if (commandName === 'ping'){
        const ping = '${Math.round(client.ws.ping)}ms';
        await interaction.reply(`Ping: ${ping}`);
        
    }
  });
  

client.login(token);