const { Composer } = require("telegraf");
const { code } = require("telegraf/format");
const ytdl = require("ytdl-core");
const fs = require("fs");

const streamToBuffer = require("../utils/streamToBuffer.js");

const textComposer = new Composer();

textComposer.on("text", async (ctx) => {
    const link = ctx.message.text;

    try {
        const videoInfo = await ytdl.getInfo(link);
        const videoStream = ytdl(link, { filter: "audio", quality: "highestvideo" });

        const videoBuffer = await streamToBuffer(videoStream);
        const filePath = `./video/${videoInfo.videoDetails.title}.mp4`;

        await fs.promises.writeFile(filePath, videoBuffer);

        await ctx.reply(code(`Сообщение принял. Жду ответа от сервера...`));
        await ctx.replyWithVideo({ source: filePath });
        await ctx.reply(`Ваше видео: ${videoInfo.videoDetails.title}`);

    } catch (error) {
        await ctx.reply(code(`Извините у нас какие-то ошибки попробуйте позже`));
    };
});

module.exports = textComposer.middleware();