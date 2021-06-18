const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

//clear 99 messeges in channel + command
  message.channel.bulkDelete(100)
}

    

module.exports.help = {
    name: `clear`,
    aliases: []
};
