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
        <span><strong>{firstName} {lastName}</strong></span><br></br>
        <a className = "mb-2 btn btn-sm btn-success text-white addSpBtn" onClick = {removeServiceProvider}>Add</a>
        <small><i>{school} - {fieldOfStudy}</i></small>
      </div>
    </li>
  </div>
);

export default UserItem;
