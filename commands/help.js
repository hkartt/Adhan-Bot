const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Manual page for the bot'),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\help")
        // create help embed
        const embed = new EmbedBuilder()
            .setTitle("Help")
            .setDescription("Manual Page")
            .setColor(0xe3c65f)
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/1139468417011818519/1183204420608082062/7222554.png?ex=65877bfc&is=657506fc&hm=6204bfd41cfb3a488c62e8b47688ef68cd1015a2073ff8dc465390ce8b6e1675&")
            .addFields(
                { name: "/help", value: "Shows this page", inline: true },
                { name: "/location", value: "Set the location to grab prayer times of", inline: true },
                { name: "/join", value: "Manually join current voice chat to play adhan call", inline: true },
                { name: "/nextprayer", value: "List the next prayer and its time of occurence", inline: true },
                { name: "/prayertimes", value: "List all the prayer times for the day and their times of occurence", inline: true },
                { name: "/run", value: "Notify users when next prayer occurs", inline: true },
            );

        await interaction.reply({
            embeds: [embed],
            //ephemeral: true
        });
    }
}

