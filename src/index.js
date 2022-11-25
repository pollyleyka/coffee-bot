import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_API_TOKEN;
const bot = new TelegramBot(token, {
    polling: true
});
bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase() === 'hi') {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});