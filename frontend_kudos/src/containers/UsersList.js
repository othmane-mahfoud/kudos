import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchLearners, newTutor, newMentor } from "../store/actions/users";
import UserItem from "../components/UserItem";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchLearners();
    this.setState({
      filtered: this.props.learners
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.learners
    });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.learners;
      newList = currentList.filter(learner => {
        const fnlc = learner.firstName.toLowerCase();
        const lnlc = learner.lastName.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return (fnlc.includes(filter) || lnlc.includes(filter));
      });
    } else {
      newList = this.props.learners;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    const { learners, currentUser } = this.props;
    let learnersList = this.state.filtered.map(u => (
      <UserItem
        key={u._id}
        userId={u._id}
        firstName={u.firstName}
        lastName={u.lastName}
        profileImageUrl={u.profileImageUrl}
        school={u.school}
        fieldOfStudy={u.fieldOfStudy}
        serviceType={u.serviceType}
        currentUser={currentUser}
        newTutor={newTutor.bind(this, currentUser, u._id)}
        newMentor={newMentor.bind(this, currentUser, u._id)}
      />
    ));
    if(learnersList.length === 0) {
      return (
        <div>
          <h1 className = "pageHeaders">Add Service Providers</h1>
          <div className = "controls">
            <input type="text" className="mb-3 learnerSearchBar" onChange={this.handleChange} placeholder="Search..."/>
          </div>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 ">Oups!</h1>
              <p class="lead">It looks like there is no service provider with the name you're searching for. Try again or contact one of our coordinators to check the availability of this person</p>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="col-sm-12">
          <h1 className = "pageHeaders">Add Service Providers</h1>
          <div className = "controls">
            <input type="text" className="mb-3 learnerSearchBar" onChange={this.handleChange} placeholder="Search..."/>
          </div>
          <div className="col-sm-10">
            <ul className="list-group" id="users">
              {learnersList}
            </ul>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    learners: state.learners,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchUsers, fetchLearners, newMentor, newTutor })(
  UsersList
);
