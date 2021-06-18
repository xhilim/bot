const discord = require('discord.js');

module.exports.run = async (Client, message, args, prefix) => {

    // the perm. that the member need it to ban someone
    if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR'))
    //check permissions
    message.channel.send("You don't have permission to use that command.");

    else {
      if (!message.guild) return;
  
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if (user) {
  
        const member = message.guild.member(user);
  
        if (member) {
  
          member

      
            .ban({
                // the reason
              reason: 'They were bad!',
            })
            .then(() => {
          
              message.reply(`Successfully banned`);
            })
      
            .catch(err => {
            
              message.reply('I was unable to ban the member');
  
              console.error(err);
            });
        } else {
   
          message.reply("That user isn't in this guild!");
        }
      } else {
       //if user don't have perm
        message.reply("You didn't mention the user to ban!");
      }
  };
}

module.exports.help = {
    name: `ban`,
    aliases: []
};
