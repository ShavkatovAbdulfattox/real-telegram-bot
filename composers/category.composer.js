const { Composer, Markup } = require("telegraf");
const composer = new Composer();
const lib = require("../modules/lib");

// Обработка кнопок из категории Редакторы кода
composer.action("btn_category1", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto({
      source:"images/rules.jpg"
    },
    {
      caption: ctx.i18n.t("rules"),
      parse_mode: "HTML",
    })
  } catch (e) {
    console.error(e);
  }
});


module.exports = composer;