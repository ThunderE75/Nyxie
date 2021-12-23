const { Client }  = require("discord.js");
const { type } = require("os");
const client = new Client ({intents: 32767});
require('dotenv').config();

client.once("ready", () => {
    console.log("Bot is Online now!");
    client.user.setActivity("A Lightweight NYX Clone", {type: "LISTENING"});
})

client.login(process.env.TOKEN);