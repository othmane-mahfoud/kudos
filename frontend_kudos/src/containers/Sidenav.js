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
    if(this.props.activeLink === "courses"){
      return(
        <div class="sidenav">
          <Link to="/" className="navbar-brand sidenav-brand">
            <span>Kudos</span>
          </Link>
          <Link className = "sidenav-link active" to="/">
            <i class="fas fa-university"></i>  Courses
          </Link>
          <Link className = "sidenav-link" to="/serviceproviders">
            <i class="fas fa-user-tie"></i>  Service Providers
          </Link>
          <Link className = "sidenav-link" to="/sessions">
            <i class="fas fa-business-time"></i>  Sessions
          </Link>
          <Link className = "sidenav-link" to="/statistics">
            <i class="fas fa-chart-line"></i>  Statistics
          </Link>
        </div>
      );
    }
    else if(this.props.activeLink === "sp"){
      return(
        <div class="sidenav">
          <Link to="/" className="navbar-brand sidenav-brand">
            <span>Kudos</span>
          </Link>
          <Link className = "sidenav-link" to="/">
            <i class="fas fa-university"></i>  Courses
          </Link>
          <Link className = "sidenav-link active" to="/serviceproviders">
            <i class="fas fa-user-tie"></i>  Service Providers
          </Link>
          <Link className = "sidenav-link" to="/sessions">
            <i class="fas fa-business-time"></i>  Sessions
          </Link>
          <Link className = "sidenav-link" to="/statistics">
            <i class="fas fa-chart-line"></i>  Statistics
          </Link>
        </div>
      );
    }
    else if(this.props.activeLink === "sessions"){
      return(
        <div class="sidenav">
          <Link to="/" className="navbar-brand sidenav-brand">
            <span>Kudos</span>
          </Link>
          <Link className = "sidenav-link" to="/">
            <i class="fas fa-university"></i>  Courses
          </Link>
          <Link className = "sidenav-link" to="/serviceproviders">
            <i class="fas fa-user-tie"></i>  Service Providers
          </Link>
          <Link className = "sidenav-link active" to="/sessions">
            <i class="fas fa-business-time"></i>  Sessions
          </Link>
          <Link className = "sidenav-link" to="/statistics">
            <i class="fas fa-chart-line"></i>  Statistics
          </Link>
        </div>
      );
    }
    else if(this.props.activeLink === "stats"){
      return(
        <div class="sidenav">
          <Link to="/" className="navbar-brand sidenav-brand">
            <span>Kudos</span>
          </Link>
          <Link className = "sidenav-link" to="/">
            <i class="fas fa-university"></i>  Courses
          </Link>
          <Link className = "sidenav-link" to="/serviceproviders">
            <i class="fas fa-user-tie"></i>  Service Providers
          </Link>
          <Link className = "sidenav-link" to="/sessions">
            <i class="fas fa-business-time"></i>  Sessions
          </Link>
          <Link className = "sidenav-link active" to="/statistics">
            <i class="fas fa-chart-line"></i>  Statistics
          </Link>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {logout})(Navbar);
