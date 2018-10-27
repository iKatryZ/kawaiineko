const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const dogidog = new Discord.RichEmbed()
    .setImage(body.url);

    message.channel.send(dogidog)


}

module.exports.help = {
    name: "dog"
}