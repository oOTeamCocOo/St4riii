const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('la sécurité de ton serveur !',{type: 'WATCHING'})
});

client.login(process.env.TOKEN)

client.on("message" , message => {
    if(message.content === prefix + "help") {
        var info_embed = new Discord.RichEmbed()
        .setColor('e70647')
        .setTitle('```Voici la liste de commande```\n\n-------------------------------------------')
        .setDescription('*help: liste de commande\n\n*blacklist: avoir la liste noire\n\n*invite: avoire lien invitation bot\n\n*info: info du jour\n\n\n-------------------------------------------\n\n [ADMINISTRATION]\n\n*securise: activer mode sécurité\n\n*clear [NOMBRE] effacer un lot de message\n\n\n-------------------------------------------\n\n [OPTIONNEL]\n\n *star1502: Savoir l histoire de ce YouTubeur\n\n\n-------------------------------------------')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(info_embed)
        message.author.sendMessage('```Tu as demander le help !\nN hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à demander help")
    }
});


client.on("message" , message => {
    if(message.content === "*blacklist"){
        message.reply(" ```Voici les gens possédant des idées noire:``` @Chrisopeer Davies et @Jessica Davies");
        console.log("Blacklist demandé")
    }
});

client.on("message" , message => {
    if(message.content === "*securise"){
        message.reply("```Le mode securité est bientôt disponible, en attendant, fais : *aie```");
        console.log("Mode securité demander")
    }
});

client.on("message" , message => {
    if(message.content === "Wsh"){
        message.reply("```Je n'aime pas la façons dont tu parle ! [Attention]```");
        console.log("Un utilisateur à dis WESH, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Tg"){
        message.reply("```[WARNING] On ne parle pas comme ça à ses camarades DISCORD !```");
        console.log("Un utilisateur à dis TAGEULE, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Slt"){
        message.reply("```Bonjour, mon créateur, c'est oOTeamCocOo, je suis déstiné à apporter la protection de tous !```");
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("un utilisateur à dis salut")
    }
});

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




client.on('message' , message => {
    if(message.content === prefix +'reglement') {
        var reglement_embed = new Discord.RichEmbed()
        .setColor('f3f800')
        .setTitle('```REGLEMENT```')
        .setDescription('MON PREFIX EST "*" \n\n1) Pas de everyone sur notre serveur.\n\n 2) Les insultes sont interdites et seront sanctionnés.\n\n 3) Pas de pubs pour vos serveurs discord.\n\n 4) Ajouter le not avec la commande *invite.\n\n 5) Les liens inappropriés comme des screamers et des sites pornographiques sont automatiquement supprimés.\n\n 6) Ne pas spammer/flood, utiliser trop de caractères spéciaux ou encore écrire de longs messages en MAJUSCULES.\n\n 7) Respectez tous les membres de façon égale et soyez gentils les uns envers les autres. Si vous avez des problèmes avec quelqu un ou que vous vous sentez harcelé, contactez un membre du staff.\n\n\n-------------------------------------------')
        .setFooter('réglement 2019')
        .setTimestamp()
        message.channel.sendMessage(reglement_embed)
        console.log('le reglement à été d
