const Discord = require("discord.js");
const config = require("./config");
const Alystia = new Discord.Client();

Alystia.login(config.TOKEN);

Alystia.on("ready", () => console.log(`Logged in as ${Alystia.user.tag}!`));
Alystia.on("warn", console.warn);
Alystia.on("error", console.error);
Alystia.on("debug", console.log);

Alystia.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(config.PREFIX) !== 0) return;
  const args = msg.content
    .slice(config.PREFIX.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping") msg.channel.send(".pong");

  if (cmd === "ping") msg.channel.send(".ping");

  if (cmd === "say") {
    msg.channel.send(args.join(" "));
    msg
      .delete({ timeout: 0.5 })
      .then(console.log("A message has been deleted."));
  }

  if (cmd === "sinfo") {
    const embed = new Discord.MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Membres", msg.guild.memberCount)
      .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
      .setTimestamp();
    msg.channel.send(embed);
  }
});

Alystia.on("guildMemberAdd", member => {
  const welcomeMember = Alystia.channels.cache.get("452782931971407874");
  welcomeMember.send(`${member} a rejoint le serveur !`);
});

Alystia.on("guildMemberRemove", member => {
  const goodbyeMember = Alystia.channels.cache.get("452782931971407874");
  goodbyeMember.send(`${member} a quitté le serveur !`);
});
