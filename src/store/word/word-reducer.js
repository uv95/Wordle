import { SET_LETTERS_NUMBER } from "./word-actions";

const initialState = {
  lettersNumber: 5,
};

export const wordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LETTERS_NUMBER:
      return {
        ...state,
        lettersNumber: payload,
      };
    default:
      return state;
  }
};
