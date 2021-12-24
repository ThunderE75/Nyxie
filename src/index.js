const { Client }  = require("discord.js");
const client = new Client ({intents: 32767});
const { TOKEN } = require("./config.js");

require ("./Handlers/Events.js")(client);

client.login(TOKEN);

//FIXME: Error on line 5

// require('dotenv').config();
// client.login(process.env.TOKEN);