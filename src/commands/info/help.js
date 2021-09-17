const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Bot commands.')
        .setDescription('\`->antichannelcreate\` Disable the channel creation in the server.\n\`->antichanneldelete\` Disable channel deletion on the server. (Restores deleted channels.)\n\`->antiinvite\` Block any invites from being posted in the server.\n\`->antijoin\` Instantly Kick any member that joins.\n\`->lockdown\` Lock the Send Messages permission from every channel.\n\nCommand Usage:\n\`->command enable\` Enable the respective system.\n\`->command disable\` Disable the respective system.')
        .setFooter(`Comando ejecutado por: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
    }
}
