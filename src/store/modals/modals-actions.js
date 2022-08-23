export const TOGGLE_SETTING = "@@modals/TOGGLE_SETTING";
export const TOGGLE_STATS = "@@modals/TOGGLE_STATS";
export const TOGGLE_INFO = "@@modals/TOGGLE_INFO";
export const TOGGLE_LANGUAGE = "@@modals/TOGGLE_LANGUAGE";

export const toggleSetting = (open) => ({
  type: TOGGLE_SETTING,
  payload: open,
});
export const toggleStats = (open) => ({
  type: TOGGLE_STATS,
  payload: open,
});
export const toggleInfo = (open) => ({
  type: TOGGLE_INFO,
  payload: open,
});
export const toggleLanguage = (open) => ({
  type: TOGGLE_LANGUAGE,
  payload: open,
});
