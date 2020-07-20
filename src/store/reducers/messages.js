import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.payload];
    case REMOVE_MESSAGE:
      return state.filter((msg) => msg._id !== action.payload);
    default:
      return state;
  }
};
