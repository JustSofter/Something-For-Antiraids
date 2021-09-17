const db = require('quick.db')
module.exports = {
    name: 'antichanneldelete',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('No tienes los permisos suficientes para ejecutar este comando.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antichanneldelete-${message.guild.id}`);
            if(!id) {
                db.set(`antichanneldelete-${message.guild.id}`, true);
                return message.reply('Has desactivado la eliminación de canales en tu servidor.')
            } else {
                return message.reply('Ya desactivaste la eliminación de canales.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antichanneldelete-${message.guild.id}`, true);
            if(!id) {
                return message.reply('No has activado la protección de eliminación de canales en tu servidor.')
            } else {
                db.set(`antichanneldelete-${message.guild.id}`, false);
                return message.reply('Has desactivado la protección de eliminación de canales.')
            }
        }
        
    }
}