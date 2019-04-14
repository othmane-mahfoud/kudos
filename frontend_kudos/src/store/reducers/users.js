import { LOAD_USERS, LOAD_LEARNERS, ADD_MENTOR, ADD_TUTOR} from "../actionTypes";

const user = (state = [], action) => {
  switch(action.type) {
    case LOAD_USERS:
      return [...action.users];
    case LOAD_LEARNERS:
      return [...action.learners];
    case ADD_TUTOR:
      return Object.assign({}, state, {
        learners: state.learners.map(learner => {
          if (learner.id === action.id) {
            return Object.assign({}, learner, {
              role: "serviceprovider",
              serviceType: "tutor"
            })
          }
          return learner;
        })
      });
    case ADD_MENTOR:
      return state.learners.map(learner => {
        if(learner._id === action.id){
          return {
            ...learner,
            role: "serviceprovider",
            serviceType: "mentor"
          }
        }
        else {
          return learner;
        }
      });
    default:
      return state;
  }
}

export default user;
