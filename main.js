const Discord = require("discord.js");
const Settings = require("./settings.js");
const Alystia = new Discord.Client();

Alystia.login(Settings.token);

Alystia.on("ready", () => {
  console.log(`Logged in as ${Alystia.user.tag}!`);
});

Alystia.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});
