const db = require('quick.db')
module.exports = {
    name: 'guildMemberAdd',
    run: async(member, client) => {
        let id = db.get(`antijoin-${member.guild.id}`, true);
        if(!id) {
          return;
        } else {
          if(member.user.bot) return;
          await member.kick("Actijoin activado.")
        }
        if(id === false) {
          return;
        } else {
          if(member.user.bot) return;
          await member.kick("Actijoin activado.")
        }
    }
}
