import { TOGGLE_SETTING, TOGGLE_INFO, TOGGLE_STATS } from "./modals-actions";

const initialState = {
  openSetting: false,
  openStats: false,
  openInfo: false,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTING:
      return {
        ...state,
        openSetting: !state.openSetting,
      };
    case TOGGLE_STATS:
      return {
        ...state,
        openStats: !state.openStats,
      };
    case TOGGLE_INFO:
      return {
        ...state,
        openInfo: !state.openInfo,
      };
    default:
      return state;
  }
};
