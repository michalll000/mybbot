const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();


client.on('ready', () => {
    client.user.setStatus('idle')
        console.log("[STATUS] Status załadowany!");
    client.user.setPresence({ activity: { name: 'test' }, status: 'idle' })
        console.log("[STATUS] Szyld załadowany!");
});

//>>> KOMENDY <<<
let prefix = "."
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1); //def 1

if(args) {
    if(message.author.bot)
      console.log(`[SERWER]: ${message.member.guild} | #${message.channel.name} ([BOT] ${message.author.username}):`, sayMessage);
    else if (message.author.bot === false)
      console.log(`[SERWER]: ${message.member.guild} | #${message.channel.name} (${message.author.username}):`, sayMessage);

};























// [SYSTEM] Blokowanie używania na priv i przez BOTy0
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;



// [SYSTEM] Wysyłanie wiadomości
  let prefix = "."
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1); //def 1









  // PING
  if(cmd === `${prefix}ping`) {
     // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
     // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     const m = await message.channel.send("Ping?");
     m.edit(`Pong! Czas od komendy do odpowiedzi: ${m.createdTimestamp - message.createdTimestamp}ms. Pomiar TC BOT to ${Math.round(bot.ping)}ms`);
   }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

