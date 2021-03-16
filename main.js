const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '|';

const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('MRF zort');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//ALL COMMAND LIST
    if(command === 'zort'){
        client.commands.get('zort').execute(message, args);
    }else if (command === 'noldu'){
        client.commands.get('noldu').execute(message, args);
    }else if (command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command === 'instagram'){
        client.commands.get('instagram').execute(message, args);
    }else if (command === 'guts'){
        client.commands.get('guts').execute(message, args);
    }else if (command === 'tellmewhy'){
        client.commands.get('tellmewhy').execute(message, args);
    }else if (command === 'p'){
        client.commands.get('p').execute(message, args);
    }else if (command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if (command === 'kına'){
        client.commands.get('kına').execute(message, args);
    }else if (command === 'shesaid'){
        client.commands.get('shesaid').execute(message, args);
    }else if (command === 'şaplak'){
        client.commands.get('şaplak').execute(message, args);
    }else if (command === 'maze'){
        client.commands.get('maze').execute(message, args);
    }else if (command === 'yolsiyindiyi'){
        client.commands.get('yoysiyindiyi').execute(message, args)
    }else if (command === 'emir'){
        client.commands.get('emir').execute(message, args);
    }else if (command === 'su'){
        client.commands.get('su').execute(message, args);
    }
});





client.login('ODE4OTM4NzE0NjEyMTcwNzU1.YEfWHA.cowPgdZY-yiYukdH35BcSU4gJoo');