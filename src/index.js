const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const mongoose = require('mongoose');
const _ = require('lodash');

const config = require('./config');
const constants = require('./constants');
const { initDbIfNeed } = require('./initDB');
const keyboards = require('./keyboards');
const { ShopSchema } = require('./models/shop.model.js');

console.log('Started');

mongoose.connect(config.DB_URL, {useNewUrlParser: true}).then(db => {
    console.log('MongoDb connected');
});
mongoose.Promise = global.Promise;
const Shops = mongoose.model('shops', ShopSchema);
initDbIfNeed(Shops, config.nameId);

const bot = new TelegramBot(config.TOKEN, {
    polling: true,
});

bot.onText(/\/start/, (msg) => {
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + config.startImg), {
        caption: `Вас вітає кавярня ${config.name}\nНаша адреса: ${config.street}`,
        reply_markup: {
            inline_keyboard: keyboards.START
        }
    })
});

bot.on('message', message => {
    // console.log('message', message)
    // console.log(message);
    // bot.sendMessage(message.chat.id, `Hi, ${message.from.first_name}`)
});

bot.on('callback_query', query => {
    switch (query.data) {
        case constants.callbackKeys.SHOW_ON_MAP:
            bot.sendLocation(query.from.id, config.location.lat, config.location.lng);
            break;
        case constants.callbackKeys.MENU:
            Shops.findOne({ shopId: config.nameId }).then(data => {
                // TODO check category has any amount of items
                const categories = _.uniqBy(data.products.map(item => item.category), 'value').map(category => {
                    return {
                        text: category.name,
                        callback_data: `${constants.PREFIXES.CATEGORY}_${category.value}`
                    }
                });

                // TODO make 2 item in row
                bot.sendMessage(query.from.id, 'Виберіть категорію', {
                    reply_markup: {
                        inline_keyboard: [
                            categories
                        ]
                    }
                });
            });
            break;
        default:
            break;
    }

    const prefix = query.data.substring(0, 3);
    switch (prefix) {
        case constants.PREFIXES.CATEGORY:
            Shops.findOne({ shopId: config.nameId }).then(data => {
                // TODO check product has any amount of items
                const products = data.products
                    .filter(product => product.category.value === query.data.substring(4, query.data.length))
                    .map(product => {
                        return {
                            text: `${product.name} - ${product.price}грн (${product.size}мл)`,
                            callback_data: `${constants.PREFIXES.PRODUCT}_${product.id}`
                        }
                    });

                // TODO make 2 item in row
                bot.sendMessage(query.from.id, 'Виберіть  ghjlern', {
                    reply_markup: {
                        inline_keyboard: [
                            products
                        ]
                    }
                });
            });
            break;
        default:
            break;
    }
});
