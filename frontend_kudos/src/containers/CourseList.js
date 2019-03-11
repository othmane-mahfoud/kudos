import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses, removeCourse } from "../store/actions/courses";
import CourseItem from "../components/CourseItem";

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }
  render() {
    const { courses, removeCourse, currentUser } = this.props;
    let courseList = courses.map(c => (
      <CourseItem
        key={c._id}
        date={c.createAt}
        courseCode={c.courseCode}
        title={c.title}
        school={c.school}
        removeCourse={removeCourse.bind(this, currentUser, c._id)}
      />
    ));
    return (
      <div className="row col-sm-12">
        <div className="offset-1 col-sm-10">
          <h1> Course List </h1>
          <ul className="list-group" id="courses">
            {courseList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { fetchCourses, removeCourse })(
  CourseList
);
