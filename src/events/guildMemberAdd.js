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
      // member.send('El antijoin está activado, por lo que has sido kickeado del server. https://cdn.discordapp.com/attachments/796487933342384180/886695087051006002/image0-9-1.jpg')
    }
}