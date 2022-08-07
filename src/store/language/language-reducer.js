import { SET_LANGUAGE, TOGGLE_LANGUAGE } from "./language-actions";

const initialState = {
  language: "English",
  languagesOpen: false,
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case TOGGLE_LANGUAGE:
      return { ...state, languagesOpen: !state.languagesOpen };
    default:
      return state;
  }
};
