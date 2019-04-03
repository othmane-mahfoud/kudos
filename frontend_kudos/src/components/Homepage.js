import React from "react";
import {Link} from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";
import CourseTimeline from "./CourseTimeline";
import ServiceProvidersTimeline from "./ServiceProvidersTimeline";
import Sidenav from "../containers/Sidenav";

const Homepage = ({currentUser, display}) => {
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
    if(display === "courses") {
      return (
        <div>
          < Sidenav
            activeLink = "courses"
          />
          <div className = "courseList">
            < CourseTimeline />
          </div>
        </div>
      );
    }
    else if(display === "sp") {
      return (
        <div>
          < Sidenav
            activeLink = "sp"
          />
          <div className = "courseList">
            < ServiceProvidersTimeline />
          </div>
        </div>
      );
    }
    else if(display === "sessions") {
      return (
        <div>
          < Sidenav
            activeLink = "sessions"
          />
          <div className = "courseList">
            <h1 className = "pageHeaders">Sessions Management</h1>
            <div class="alert alert-info" role="alert">
              This page is work in progress
            </div>
          </div>
        </div>
      );
    }
    else if(display === "stats") {
      return (
        <div>
          < Sidenav
            activeLink = "stats"
          />
          <div className = "courseList">
            <h1 className = "pageHeaders">Statistics</h1>
            <div class="alert alert-info" role="alert">
              This page is work in progress
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Homepage;
