const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('defer')
        .setDescription('defer reply')
        .addStringOption(option => option
                .setName('string')
                .setDescription('Text to repeat')
                .setMaxLength(100)
                .setMinLength(5)
                .setRequired(true)    
            ),

    async execute(interaction){
        const string = interaction.options.getString('string') || "This is testing async function";
        await interaction.deferReply({ephemeral: true});
        setTimeout(async () => {
            await interaction.editReply(string);
        }, 5000); // Delay for 5 seconds
        
    }
}
