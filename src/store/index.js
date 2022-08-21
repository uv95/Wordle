import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import { saveState, loadState } from "./local-storage";
import throttle from "lodash/throttle";

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
        language: {
          language: store.getState().language.language,
          languagesOpen: false,
        },
        word: {
          lettersNumber: store.getState().word.lettersNumber,
          guesses: [[], [], [], [], [], []],
          lettersColors: [],
          guessesNumber: 0,
          currentWord: [],
          guessed: false,
          wordExists: true,
          usedWordsList: [],
          newGame: true,
          extraLettersHelper: [],
          words: {},
          keyboard: { green: [], gray: [], yellow: [] },
          gamesLost: store.getState().word.gamesLost,
          gamesWon: store.getState().word.gamesWon,
          guessesNumberList: store.getState().word.guessesNumberList,
          gamesPlayed: store.getState().word.gamesPlayed,
        },
      }),
    1000
  )
);

export { store };
