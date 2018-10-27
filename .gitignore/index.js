const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const GoogleImages = require('google-images');
const { Client, RichEmbed } = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const embed = new Discord.RichEmbed()
const fs = require("fs");
const moment = require('moment');
const {get} = require("snekfetch");
const request = require("request-promise-native");
const request2 = require('node-superfetch');
const path = require('path');
moment.locale();
const time = moment().format('Do MMMM YYYY, h:mm:ss')
const PREFIX = '<'; // Command Prefix

  const NUM_KISS = 11;
// Kiss Gifs
var kiss = [
  {link:'https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif'},
  {link:'https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif'},
  {link:'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif'},
  {link:'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif'},
  {link:'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif'},
  {link:'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif'},
  {link:'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif'},
  {link:'https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif'},
  {link:'https://media.giphy.com/media/2iel2Q9wqvpRNwmjBu/giphy.gif'},
  {link:'https://media.giphy.com/media/5QPcIcqhJP28nsS3U7/giphy.gif'},
  {link:'https://media.giphy.com/media/9V8RosU8VOHQFSvIe2/giphy.gif'}
];


const NUM_HUG = 12;
// Hug Gifs
var hug = [
  {link:'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif'},
  {link:'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif'},
  {link:'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif'},
  {link:'https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif'},
  {link:'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif'},
  {link:'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif'},
  {link:'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif'},
  {link:'https://media.giphy.com/media/8PadkEgsQYKzOuWo5Y/giphy.gif'},
  {link:'https://media.giphy.com/media/9oIPX8O23rdXKxjeCK/giphy.gif'},
  {link:'https://media.giphy.com/media/BL59kdZuvMUjuzOooB/giphy.gif'},
  {link:'https://media.giphy.com/media/igGz10YIffd4wo4zey/giphy.gif'},
  {link:'https://media.giphy.com/media/2bVjwBuQ7f4FpMvjhP/giphy.gif'}
];

const NUM_CRY = 11;
// cry Gifs
var cry = [
  {link:'https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif'},
  {link:'https://media.giphy.com/media/mvRwcoCJ9kGTS/giphy.gif'},
  {link:'https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif'},
  {link:'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif'},
  {link:'https://media.giphy.com/media/sVIaa2ratBvi/giphy.gif'},
  {link:'https://media.giphy.com/media/E3ZOkHvB1ssYU/giphy.gif'},
  {link:'https://media.giphy.com/media/3gLbNUkuEIylNp7NUT/giphy.gif'},
  {link:'https://media.giphy.com/media/5kFJklGusOASpmfOIg/giphy.gif'},
  {link:'https://media.giphy.com/media/8OJkSkMVaBOJ0CE3Qc/giphy.gif'},
  {link:'https://media.giphy.com/media/620adE3mwqBEiE7gWa/giphy.gif'},
  {link:'https://media.giphy.com/media/63LTO9iV19eoEDvnuW/giphy.gif'}
];

const NUM_PATS = 11;
// PATS
var pats = [
  {link:'https://media.giphy.com/media/SvQ7tWn8zeY2k/giphy.gif'},
  {link:'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif'},
  {link:'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif'},
  {link:'https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif'},
  {link:'https://media.giphy.com/media/lZnEy2UefUZvq/giphy.gif'},
  {link:'https://media.giphy.com/media/1Ai7HFKaPYct3rk1L5/giphy.gif'},
  {link:'https://media.giphy.com/media/XtjpLndJnOHsWvKBly/giphy.gif'},
  {link:'https://media.giphy.com/media/pjd0MwbIOV8L2DVSgl/giphy.gif'},
  {link:'https://media.giphy.com/media/pObTOo9giDzpT6ODfU/giphy.gif'},
  {link:'https://media.giphy.com/media/3gT7NuSYcq5Zu6fXy8/giphy.gif'},
  {link:'https://media.giphy.com/media/YFI1dCuK4HVGYPWl6A/giphy.gif'}
];


const NUM_SLAP = 11;
// SLAP
var slap = [

  {link:'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif'},
  {link:'https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif'},
  {link:'https://media.giphy.com/media/yfrwZqRvJ5WFy/giphy.gif'},
  {link:'https://media.giphy.com/media/XriT1FPiR1RRe/giphy.gif'},
  {link:'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif'},
  {link:'https://media.giphy.com/media/5WkziI2EF6B5mi1PNh/giphy.gif'},
  {link:'https://media.giphy.com/media/79klSyxXYSIybcgFGp/giphy.gif'},
  {link:'https://media.giphy.com/media/5zkSWaWEqQuPuuvbS0/giphy.gif'},
  {link:'https://media.giphy.com/media/1wQOUcW6I7T4kBTK1N/giphy.gif'},
  {link:'https://media.giphy.com/media/LwDqKmntOgh2ZEXKdU/giphy.gif'},
  {link:'https://media.giphy.com/media/XoyiaM1aWrnauStFHb/giphy.gif'}

];


