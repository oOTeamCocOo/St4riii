const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('la sécurité de ton serveur !',{type: 'WATCHING'})
});

client.login(process.env.TOKEN)

;

client.on("message" , message => {
    if(message.content === "Hey"){
        message.reply("```Bonjour, mon créateur, c'est oOTeamCocOo, je suis déstiné à apporter la protection de tous !```");
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à dis Hey")
        
    }
});       

client.on("message" , message => {
    if(message.content === "*invite"){
        var invite_embed = new Discord.RichEmbed()
        .setColor('01fa41')
        .setTitle('```invitation```')
        .setThumbnail('https://discordapp.com/channels/568369085595779074/569125583787786241/569605069767573600://discordapp.com/channels/568369085595779074/569125583787786241/569599932210872320')
        .setDescription('L invitation t a bien étais envoyé en privé !')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(invite_embed)
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à demander l'invite")
        
    }
});




