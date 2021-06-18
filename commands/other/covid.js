const Discord = require('discord.js');
const api = require('covidapi')
// install the covid package
const fetch = require('node-fetch');
// installing the package to the fetch links


module.exports.run = async (Client, message, args, prefix) => {

        let countries = args.join(" ");
        // the country = =covid country

 		//info about wrong command usage
        const noArgs = new Discord.MessageEmbed()
        .setTitle('Invalid Command Usage')
        .setColor(0xFF0000)
        .setDescription('You Can Try Using **!covid all** or **ovid (coutry)**')
		// works if user type "!covid"
        if(!args[0]) return message.channel.send(noArgs);


		
  		// if some1 typed !covid all it will send the worldwide covid cases
        if(args[0] === "all"){
          	//api things
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
              	//taking info about stats into vars
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                //covid info for world
                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            })


        // covid info about country
        } else {
          	//api things
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              	//data for country
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                // embed which show info
                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                message.channel.send(embed)
            }).catch(e => {
                //info about wrong coutry
                return message.reply('Invalid country provided')
            })
        }
    }

    


module.exports.help = {
    name: `covid`,
    aliases: ['corona', 'coronavirus']
};