const Discord = require("discord.js")
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log("I am ready!")
})

bot.on('message', function(message) {

    var command = message.content.split(' ')[0].toLowerCase()

    console.log(command)

    if(command == "!ping") {
        message.reply("pong")
    } else if (command == '!hi') {
        message.channel.send(`Hello, ${message.author.username}`)
    }

})

bot.login("NDEzODUzMTMyMzY0NDQ3NzQ5.DWe2SA.uJYlOr_d0rTrm4re7HqCErCaVkk")