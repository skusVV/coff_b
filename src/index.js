const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');


const bot = new TelegramBot(BOT_TOKEN, {
    polling: true,
});

bot.on('message', message => {
    console.log(message);
    bot.sendMessage(message.chat.id, `Hi, ${message.from.first_name}`)
});
