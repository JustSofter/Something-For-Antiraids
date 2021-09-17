const db = require('quick.db')
module.exports = {
    name: 'antijoin',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('You dont have enough permissions to execute that command.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antijoin-${message.guild.id}`);
            if(!id) {
                db.set(`antijoin-${message.guild.id}`, true);
                return message.reply('You just enabled the anti-join protection.')
            } else {
                return message.reply('You already enabled the anti-join protection.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antijoin-${message.guild.id}`, true);
            if(!id) {
                return message.reply('You didnt enable the anti-join system.')
            } else {
                db.set(`antijoin-${message.guild.id}`, false);
                return message.reply('You just disabled the anti-join system.')
            }
        }
        
    }
}
