import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultServiceProviderImg from "../images/service_providers/default.png";

const ServiceProviderItem = ({
  serviceProviderId,
  firstName,
  lastName,
  profileImageUrl,
  serviceType,
  school,
  fieldOfStudy,
  removeServiceProvider,
  currentUser,
  isCorrectUser
}) => {
  var imageUrl = DefaultServiceProviderImg;
  if(profileImageUrl){
    imageUrl = profileImageUrl;
  }
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src = {imageUrl}
          className = "card-img-top serviceProviderImage"
          alt = {firstName}
        />
        <div className="card-body">
          <h5 className="card-title">{firstName} {lastName}</h5>
          <p className="card-text serviceProviderText"><small class="text-muted">{serviceType.toUpperCase()}</small></p>
          <p className="card-text serviceProviderText"><small class="text-muted">{school} - {fieldOfStudy}</small></p>
          <a className = "mb-2 btn btn-sm btn-danger deleteCourse" onClick = {removeServiceProvider}>Delete</a>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderItem;
