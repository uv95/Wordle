const engWords = require('an-array-of-english-words');
const rusWords = require('russian-words');

export const languages = {
  en: {
    long: 'English',
    eng: 'English',
    short: 'en',
    keyboard: {
      first: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      second: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      third: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      enter: 'enter',
    },
  },
  ru: {
    long: 'Русский',
    eng: 'Russian',
    short: 'ru',
    keyboard: {
      first: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
      second: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
      third: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'],
      enter: 'ввод',
    },
  },
};

const getWordsWithoutHyphen = (words) => words.filter(word=>!word.split('').includes('-'))

const getWordsOfLength = (words,length)=> words.filter(word=>word.length===length)

const filterWords = (words,length)=> getWordsWithoutHyphen(getWordsOfLength(words, length));

export const englishWords = {
  5: filterWords(engWords, 5),
  6: filterWords(engWords, 6),
  7: filterWords(engWords, 7),
  8: filterWords(engWords, 8),
  9: filterWords(engWords, 9),
  10: filterWords(engWords, 10),
};
export const russianWords = {
  5: filterWords(rusWords, 5),
  6: filterWords(rusWords, 6),
  7: filterWords(rusWords, 7),
  8: filterWords(rusWords, 8),
  9: filterWords(rusWords, 9),
  10: filterWords(rusWords, 10),
};
