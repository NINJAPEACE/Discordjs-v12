const { keep_alive } = require('./keep.js');
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
 client.user.setPresence({
     status: "idle",
     activity: {
       name: "Hello World",
       type: "WATCHING"
    };
  });
});
 
client.on('message', async message => {
  if(message.content === "Halo") {
    message.reply(`Halo juga`);
  };
  if(message.content === "Hi") {
    message.channel.send(`Hi juga`)
  };
    
    let prefix = "Your Bot Prefix";
    
    if(!message.content.startsWith(prefix)) return null;
    
    let args = message.content.slice(prefix.length).trim().split();
    let cmd = args.shift().toLowerCase();
    let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if(commandFile) commandFile.run(client, message, args);
});
client.login(`Your Bot Token`);
