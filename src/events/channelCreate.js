const db = require('quick.db')
module.exports = {
    name: 'channelCreate',
    run: async(channel, client) => {
        let id = db.get(`antichannelcreate-${channel.guild}`)
        if(id) return;
        if(id === false) return;

        const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_CREATE"});
        const Entry = AuditLogFetch.entries.first();
        console.log(`${Entry.executor.tag || 'Someone'} created a channel.`)
        if(Entry.executor.tag === client.user.tag) return;
        channel.delete();
    }
}
