# Adhan Discord Bot

This project features a fully automated bot implemented with node.js and discord.js. The purpose is to grab Islamic Prayer times based on geographical location using Adhan API, and provide functions that present or act on that information.
## Features
- **User Preferences:** On initialization and optionally later, users can set the server location based on `Country` and `City`, as well as select Juristic methods and notification settings.

- **Information Integrity:** Prayer data is retrieved in real time each time a function is called. This is to ensure that the up-to-date prayer times are listed based on the current location and day. 

- **Presentation:** Bot properly embeds the prayer times of the day in a readable format, alongside the current date. The manual page assigns descriptions alongside their respectful commands- an embed which is ephemeral to the caller.

- **Responsive:** Function calls are instantly responded to due to the use of asynchronous functions. This means that multiple users can simultaneously request information from the bot without being delivered by a queue basis.

## Usage
To add the bot to your server, you can either:
- (Recommended) Clone the repository files and store it locally or onto a hosting site.
1) To run the bot, first go to `https://discord.com/developers` to create your own bot. Configure the `config.json` file located in the upper most parent directory, by setting the `token` value to the token linked with your bot, found in the `Bot` section on the developer site. This token is specific to your bot and should not be shared. Next, set the `clientId` value to the Application ID value found on the `General Information` section on the developer site. Optionally, you can also link your Server ID to the `guildID` parameter in the config file.
2) After setting the configuration file, set the current directory to the upper most directory. Note that you will need an installation of node.js on your host computer. Run `node deploy-commands.js` in the highest directory to deploy the commands to your bot. Afterwards, run `node index.js` in the `/src/` directory to host the actual bot.
3) Finally, generate an invite link using the URL Generator found on the developer site. Select scopes `bot` and `application.commands`, and bot permissions `Administrator` to allow the bot to function properly. With the generated link at the bottom, you are able to invite the bot to your server for use.

- Add the bot to your server using my invite link `https://discord.com/api/oauth2/authorize?client_id=1168244099040690216&permissions=18427594140736&scope=bot+applications.commands`. By accepting this invite link, you consent that the bot be able to read and act on slash commands given to it, and to write/reply. The bot is also given join and speak permissions. There is currently no dedicated server for this bot (other than a personal computer) so the bot will be offline for the most part.

