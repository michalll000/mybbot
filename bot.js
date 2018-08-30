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
bot.on("message", async message => {
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
});























// [SYSTEM] Blokowanie używania na priv i przez BOTy0
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;



// [SYSTEM] Wysyłanie wiadomości
  let prefix = "."
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1); //def 1

	if(cmd === `m!admincmds`){
	    let silikon = bot.user.displayAvatarURL;
	    let cmda = new Discord.RichEmbed()
	    .setDescription("TC BOT")
	    .setColor("#8700ff")
	    .setThumbnail(silikon)
	    .addField("Zarządzanie serwerem z TC BOT", "Aby móc zarządzać komendami administratora stwórz rolę 'TC BOT ADMIN' i przydziel ją sobie i administracji serwera.")
	    .addField("tc!admincmds", "Pokazuje to okno z komendami dla administratorów")
	    .addField("tc!wyrzuć <powód (opcjonalnie)>", "Wyrzuca osobę ze serwera")
	    .addField("tc!banuj <powód (opcjonalnie)>", "Wyrzuca i blokuje osobę ze serwera")
	    .addField("tc!purge <liczba (od 2 do 100)>", "Usuwa podaną liczbę wiadomości z kanału");

	    return message.channel.send(cmda)
	  }






  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

