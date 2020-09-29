var fs = require("fs");
var array = fs
  .readFileSync("./commands/listOfCompliments.txt")
  .toString()
  .split("\n");
module.exports = {
  name: "compliment",
  description: "this is a compliment command!",
  execute(message, args) {
    let comp = array[Math.floor(Math.random() * array.length)];
    message.channel.send(comp);
  },
};
