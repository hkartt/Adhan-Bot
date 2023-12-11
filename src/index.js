const { token } = require('../config.json');
const { Client, Events, GatewayIntentBits, Collection, SlashCommandBuilder, IntentsBitField } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const fn = require('../functions.js');

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.GuildPresences, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.GuildMessages, 
    IntentsBitField.Flags.GuildVoiceStates, IntentsBitField.Flags.Guilds)

const client = new Client({
    intents: myIntents
});

const eventsPath = path.join(__dirname, '../events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for(const file of eventFiles){
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } 
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(token);