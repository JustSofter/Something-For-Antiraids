const db = require('quick.db')
module.exports = {
    name: 'antijoin',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('No tienes los permisos suficientes para ejecutar este comando.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antijoin-${message.guild.id}`);
            if(!id) {
                db.set(`antijoin-${message.guild.id}`, true);
                return message.reply('Has activado el sistema de antijoin.')
            } else {
                return message.reply('Ya activaste el antijoin.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antijoin-${message.guild.id}`, true);
            if(!id) {
                return message.reply('No has activado el sistema de antijoin.')
            } else {
                db.set(`antijoin-${message.guild.id}`, false);
                return message.reply('Has desactivado el antijoin.')
            }
        }
        
    }
}