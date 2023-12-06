const { Composer } = require("telegraf");

const startComposer = new Composer();

startComposer.start((ctx) => {
     ctx.reply(`Привет, ${ctx.from.first_name}! Добро пожаловать в мир бескрайних возможностей развлечений! 🚀 Отправь мне ссылку, и я помогу тебе скачать видео или песню в миг. 🎥🎶 Никаких границ, только твоя фантазия! 💫`);
});

module.exports = startComposer.middleware();