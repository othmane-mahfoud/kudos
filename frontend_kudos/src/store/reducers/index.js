import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import courses from "./courses";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  courses
});

export default rootReducer;
