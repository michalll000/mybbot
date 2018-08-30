const Discord = require("discord.js");
const fs = require("fs");
const api = `dc6zaTOxFJmzC`;


const bot = new Discord.Client({disableEveryone: true});

// ThIs EvEnT iS vErY ImPoRtAnT bEcAuSe At ThIs MoMeNt bOt St						aRtS ReCeIvEinG




/* eVeRyThInG fRoM tHiS cOrD */
bot.on('ready', () => {
  console.log(`[STATUS] Zalogowano jako ${bot.user.tag}!`);
});





// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);

