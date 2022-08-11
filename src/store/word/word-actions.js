export const SET_LETTERS_NUMBER = "@@word/SET_LETTERS_NUMBER";
export const ADD_LETTER = "@@word/ADD_LETTER";
export const REMOVE_LETTER = "@@word/REMOVE_LETTER";
export const SET_CURRENT_WORD = "@@word/SET_CURRENT_WORD";
export const CLEAR_CURRENT_WORD = "@@word/CLEAR_CURRENT_WORD";
export const CHECK_CURRENT_WORD = "@@word/CHECK_CURRENT_WORD";
export const SET_STATS = "@@word/SET_STATS";
export const RESET_GAME = "@@word/RESET_GAME";

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

export const checkCurrentWord = () => ({
  type: CHECK_CURRENT_WORD,
});
const clearCurrentWord = () => ({
  type: CLEAR_CURRENT_WORD,
});
const setStats = () => ({
  type: SET_STATS,
});
export const resetGame = () => ({
  type: RESET_GAME,
});

export const check = (wordLength, lettersNumber) => (dispatch) => {
  if (wordLength === lettersNumber) {
    dispatch(setCurrentWord());
    dispatch(checkCurrentWord());
    dispatch(setStats());
    dispatch(clearCurrentWord());
  }
};
