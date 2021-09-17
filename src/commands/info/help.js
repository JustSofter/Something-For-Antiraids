const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Comandos del bot.')
        .setDescription('\`->antichannelcreate\` Desactiva la creación de canales en el servidor.\n\`->antichanneldelete\` Desactiva la eliminación de canales en el servidor (No entra en conflicto con el Anti-ChannelCreate, ya que no elimina canales que el bot crea, solo los que crean los usuarios o otros bots).\n\`->antiinvite\` Bloquea que posteen invitaciones en el servidor.\n\`->antijoin\` Evita que nuevos miembros se unan.\n\`->lockdown\` Bloquea todos los canales del servidor para que nadie pueda enviar mensajes en los canales.')
        .setFooter(`Comando ejecutado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
    }
}
