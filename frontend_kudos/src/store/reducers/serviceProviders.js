import { LOAD_SERVICE_PROVIDERS, REMOVE_SERVICE_PROVIDER, GET_SERVICE_PROVIDER, EDIT_SERVICE_PROVIDER } from "../actionTypes";

const serviceProvider = (state = [], action) => {
  switch(action.type) {
    case LOAD_SERVICE_PROVIDERS:
      return [...action.serviceProviders];
    case GET_SERVICE_PROVIDER:
      return [...action.serviceProvider];
    case EDIT_SERVICE_PROVIDER:
      return state.filter(serviceProvider => serviceProvider._id !== action.id);
    case REMOVE_SERVICE_PROVIDER:
      return state.filter(serviceProvider => serviceProvider._id !== action.id);
    default:
      return state;
  }
}

export default serviceProvider;
