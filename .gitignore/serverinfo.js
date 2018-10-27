const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("ff0000")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Créer en", message.guild.createdAt)
    .addField("Tu as rejoind le", message.member.joinedAt)
    .addField("Membre totale", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}