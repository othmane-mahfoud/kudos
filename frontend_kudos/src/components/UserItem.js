import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const UserItem = ({
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
}) => (
  <div>
    <li className = "list-group-item">
      <div className = "message-area">
        <span>{firstName} {lastName}</span>
        <small>{school} - {fieldOfStudy}</small>
        <a className = "mb-2 btn btn-sm btn-danger deleteCourse" onClick = {removeServiceProvider}>Delete</a>
      </div>
    </li>
  </div>
);

export default UserItem;
