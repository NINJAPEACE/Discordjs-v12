module.exports.run = async(client, message, args) => {
  const {MessageEmbed} = require('discord.js');
  const { Menu } = require('discord.js-menu');
  
  /*
  package discord,js
  discordjs: {
    MessageEmbed: {},
    propertyLain: {}
  }
  
  1. discordjs.MessageEmbed
  2. { MessageEmbed } dari discordjs
  */
  
  let embed = new MessageEmbed()
  .setTitle('Judulnya')
  .setAuthor('Judulnya', message.author.displayAvatarURL({dynamic:true}))
  .setDescription("Deskripsi dari embed")
  .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
  .addField("Field titlenya", "Isi fieldnya")
  .addField("Field 2", "Isi field 2")
  .setFooter("Footer dari Embed", message.author.displayAvatarURL({dynamic:true}))
  .setColor("RANDOM")
  .setTimestamp(Date.now() + 3600000)//dari system discord
  
  message.channel.send(embed);
  
  let embedPage1 = new MessageEmbed()
  .setDescription("Embed 1")
  
    
  let embedPage2 = new MessageEmbed()
  .setDescription("Embed 2")
  
  let embedPage = new Menu(message.channel, message.author.id, [
    {
      name: 'namanyaBebas1',
      content: embedPage1,
      reactions: {
        '⏩': "namanyaBebas2",
        '⏪': "previous"
      }
    },
    {
      name: 'namanyaBebas2',
      content: embedPage2,
      reactions: {
        "⏩": "namanyaBebas1",
        '⏪':  "previous"
      }
    }
    ])
    
    embedPage.start()
  
}

module.exports.config = {
  name:'embed',
  aliases: []
}
