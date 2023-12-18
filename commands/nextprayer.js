const { SlashCommandBuilder} = require('discord.js');
fn = require('../functions.js');
fs = require('fs')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nextprayer')
        .setDescription('Get the next prayer time'),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\nextprayer")
        var fs = require('fs');

        fs.readFile('../data/data.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            
            // get data of all guilds from the json file
            obj = JSON.parse(data); 
            
            // check if the guild has set up their location. if not, tell them to do so
            if (!obj.hasOwnProperty(interaction.guildId)) {
                interaction.reply("You have not set up your location yet. Please do so to use this command")
            } else {
                city = obj[interaction.guildId].city;
                country = obj[interaction.guildId].country;
                time = interaction.createdAt.getHours() + ":" + interaction.createdAt.getMinutes();
                fn.nextPrayer(time, city, country).then((obj) => {
                    interaction.reply("The next prayer is " + Object.keys(obj)[0] + " at " + Object.values(obj)[0]);
                });
            }
            
            
            }});
        
    }
}
