const { Composer, Markup } = require("telegraf");
const composer = new Composer();

// Старт
composer.start((ctx) => {
  ctx.reply(
    ctx.i18n.t("start", { ctx }),
    Markup.keyboard([
      ["🏬 Магазин"],
      ["📃 Документы"],
      ["📍 Локатция"],
      ["✍️ Обратная связь"],
    ]).resize()
  );
});

// Помощь=
composer.help(async (ctx) => {
  try {
    await ctx.replyWithHTML(
      ctx.i18n.t("command"),
      Markup.inlineKeyboard([
        [
          Markup.button.url("Телеграм канал", "https://t.me/apple_gold_uz"),
          Markup.button.url("Связаться с админом", "https://t.me/Abdurahmon_F"),
        ],
        [Markup.button.url("Тех поддержка", "https://t.me/vwhoami")],
      ])
    );
  } catch (e) {
    console.error("error in Help command", e);
  }
});

module.exports = composer;
