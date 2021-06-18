const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {
    
    if(!message.content.startsWith(prefix)) return;

    message.channel.send(`siema, miłej kawusi`)
    
}

module.exports.help = {
    name: `siema`,
    aliases: ["hey", "hi"]
};
