const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
const prefix = "compliment";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Compliment Bot is online!");
});

client.on("message", (message) => {
  message.content = message.content.toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  client.commands.get("compliment").execute(message, args);
});

client.login(token);
