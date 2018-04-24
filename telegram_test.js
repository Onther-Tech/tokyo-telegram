

var token = require('./config.js')
const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token.getToken() , {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text == '정순형'){
    bot.sendMessage(chatId, 'Kevin');
  }else if (msg.text == '김휘경'){
    bot.sendMessage(chatId, 'Zoe');
  }else if (msg.text == '박주형'){
    bot.sendMessage(chatId, 'Carl');
  }else if (msg.text == '강주형'){
    bot.sendMessage(chatId, 'Jace');
  }else if (msg.text == '황재승'){
    bot.sendMessage(chatId, 'Jason');
  }else if(msg.text == '강희정'){
    bot.sendMessage(chatId, 'Jenny');
  }else if (msg.text == '신건우'){
    bot.sendMessage(chatId, 'Thomas');
  }else if (msg.text == '허상범'){
    bot.sendMessage(chatId, 'Danny');
  }else if (msg.text == '온더'){
    bot.sendMessage(chatId, '짱');
  }else if (msg.text == '하이'){
    bot.sendMessage(chatId, '온더 짱');
  }

});
