# Adhan Discord Bot

This project features a fully automated bot implemented with node.js and discord.js. The purpose is to grab Islamic Prayer times based on geographical location using Adhan API, and provide functions that present or act on that information.
## Features
- **User Preferences:** On initialization and optionally later, users can set the server location based on `Country` and `City`, as well as select Juristic methods and notification settings.

- **Information Integrity:** Prayer data is retrieved in real time each time a function is called. This is to ensure that the up-to-date prayer times are listed based on the current location and day. 

- **Presentation:** Bot properly embeds the prayer times of the day in a readable format, alongside the current date. The manual page assigns descriptions alongside their respectful commands- an embed which is ephemeral to the caller.

- **Responsive:** Function calls are instantly responded to due to the use of asynchronous functions. This means that multiple users can simultaneously request information from the bot without being delivered by a queue basis.

## Usage
To add the bot to your server, you can either:
- (Recommended) Clone the repository files and store it locally or onto a hosting site. To run the bot, first go to `https://discord.com/developers` to create your own bot. Configure the `config.json` file located in the upper most parent directory.
- Add the bot to your server using my invite link `https://discord.com/api/oauth2/authorize?client_id=1168244099040690216&permissions=18427594140736&scope=bot+applications.commands`. By accepting this invite link, you consent that the bot be able to read and act on slash commands given to it, and to write/reply. The bot is also given join and speak permissions. There is currently no dedicated server for this bot (other than a personal computer) so the bot will be offline for the most part.

