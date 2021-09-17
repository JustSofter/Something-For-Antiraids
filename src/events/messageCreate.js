const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "messageCreate",
    run: async(message, client) => {

        let prefix = "->";
        let id = db.get(`antiinvite-${message.guild.id}`, true)
        /* Anti-Invite system */
        if(message.content.startsWith('discord.gg/')) {
            if(!id) return;
            message.delete();
            message.channel.send('No se pueden enviar invitaciones en el servidor.')
        }
        
      
      /* Anti mass-mention system 
        if(message.mentions.users) {
            let id = db.get(`antimention-${message.guild.id}`);
            if(!id) return;
          // member.send('El antijoin está activado, por lo que has sido kickeado del server. https://cdn.discordapp.com/attachments/796487933342384180/886695087051006002/image0-9-1.jpg')
          const userArray =  message.mentions.users.array();
          if(userArray[id]) {
              message.delete()
              return message.author.send('Has superado la cantidad máxima de menciones puesta en el server.')
                  
          }
        }
        */
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)

        if(!command) return message.channel.send({ embeds: [new Discord.MessageEmbed()
            .setDescription(':x: | Ese comando no existe, use a!help para ver los comandos.')
            .setColor("RED")] })
        try {
            command.run(client, message, args)
        } catch (err) {
            message.channel.send(`Hubo un error al ejecutar el comando, este es el error:\n \`\`\`${err}\`\`\` `)
            console.log(err)
        }
    }
}
