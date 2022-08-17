export const SET_LETTERS_NUMBER = "@@word/SET_LETTERS_NUMBER";
export const ADD_LETTER = "@@word/ADD_LETTER";
export const REMOVE_LETTER = "@@word/REMOVE_LETTER";
export const SET_CURRENT_WORD = "@@word/SET_CURRENT_WORD";
export const CLEAR_CURRENT_WORD = "@@word/CLEAR_CURRENT_WORD";
export const CHECK_CURRENT_WORD = "@@word/CHECK_CURRENT_WORD";
export const SET_STATS = "@@word/SET_STATS";
export const RESET_GAME = "@@word/RESET_GAME";
export const ADD_USED_WORD = "@@word/ADD_USED_WORD";
export const SET_KEYS_COLOR = "@@word/SET_KEYS_COLOR";
export const FILTER_KEYS_COLOR = "@@word/FILTER_KEYS_COLOR";

export const setLettersNumber = (num) => ({
  type: SET_LETTERS_NUMBER,
  payload: num,
});
export const addLetter = (letter) => ({
  type: ADD_LETTER,
  payload: letter,
});
export const removeLetter = () => ({
  type: REMOVE_LETTER,
});
export const setCurrentWord = () => ({
  type: SET_CURRENT_WORD,
});

export const checkCurrentWord = (word) => ({
  type: CHECK_CURRENT_WORD,
  payload: word,
});
const clearCurrentWord = () => ({
  type: CLEAR_CURRENT_WORD,
});
const setStats = () => ({
  type: SET_STATS,
});
const setKeysColor = () => ({
  type: SET_KEYS_COLOR,
});
const filterKeysColor = () => ({
  type: FILTER_KEYS_COLOR,
});
export const resetGame = () => ({
  type: RESET_GAME,
});
export const addUsedWord = (word) => ({
  type: ADD_USED_WORD,
  payload: word,
});

export const check = (wordLength, lettersNumber, word) => (dispatch) => {
  if (wordLength === lettersNumber) {
    dispatch(setCurrentWord());
    dispatch(checkCurrentWord(word));
    dispatch(setKeysColor());
    dispatch(filterKeysColor());
    dispatch(setStats());
    dispatch(clearCurrentWord());
  }
};
