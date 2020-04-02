module.exports = (client, member) => {
  const welcomeMember = client.channels.cache.get(client.WELCOME);
  welcomeMember.send(`${member} a rejoint le serveur !`);
};
