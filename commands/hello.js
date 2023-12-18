const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    // This command is for debugging and testing purposes
    .setName('hello')
    .setDescription('Replies with Hello (Developer Debug Command)')
    .addUserOption(option =>
        option
            .setName('user')
            .setDescription('The user to say hi to')
            .setRequired(false)    
        ),

    async execute(interaction){
        console.log("Guild ID: " + interaction.guildId + " ran the command \\hello")
        const user = interaction.options.getUser('user') || interaction.user;
        interaction.reply(`Hello ${interaction.user.username}!`)
        
    }
}

