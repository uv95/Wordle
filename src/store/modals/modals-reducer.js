import {
  TOGGLE_SETTING,
  TOGGLE_INFO,
  TOGGLE_STATS,
  TOGGLE_LANGUAGE,
} from './modals-actions';

const initialState = {
  isSettingOpen: false,
  isStatsOpen: false,
  isInfoOpen: false,
  isLanguageOpen: false,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      return {
        ...state,
        isSettingOpen: !state.isSettingOpen,
      };
    case TOGGLE_STATS:
      return {
        ...state,
        isStatsOpen: !state.isStatsOpen,
      };
    case TOGGLE_INFO:
      return {
        ...state,
        isInfoOpen: !state.isInfoOpen,
      };
    case TOGGLE_LANGUAGE:
      return { ...state, isLanguageOpen: !state.isLanguageOpen };
    default:
      return state;
  }
};
