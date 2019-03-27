import React from "react";
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";
import CourseForm from "../containers/CourseForm";
import EditCourseForm from "../containers/EditCourseForm";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return(
    <div className="container">
      <Switch>
        <Route
          exact path = "/"
          render = {props => <Homepage currentUser = {currentUser} {...props} display = "courses"/>}
        />
        <Route
          exact path = "/serviceproviders"
          render = {props => <Homepage currentUser = {currentUser} {...props} display = "sp"/>}
        />
        <Route
          exact path = "/sessions"
          render = {props => <Homepage currentUser = {currentUser} {...props} display = "sessions"/>}
        />
        <Route
          exact path = "/statistics"
          render = {props => <Homepage currentUser = {currentUser} {...props} display = "stats"/>}
        />
        <Route
          exact path = "/signin"
          render = {props => {
            return(
              <AuthForm
                removeError = {removeError}
                errors = {errors}
                onAuth = {authUser}
                buttonText = "Log in"
                heading = "Welcome Back" {...props}
              />
            );
          }}
        />
        <Route
          exact path = "/signup"
          render = {props => {
            return(
              <AuthForm
                removeError = {removeError}
                errors = {errors}
                onAuth = {authUser}
                signUp
                buttonText = "Sign up"
                heading = "Join Kudos today!" {...props}
              />
            );
          }}
        />
        <Route
          path = "/users/:id/messages/new"
          component = {withAuth(MessageForm)}
        />
        <Route
          path = "/users/:id/courses/new"
          component = {withAuth(CourseForm)}
        />
        <Route
          path = "/users/:id/courses/:course_id/edit"
          component = {withAuth(EditCourseForm)}
          currentUser = {currentUser}
        />
      </Switch>

    </div>
  );
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
