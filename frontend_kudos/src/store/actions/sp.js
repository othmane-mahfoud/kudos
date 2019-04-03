import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_SP, GET_SP, REMOVE_SP, EDIT_SP } from "../actionTypes";

export const loadServiceProviders = serviceProviders => ({
  type: LOAD_SP,
  serviceProviders
});

export const getServiceProvider = serviceProvider => ({
  type: GET_SP,
  serviceProvider
});

export const editServiceProvider = serviceProvider => ({
  type: EDIT_SP,
  serviceProvider
});

export const remove = id => ({
  type: REMOVE_SP,
  id
});

export const fetchServiceProviders = () => {
  return dispatch => {
    return apiCall("get", "/api/serviceProviders")
      .then(res => {
        dispatch(loadServiceProviders(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const showServiceProvider = (user_id, serviceProvider_id) => {
  return dispatch => {
    return apiCall("get", `/api/users/${user_id}/serviceProviders/${serviceProvider_id}`)
      .then(() => dispatch(getServiceProvider(serviceProvider_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const updateServiceProvider = (user_id, serviceProvider_id) => {
  return dispatch => {
    return apiCall("put", `/api/users/${user_id}/serviceProviders/${serviceProvider_id}`)
      .then(() => dispatch(editServiceProvider(serviceProvider_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const removeServiceProvider = (user_id, serviceProvider_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/serviceProviders/${serviceProvider_id}`)
      .then(() => dispatch(remove(serviceProvider_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const addServiceProvider = (courseCode, title, school, imageUrl) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/serviceProviders`, { courseCode, title, school, imageUrl })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
