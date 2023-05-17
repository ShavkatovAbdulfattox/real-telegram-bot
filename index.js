const { Telegraf, Markup, session } = require("telegraf");
const TelegrafI18n = require("telegraf-i18n");
const path = require("path");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Enable the session middleware
bot.use(session());

// Create an instance of TelegrafI18n
const i18n = new TelegrafI18n({
  defaultLanguage: "ru", // Set the default language
  directory: path.resolve(__dirname, "locales"), // Path to your language translation files
});

// Use the i18n middleware
bot.use(i18n.middleware());

bot.use(require("./composers/start.composer")); 
bot.use(require("./composers/menu.composer"));
bot.use(require("./composers/uzmenu.composer"));
bot.use(require("./composers/category.composer"));

bot.launch();
console.log("Bot started");
// Example command that uses language-specific translations

// // Подключить Telegraf для создания бота и Markup для создания клавиатуры
// const { Telegraf, Markup } = require('telegraf')
// // Подключение path
// const path = require('path')
// // Подключение dotenv для скрытия токена
// require('dotenv').config()

// // Создать бота
// const bot = new Telegraf(process.env.BOT_TOKEN)

// // Подключить TelegrafI18n для создания текстовых словарей
// const TelegrafI18n = require('telegraf-i18n')
// const i18n = new TelegrafI18n({
//   defaultLanguage: 'ru',
//   allowMissing: false, // Default true
//   directory: path.resolve(__dirname, 'locales')

// })
// bot.use(i18n.middleware())

// // Команда start и help
// bot.use(require('./composers/start.composer'))

// // Запустить бота
// bot.launch()
// console.log("Бот запущен")
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
