import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import messages from "./messages";
import users from "./users";
import learners from "./users";
import courses from "./courses";
import serviceProviders from "./serviceProviders";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
  courses,
  serviceProviders,
  users,
  learners
});

export default rootReducer;
