import { combineReducers } from "redux";
import { modalsReducer } from "./modals/modals-reducer";
import { themeReducer } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
  modals: modalsReducer,
  theme: themeReducer,
});
