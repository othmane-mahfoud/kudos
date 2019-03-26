import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultCourseImg from "../images/courses/default.png";
import SSECourseImg from "../images/courses/sse.png";
import SBACourseImg from "../images/courses/sba.png";
import SHSSCourseImg from "../images/courses/shss.png";

const CourseItem = ({
  courseId,
  date,
  courseCode,
  title,
  school,
  imageUrl,
  removeCourse,
  currentUser,
  isCorrectUser
}) => {
  var courseImage = DefaultCourseImg;
  if(imageUrl){
    courseImage = imageUrl;
  }
  else{
    if(school === "SSE") {
      courseImage = SSECourseImg;
    }
    else if(school === "SBA") {
      courseImage = SBACourseImg;
    }
    else if(school === "SHSS"){
      courseImage = SHSSCourseImg;
    }
  }
  return (
    // <div>
    //   <li className="list-group-item">
    //     <img
    //       src={courseImage}
    //       alt={school}
    //       height="32"
    //       width="32"
    //       className="timeline-image"
    //     />
    //     <span className="course-area">
    //       <span> <strong>{courseCode} -</strong>  {title} </span>
    //       <span className="courseActions">
    //         <i><Moment className="text-info dateCreated" format="Do MMM YYYY">
    //           {date}
    //         </Moment>
    //         </i>
    //         <a className = "btn btn-sm btn-danger deleteCourse" onClick = {removeCourse}>Delete</a>
    //         <Link className = "btn btn-sm btn-info text-white deleteCourse" to = {`/users/${currentUser}/courses/${courseId}/edit`}>Edit</Link>
    //       </span>
    //     </span>
    //   </li>
    // </div>
    <div className="col-sm-3">
      <div className="card">
        <img
          src = {courseImage}
          className = "card-img-top"
          alt = {school}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small class="text-muted">{courseCode}</small></p>
          <a className = "mb-2 btn btn-sm btn-danger deleteCourse" onClick = {removeCourse}>Delete</a>
          <Link className = "mb-2 btn btn-sm btn-info text-white deleteCourse" to = {`/users/${currentUser}/courses/${courseId}/edit`}>Edit</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
