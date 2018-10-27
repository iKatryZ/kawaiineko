const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouve pas le joueur");
    let kReason =  args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBER")) return message.channel.send("Pas autoriser");
    if(tomute.hasPermission("KICK_MEMBER")) return message.reply("Je ne peut le kick");


    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#fff200")
    .addField("Joueur kicker", `${kUser}`)
    .addField("Kicker par", `<@${message.author.id}>`)
    .addField("Kicker dans le channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "moderation");
    if(!kickChannel) return message.channel.send("Je trouve pas le channel moderation");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}


module.exports.help = {

    name:"kick"
}