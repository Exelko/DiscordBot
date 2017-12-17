const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log('bot is ready! ' + bot.user.username);

  // bot.generateInvite(["ADMINISTRATOR"]).then(link => {
  //   console.log(link);
  // }).catch(err => {
  //   console.log(err.stack);
  // });

  // try {
  //     let link = await bot.generateInvite(["ADMINISTRATOR"]);
  //     console.log(link);
  // } catch(e) {
  //   console.log(e.stack);
  // }

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith(botSettings.prefix)) return;

  if(command === botSettings.prefix + "userinfo") {
    console.log("Gleban");
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("This is user's info!")
      .setColor("#9B59B6")
      .addField("Full Username", message.author.username +"#" + message.author.discriminator)
      .addField("ID", message.author.id)
      .addField("Created At", message.author.createdAt);

      message.channel.send(embed);

  }
});

bot.login(botSettings.token);
