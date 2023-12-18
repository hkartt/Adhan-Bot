const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    // This command is for debugging and testing purposes. please do not misuse this command
    .setName('echo')
    .setDescription('Repeats your text (Developer Debug Command))')
    .addStringOption(option =>
        option
            .setName('text')
            .setDescription('Text to repeat')
            .setRequired(true)    
        ),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\echo")
        const text = interaction.options.getString('text');
        interaction.reply(text);
    }
}

