import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import { saveState, loadState } from './local-storage';
import throttle from 'lodash/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(
  throttle(
    () =>
      saveState({
        theme: store.getState().theme,
        word: {
          numLetters: store.getState().word.numLetters,
          guesses: [[], [], [], [], [], []],
          lettersColors: [],
          numGuesses: 0,
          currentWord: [],
          isGuessed: false,
          wordExists: true,
          usedWordsList: [],
          isNewGame: true,
          extraLettersHelper: [],
          allWords: {},
          keyboard: { green: [], gray: [], yellow: [] },
          numGameslost: store.getState().word.numGameslost,
          numGamesWon: store.getState().word.numGamesWon,
          numGuessesList: store.getState().word.numGuessesList,
          numGamesPlayed: store.getState().word.numGamesPlayed,
        },
      }),
    1000
  )
);

export { store };
