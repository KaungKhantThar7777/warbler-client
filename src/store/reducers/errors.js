import { SET_ERROR, REMOVE_ERROR } from "../types";

const INITIAL_STATE = {
  message: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, message: action.payload };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};
