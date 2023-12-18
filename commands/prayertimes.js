const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
fn = require('../functions.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('prayertimes')
    .setDescription('List all prayer times for the day.'),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\prayertimes")
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
                fn.citycountry(city, country, 2).then((timings) => {
                    // create embed of prayer times
                    const embed = new EmbedBuilder()
                        .setTitle("Prayer Times")
                        .setDescription(interaction.createdAt.toDateString())
                        .setColor(0xe3c65f)
                        .setTimestamp()
                        .addFields(
                            { name: "Fajr", value: timings["Fajr"]},
                            { name: "Dhuhr", value: timings["Dhuhr"]},
                            { name: "Asr", value: timings["Asr"]},
                            { name: "Maghrib", value: timings["Maghrib"]},
                            { name: "Isha", value: timings["Isha"]}
                        );

                        interaction.reply({
                            embeds: [embed],
                        });
                    });
                }
            
            
            }});
        
    }
}

