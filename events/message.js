module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  const args = message.content
    .slice(client.PREFIX.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (client.commands.has(cmd)) client.commands.get(cmd)(client, message, args);
};
