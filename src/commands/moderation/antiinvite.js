const db = require('quick.db')
module.exports = {
    name: 'antiinvite',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('No tienes los permisos suficientes para ejecutar este comando.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antiinvite-${message.guild.id}`);
            if(!id) {
                db.set(`antiinvite-${message.guild.id}`, true);
                return message.reply('Has desactivado las invitaciones en tu servidor.')
            } else {
                return message.reply('Ya desactivaste las invitaciones.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antiinvite-${message.guild.id}`, true);
            if(!id) {
                return message.reply('No has activado las invitaciones en tu servidor.')
            } else {
                db.set(`antiinvite-${message.guild.id}`, false);
                return message.reply('Has desactivado las invitaciones.')
            }
        }
        
    }
}