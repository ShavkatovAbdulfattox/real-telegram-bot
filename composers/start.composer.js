const { Composer, Markup } = require("telegraf");
const composer = new Composer();

// Старт
// Старт
composer.start((ctx) => {
  // Create the language selection keyboard
  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("🇺🇿 O'zbek", "en"),
    Markup.button.callback("🇷🇺 Русский", "ru"),
  ]);

  // Send the language selection message with the keyboard
  ctx.reply("Tilni tanlang:", keyboard);
});
// Language selection callback handler
composer.action("en", (ctx) => {
  // Set the selected language to English
  ctx.session = { selectedLanguage: "en" };
  ctx.i18n.locale("en");
  ctx.reply(
    ctx.i18n.t("Ozbek tilini tanladingiz", {
      ctx,
    }),
    Markup.keyboard([
      ["🔰 Kirish"],
      ["🏬 Magazin"],
      ["📃 Xujjatlar"],
      ["📍 Lokatsiya"],
      ["✍️ Qayta Aloqa"],
    ]).resize()
  );
});

composer.action("ru", (ctx) => {
  // Set the selected language to Russian
  ctx.session = { selectedLanguage: "ru" };
  ctx.i18n.locale("ru");
  ctx.reply(
    ctx.i18n.t("Язык установлен на русский"),
    Markup.keyboard([
      ["🔰 Введение"],
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
