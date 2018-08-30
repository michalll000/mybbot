const Discord = require("discord.js");
const fs = require("fs");
const api = `dc6zaTOxFJmzC`;


const bot = new Discord.Client({disableEveryone: true});

// ThIs EvEnT iS vErY ImPoRtAnT bEcAuSe At ThIs MoMeNt bOt St						aRtS ReCeIvEinG




/* eVeRyThInG fRoM tHiS cOrD */
bot.on('ready', () => {
  console.log(`[STATUS] Zalogowano jako ${bot.user.tag}!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;



// [SYSTEM] Wysyłanie wiadomości
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1); //def 1




// >>> KOMENDY <<<
  //if(cmd) {
    //console.log(`[SERWER]: ${message.member.guild} (${message.author.username}):`, cmd);
  //};




  // PING
  if(cmd === `${prefix}ping`) {
     // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
     // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     const m = await message.channel.send("Ping?");
     m.edit(`Pong! Czas od komendy do odpowiedzi: ${m.createdTimestamp - message.createdTimestamp}ms. Pomiar TC BOT to ${Math.round(bot.ping)}ms`);
   }

   // Powiedz (usuwa i pisze bot)
  if(cmd === `${prefix}powiedz`) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    //message.channel.send("3Kropek ssie");
    message.channel.send(sayMessage);

   }

// Pomoc
  if(cmd === `${prefix}admincmds`){
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

// Generowanie zaproszenia





// Kick
  if(cmd === `${prefix}wyrzuć`) {
    if(!message.member.roles.some(r=>["TC BOT ADMIN"].includes(r.name)) )
      return message.reply("przepraszam! Nie masz uprawnień do używania tej komendy! Wpisz tc!admincmds");
      message.delete().catch(O_o=>{});
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("proszę wskazać prawidłową osobę na tym serwerze!");
      message.delete().catch(O_o=>{});
    if(!member.kickable)
      return message.reply("nie mogę wyrzucić tej osoby! Czyżby ona miała wyższą rolę ode mnie? Posiadam uprawnienia administratora?");
      message.delete().catch(O_o=>{});
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "[nie podano]";
    await member.kick(reason)
      .catch(error => message.reply(`niestety! Nie mogę tego zrobić! Błąd : ${error}`));
        message.delete().catch(O_o=>{});
    message.reply(`${member.user.tag} został wyrzucony przez ${message.author.tag} z powodu: ${reason}`);
    message.delete().catch(O_o=>{});
  }

// Ban
  if(cmd === `${prefix}banuj`) {
    if(!message.member.roles.some(r=>["TC BOT ADMIN"].includes(r.name)) )
      return message.reply("przepraszam! Nie masz uprawnień do używania tej komendy! Wpisz tc!admincmds");
      message.delete().catch(O_o=>{});
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("proszę wskazać prawidłową osobę na tym serwerze!");
      message.delete().catch(O_o=>{});
    if(!member.bannable)
      return message.reply("nie mogę zbanować tej osoby! Czyżby ona miała wyższą rolę ode mnie? Posiadam uprawnienia administratora?");
      message.delete().catch(O_o=>{});
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "[nie podano]";
    await member.ban(reason)
      .catch(error => message.reply(`niestety! Nie mogę tego zrobić! Błąd : ${error}`));
        message.delete().catch(O_o=>{});
    message.reply(`${member.user.tag} został zbanowany przez ${message.author.tag} z powodu: ${reason}`);
    message.delete().catch(O_o=>{});
  }

// Masowe usuwanie wiadomości
  if(cmd === `${prefix}purge`) {
    if(!message.member.roles.some(r=>["TC BOT ADMIN"].includes(r.name)) )
      return message.reply("przepraszam! Nie masz uprawnień do używania tej komendy! Wpisz tc!admincmds");
      message.delete().catch(O_o=>{});
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("proszę wskazać liczbę od 2 do 100 wiadomości do usunięcia!");
      message.delete().catch(O_o=>{});
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    message.delete().catch(O_o=>{})
      .catch(error => message.reply(`niestety! Nie mogę tego zrobić! Błąd : ${error}`));
      message.delete().catch(O_o=>{});
    }

// RANDOM :D
  if(cmd === `${prefix}suggest`) {
    return message.channel.send("bypass!!!1");
    message.delete().catch(O_o=>{});
  }



  if(cmd === `io`) {
    message.delete().catch(O_o=>{});
  }













// Lista komend
  if(cmd === `${prefix}cmds`){
    let cmds = bot.user.displayAvatarURL;
    let cmdz = new Discord.RichEmbed()
    .setDescription("Komendy do TC BOT")
    .setColor("#8700ff")
    .setThumbnail(cmds)
    .addField(">>> Informacje <<<", "Co jakiś czas będą wychodzić nowe komendy!")
    .addField("tc!", "Prefix dla TC BOT")
    .addField("tc!admincmds", "Komendy administratora")
    .addField("tc!ping", "Mierzy szybkość TC BOT")
    .addField("tc!powiedz <tekst>", "TC BOT usuwa tą wiadomość z komendą i pisze własną z daną treścią")
    .addField("tc!elo", "BOT przywita się z tobą **elo** (tak na testy czy działa lol)")
    .addField("tc!info", "Informacje na temat TC BOT")
    .addField("tc!serwer", "Informacje o serwerze")
    .addField("tc!profil", "Twój profil TC BOT")
    .addField("tc!zapro", "Tworzy zaproszenie do serwera")

    return message.channel.send(cmdz)
  }

// tc!
  if(cmd === `${prefix}`){
    let cmdz = new Discord.RichEmbed()
    .setDescription("TC BOT")
    .setColor("#ff0000")
    .addField("Szukasz komend do TC BOT?", "Wpisz tc!cmds")

    return message.channel.send(cmdz)
  }

// tc!help to zuee
  if(cmd === `${prefix}help`){
    let cmdz = new Discord.RichEmbed()
    .setDescription("TC BOT")
    .setColor("#ff0000")
    .addField("Komenda została przeniesiona!", "Wpisz tc!cmds")

    return message.channel.send(cmdz)
  }


// Rozmowa - elo
  if(cmd === `${prefix}elo`){
    return message.channel.send("**elo**");
  }








































  if(cmd === `GG`){
    if(message.author.bot)
      return message.channel.send("**GG!!1**");
  }




// Informacje o BOT
  if(cmd === `${prefix}info`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informacje o TC BOT")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Autor", "*michalll000#9156*")
    .addField("Działa od", bot.user.createdAt)
    .addField("Użytkownicy", bot.users.size)
    .addField("Kanały", bot.channels.size)
    .addField("Serwery", bot.guilds.size)
    .addField("Obecnie na serwerze", message.guild.name);

    return message.channel.send(botembed)
  }

//


// Informacje o serwerze
  if(cmd === `${prefix}serwer`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informacje na temat serwera")
    .setColor("#4286f4")
    .setThumbnail(sicon)
    .addField("Nazwa serwera", message.guild.name)
    .addField("Stworzony", message.guild.createdAt)
    .addField("Dołączyłeś", message.member.joinedAt)
    .addField("Liczba członków", message.guild.memberCount)
    .addField("Kanały", message.guild.channels.size);

    return message.channel.send(serverembed);
  }

// Profil użytkownika
  if(cmd === `${prefix}profil`){
    let picon = message.author.displayAvatarURL;
    let profilembed = new Discord.RichEmbed()
    .setDescription("TC BOT")
    .setColor("#00ff2a")
    .setThumbnail(picon)
    .addField("Profil użytkownika", message.author.username)
    .addField("Na tym koncie od", message.author.createdAt)
    .addField("Obecnie na serwerze", message.guild.name)
    .addField("Na serwerze od", message.member.joinedAt)
    .addField("ID:", message.author.id);

    return message.channel.send(profilembed);
  }

});




// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);

