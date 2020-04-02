module.exports = (client, member) => {
  const goodbyeMember = client.channels.cache.get(client.WELCOME);
  goodbyeMember.send(`${member} a quitté le serveur !`);
};
