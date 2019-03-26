import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/kudos-logo.png";
import CourseLinkLogo from "../images/open-book.png"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    return(
      <div class="sidenav">
        <Link to="/" className="navbar-brand sidenav-brand">
          <span>Kudos</span>
        </Link>
        <a className = "sidenav-link" href="#">
          <i class="fas fa-university"></i>  Courses
        </a>
        <a className = "sidenav-link" href="#">
          <i class="fas fa-user-tie"></i>  Service Providers
        </a>
        <a className = "sidenav-link" href="#">
          <i class="fas fa-business-time"></i>  Sessions
        </a>
        <a className = "sidenav-link" href="#">
          <i class="fas fa-chart-line"></i>  Statistics</a>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {logout})(Navbar);
