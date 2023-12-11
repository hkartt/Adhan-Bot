const {Client, Collection, GatewayIntentBits} = require('discord.js');
const fs = require('node:fs');
const client = new Client({intents: [GatewayIntentBits.Guilds] });

// client.commands is now the set of commands in the commands folder
client.commands = getCommands('../commands');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if(!interaction.isChatInputCommand()) return;
    
        //get the command by using the commandName from interaction and passing it to .get()
        let command = client.commands.get(interaction.commandName);

        /*if(interaction.commandName === "ping") {
            interaction.reply("Pong!")
        }
        if(interaction.commandName === "hello") {
            const user = interaction.options.getUser('user') || interaction.user;
            interaction.reply(`Hello ${interaction.user.username}!`)
        }
        if(interaction.commandName === "echo") {
            const text = interaction.options.getString('text');
            interaction.reply(text);
        }*/
        
        try{
            if(interaction.replied) return;
            command.execute(interaction);
        } catch(error) {
            console.error(error);
        }
    }
}

function getCommands(dir) {
    let commands = new Collection();
    const commandFiles = getFiles(dir);
    
    for(const commandFile of commandFiles) {
        //create a new command that requires the next iterated .js command file
        const command = require(commandFile);
        //linking command name with a command, adding it to a set
        commands.set(command.data.toJSON().name, command);
    }
    return commands;
}


function getFiles(dir) {
    const files = fs.readdirSync(dir, {
        withFileTypes: true
    });

    let commandFiles = [];

    for(const file of files) {
        if(file.isDirectory()){
            commandFiles =[
                ...commandFiles,
                ...getFiles(`${dir}/${file.name}`)
            ]
        } else if (file.name.endsWith(".js")) {
			commandFiles.push(`${dir}/${file.name}`);
		}
    }
	return commandFiles;
}