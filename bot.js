const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    
    if(err) console.log(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if jsfile.length <= 0){
        console.log("Nie znaleziono komendy");
        return;
    }
    
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(${f} załadowany!);
        bot.commands.set(props.help.name, props);
    });
    
});

client.on('ready', () => {
    client.user.setStatus('idle')
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
