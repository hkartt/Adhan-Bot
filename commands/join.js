const { SlashCommandBuilder} = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join current voice channel'),

    async execute(interaction) {
        console.log("Guild ID: " + interaction.guildId + " ran the command \\join")
        // Get the voice channel the user is in
        const channel = interaction.member.voice.channel;

        if (channel) {
            // Join the voice channel
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });

            // Create an audio player
            const player = createAudioPlayer();

            // Create an audio resource from a file
            const resource = createAudioResource('../audio/Madina.mp3');

            // Play the audio resource
            player.play(resource);

            // Subscribe the connection to the player
            connection.subscribe(player);

            await interaction.reply('Playing audio!');
        } else {
            await interaction.reply('You need to join a voice channel first!');
        }
    }
}