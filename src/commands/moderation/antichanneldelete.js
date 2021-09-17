const db = require('quick.db')
module.exports = {
    name: 'antichanneldelete',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply('You dont have enough permissions to execute that command.')
        }
        if(args[0] === 'enable') {
            let id = db.get(`antichanneldelete-${message.guild.id}`);
            if(!id) {
                db.set(`antichanneldelete-${message.guild.id}`, true);
                return message.reply('You just disabled Channel Deletion in your server.')
            } else {
                return message.reply('You already disabled the Channel Deletion in your server.')
            }
        }
        if(args[0] === 'disable') {
            let id = db.get(`antichanneldelete-${message.guild.id}`, true);
            if(!id) {
                return message.reply('You dont have the Anti-channel deletion protection in your server.')
            } else {
                db.set(`antichanneldelete-${message.guild.id}`, false);
                return message.reply('You just enabled Channel Deletion in your server..')
            }
        }
        
    }
}
