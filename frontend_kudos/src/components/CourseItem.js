import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultCourseImg from "../images/course.png";

const CourseItem = ({
  date,
  courseCode,
  title,
  school,
  removeCourse,
  isCorrectUser
}) => (
  <div>
    <li className="list-group-item">
      <img
        src={DefaultCourseImg}
        alt={school}
        height="32"
        width="32"
        className="timeline-image"
      />
      <span className="course-area">
        <span> <strong>{courseCode} -</strong>  {title} </span>
        <span className="text-muted dateCreated">
          <i><Moment className="text-muted dateCreated" format="Do MMM YYYY">
            {date}
          </Moment>
          </i>
        </span>
      </span>
    </li>
  </div>
);

export default CourseItem;
