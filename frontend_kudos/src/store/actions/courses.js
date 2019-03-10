import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_COURSES, REMOVE_COURSE } from "../actionTypes";

export const loadCourses = courses => ({
  type: LOAD_COURSES,
  courses
});

export const remove = id => ({
  type: REMOVE_COURSE,
  id
});

export const removeCourse = (user_id, course_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/courses/${course_id}`)
      .then(() => dispatch(remove(course_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const fetchCourses = () => {
  return dispatch => {
    return apiCall("get", "/api/courses")
      .then(res => {
        dispatch(loadCourses(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const addCourse = (courseCode, title, school) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/courses`, { courseCode, title, school })
    .then(res => {})
    .catch(err => addError(err.message));
};
