const db = require('quick.db')
module.exports = {
    name: 'antiinvite',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('You dont have enough permissions to execute that command.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antiinvite-${message.guild.id}`);
            if(!id) {
                db.set(`antiinvite-${message.guild.id}`, true);
                return message.reply('You just enabled anti-invite posting protection.')
            } else {
                return message.reply('You already enabled the anti-invite posting protection.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antiinvite-${message.guild.id}`, true);
            if(!id) {
                return message.reply('You didnt enable the anti-invite posting protection.')
            } else {
                db.set(`antiinvite-${message.guild.id}`, false);
                return message.reply('You just disabled the anti-invite posting protection.')
            }
        }
        
    }
}
