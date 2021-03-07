const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
 console.log(`Bot siap digunakan`);
});
 tes hali halo
 
client.on('message', async message => {
  if(message.content === "Halo") {
    message.reply(`Halo juga`);
  }
  if(message.content === "Hi") {
    message.channel.send(`Hi juga`)
  }
});
client.login(`Your Bot Token`)
