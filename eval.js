client.on("message", message => {
  const args = message.content.split(" ").slice(1);
 
  if (message.content.startsWith("eval")) {
    if(message.author.id !== 542378004094124033, 758024563006111864, 612660262922878986) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});