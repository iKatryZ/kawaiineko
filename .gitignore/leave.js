const Discord = require("discord.js");


exports.run = async (client, message) => {
    if (!message.member.voiceChannel) { return message.channel.send("Tu n'ai pas dans mon channel"); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(``);
  };
  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "leave",
    description: "Quittez le channel",
    usage: "",
    usageDelim: "",
  };
  
