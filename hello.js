const randomWords = require('random-words');

const words = randomWords(10);
const response = {
    words: words
};

console.log(JSON.stringify(response, null, 2));

