import {
  SET_LETTERS_NUMBER,
  ADD_LETTER,
  REMOVE_LETTER,
  CHECK_CURRENT_WORD,
  SET_CURRENT_WORD,
  CLEAR_CURRENT_WORD,
  SET_STATS,
  RESET_GAME,
  ADD_USED_WORD,
  SET_KEYS_COLOR,
  FILTER_KEYS_COLOR,
  CHECK_EXISTENCE,
  SET_WORDS,
} from './word-actions';

const initialState = {
  numLetters: 5,
  lettersColors: [],
  guesses: [[], [], [], [], [], []],
  numGuesses: 0,
  isGuessed: false,
  currentWord: [],
  wordExists: true,
  usedWordsList: [],
  allWords: {},
  isNewGame: true,
  keyboard: { green: [], gray: [], yellow: [] },
  extraLettersHelper: [],
  //stats:
  numGuessesList: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  numGamesWon: 0,
  numGamesLost: 0,
  numGamesPlayed: 0,
};

export const wordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LETTERS_NUMBER:
      return {
        ...state,
        numLetters: payload,
      };
    case ADD_LETTER:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) => {
          return i === state.numGuesses && guess.length < state.numLetters
            ? [...guess, payload]
            : guess;
        }),
      };
    case REMOVE_LETTER:
      return {
        ...state,
        guesses: state.guesses.map((guess, i) => {
          return i === state.numGuesses
            ? guess.slice(0, guess.length - 1)
            : guess;
        }),
      };
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: state.guesses[state.numGuesses],
        extraLettersHelper: [],
      };
    case CHECK_EXISTENCE:
      return {
        ...state,
        wordExists: payload.includes(state.currentWord.join('')),
      };
    case CLEAR_CURRENT_WORD:
      return {
        ...state,
        currentWord: [],
        wordExists: true,
      };
    case CHECK_CURRENT_WORD:
      return {
        ...state,
        lettersColors: [
          ...state.lettersColors,
          // eslint-disable-next-line
          state.currentWord.map((letter, i) => {
            const allOccuranciesInCurrentWord = state.currentWord
              .map((l, i) => (l === letter ? i : ''))
              .filter((el) => el !== '');
            const allOccuranciesInPayload = payload
              .split('')
              .map((l, i) => (l === letter ? i : ''))
              .filter((el) => el !== '');

            if (allOccuranciesInPayload.length === 0) return 'gray';

            if (
              allOccuranciesInPayload.length > 0 &&
              allOccuranciesInPayload.length >=
                allOccuranciesInCurrentWord.length
            )
              return allOccuranciesInPayload.includes(i) ? 'green' : 'yellow';

            if (
              allOccuranciesInPayload.length > 0 &&
              allOccuranciesInPayload.length <
                allOccuranciesInCurrentWord.length
            ) {
              const correctLetters = allOccuranciesInCurrentWord.filter(
                (l) => allOccuranciesInPayload.includes(l) // letters that user put in the right place
                /* 
                For example:
                the SOLUTION is CAREFUL;
                user's current word is FEDERAL;
                letter is E;
                allOccuranciesInCurrentWord would be [1,3];
                allOccuranciesInPayload would be [3];
                correctLetters would be [3]
                */
              );
              const availableLetters = allOccuranciesInCurrentWord
                .filter((l) => !correctLetters.includes(l))
                .slice(
                  0,
                  allOccuranciesInPayload.length - correctLetters.length
                )
                .concat(...correctLetters);
              /*
               For example: 
               allOccuranciesInPayload are [1,3,5];
               allOccuranciesInCurrentWord are [1,5,6,8, 10];
               correctLetters are [1,5];
               availableLetters would be [1,5,6] (correct + first put letter within the available length)
               */

              state.extraLettersHelper.push(
                ...allOccuranciesInCurrentWord.filter(
                  (l) => !availableLetters.includes(l)
                )
              );

              return state.extraLettersHelper.includes(i)
                ? 'gray'
                : availableLetters.includes(i) &&
                  allOccuranciesInPayload.includes(i)
                ? 'green'
                : 'yellow';
            }
          }),
        ],
        isGuessed: payload === state.currentWord.join(''),
        numGuesses: state.numGuesses + 1,
        isNewGame: false,
      };
    case SET_KEYS_COLOR:
      return {
        ...state,
        keyboard: {
          green: [
            ...state.keyboard.green,
            ...state.currentWord
              .map((l, i) =>
                state.lettersColors[state.lettersColors.length - 1][i] ===
                'green'
                  ? l
                  : ''
              )
              .filter((l) => l !== ''),
          ],
          gray: [
            ...state.keyboard.gray,
            ...state.currentWord
              .map((l, i) =>
                state.lettersColors[state.lettersColors.length - 1][i] ===
                'gray'
                  ? l
                  : ''
              )
              .filter((l) => l !== ''),
          ],
          yellow: [
            ...state.keyboard.yellow,
            ...state.currentWord
              .map((l, i) =>
                state.lettersColors[state.lettersColors.length - 1][i] ===
                'yellow'
                  ? l
                  : ''
              )
              .filter((l) => l !== ''),
          ],
        },
      };
    case FILTER_KEYS_COLOR:
      return {
        ...state,
        keyboard: {
          green: state.keyboard.green,
          yellow: state.keyboard.yellow.filter(
            (l) => !state.keyboard.green.includes(l)
          ),
          gray: state.keyboard.gray.filter(
            (l) =>
              !state.keyboard.green.includes(l) &&
              !state.keyboard.yellow.includes(l)
          ),
        },
      };
    case SET_STATS:
      return {
        ...state,
        numGuessesList: state.isGuessed
          ? {
              ...state.numGuessesList,
              [state.numGuesses]: state.numGuessesList[state.numGuesses] + 1,
            }
          : state.numGuessesList,
        numGamesPlayed:
          state.isGuessed || state.numGuesses === 6
            ? state.numGamesPlayed + 1
            : state.numGamesPlayed,
        numGamesWon: state.isGuessed
          ? state.numGamesWon + 1
          : state.numGamesWon,
        numGamesLost:
          !state.isGuessed && state.numGuesses === 6
            ? state.numGamesLost + 1
            : state.numGamesLost,
      };
    case RESET_GAME:
      return {
        ...state,
        guesses: [[], [], [], [], [], []],
        lettersColors: [],
        numGuesses: 0,
        currentWord: [],
        isGuessed: false,
        wordExists: true,
        isNewGame: true,
        extraLettersHelper: [],
        keyboard: { gray: [], green: [], yellow: [] },
      };
    case ADD_USED_WORD:
      return {
        ...state,
        usedWordsList: [...state.usedWordsList, payload],
      };
    case SET_WORDS:
      return {
        ...state,
        allWords: payload,
      };
    default:
      return state;
  }
};
