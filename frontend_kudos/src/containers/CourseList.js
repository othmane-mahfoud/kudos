import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourses, removeCourse } from "../store/actions/courses";
import CourseItem from "../components/CourseItem";

class CourseList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filtered: []
  //   };
  // }
  componentDidMount() {
    this.props.fetchCourses();
    // this.setState({
    //   filtered: this.props.items
    // });
  }
  render() {
    const { courses, removeCourse, currentUser } = this.props;
    let courseList = courses.map(c => (
      <CourseItem
        key={c._id}
        courseId={c._id}
        date={c.createAt}
        courseCode={c.courseCode}
        title={c.title}
        school={c.school}
        imageUrl={c.imageUrl}
        removeCourse={removeCourse.bind(this, currentUser, c._id)}
        currentUser={currentUser}
      />
    ));
    return (
      <div>
        <h1 className = "pageHeaders">Course List</h1>
        <Link to = {`/users/${this.props.currentUser.user.id}/courses/new`} className = "btn btn-info mb-3">Add Course</Link>
        <div className = "row">
          {courseList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { fetchCourses, removeCourse })(
  CourseList
);
