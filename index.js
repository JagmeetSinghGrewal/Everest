const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require("./config.json");

bot.on('ready', ()=>{
    console.log("Bot is ready");
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
      msg.channel.send('pong');
    }
  });

bot.login(token);
 