

// Partie Const ////////////////////////////////////////////////////////////


const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "/"; 



// Var ////////////////////////////////////////////////////////////


var mention = "la mention du bot"
var randnum =  0;




// Commande Simple ///////////////////////////////////////////////


bot.on('message', message => {
  if (message.content.startsWith(prefix + "surprise")) {
  message.channel.send('**Bravo tu as trouvé la commande cachée contacte le fondateur (MrZivox) !**');}});
  
  
  //////////////////////////////////////////////////////////////////  
  
    
  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "test")) {
  message.channel.send('**Je fonctionne à 100% !**');}});
  
  
  //////////////////////////////////////////////////////////////////  
  
  
  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "bonjour")) {
    message.channel.send('**Bonjour**' );}});
  
  
  //////////////////////////////////////////////////////////////////  
  
  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "aurevoir")) {
   message.channel.send('**Au revoir**');}});
  
  
  //info///////////////////////////////////////////////////////////
  
  bot.on('message', message => {
    if (message.content.startsWith(prefix + "info")) {
    var info_embed = new Discord.RichEmbed()
      .setColor('#00FEC3')
      .addField("Information Sur le Bot :" , "**Développeur : MrZivox\nVersion : 1.0**")
      .addField("Actualités :", "**Aucune Actualités**")
      message.channel.sendEmbed(info_embed)}});
      var help_embed = new Discord.RichEmbed();
    
    
    
    
    
    ///help///////////////////////////////////////////////////////////  
    
    bot.on('message', message => {
      if (message.content.startsWith(prefix + "staffhelp")) {
      var help_embed = new Discord.RichEmbed()
        .setColor('#00FEC3')
        .addField("**Commandes Principales Staff :**", "**/ban : Permet de bannir un membre .\n/kick : Permet de kick un membre .**")
        message.channel.sendEmbed(help_embed)}});
        var help_embed = new Discord.RichEmbed();
    
    
    bot.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
    var help_embed = new Discord.RichEmbed()
      .setColor('#00FEC3')
      .addField("**Commandes Principales :**", "**/help : Affiche les commandes du bot .\n/info : Affiche des informations sur le bot .\n**")
      .addField("**Commandes d'Interaction :**", "**/bonjour : permet de dire bonjour à ZivoxBot .\n/aurevoir : permet de dire au revoir à ZivoxBot .**")
      message.channel.sendEmbed(help_embed)}});
      var help_embed = new Discord.RichEmbed();
    
    //////////////////////////////////////////////////////////////////
    
    bot.on('message', message => {
    if (message.content.startsWith(prefix + "version")) {
    message.channel.send('**Version 1.0**');}});
    
    
    
    
    ///////////////////////////////////////////////////////////////////

bot.on('message', message => {

  if (message.content.startsWith('/play')) {
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})

//////////////////////////////////////////////////////////////////

bot.login(process.env.TOKEN);



      


    
    
    
