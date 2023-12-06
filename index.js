const { Telegraf } = require("telegraf");
const dotenv = require("dotenv").config();

const startComposer = require("./composers/start.command.js");
const textComposer = require("./composers/text.command.js");

const bot = new Telegraf(process.env.TOKEN_BOT);

bot.use(startComposer);
bot.use(textComposer);

bot.launch(console.log(`==> Bot working on the - https://web.telegram.org/k/#@DownloadYouTubeVideoLinkBot`));
