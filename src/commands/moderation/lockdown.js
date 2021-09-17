module.exports = {
    name: 'lockdown',
    run: (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('You dont have enough permissions to execute that command.')
        }
        console.log(message.guild.roles.everyone.id)

        
        
        if(args[0] === 'enable') {
            message.guild.channels.cache.forEach((channel)=>{
                let ow = channel.permissionOverwrites.get(message.guild.roles.everyone.id);

                if (ow && ow.SEND_MESSAGES === false) return;
                channel.permissionOverwrites.create(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                  })
               })
               message.channel.send('Every single channel from this server has been blocked.')
        } else if(args[0] === 'disable') {
            message.guild.channels.cache.forEach((channel)=>{
                channel.permissionOverwrites.create(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                  })
               })
               message.channel.send('Every channel in the server has been unlocked.')
        }
    }
}
