const { SlashCommandBuilder} = require('discord.js');
fn = require('../functions.js');
fs = require('fs')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('run')
        .setDescription('Wait for the next prayer time and then ping everyone'),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the run command \\run")
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
                // create function that calls itself every prayer time
                function prayerTimeout(lastTime, lastPrayer, calledAt) {
                    // if (lastPrayer == "Fajr") {
                    //     addTime = 60000;
                    // } else {
                    //     addTime = 1000;
                    // }

                    setTimeout(function() {
                        let city = obj[interaction.guildId].city;
                        let country = obj[interaction.guildId].country;
                        let oldTime = calledAt;
                        let milliseconds = lastTime;
                        fn.addTime(oldTime, milliseconds).then((currentTime) => {
                            fn.nextPrayer(currentTime, city, country).then((obj) => {
                                fn.timeDifference(Object.values(obj)[0], currentTime).then((time) => {
                                    console.log("ran callback command at " + currentTime);
                                    interaction.channel.send("@everyone it is now " + lastPrayer + " time and the next prayer is " + Object.keys(obj)[0] + " at "  + Object.values(obj)[0]);
                                    prayerTimeout(time, Object.keys(obj)[0], currentTime);
                                });
                            });
                        });
                        
                    }, lastTime);
                }
                let city = obj[interaction.guildId].city;
                let country = obj[interaction.guildId].country;
                let currentTime = interaction.createdAt.getHours() + ":" + interaction.createdAt.getMinutes();
                fn.nextPrayer(currentTime, city, country).then((obj) => {
                    fn.timeDifference(Object.values(obj)[0], currentTime).then((time) => {
                        interaction.channel.send("The next prayer is " + Object.keys(obj)[0] + " at "  + Object.values(obj)[0]);
                        //CHANGE TO INTERACTION.REPLY
                        prayerTimeout(time, Object.keys(obj)[0], currentTime);
                    });
                });

                
            }
            
            
            }});
        
    }
}