const NUM_CUDDLE = 10;
// CUDDLE
var cuddle = [

    {link:'https://media.giphy.com/media/QlFyrikSI01Fe/giphy.gif'},
    {link:'https://media.giphy.com/media/B1DnJoLICjV45eRXSO/giphy.gif'},
    {link:'https://media.giphy.com/media/eMpDBxxTzKety/giphy.gif'},
    {link:'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif'},
    {link:'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif'},
    {link:'https://media.giphy.com/media/ftdiU0FWAtU54gs4PM/giphy.gif'},
    {link:'https://media.giphy.com/media/3d63PZ0NDYmkHstJGF/giphy.gif'},
    {link:'https://media.giphy.com/media/1QfhAz3hHNhWXUgBwi/giphy.gif'},
    {link:'https://media.giphy.com/media/jKZ0k0T1HQILfgKVnc/giphy.gif'},
    {link:'https://media.giphy.com/media/3XwciBXtR2ZZFQNBBx/giphy.gif'}

];


const NUM_DANCE = 14;
// DANCE
var dance = [
  
  {link:'https://media.giphy.com/media/oTiMS5tKgDSKY/giphy.gif'},
  {link:'https://media.giphy.com/media/1RbzQSlu5AO6k/giphy.gif'},
  {link:'https://media.giphy.com/media/HZboJ5Pkti9k4/giphy.gif'},
  {link:'https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif'},
  {link:'https://media.giphy.com/media/b7l5cvG94cqo8/giphy.gif'},
  {link:'https://media.giphy.com/media/aRjlzL31lrWDe/giphy.gif'},
  {link:'https://media.giphy.com/media/Hs1ZdBBpaHO9y/giphy.gif'},
  {link:'https://media.giphy.com/media/9gxhLXyJXqAhi/giphy.gif'},
  {link:'https://media.giphy.com/media/rpHo0ea4issOQ/giphy.gif'},
  {link:'https://media.giphy.com/media/Zj7hT5EvqwePK/giphy.gif'},
  {link:'https://media.giphy.com/media/ZlyZkzEkTyeTm/giphy.gif'},
  {link:'https://media.giphy.com/media/a6pzK009rlCak/giphy.gif'},
  {link:'https://media.giphy.com/media/M5yyzCim2A6li/giphy.gif'},
  {link:'https://media.giphy.com/media/NB59B0xtA9wc0/giphy.gif'}

];

const NUM_BLUSH = 10;
// BLUSH
var blush = [

  {link:'https://media.giphy.com/media/BctJjhuGS57HKjHKG3/giphy.gif'},
  {link:'https://media.giphy.com/media/khtqCwjzDajAMI27am/giphy.gif'},
  {link:'https://media.giphy.com/media/69ncURGOLVBBEOmcUZ/giphy.gif'},
  {link:'https://media.giphy.com/media/ZxenwZdoFKWbVozopi/giphy.gif'},
  {link:'https://media.giphy.com/media/20xMZmEooc6f39TzIZ/giphy.gif'},
  {link:'https://media.giphy.com/media/cYRabONBpqiXjsoxTg/giphy.gif'},
  {link:'https://media.giphy.com/media/2tRqcmllOYfYDY3JPx/giphy.gif'},
  {link:'https://media.giphy.com/media/lwjBzAKuFZQVnwSp4p/giphy.gif'},
  {link:'https://media.giphy.com/media/2wYqu8ylSamv2rFRwW/giphy.gif'},
  {link:'https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif'}

];




const NUM_LICK = 1;
// BLUSH
var lick = [

  {link:'https://media.giphy.com/media/3joPQJ76eO6wb4HmbJ/giphy.gif'}

];

const NUM_TESTAT = 1;
// testat
var testat = [

  {link:'https://media.giphy.com/media/rY3YFw3JfUK88/giphy.gif'}

];







var servers = {};



bot.on("guildMemberAdd", function(member) {
member.guild.channels.find("name", "welcome").send(member.toString() + " Bienvenue dans Idk !");

member.addRole(member.guild.roles.find("name", "Arrivant")).then(() => {
console.log(`${MessageChannel.author.username}` + "à rejoint et à été giver le rôle arrivant");
})

});

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  
  });
  

bot.on('ready', () => {
    console.log(`Xana logged in ${bot.user.username}!`);
    bot.user.setPresence({ game: {name : 'En developpement :x', type: 0}});
    bot.user.setUsername("ChatBotté");
  });


