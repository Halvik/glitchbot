const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '<ping') {
    msg.reply(`:ping_pong: Pong! \`${client.ws.ping}ms\``);
  }
});

client.login('ODAxNzM3ODI4NzI3NzgzNDI1.YAlCiQ.6EUplrl1dSy6_1M9-S42wo-T-Bg');