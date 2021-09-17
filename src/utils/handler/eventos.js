module.exports.eventos = function (fs, client, MessageEmbed, Util) {
    const eventFiles = fs.readdirSync(__dirname + "/" + `../../events/`).filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(__dirname + "/" + `../../events/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.run(...args, client));
      } else {
        client.on(event.name, (...args) => event.run(...args, client, MessageEmbed, Util));
      }
    }
  };