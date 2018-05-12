const Discord = require("discord.js");

const TOKEN = "NDQ0NjU0NTk1OTYwOTk1ODQz.DdfEYg._UZoILNMep1AquTzBjkrMzsl8NY";
const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");

    bot.user.setGame("www.FatalityMC.net | !Help");

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "forums":
        message.channel.sendMessage("Join our Server Forums at http://www.FatalityMC.net");
        break;
        case "store":
        message.channel.sendMessage("Donate to FatalityMC at http://store.FatalityMC.com");
        break;
        case "webstore":
        message.channel.sendMessage("Donate to FatalityMC at http://store.FatalityMC.com");
        break;
        case "ip":
        message.channel.sendMessage("FatalityMC's Server IP is Hub.FatalityMC.com");
        break;
        case "discord":
        message.channel.sendMessage("FatalityMC Discord Invite Link: http://discordapp.com/invite/PWU9zMm");
        break;
        case "help":
        message.channel.sendMessage("Fatality Discord Commands: !Forums !Webstore !Store !Discord !IP");
        break;
    }
});

bot.login(TOKEN);
