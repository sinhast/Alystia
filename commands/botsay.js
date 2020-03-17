module.exports = (client, message, args) => {
  message.channel.send(args.join(" "));
  message
    .delete({ timeout: 0.5 })
    .then(console.log("A message has been deleted."));
};
