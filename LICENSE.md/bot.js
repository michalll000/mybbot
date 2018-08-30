const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const api = `dc6zaTOxFJmzC`;


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



bot.on("message", async message => {

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(); //def 1
  let sayMessage = args.join(" ");


  //>>> KOMENDY <<<
   if(args) {
     if(message.author.bot)
       console.log(`[SERWER]: ${message.member.guild} | #${message.channel.name} ([BOT] ${message.author.username}):`, sayMessage);
     else if (message.author.bot === false)
       console.log(`[SERWER]: ${message.member.guild} | #${message.channel.name} (${message.author.username}):`, sayMessage);
   }

 });





 // [SYSTEM] Blokowanie używania na priv i przez BOTy
 bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;



 // [SYSTEM] Wysyłanie wiadomości
   let prefix = botconfig.prefix;
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1); //def 1









 });




 // [SYSTEM] Logowanie BOTa
 bot.login(process.env.BOT_TOKEN);
