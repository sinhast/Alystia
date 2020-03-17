module.exports = (client, member) => {
  const goodbyeMember = client.channels.cache.get("452782931971407874");
  goodbyeMember.send(`${member} a quitté le serveur !`);
};
