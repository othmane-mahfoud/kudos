import React from "react";
import CourseList from "../containers/CourseList";
// import UserAside from "./UserAside";

const CourseTimeline = props => {
  return (
    <div>
      <CourseList
        currentUser = {props.currentUser}
        className = "courseList"
      />
    </div>
  );
}

export default CourseTimeline;
