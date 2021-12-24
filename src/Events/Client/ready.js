const { Client }  = require("discord.js");
const version = require("../../package.json").version;
module.exports = {
    name: "ready",
    once: true,
    /** 
     * @param {Client} client
    */ 
    execute(client){
        console.log("✔ | NYXie is Ready!");
        client.user.setActivity(`Alpha v${version}`, {type: "COMPETING"} )
    }
}