import { combineReducers } from "redux";
import { modalsReducer } from "./modals/modals-reducer";
import { themeReducer } from "./theme/theme-reducer";
import { languageReducer } from "./language/language-reducer";

export const rootReducer = combineReducers({
  modals: modalsReducer,
  theme: themeReducer,
  language: languageReducer,
});
