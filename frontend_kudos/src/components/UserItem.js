import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const UserItem = ({
  userId,
  firstName,
  lastName,
  profileImageUrl,
  school,
  fieldOfStudy,
  serviceType,
  currentUser,
  newTutor,
  newMentor
}) => (
  <div>
    <li className = "list-group-item">
      <div className = "message-area">
        <span><strong>{firstName} {lastName}</strong></span><br></br>
        <a className = "mb-2 ml-1 btn btn-sm btn-success text-white addSpBtn" onClick = {newMentor}>Mentor</a>
        <a className = "mb-2 btn btn-sm btn-info text-white addSpBtn" onClick = {newMentor}>Tutor</a>
        <small><i>{school} - {fieldOfStudy}</i></small>
      </div>
    </li>
  </div>
);

export default UserItem;
