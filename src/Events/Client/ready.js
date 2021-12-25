const { Client }  = require("discord.js");
const mongoose = require("mongoose");

const { INTERNAL_DATABASE } = require("../../config.json");
const version = require("../../package.json").version;
module.exports = {
    name: "ready",
    once: true,
    /** 
     * @param {Client} client
    */ 
    execute(client){
        console.log("✅ | NYXie Active");
        client.user.setActivity(`Alpha v${version}`, {type: "COMPETING"} );

        if (!INTERNAL_DATABASE)return;
        mongoose.connect(INTERNAL_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=> {
            console.log("✅ | Internal Database Connected")
        }).catch((err) => { 
            console.log(err)
        });
    }
}