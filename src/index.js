const { Client, Collection  }  = require("discord.js");
// const { Collection } = require("mongoose");
const client = new Client ({intents: 32767});
require('dotenv').config();
require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

client.commands = new Collection();


client.login(process.env.TOKEN);