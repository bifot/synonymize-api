var request = require('request');
var cheerio = require('cheerio');

module.exports = function(word) {
  return new Promise((resolve, reject) => {
    request(`https://how-to-all.com/${encodeURIComponent(`синонимы:${word}`)}`, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        var $ = cheerio.load(body);
        var table = $('#table1 tbody tr');
        var words = [];

        table.each(function(item) {
          if (item > 1 && $(this).text()) {
            words.push($(this).text().split(' (')[0]);
          }
        });

        resolve(words);
      } else {
        reject(err);
      }
    });
  });
};
