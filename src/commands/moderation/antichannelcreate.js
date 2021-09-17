const db = require('quick.db')
module.exports = {
    name: 'antichannelcreate',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('No tienes los permisos suficientes para ejecutar este comando.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antichannelcreate-${message.guild.id}`);
            if(!id) {
                db.set(`antichannelcreate-${message.guild.id}`, true);
                return message.reply('Has desactivado la creación de canales en tu servidor.')
            } else {
                return message.reply('Ya desactivaste la creación de canales.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antichannelcreate-${message.guild.id}`, true);
            if(!id) {
                return message.reply('No has activado la protección de creación de canales en tu servidor.')
            } else {
                db.set(`antichannelcreate-${message.guild.id}`, false);
                return message.reply('Has desactivado la protección de creación de canales.')
            }
        }
        
    }
}