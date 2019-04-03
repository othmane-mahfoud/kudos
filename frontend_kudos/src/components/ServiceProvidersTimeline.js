import React from "react";
import {Link} from "react-router-dom";
import ServiceProvidersList from "../containers/ServiceProvidersList";
// import UserAside from "./UserAside";

const ServiceProvidersTimeline = props => {
  return (
    <div>
      <ServiceProvidersList
        currentUser = {props.currentUser}
        className = "courseList"
      />
    </div>
  );
}

export default ServiceProvidersTimeline;
