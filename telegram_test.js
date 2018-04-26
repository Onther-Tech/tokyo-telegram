
var token = require('./config.js');
const TelegramBot = require('node-telegram-bot-api');
const async = require('async')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token.getToken(), {polling: true});
const chatId = '';
const answer = {
    "reply_markup": {
        "keyboard": seriesKB,
        "one_time_keyboard": true
    }
};
const opts = {
  reply_markup: JSON.stringify({
    keyboard: [
      ['1. 토큰의 추가 발행이 가능한 토큰(Mintable)'],
      ['2. 특정 블록높이를 기준으로 잔액 분포를 알 수 있는 토큰(Minime)']
    ]
  })
};
var seriesKB = [];  // The keyboard array


async.waterfall([
    function(callback) {

        bot.onText(/^\/start/, function(msg, match) {

        bot.sendMessage(msg.chat.id, "프로젝트 이름은 무엇인가요?", answer );
        bot.onText(/.+/g, function(msg, match) {
            console.log(match);
            callback(null, msg);
          });
        });

    },function( msg , callback) {

      bot.sendMessage(msg.chat.id, "토큰의 타입을 선택해주세요", opts);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    },function( msg , callback) {

      console.log(msg);
      bot.sendMessage(msg.chat.id, "토큰의 이름은 무엇인가요?", answer);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    },function( msg , callback) {

      bot.sendMessage(msg.chat.id, "토큰의 심볼은 무엇인가요?", answer);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    },function( msg , callback) {

      bot.sendMessage(msg.chat.id, "토큰의 소수점은 몇 번째 자리수까지 인가요?", answer);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    },function( msg , callback) {

      bot.sendMessage(msg.chat.id, "사용자가 본인의 토큰을 태워 없애는 기능이 필요한가요?", answer);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    },function( msg , callback) {

      bot.sendMessage(msg.chat.id, "관리자가 토큰의 전체 전송을 일시정지하는 기능이 필요한가요?", answer);
      bot.onText(/.+/g, function(msg, match) {
          console.log(match);
          callback(null, msg);
      });
    }


], function (err, result) {

});

