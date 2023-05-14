// Подключить Telegraf для создания бота и Markup для создания клавиатуры
const { Telegraf, Markup } = require('telegraf')
// Подключение path
const path = require('path')
// Подключение dotenv для скрытия токена
require('dotenv').config()

// Создать бота
const bot = new Telegraf(process.env.BOT_TOKEN)

// Подключить TelegrafI18n для создания текстовых словарей
const TelegrafI18n = require('telegraf-i18n')
const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, 'locales')
  
})
bot.use(i18n.middleware())

// Команда start и help
bot.use(require('./composers/start.composer'))

bot.use(require('./composers/menu.composer'))
bot.use(require('./composers/category.composer')) 


 
// Запустить бота
bot.launch()
console.log("Бот запущен")
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))