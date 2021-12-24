const { Events } = require("../Validation/EventNames");
const { promisify } = require("util");
const { glob } = require("glob");
const { Client } = require("discord.js");
const PG = promisify(glob);
const Ascii = require("ascii-table");

module.export = async (client) => {
    const Table = new Ascii("Events Loaded");


    (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require (file);

        if (!Events.includes(event.name) || !event.name) {
            const L = file.split("/");
            await Table.addRow(`${event.name || "Missing" }`, `❌ Event Name Invalid or Missing: ${L[6]} + / + ${L[7]}`);
            return;
        }

        if (event.once) {
            client.once(event.name, (...args) =>  event.execute(...args, client));
        }
        else{
            client.on(event.name, (...args) =>  event.execute(...args, client))
        }

        await Table.addRow(event.name, `✔ Successful`);

    });

    console.log(Table.toString());
}