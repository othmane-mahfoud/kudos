import { LOAD_COURSES, REMOVE_COURSE } from "../actionTypes";

const course = (state = [], action) => {
  switch(action.type) {
    case LOAD_COURSES:
      return [...action.courses];
    case REMOVE_COURSE:
      return state.filter(course => course._id !== action.id);
    default:
      return state;
  }
}

export default course;
