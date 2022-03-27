const { Message } = require('discord.js')
const { ChatBot } = require('../../structure/bot.js')
module.exports = {
    name: "messageCreate",

    /**
     * 
     * @param {ChatBot} client 
     * @param {Message} message
     */
    async execute(client, message) {
        if(!message.guild || !message.author || message.author.bot || !message) return
        let prefixx = client.config.prefix
        const prefixarray = [prefixx, `<@!${client.user.id}>`, `<@!${client.user.id}> `];
        let prefix = false; for (const thisPrefix of prefixarray) {if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;};
        if(!message.content.startsWith(prefix)) return
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdname = args[0].toLowerCase().normalize()
        const cmd = client.commands.get(cmdname)
        if(!cmd) return
        try {
        args.shift()
        cmd.execute(client, message, args)
        } catch (error) {
            console.log(error)
        }
    }
}