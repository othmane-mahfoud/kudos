import { LOAD_USERS, LOAD_LEARNERS } from "../actionTypes";

const user = (state = [], action) => {
  switch(action.type) {
    case LOAD_USERS:
      return [...action.users];
    case LOAD_LEARNERS:
      return [...action.learners];
    default:
      return state;
  }
}

export default user;
