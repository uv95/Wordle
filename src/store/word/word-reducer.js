import {
  SET_LETTERS_NUMBER,
  ADD_LETTER,
  REMOVE_LETTER,
  CHECK_CURRENT_WORD,
  SET_CURRENT_WORD,
  CLEAR_CURRENT_WORD,
  SET_STATS,
  RESET_GAME,
} from "./word-actions";

const initialState = {
  lettersNumber: 5,
  guesses: [[], [], [], [], [], []],
  lettersColors: [],
  guessesNumber: 0,
  guessesNumberList: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  currentWord: [],
  word: "pride",
  guessed: false,
  gamesWon: 0,
  gamesLost: 0,
  gamesPlayed: 0,
};

export const wordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LETTERS_NUMBER:
      return {
        ...state,
        lettersNumber: payload,
      };
    case ADD_LETTER:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) => {
          return i === state.guessesNumber && guess.length < state.lettersNumber
            ? [...guess, payload]
            : guess;
        }),
      };
    case REMOVE_LETTER:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) => {
          return i === state.guessesNumber
            ? guess.slice(0, guess.length - 1)
            : guess;
        }),
      };
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: state.guesses[state.guessesNumber],
      };
    case CLEAR_CURRENT_WORD:
      return {
        ...state,
        currentWord: [],
      };

    case CHECK_CURRENT_WORD:
      return {
        ...state,
        lettersColors: [
          ...state.lettersColors,
          state.currentWord.map((letter, i) => {
            return !state.word.includes(letter)
              ? "gray"
              : i === state.word.indexOf(letter)
              ? "green"
              : "yellow";
          }),
        ],
        guessed: state.word === state.currentWord.join(""),
        guessesNumber: state.guessesNumber + 1,
      };
    case SET_STATS:
      return {
        ...state,
        guessesNumberList: state.guessed
          ? {
              ...state.guessesNumberList,
              [state.guessesNumber]:
                state.guessesNumberList[state.guessesNumber] + 1,
            }
          : state.guessesNumberList,
        gamesPlayed:
          state.guessed || state.guessesNumber === 5
            ? state.gamesPlayed + 1
            : state.gamesPlayed,
        gamesWon: state.guessed ? state.gamesWon + 1 : state.gamesWon,
        gamesLost:
          !state.guessed && state.guessesNumber === 5
            ? state.gamesLost + 1
            : state.gamesLost,
      };
    case RESET_GAME:
      return {
        ...state,
        guesses: [[], [], [], [], [], []],
        lettersColors: [],
        guessesNumber: 0,
        currentWord: [],
        guessed: false,
      };

    default:
      return state;
  }
};
