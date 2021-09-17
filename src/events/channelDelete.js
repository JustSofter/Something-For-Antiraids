const db = require('quick.db')
module.exports = {
    name: 'channelDelete',
    run: async(channel, client) => {
        let id = db.get(`antichanneldelete-${channel.guild}`)
        if(id) return;
        if(id === false) return;

        const AuditLogFetch = await channel.guild.fetchAuditLogs({limit: 1, type: "CHANNEL_DELETE"});
        const Entry = AuditLogFetch.entries.first();
        console.log(`${Entry.executor.tag || 'Someone'} deleted a channel.`)
          if(Entry.executor.id === client.user.id) return;
        channel.guild.channels.create(channel.name, {
            type: "text"
        });

    }
}