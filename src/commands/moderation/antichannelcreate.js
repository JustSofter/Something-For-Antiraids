const db = require('quick.db')
module.exports = {
    name: 'antichannelcreate',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('You don't have enough permissions to execute that command.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antichannelcreate-${message.guild.id}`);
            if(!id) {
                db.set(`antichannelcreate-${message.guild.id}`, true);
                return message.reply('You just disabled Channel Creation in your server.')
            } else {
                return message.reply('The anti-channel creation system is already enabled.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antichannelcreate-${message.guild.id}`, true);
            if(!id) {
                return message.reply('You haven't enabled the Anti-channel creation system.')
            } else {
                db.set(`antichannelcreate-${message.guild.id}`, false);
                return message.reply('You just enabled Channel Creation in your server.')
            }
        }
        
    }
}
