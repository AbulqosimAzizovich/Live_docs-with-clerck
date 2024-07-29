import { Telegraf } from "telegraf";
const TOKEN = "7285985413:AAGWk5AgzNNtL99vxoHrmCa9FSmmithDSvo";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://6690be122f8951c8b9549c32--shiny-bubblegum-94c111.netlify.app/";

bot.start((e) =>
  e.reply("Live docs start", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
