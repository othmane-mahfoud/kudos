import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultCourseImg from "../images/course.png";
import SSECourseImg from "../images/sse.png";
import SBACourseImg from "../images/sba.png";
import SHSSCourseImg from "../images/shss.png";

const CourseItem = ({
  courseId,
  date,
  courseCode,
  title,
  school,
  removeCourse,
  currentUser,
  isCorrectUser
}) => {
  var courseImage = DefaultCourseImg;
  if(school === "SSE") {
    courseImage = SSECourseImg;
  }
  else if(school === "SBA") {
    courseImage = SBACourseImg;
  }
  else if(school === "SHSS"){
    courseImage = SHSSCourseImg;
  }
  return (
    <div>
      <li className="list-group-item">
        <img
          src={courseImage}
          alt={school}
          height="32"
          width="32"
          className="timeline-image"
        />
        <span className="course-area">
          <span> <strong>{courseCode} -</strong>  {title} </span>
          <span className="courseActions">
            <i><Moment className="text-info dateCreated" format="Do MMM YYYY">
              {date}
            </Moment>
            </i>
            <a className = "btn btn-sm btn-danger deleteCourse" onClick = {removeCourse}>Delete</a>
            <Link className = "btn btn-sm btn-info text-white deleteCourse" to = {`/users/${currentUser}/courses/${courseId}/edit`}>Edit</Link>
          </span>
        </span>
      </li>
    </div>
  );
}

export default CourseItem;
