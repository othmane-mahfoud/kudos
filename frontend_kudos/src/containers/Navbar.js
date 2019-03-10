import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/kudos-logo.png";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    return(
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Kudos Home"/>
              <span>Kudos</span>
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ?
          (
            <ul className = "nav navbar-nav ml-auto">
              <li>
                <Link to = {`/users/${this.props.currentUser.user.id}/courses/new`}>New Course</Link>
              </li>
              <li>
                <a onClick = {this.logout}>Log out</a>
              </li>
            </ul>
          )
          :
          (
            <ul className="nav navbar-nav justify-content-end ml-auto">
              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin">Log In</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {logout})(Navbar);
