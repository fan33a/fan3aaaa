const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const {prefix,token} = require('./config.json')
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ]

});

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setStatus("Idle"); 
});
client.on("ready", () => {
    client.user.setActivity(`${prefix}سكسيكو`, { 
        type: "WATCHING"
    }); 
});

client.login(token);