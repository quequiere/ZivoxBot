

// Partie Const ////////////////////////////////////////////////////////////


const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "/"; 



// Var ////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////


  
//////Welcome/Bye///////////////////////////////////////////////  
  
  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue ' + member.displayName +  'je suis ZivoxBot je suis le robot de ce serveur')
    }).catch(console.error)
  })


//////Test///////////////////////////////////////////////////////////  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "test")) {
  message.channel.send('**Je fonctionne à 100% !**');}});
  
  
  //////////////////////////////////////////////////////////////////  
  
  
  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "bonjour")) {
    message.channel.send('**Bonjour**');}});
  
  
  //////////////////////////////////////////////////////////////////  
  
  
  
  bot.on('message', message => {
  if (message.content.startsWith(prefix + "aurevoir")) {
   message.channel.send('**Au revoir**');}});
  
  
  //info///////////////////////////////////////////////////////////
  
  bot.on('message', message => {
    if (message.content.startsWith(prefix + "info")) {
    var info_embed = new Discord.RichEmbed()
      .setColor('#00FEC3')
      .addField("Information Sur le Bot :" , "**Développeur : MrZivox\nVersion : 1.1**")
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
    

    
    ///////////////////////////////////////////////////////////////////

bot.on('message', message => {
if (message.content.startsWith(prefix + "ping")) {
var now = require('performance-now');
var startTime = now();
message.channel.send("Pong = Attendez...")
.then(message => {
var endTime = now();
return message.edit("**Pong :ping_pong: = " + Math.round(endTime - startTime) + " ms.**");
}).catch(console.error);
}});



//////////////////////////////////////////////////////////////////

bot.login(process.env.TOKEN);





      


    
    
    
