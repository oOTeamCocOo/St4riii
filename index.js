const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "%";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('🎮FORTNITE BATTLE ROYALE🎴 ',{type: 'PLAYING'})
});

client.login(process.env.TOKEN)
