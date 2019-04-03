import { LOAD_SP, REMOVE_SP, GET_SP, EDIT_SP } from "../actionTypes";

const serviceProvider = (state = [], action) => {
  switch(action.type) {
    case LOAD_SP:
      return [...action.serviceProviders];
    case GET_SP:
      return [...action.serviceProvider];
    case EDIT_SP:
      return state.filter(serviceProvider => serviceProvider._id !== action.id);
    case REMOVE_SP:
      return state.filter(serviceProvider => serviceProvider._id !== action.id);
    default:
      return state;
  }
}

export default serviceProvider;
