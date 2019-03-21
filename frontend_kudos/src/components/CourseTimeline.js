import React from "react";
import CourseList from "../containers/CourseList";
// import UserAside from "./UserAside";

const CourseTimeline = props => {
  return (
    <div className = "row">
      <CourseList
        currentUser = {props.currentUser}
      />
    </div>
  );
}

export default CourseTimeline;
