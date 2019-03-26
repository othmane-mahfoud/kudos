import React from "react";
import {Link} from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";
import CourseTimeline from "./CourseTimeline";
import Sidenav from "../containers/Sidenav";

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1 className = "chalk">Get ready to <strong><i>Learn</i></strong>.</h1>
        <h3 className = "chalk">New to Kudos?</h3>
        <Link to="/signup" className="btn btn-primary btn-lg">
          Register
        </Link>
      </div>
    );
  }
  else {
    return (
      <div>
        < Sidenav />
        <div className = "courseList">
          < CourseTimeline />
        </div>
      </div>
    );
  }
}

export default Homepage;
