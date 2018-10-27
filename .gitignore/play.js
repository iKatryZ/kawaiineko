const Discord = require("discord.js");
const yt = require("ytdl-core");

exports.run = async (bot, message) => {
    const handler = bot.queue.get(message.guild.id);
    if (!handler) { throw `Je met mon son avec ${msg.guild.settings.prefix}queueadd [Youtube URL]`; }
  
    if (!msg.guild.voiceConnection) {
      await client.commands.get("join").run(client, msg);
      if (!msg.guild.voiceConnection) { return; }
      return this.run(client, msg);
    }
  
    if (handler.playing) { 
      if (msg.member.voiceConnection !== msg.guild.voiceConnection) { throw "Je joue déjà sur un autre channel"; }
  
      throw "Je suis déjà dans ton channel";
    } else { handler.playing = true; }
      
    (function play(song) {
      if (song === undefined) {
        return msg.channel.send("Tout tes song on été joué").then(() => {
        handler.playing = false;
        return msg.member.voiceChannel.leave();
      });
    }
      
    msg.channel.send(`📻 Je joue le son ${song.requester}: **${song.title}**`).catch(err => client.emit("log", err, "error"));
    
    return msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes: 2 })
      .on("end", () => { setTimeout(() => {
        handler.songs.shift();
        play(handler.songs[0]);
      }, 100); })
    
      .on("error", err => msg.channel.send(`error: ${err}`).then(() => {
        handler.songs.shift();
        play(handler.songs[0]);
      }));
    }(handler.songs[0]));
      
    return null;
  };
  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: []
  };
  
  exports.help = {
    name: "play",
    description: "Play music",
    usage: "[songURL:str]"
  };