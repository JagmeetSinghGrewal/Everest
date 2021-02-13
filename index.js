const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const { token } = require("./config.json");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
}

bot.on('ready', ()=>{
    console.log("Bot is ready");
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    //console.info(`Called command: ${command}`);
  
    if (!bot.commands.has(command)) return;
  
    try {
      bot.commands.get(command).execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }
  });

  bot.login(token);