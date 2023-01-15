export const TOGGLE_SETTING = '@@modals/TOGGLE_SETTING';
export const TOGGLE_STATS = '@@modals/TOGGLE_STATS';
export const TOGGLE_INFO = '@@modals/TOGGLE_INFO';
export const TOGGLE_LANGUAGE = '@@modals/TOGGLE_LANGUAGE';

export const toggleSetting = (payload) => ({
  type: TOGGLE_SETTING,
  payload,
});
export const toggleStats = (payload) => ({
  type: TOGGLE_STATS,
  payload,
});
export const toggleInfo = (payload) => ({
  type: TOGGLE_INFO,
  payload,
});
export const toggleLanguage = (payload) => ({
  type: TOGGLE_LANGUAGE,
  payload,
});
