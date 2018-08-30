const Discord = require('discord.js');
const bot = new Discord.Client();


const bot = new Discord.Client({disableEveryone: true});



// [SYSTEM/C] Status BOTa
bot.on("ready", async() => {
  console.log((`[STATUS]`) + ` ${bot.user.username} startuje z ${bot.users.size} graczami, w ${bot.channels.size} kanałach w ${bot.guilds.size} serwerach`);
  bot.user.setActivity(`.cmds | Na ${bot.guilds.size} serwerach!`, {type: "WATCHING"});
});

bot.on("disconnected", () => {
  console.log(("[STATUS]") + ` ${bot.user.username} odłączony z Discorda`);
});

// Statystyki
bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`[STATUS] Dołączono do serwera ${guild.name} (ID: ${guild.id}). Ten serwer posiada ${guild.memberCount} członków i ${guild.channels.size} kanałów! To już ${bot.guilds.size} serwer!`);
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`[STATUS] Usunięto z któregoś serwera. Teraz BOT jest na ${bot.guilds.size} serwerach!`);
});

// INNE LOGI KONSOLI

bot.on("guildMemberAdd", (member, guild) => {
  console.log(`[NOTIFICATION] ${member.guild.name} | ${member.user.username} dołączył do serwera.` );
});

bot.on("guildMemberRemove", (member, guild) => {
  console.log(`[NOTIFICATION] ${member.guild.name} | ${member.user.username} wyszedł z serwera.` );
});



bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

 // [SYSTEM] Logowanie BOTa
 bot.login(process.env.BOT_TOKEN);
