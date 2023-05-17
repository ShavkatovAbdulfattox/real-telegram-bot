const { Composer, Markup } = require("telegraf");
const composer = new Composer();

// Кнопка "Об авторе"
composer.hears("🔰 Введение", async (ctx) => {
  try {
    // Send the video with caption and inline keyboard
    const selectedLanguage = ctx.session?.selectedLanguage || "ru";
    await ctx.i18n.locale(selectedLanguage);
    const rulesMessage = ctx.i18n.t("start", { ctx }); // Retrieve the translation for 'rules'
    ctx.reply(rulesMessage);
  } catch (e) {
    console.error("error in About button", e);
  }
});

// Кнопка "Об авторе"
composer.hears("🏬 Магазин", async (ctx) => {
  try {
    const selectedLanguage = ctx.session?.selectedLanguage || "ru";
    await ctx.i18n.locale(selectedLanguage);
    // Send a chat action to show the user that the bot is processing their request
    await ctx.replyWithChatAction("upload_video");

    // Send the video with caption and inline keyboard
    await ctx.replyWithVideo(
      {
        source: "shop.MP4",
      },
      {
        caption: ctx.i18n.t("shop"),
      },
      {
        disable_web_page_preview: true,
      }
    );
  } catch (e) {
    console.error("error in About button", e);
  }
});

// Кнопка "Документы"
composer.hears("📃 Документы", async (ctx) => {
  try {
    const selectedLanguage = ctx.session?.selectedLanguage || "ru";
    await ctx.i18n.locale(selectedLanguage);
    await ctx.reply(
      ctx.i18n.t("documents"),
      Markup.inlineKeyboard([
        [Markup.button.callback("Правила", "btn_category1")],
        [Markup.button.url("Канал", "https://t.me/apple_gold_uz")],
      ])
    );
  } catch (e) {
    console.error("error in Document button", e);
  }
});

// Кнопка "Поддержать"
composer.hears("📍 Локатция", async (ctx) => {
  try {
    const selectedLanguage = ctx.session?.selectedLanguage || "ru";
    await ctx.i18n.locale(selectedLanguage);
    await ctx.replyWithLocation(41.338121, 69.270471, {
      live_period: 60,
      title: "Malika Bozor",
    });
    await ctx.reply(ctx.i18n.t("location"));
  } catch (e) {
    console.error("error in Support button", e);
  }
});

// Кнопка "Обратная связь"
composer.hears("✍️ Обратная связь", async (ctx) => {
  try {
    const selectedLanguage = ctx.session?.selectedLanguage || "ru";
    await ctx.i18n.locale(selectedLanguage);
    await ctx.reply(
      ctx.i18n.t("feedback"),
      Markup.inlineKeyboard([
        [
          Markup.button.url("Канал", "https://t.me/apple_gold_uz"),
          Markup.button.url("Тех поддержка", "https://t.me/vwhoami"),
        ],
        [Markup.button.url("Связаться с админом", "https://t.me/Abdurahmon_F")],
      ])
    );
  } catch (e) {
    console.error("error in Feedback button", e);
  }
});

module.exports = composer;
