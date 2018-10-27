const Discord = require("discord.js");

exports.run = async (bot, message) => {
    const voiceChannel = message.member.voiceChannel;
    if (!message.member.voiceChannel) { return message.channel.send("Idiot t'es pas dans un channel voice :x"); }
  
    const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
    if (permissions.has("CONNECT") === false) { return message.channel.send("J'ai pas la permission"); }
    if (permissions.has("SPEAK") === false) { return message.channel.send("Demandez la permission au administrateur"); }
  
    message.member.voiceChannel.join();
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
    name: "join",
    description: "Rejoindre un channel voice",
    usage: "",
    usageDelim: "",
  };