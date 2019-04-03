import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import courses from "./courses";
import serviceProviders from "./serviceProviders";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  courses,
  serviceProviders
});

export default rootReducer;
