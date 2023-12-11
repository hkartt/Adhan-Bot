const { SlashCommandBuilder} = require('discord.js');
fn = require('../functions.js');
fs = require('fs')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('run')
        .setDescription('Get the next prayer time'),

    async execute(interaction){
        var fs = require('fs');

        fs.readFile('../data/data.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            
            obj = JSON.parse(data); //now it an object
            
            if (!obj.hasOwnProperty(interaction.guildId)) {
                interaction.reply("You have not set up your location yet. Please do so to use this command")
            } else {
                city = obj[interaction.guildId].city;
                country = obj[interaction.guildId].country;
                fn.nextPrayer(interaction.createdAt, city, country).then((obj) => {
                    date = interaction.createdAt.getHours() + ":" + interaction.createdAt.getMinutes();
                    fn.timeDifference(Object.values(obj)[0], date).then((time) => {
                        interaction.reply("The next prayer is " + Object.keys(obj)[0] + " in " + time + " milliseconds");
                    });
                });
            }
            
            
            }});
        
    }
}
