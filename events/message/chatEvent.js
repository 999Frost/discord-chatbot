const { Message } = require('discord.js')
const { ChatBot } = require('../../structure/bot.js')
module.exports = {
    name: "messageCreate",

    /**
     * 
     * @param {ChatBot} client 
     * @param {Message} message 
     * @param {String[]} args
     */
    async execute(client, message, args) {
        if(!message.guild || !message.author || message.author.bot || !message) return
        if(!client.config.chatbotch.includes(message.channel.id)) return;
        client.functions.chatbot(message)
    }
}