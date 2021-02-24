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
    else if (msg.content === `${prefix}sword`) {
    msg.channel.send('                         8888  8888888\n                  888888888888888888888888\n               8888:::8888888888888888888888888\n             8888::::::8888888888888888888888888888\n            88::::::::888:::8888888888888888888888888\n          88888888::::8:::::::::::88888888888888888888\n        888 8::888888::::::::::::::::::88888888888   888\n           88::::88888888::::m::::::::::88888888888    8\n         888888888888888888:M:::::::::::8888888888888\n        88888888888888888888::::::::::::M88888888888888\n        8888888888888888888888:::::::::M8888888888888888\n         8888888888888888888888:::::::M888888888888888888\n        8888888888888888::88888::::::M88888888888888888888\n      88888888888888888:::88888:::::M888888888888888   8888\n     88888888888888888:::88888::::M::;o*M*o;888888888    88\n    88888888888888888:::8888:::::M:::::::::::88888888    8\n   88888888888888888::::88::::::M:;:::::::::::888888888\n  8888888888888888888:::8::::::M::aAa::::::::M8888888888       8\n  88   8888888888::88::::8::::M:::::::::::::888888888888888 8888\n 88  88888888888:::8:::::::::M::::::::::;::88:88888888888888888\n 8  8888888888888:::::::::::M::"@@@@@@@"::::8w8888888888888888\n  88888888888:888::::::::::M:::::"@a@":::::M8i888888888888888\n 8888888888::::88:::::::::M88:::::::::::::M88z88888888888888888\n8888888888:::::8:::::::::M88888:::::::::MM888!888888888888888888\n888888888:::::8:::::::::M8888888MAmmmAMVMM888*88888888   88888888\n888888 M:::::::::::::::M888888888:::::::MM88888888888888   8888888\n8888   M::::::::::::::M88888888888::::::MM888888888888888    88888\n 888   M:::::::::::::M8888888888888M:::::mM888888888888888    8888\n  888  M::::::::::::M8888:888888888888::::m::Mm88888 888888   8888\n   88  M::::::::::::8888:88888888888888888::::::Mm8   88888   888\n   88  M::::::::::8888M::88888::888888888888:::::::Mm88888    88\n   8   MM::::::::8888M:::8888:::::888888888888::::::::Mm8     4\n       8M:::::::8888M:::::888:::::::88:::8888888::::::::Mm    2\n      88MM:::::8888M:::::::88::::::::8:::::888888:::M:::::M\n     8888M:::::888MM::::::::8:::::::::::M::::8888::::M::::M\n    88888M:::::88:M::::::::::8:::::::::::M:::8888::::::M::M\n   88 888MM:::888:M:::::::::::::::::::::::M:8888:::::::::M:\n   8 88888M:::88::M:::::::::::::::::::::::MM:88::::::::::::M\n     88888M:::88::M::::::::::*88*::::::::::M:88::::::::::::::M\n    888888M:::88::M:::::::::88@@88:::::::::M::88::::::::::::::M\n    888888MM::88::MM::::::::88@@88:::::::::M:::8::::::::::::::*8\n    88888  M:::8::MM:::::::::*88*::::::::::M:::::::::::::::::88@@\n    8888   MM::::::MM:::::::::::::::::::::MM:::::::::::::::::88@@\n     888    M:::::::MM:::::::::::::::::::MM::M::::::::::::::::*8\n     888    MM:::::::MMM::::::::::::::::MM:::MM:::::::::::::::M\n      88     M::::::::MMMM:::::::::::MMMM:::::MM::::::::::::MM\n       88    MM:::::::::MMMMMMMMMMMMMMM::::::::MMM::::::::MMM\n        88    MM::::::::::::MMMMMMM::::::::::::::MMMMMMMMMM\n         88   8MM::::::::::::::::::::::::::::::::::MMMMMM\n          8   88MM::::::::::::::::::::::M:::M::::::::MM\n              888MM::::::::::::::::::MM::::::MM::::::MM\n             88888MM:::::::::::::::MMM:::::::mM:::::MM\n             888888MM:::::::::::::MMM:::::::::MMM:::M\n            88888888MM:::::::::::MMM:::::::::::MM:::M\n           88 8888888M:::::::::MMM::::::::::::::M:::M\n           8  888888 M:::::::MM:::::::::::::::::M:::M:\n              888888 M::::::M:::::::::::::::::::M:::MM\n             888888  M:::::M::::::::::::::::::::::::M:M\n             888888  M:::::M:::::::::@::::::::::::::M::M\n             88888   M::::::::::::::@@:::::::::::::::M::M\n            88888   M::::::::::::::@@@::::::::::::::::M::M\n           88888   M:::::::::::::::@@::::::::::::::::::M::M\n          88888   M:::::m::::::::::@::::::::::Mm:::::::M:::M\n          8888   M:::::M:::::::::::::::::::::::MM:::::::M:::M\n         8888   M:::::M:::::::::::::::::::::::MMM::::::::M:::M\n        888    M:::::Mm::::::::::::::::::::::MMM:::::::::M::::M\n      8888    MM::::Mm:::::::::::::::::::::MMMM:::::::::m::m:::M\n     888      M:::::M::::::::::::::::::::MMM::::::::::::M::mm:::M\n  8888       MM:::::::::::::::::::::::::MM:::::::::::::mM::MM:::M:\n             M:::::::::::::::::::::::::M:::::::::::::::mM::MM:::Mm\n            MM::::::m:::::::::::::::::::::::::::::::::::M::MM:::MM\n            M::::::::M:::::::::::::::::::::::::::::::::::M::M:::MM\n           MM:::::::::M:::::::::::::M:::::::::::::::::::::M:M:::MM\n           M:::::::::::M88:::::::::M:::::::::::::::::::::::MM::MMM\n           M::::::::::::8888888888M::::::::::::::::::::::::MM::MM\n           M:::::::::::::88888888M:::::::::::::::::::::::::M::MM\n           M::::::::::::::888888M:::::::::::::::::::::::::M::MM\n           M:::::::::::::::88888M:::::::::::::::::::::::::M:MM\n           M:::::::::::::::::88M::::::::::::::::::::::::::MMM\n           M:::::::::::::::::::M::::::::::::::::::::::::::MMM\n           MM:::::::::::::::::M::::::::::::::::::::::::::MMM\n            M:::::::::::::::::M::::::::::::::::::::::::::MMM\n            MM:::::::::::::::M::::::::::::::::::::::::::MMM\n             M:::::::::::::::M:::::::::::::::::::::::::MMM\n             MM:::::::::::::M:::::::::::::::::::::::::MMM\n              M:::::::::::::M::::::::::::::::::::::::MMM\n              MM:::::::::::M::::::::::::::::::::::::MMM\n               M:::::::::::M:::::::::::::::::::::::MMM\n               MM:::::::::M:::::::::::::::::::::::MMM\n                M:::::::::M::::::::::::::::::::::MMM\n                MM:::::::M::::::::::::::::::::::MMM\n                 MM::::::M:::::::::::::::::::::MMM\n                 MM:::::M:::::::::::::::::::::MMM\n                  MM::::M::::::::::::::::::::MMM\n                  MM:::M::::::::::::::::::::MMM\n                   MM::M:::::::::::::::::::MMM\n                   MM:M:::::::::::::::::::MMM\n                    MMM::::::::::::::::::MMM\n                    MM::::::::::::::::::MMM\n                     M:::::::::::::::::MMM\n                    MM::::::::::::::::MMM\n                    MM:::::::::::::::MMM\n                    MM::::M:::::::::MMM:\n                    mMM::::MM:::::::MMMM\n                     MMM:::::::::::MMM:M\n                     mMM:::M:::::::M:M:M\n                      MM::MMMM:::::::M:M\n                      MM::MMM::::::::M:M\n                      mMM::MM::::::::M:M\n                       MM::MM:::::::::M:M\n                       MM::MM::::::::::M:m\n                       MM:::M:::::::::::MM\n                       MMM:::::::::::::::M:\n                       MMM:::::::::::::::M:\n                       MMM::::::::::::::::M\n                       MMM::::::::::::::::M\n                       MMM::::::::::::::::Mm\n                        MM::::::::::::::::MM\n                        MMM:::::::::::::::MM\n                        MMM:::::::::::::::MM\n                        MMM:::::::::::::::MM\n                        MMM:::::::::::::::MM\n                         MM::::::::::::::MMM\n                         MMM:::::::::::::MM\n                         MMM:::::::::::::MM\n                         MMM::::::::::::MM\n                          MM::::::::::::MM\n                          MM::::::::::::MM\n                          MM:::::::::::MM\n                          MMM::::::::::MM\n                          MMM::::::::::MM\n                           MM:::::::::MM\n                           MMM::::::::MM\n                           MMM::::::::MM\n                            MM::::::::MM\n                            MMM::::::MM\n                            MMM::::::MM\n                             MM::::::MM\n                             MM::::::MM\n                              MM:::::MM\n                              MM:::::MM:\n                              MM:::::M:M\n                              MM:::::M:M\n                              :M::::::M:\n                             M:M:::::::M\n                            M:::M::::::M\n                           M::::M::::::M\n                          M:::::M:::::::M\n                         M::::::MM:::::::M\n                         M:::::::M::::::::M\n                         M;:;::::M:::::::::M\n                         M:m:;:::M::::::::::M\n                         MM:m:m::M::::::::;:M\n                          MM:m::MM:::::::;:;M\n                           MM::MMM::::::;:m:M\n                            MMMM MM::::m:m:MM\n                                  MM::::m:MM\n                                   MM::::MM\n                                    MM::MM');
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
