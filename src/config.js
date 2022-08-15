const words = require("an-array-of-english-words");

export const languages = {
  english: {
    long: "English",
    eng: "English",
    short: "EN",
    keyboard: {
      first: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      second: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      third: ["z", "x", "c", "v", "b", "n", "m"],
      enter: "enter",
    },
  },
  russian: {
    long: "Русский",
    eng: "Russian",
    short: "RU",
    keyboard: {
      first: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
      second: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
      third: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
      enter: "ввод",
    },
  },
};

export const englishWords = {
  5: words.filter((w) => w.length === 5),
  6: words.filter((w) => w.length === 6),
  7: words.filter((w) => w.length === 7),
  8: words.filter((w) => w.length === 8),
  9: words.filter((w) => w.length === 9),
  10: words.filter((w) => w.length === 10),
};
