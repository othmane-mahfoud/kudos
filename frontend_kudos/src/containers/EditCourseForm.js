import React, { Component } from "react";
import { connect } from "react-redux";
import { showCourse, updateCourse } from "../store/actions/courses";

class EditCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCode: "",
      title: "",
      school: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNewCourse = event => {
    event.preventDefault();
    // this.props.updateCourse(this.state.courseCode, this.state.title, this.state.school);
    this.props.updateCourse(this.props.match.params.id, this.props.match.params.course_id);
    this.setState({
      courseCode: "",
      title: "",
      school: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleNewCourse}>
        {this.props.errors.course && (
          <div className="alert alert-danger">{this.props.errors.course}</div>
        )}
        <p>{this.props.match.params.id}</p>
        <p></p>
        <label htmlFor = "courseCode">Course Code:</label>
        <input
          type="text"
          name="courseCode"
          className="form-control"
          value={this.state.courseCode}
          onChange={this.handleChange}
        />
        <label htmlFor = "title">Course Title:</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor = "title">School (SSE, SBA, SHSS ...):</label>
        <input
          type="text"
          name="school"
          className="form-control"
          value={this.state.school}
          onChange={this.handleChange}
        />
        <button type="submit" className="mt-3 btn btn-success">
          Save Changes
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { updateCourse, showCourse })(EditCourseForm);
