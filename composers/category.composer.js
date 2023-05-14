const { Composer, Markup } = require('telegraf')
const composer = new Composer()
const lib = require('../modules/lib')

// Обработка кнопок из категории Редакторы кода
composer.action('btn_category1', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML(ctx.i18n.t('editors'), Markup.inlineKeyboard([
      [
        Markup.button.callback('1. Обзоры', 'category1_btn1'),
      ],

    ]))
  } catch (e) {
    console.error(e)
  }
})

lib.send_msg_action('category1_btn1', 'img/y_course/c1_b1.jpg', 'editors_0', composer, [[Markup.button.url('Смотреть', 'https://www.youtube.com/playlist?list=PLuY6eeDuleIO74IrW8y6DohRKaL5o1N1F')]])
module.exports = composer