const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

fs.readdir('./commands', (err, files) {
    if(err) return console.log(err);

    let js = files.filter(f => f.endsWith('.js'));
    if(js.length <= 0) {
       console.log('Tidak dapat menemukan command!');
    };
     
    js.forEach((f, i) => {
        let pull = require('./commands/${f}');
          client.commands.set(pull.config.name, pull);
          pull.config.aliases.forEach(alias => {
           client.aliases.set(alias, pull.config.name);
         });
    });
});

client.on('ready', () => {
 console.log(`Bot siap digunakan`);
});
 
client.on('message', async message => {
  if(message.content === "Halo") {
    message.reply(`Halo juga`);
  }
  if(message.content === "Hi") {
    message.channel.send(`Hi juga`)
  }
});
client.login(`Your Bot Token`)
