import discord
import os
from dotenv import load_dotenv
load_dotenv()
token = os.getenv('TOKEN')
from random import randint
import respostas




intents = discord.Intents.default()
intents.message_content = True


client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f'Logged on as {client.user}!')

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('encantada'):
        resposta = respostas.sortear(randint(1, 10), message.author)
        await message.channel.send(resposta)




client.run(token)