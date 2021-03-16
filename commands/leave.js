module.exports = {
    name: 'leave',
    description: 'When you want to leave the bot use this command',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send("If you want to kick me, come here Neo.");
        await voiceChannel.leave();
        await message.channel.send('Cya, Neo.:wave:')
    }
}