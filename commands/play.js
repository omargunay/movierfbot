const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');


module.exports = {
    name:'p',
    description: 'Joins the room and plays something',
    async execute(message,args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a channel, Neo.');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You do not have permission.');
        if (!permissions.has('SPEAK')) return message.channel.send('You do not have permission.');
        if (!args.length) return message.channel.send('You need to send the second argument, Neo.');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
             }else {
                return true;
            }
        }

        if(validURL(args[0])){
            message.channel.send('Be careful about URLs  ;)');

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1});

            await message.send(`:thumbsup: Now playing ***Your Link!***` )

            return 
        }


    
            
    

        const connection = await voiceChannel.join();
            

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume:1})
           

            await message.channel.send(`:notes: Now playing: ***${video.title}***`)
        } else { 
            message.channel.send('No video results found');
        }


    }
}