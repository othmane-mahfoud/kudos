import React from "react";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => (
  <aside className = "col-sm-2">
    <div className = "panel panel-default">
      <div className = "panel-body">
        <img
          src = {profileImageUrl || DefaultProfileImage}
          alt = {username}
          height = "200"
          width = "200"
          className = "img-thumbnail"
        />
      </div>
    </div>
  </aside>
);

export default UserAside;
