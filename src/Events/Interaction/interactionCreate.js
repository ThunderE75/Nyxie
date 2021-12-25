const { Client, MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        
        if(interaction.isCommand()){
            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.reply({embed: [
            new MessageEmbed()
            .setColor("RED")
            .setDescription("⚠ An Error ocurred while running this command ")
        ]}) && client.commands.delete(interaction.commandName);

        command.execute(interaction, client)
    
        }
    }
}