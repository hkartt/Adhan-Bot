const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('location')
    .setDescription('Set your location')
    .addStringOption(option =>
        option
            .setName('city')
            .setDescription('Your City')
            .setRequired(true)    
        )
    .addStringOption(option =>
        option
            .setName('country')
            .setDescription('Your Country')
            .setRequired(true)    
        ),
    

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\location")
        var fs = require('fs');

        fs.readFile('../data/data.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            
            obj = JSON.parse(data);
            // get the data for the current guild. place city and country in the object
            obj[interaction.guildId] = {
                "city": interaction.options.getString('city'),
                "country": interaction.options.getString('country')
            }; 

            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('../data/data.json', json, 'utf8', function(err){
                if(err) throw err;
                console.log('complete');
                });
            }});
        const string = `Your location has been set to ${interaction.options.getString('city')}, ${interaction.options.getString('country')}.` 
        || "Something went wrong.";
        interaction.reply(`${string}`)
    }
}

