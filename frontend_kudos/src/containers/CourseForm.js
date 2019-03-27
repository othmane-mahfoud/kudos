import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse } from "../store/actions/courses";

class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCode: "",
      title: "",
      school: "",
      imageUrl: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNewCourse = event => {
    event.preventDefault();
    this.props.addCourse(this.state.courseCode, this.state.title, this.state.school, this.state.imageUrl);
    this.setState({
      courseCode: "",
      title: "",
      school: "",
      imageUrl: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <form className = "main" onSubmit={this.handleNewCourse}>
        {this.props.errors.course && (
          <div className="alert alert-danger">{this.props.errors.course}</div>
        )}
        <h1 className = "pageHeaders">Add Course</h1>
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
        <label htmlFor = "school">School (SSE, SBA, SHSS ...):</label>
        <input
          type="text"
          name="school"
          className="form-control"
          value={this.state.school}
          onChange={this.handleChange}
        />
        <label htmlFor = "imageUrl">Course Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          className="form-control"
          value={this.state.imageUrl}
          onChange={this.handleChange}
        />
        <button type="submit" className="mt-3 btn btn-success">
          Add Course!
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

export default connect(mapStateToProps, { addCourse })(CourseForm);
