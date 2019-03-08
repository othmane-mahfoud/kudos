import React, {Component} from "react";

export default class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      username : "",
      password : "",
      profileImageUrl : ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;
    return(
      <div>
        <div className = "row justify-content-md-center text-center">
          <div className = "col-md-6">
            <form onSubmit = {this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor = "email">Email:</label>
              <input
                className = "form-control"
                id = "email"
                name = "email"
                onChange = {this.handleChange}
                value = {email}
                type = "text"
              />
              <label htmlFor = "password">Password:</label>
              <input
                className = "form-control"
                id = "password"
                name = "password"
                onChange = {this.handleChange}
                type = "password"
              />
              {signUp && (
                <div>
                  <label htmlFor = "username">Username:</label>
                  <input
                    className = "form-control"
                    id = "username"
                    name = "username"
                    onChange = {this.handleChange}
                    value = {username}
                    type = "text"
                  />
                  <label htmlFor = "img-url">Profile Image URL:</label>
                  <input
                    className = "form-control"
                    id = "img-url"
                    name = "profileImageUrl"
                    onChange = {this.handleChange}
                    type = "text"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
