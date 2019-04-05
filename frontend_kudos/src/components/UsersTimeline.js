import React from "react";
import UsersList from "../containers/UsersList";

const UsersTimeline = props => {
  return (
    <div className = "row">
      <UsersList
        currentUser = {props.currentUser}
        className = "usersList"
      />
    </div>
  );
}

export default UsersTimeline;
