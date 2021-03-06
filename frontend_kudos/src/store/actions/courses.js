import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_COURSES, GET_COURSE, REMOVE_COURSE, EDIT_COURSE } from "../actionTypes";

export const loadCourses = courses => ({
  type: LOAD_COURSES,
  courses
});

export const getCourse = course => ({
  type: GET_COURSE,
  course
});

export const editCourse = course => ({
  type: EDIT_COURSE,
  course
});

export const remove = id => ({
  type: REMOVE_COURSE,
  id
});

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

export const showCourse = (user_id, course_id) => {
  return dispatch => {
    return apiCall("get", `/api/users/${user_id}/courses/${course_id}`)
      .then(() => dispatch(getCourse(course_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const updateCourse = (user_id, course_id) => {
  return dispatch => {
    return apiCall("put", `/api/users/${user_id}/courses/${course_id}`)
      .then(() => dispatch(editCourse(course_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const removeCourse = (user_id, course_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/courses/${course_id}`)
      .then(() => dispatch(remove(course_id)))
      .catch(err => dispatch(addError(err.message)));
  }
}

export const addCourse = (courseCode, title, school, imageUrl) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/courses`, { courseCode, title, school, imageUrl })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
