const Discord = require('discord.js');
const client = new Discord.Client();

const roles = new Discord.Role();


const { prefix, token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content === `${prefix}attaque`) {
    msg.reply('mathieu attaque jacuzzi (-70PV pour maxime)');
  }
  else if (msg.content === `${prefix}heal`) {
    msg.channel.send('mathieu bouffe une chatte (+50PV)');
  }
  
  else if (msg.content === `${prefix}timide`) {
    msg.channel.send('Ryan se prend encore une balle perdue (-50PV)');
  }

  else if (msg.content === `${prefix}grognement`) {
    msg.channel.send('ugo fait mal a une mineure ULTI (-10000000000PV)');
  }

  else if (msg.content === `${prefix}FINISH HIM`) {
    msg.channel.send('Il lui explose le minou en live discord (-infini) \n#dans la mere a Laurent Bouneau @arturo le roi');
  }

  else if (msg.content === `${prefix}love`) {
    msg.channel.send('Ugo prend une potion qui le rend safe pendant 10s \n (malheuresement c son max et non cumulable)');
  }
  
    else if (msg.content === `${prefix}celib`) {
    msg.reply('toi aussi tu es borderline...');
  }
  
  else if (msg.content === `${prefix}mektoub`) {
  msg.channel.send('Maxime se fais tenir par les couilles');
  }
  
  else if (msg.content === `qui`) {
  msg.channel.send('Whaouffff On mange frere');
  }
  
  else if (msg.content === `${prefix}cortex`) {
  msg.channel.send('Maxime n est toujours pas arabe');
  }

     else if (msg.content === `${prefix}darius`) {
    msg.reply('mathieu et maxime attaque couette \n AAAARRRRRRRGGGHHHHHHHHHHHHHHH la map est rasé \n marine a encore débordé');
  }

  else if (msg.content === `${prefix}FINISH HIM`) {
    msg.channel.send('Il lui explose le minou en live discord (-infini) \n#dans la mere a Laurent Bouneau @arturo le roi');
  }

  else if (msg.content === `${prefix}s`) {
    msg.reply('Ta gueule ou je ramenne Fabrice Quarteron');
  }

  else if (msg.member.roles.cache.some(role => role.name === 'omg')) {
    msg.reply('Ta gueule ou je ramenne Fabrice Quarteron')
  }
  else if (msg.member.roles.cache.some(role => role.name === 'Jeux')) {
    msg.reply('ALERTE AU VIOLLLLL')
  }

});

client.login(process.env.TOKEN);
