const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('manual page for the bot'),

    async execute(interaction){
        const embed = new EmbedBuilder()
            .setTitle("Help")
            .setDescription("Manual Page")
            .setColor(0xe3c65f)
            //.setAuthor({name: "The Bot", iconURL:"https://i.imgur.com/7iRvQWb.png"})
            .setTimestamp()
            .setThumbnail("https://cdn.discordapp.com/attachments/1139468417011818519/1183204420608082062/7222554.png?ex=65877bfc&is=657506fc&hm=6204bfd41cfb3a488c62e8b47688ef68cd1015a2073ff8dc465390ce8b6e1675&")
            .addFields(
                { name: "/hello", value: "Says hello to you or the user you specify", inline: true },
                { name: "/echo", value: "Repeats your text", inline: true },
                { name: "/ping", value: "Replies with Pong!", inline: true },
                { name: "/help", value: "Shows this page", inline: true }
            );

        await interaction.reply({
            embeds: [embed],
            //ephemeral: true
        });
    }
}

