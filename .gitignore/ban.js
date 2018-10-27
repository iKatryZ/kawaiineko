const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Pas autoriser");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peut le ban");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#00a5ff")
    .addField("Joueur banni", `${bUser}`)
    .addField("Banni par", `<@${message.author.id}>`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let moderationchannel = message.guild.channels.find(`name`, "moderation");
    if(!moderationchannel) return message.channel.send("Je ne trouve pas le channel moderation");

    message.guild.member(bUser).ban(bReason);
    moderationchannel.send(banEmbed);
}

module.exports.help = {
    name: "help"
}