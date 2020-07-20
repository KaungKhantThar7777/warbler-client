import { combineReducers } from "redux";

import errors from "./errors";
import currentUser from "./currentUser";
import messages from "./messages";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
});

export default rootReducer;
