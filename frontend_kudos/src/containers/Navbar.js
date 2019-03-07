import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Kudos Home"/>
            </Link>
          </div>
          <ul className="nav navbar-nav justify-content-end ml-auto">
            <li className="nav-item">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/signin">Log In</Link>
            </li>
          </ul>
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

export default connect(mapStateToProps, null)(Navbar);
