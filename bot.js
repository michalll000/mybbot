let bot = require("discord.js");
var Discord = new bot.Client();
const request = require('snekfetch');

// ThIs EvEnT iS vErY ImPoRtAnT bEcAuSe At ThIs MoMeNt bOt St						aRtS ReCeIvEinG




/* eVeRyThInG fRoM tHiS cOrD */
Discord.on('ready', () => {
  	console.log(`Logged in as ${Discord.user.tag}!`);
});

Discord.on(	'guildMemberAdd'	, function		(member) {
		for (var i = 0; i < 10; i++) {
												member
					.client
			.guilds
													.get(member.guild.id)
					.members
									.get(member.id)
							
		.send('Welcome in ' + member.guild.name + '!');
}
});



// THIS  MUST  BE  THIS  WAY
Discord.login(process.env.BOT_TOKEN);

