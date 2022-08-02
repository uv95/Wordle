import { combineReducers } from "redux";
import { modalsReducer } from "./modals/modals-reducer";

export const rootReducer = combineReducers({
  modals: modalsReducer,
});
