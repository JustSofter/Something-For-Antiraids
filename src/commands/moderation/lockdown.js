module.exports = {
    name: 'lockdown',
    run: (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('No tienes los permisos suficientes para ejecutar este comando.')
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
               message.channel.send('Todos los canales del servidor han sido bloqueados por seguridad.')
        } else if(args[0] === 'disable') {
            message.guild.channels.cache.forEach((channel)=>{
                channel.permissionOverwrites.create(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                  })
               })
               message.channel.send('Todos los canales del servidor han sido desbloqueados.')
        }
    }
}