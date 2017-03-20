# Synonymize API

Easy API for synonymize russian words.

## Installation

```
$ npm install synonymize-api
```

## Usage

```javascript
const synonymize = require('synonymize');

synonymize('машина').then(response => {
  console.log(response); // => [ 'автомобиль', 'аппарат', 'спорткар', 'more 20 items...' ]
  console.log(response[2]); // => 'спорткар'
});
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
