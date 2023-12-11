module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        // member is part of a guild, different from user.
        /*
        const welcomeRole = await member.guild.cache.find(role => role.name === 'member');
        await member.roles.add(welcomeRole);
        */
        const welcomeChannel = await member.guild.channels.cache.find(channel => channel.name === 'general');
        await welcomeChannel.fetch();
        welcomeChannel.send(`Welcome to the server ${member.user}!`)
    }  
}