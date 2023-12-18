module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`logged in as ${client.user.tag}`);
        // for each guild, check if they have notification setting toggled. implement later
    }
}