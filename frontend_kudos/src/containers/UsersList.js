import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/users";
import UserItem from "../components/UserItem";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users, currentUser } = this.props;
    let usersList = users.map(u => (
      <UserItem
        key={u._id}
        serviceProviderId={u._id}
        firstName={u.firstName}
        lastName={u.lastName}
        profileImageUrl={u.profileImageUrl}
        school={u.school}
        fieldOfStudy={u.fieldOfStudy}
        serviceType={u.serviceType}
        currentUser={currentUser}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {usersList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchUsers })(
  UsersList
);
