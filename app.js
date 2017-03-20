const synonymize = require('synonymize');

synonymize('машина').then(response => {
  console.log(response); // => [ 'автомобиль', 'аппарат', 'спорткар', 'more 20 items...' ]
  console.log(response[2]); // => 'спорткар'
});
