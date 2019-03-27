import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { fetchCourses, removeCourse } from "../store/actions/courses";
import CourseItem from "../components/CourseItem";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchCourses();
    this.setState({
      filtered: this.props.courses
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.courses
    });
  }
  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.courses;
      newList = currentList.filter(course => {
        const lc = course.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.courses;
    }
    this.setState({
      filtered: newList
    });
  }
  render() {
    const { courses, removeCourse, currentUser } = this.props;
    //courses.map
    let courseList = this.state.filtered.map(c => (
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
        <div className = "controls">
          <Link to = {`/users/${this.props.currentUser.user.id}/courses/new`} className = "btn btn-info mb-3">Add Course</Link>
          <input type="text" className="searchBar" onChange={this.handleChange} placeholder="Search..."/>
        </div>
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
