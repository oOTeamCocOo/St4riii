const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('la sécurité de ton serveur !',{type: 'WATCHING'})
});

client.login(process.env.TOKEN)

;



client.on('guildMemberAdd', member =>{
    let join_embed = new Discord.RichEmbed()
        .setTitle('BIENVENU')
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('569122701692633108').send(join_embed)
    member.addRole('569114748747120650')
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
        member.guild.channels.get('569114748747120650')
        }
 );