bot.on("message", async message => {
  const log = '[' + time + '] Commande executé par ' + message.author + ': '

if(message.author.bot) return;
if(message.channel.type === "dm") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

if (message.content.startsWith(prefix + 'cat')) {
  try {
       get('https://aws.random.cat/meow').then(response => {
             message.channel.send({files: [{attachment: response.body.file, name: `cat.${response.body.file.split('.')[4]}`}]});
             console.log(log + "!cat");
              })
              } catch (e) {
                   console.log('['+time+'] Erreur de !cat');
                   }
                 };


                  
if(message.content.startsWith(prefix + 'pileouface')) {
  var flip = Math.floor((Math.random() * 2) + 1);
  if (flip == 1) {
    message.reply("La pièce est retombé sur face");
  } else if (flip == 2) {
    message.reply("La pièce est retombé sur pile");
  }
}



    if(message.content.startsWith(prefix + 'kiss')) {
    parameters: ['user']
    let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kissUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand =  Math.floor(Math.random() * NUM_KISS);

      embed.setImage(kiss[rand].link)

      message.channel.send(kissUser + " Tu as reçu un bisous de la part de " + message.member, {embed});
    }
  
    if(message.content.startsWith(prefix + 'hug')) {
      parameters: ['user']
      let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!hugUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_HUG);

      embed.setImage(hug[rand].link)

      message.channel.send(hugUser + "Tu as reçu un calin de la part de " + message.member, {embed});

    }

    if(message.content.startsWith(prefix + 'cry')) {
      parameters: []
      var rand = Math.floor(Math.random() * NUM_CRY);

      embed.setImage(cry[rand].link)

      message.channel.send("", {embed});

    }

    if(message.content.startsWith(prefix + 'pats')) {
      parameters: ['user']
      let patsUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!patsUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_PATS);

      embed.setImage(pats[rand].link)

      message.channel.send(patsUser + " Tu as reçu une caresse par " + message.member, {embed});
    }

    if(message.content.startsWith(prefix + 'slap')) {
      parameters: ['user']
      let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!slapUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_SLAP);

      embed.setImage(slap[rand].link)

      message.channel.send(slapUser + " Tu as reçu une claque de la part de " + message.member, {embed});

    }

    if(message.content.startsWith(prefix + 'cuddle')) {
      parameters: ['user']
      let cuddleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!cuddleUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_CUDDLE);

      embed.setImage(cuddle[rand].link)

      message.channel.send(cuddleUser + "Tu as reçu un cuddle par " + message.member, {embed});

    }

    if(message.content.startsWith(prefix + 'dance')) {
      parameters: []
      var rand = Math.floor(Math.random() * NUM_DANCE);

      embed.setImage(dance[rand].link)

      message.channel.send("", {embed});
    }

    if(cmd === prefix + 'help') {
      message.author.send("```--------Idk-------- \nslap - Pour donner une claque à quelqu'un \ndance - Pour dancer \ncuddle - Pour faire un cuddle à quelqu'un \npats - pour caresser quelqu'un \nhug - Pour calinez quelqu'un \nkiss - Pour faire un bisous à quelqu'un \nlick - Lechez quelqu'un (En developpement) \n\n--------Moderation------ \nban - Pour bannir quelqu'un \nwarn - Pour warn quelqu'un \nkick - Pour kick quelqu'un \ntempmute - Pour mutez temporairement quelqu'un \npurge - Pour supprimez les messages souhaitez plus rapidement```");

    }

    if(message.content.startsWith(prefix + 'blush')) {
      parameters: ['user']
      let blushUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!blushUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_BLUSH);

      embed.setImage(blush[rand].link)

      message.channel.send("", {embed});
    }

    if(message.content.startsWith(prefix + 'lick')) {
      parameters: ['user']
      let lickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!lickUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
      var rand = Math.floor(Math.random() * NUM_LICK);

      embed.setImage(lick[rand].link)

      message.channel.send("", {embed});
    }

    if(cmd === prefix + 'unmute') {
      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!toMute) return message.channel.sendMessage("Veuillez mentionnez quelqu'un");

      let role = message.guild.roles.find(r => r.name === "muted")
      
      if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Il n'est pas mute");

      await toMute.removeRole(role);
      message.channel.sendMessage("");

      message.delete();

   }

   if(cmd === prefix + 'avatar') {
    let avatar = message.author.avatarURL;
    let embedavatar = new Discord.RichEmbed()
    .setDescription("Ton avatar ici :")
    .setColor("ff0000")
    .setImage(avatar);

    message.channel.send(embedavatar);
   }

   if(message.content.startsWith(prefix + 'baka')) {
    parameters: ['user']
    let testatUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!testatUser) return message.channel.send("Veuillez mentionnez quelqu'un...");
    var rand = Math.floor(Math.random() * NUM_TESTAT);

    embed.setImage(testat[rand].link)

    message.channel.send("", {embed});
   }
  
  
  

  });




bot.login(botconfig.token)
