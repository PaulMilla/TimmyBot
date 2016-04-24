if (!process.env.page_token) {
  console.log('Error: Specify page_token in environment');
  process.exit(1);
}

if (!process.env.verify_token) {
  console.log('Error: Specify verify_token in environment');
  process.exit(1);
}

var botkit = require('botkit');

var controller = botkit.facebookbot({
  debug: process.env.debug,
  access_token: process.env.page_token,
  verify_token: process.env.verify_token
});

var bot = controller.spawn({ });

controller.setupWebserver(process.env.port || 3000, function (err, webserver) {
  controller.createWebhookEndpoints(webserver, bot, function () {
    console.log('ONLINE');
  });
});

controller.on('tick', function () { /* Do nothing */ });

controller.on('facebook_postback', function(bot, message) {
  console.log('facebook_postback: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

controller.on('message_received', function(bot, message) {
  console.log('message_received: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

controller.on('message_deliveries', function(bot, message) {
  console.log('message_deliveries: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

controller.on('messages', function(bot, message) {
  console.log('messages: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

controller.on('messaging_optins', function(bot, message) {
  console.log('messaging_optins: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

controller.on('messaging_postbacks', function(bot, message) {
  console.log('messaging_postbacks: '); console.log(message);
  bot.reply(message, 'TIMMY!');
});

