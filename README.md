# Adhan Discord Bot

This project features a fully automated bot implemented with node.js and discord.js. The purpose is to grab Islamic Prayer times based on geographical location using Adhan API, and provide functions that present or act on that information.
## Features
- **User Preferences:** On initialization and optionally later, users can set the server location based on `Country` and `City`, as well as select Juristic methods and notification settings.

- **Information Integrity:** Prayer data is retrieved in real time each time a function is called. This is to ensure that the up-to-date prayer times are listed based on the current location and day. 

