const { Client, Collection } = require('discord.js');
const { readdirSync } = require('fs')
class ChatBot extends Client {
    constructor(opt = {intents: 32767}) {
        super(opt)
        this.config = require("../config.json");
        this.prefix = this.config.prefix;
        this.functions = require('./functions');
        this.commands = new Collection();
        this.loadEvts()
        this.loadCmds()
        this.login(this.config.token).then(act => {
        console.log(`Connecté sur ${this.user.tag} ✓`);
        })

    }
    loadCmds(){
        const sub_folders = readdirSync(`./commands`);
        for(const folder of sub_folders){
            const commands = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
            for(const cmd of commands){
                const command = require(`../commands/${folder}/${cmd}`);
                if(!command) return;
                this.commands.set(command.name, command);
            }
        }
    }

    loadEvts(){
        const sub_folders = readdirSync(`./events`);
        for(const folder of sub_folders){
            const events = readdirSync(`./events/${folder}`).filter(file => file.endsWith('.js'));
            for(const events2 of events){
                const event = require(`../events/${folder}/${events2}`);
                if(!event) return;
                this.on(event.name, (...rest) => event.execute(this, ...rest));
            }
        }
    }
}
module.exports.ChatBot = ChatBot;