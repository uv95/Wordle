import { combineReducers } from "redux";
import { modalsReducer } from "./modals/modals-reducer";
import { themeReducer } from "./theme/theme-reducer";
import { wordReducer } from "./word/word-reducer";

export const rootReducer = combineReducers({
  modals: modalsReducer,
  theme: themeReducer,
  word: wordReducer,
});
