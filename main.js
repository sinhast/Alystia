const Discord = require("discord.js");
const config = require("./config");
const client = new Discord.Client();

client.login(config.TOKEN);
client.on("warn", console.warn);
client.on("error", console.error);
client.PREFIX = config.PREFIX;
client.WELCOME = config.WELCOME_CHANNEL;

client.commands = new Discord.Collection();
client.commands.set("botsay", require("./commands/botsay.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("ping", require("./commands/ping.js"));
client.commands.set("animals", require("./commands/animals.js"));

client.on("ready", () => require("./events/ready.js")(client));

client.on("message", msg => require("./events/message.js")(client, msg));

client.on("guildMemberAdd", member =>
  require("./events/guildMemberAdd.js")(client, member)
);

client.on("guildMemberRemove", member =>
  require("./events/guildMemberRemove.js")(client, member)
);
