export const SET_LANGUAGE = "@@language/SET_LANGUAGE";
export const TOGGLE_LANGUAGE = "@@language/TOGGLE_LANGUAGE";

export const setLanguage = (lang) => ({
  type: SET_LANGUAGE,
  payload: lang,
});
export const toggleLanguage = (open) => ({
  type: TOGGLE_LANGUAGE,
  payload: open,
});
