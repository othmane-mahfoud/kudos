import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_USERS, LOAD_LEARNERS, ADD_TUTOR, ADD_MENTOR } from "../actionTypes";

export const loadUsers = users => ({
  type: LOAD_USERS,
  users
});

export const loadLearners = learners => ({
  type: LOAD_LEARNERS,
  learners
});

export const addTutor = id => ({
  type: ADD_TUTOR,
  id
});

export const addMentor = id => ({
  type: ADD_MENTOR,
  id
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

export const newTutor = (user_id) => {
  return dispatch => {
    return apiCall("put", `/api/users/learners/makeTutor/${user_id}`)
      .then(() => dispatch(addTutor(user_id)))
      .catch(err => addError(err.message))
  }
}

export const newMentor = (user_id) => {
  return dispatch => {
    return apiCall("put", `/api/users/learners/makeMentor/${user_id}`)
      .then(() => dispatch(addMentor(user_id)))
      .catch(err => addError(err.message))
  }
}
