const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setStatus('idle')
        console.log("[STATUS] Status załadowany!");
    client.user.setGame('nope')
        console.log("[STATUS] Szyld załadowany!");
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
