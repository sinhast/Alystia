module.exports = (client, member) => {
  const welcomeMember = client.channels.cache.get("452782931971407874");
  welcomeMember.send(`${member} a rejoint le serveur !`);
};
