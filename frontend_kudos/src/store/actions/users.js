import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_USERS, LOAD_LEARNERS } from "../actionTypes";

export const loadUsers = users => ({
  type: LOAD_USERS,
  users
});

export const loadLearners = learners => ({
  type: LOAD_LEARNERS,
  learners
});

export const fetchUsers = () => {
  return dispatch => {
    return apiCall("get", "/api/users")
      .then(res => {
        dispatch(loadUsers(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const fetchLearners = () => {
  return dispatch => {
    return apiCall("get", "/api/users/learners")
      .then(res => {
        dispatch(loadLearners(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};
