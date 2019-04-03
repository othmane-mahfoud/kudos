import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { fetchServiceProviders, removeServiceProvider } from "../store/actions/serviceProviders";
import ServiceProviderItem from "../components/ServiceProviderItem";

class ServiceProvidersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchServiceProviders();
    this.setState({
      filtered: this.props.serviceProviders
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.serviceProviders
    });
  }
  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.serviceProviders;
      newList = currentList.filter(serviceProvider => {
        const lc = serviceProvider.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.serviceProviders;
    }
    this.setState({
      filtered: newList
    });
  }
  render() {
    const { serviceProviders, removeServiceProvider, currentUser } = this.props;
    //serviceProviders.map
    let serviceProvidersList = this.state.filtered.map(sp => (
      <ServiceProviderItem
        key={sp._id}
        serviceProvidersId={sp._id}
        firstName={sp.firstName}
        lastName={sp.lastName}
        profileImageUrl={sp.profileImageUrl}
        school={sp.school}
        fieldOfStudy={sp.fieldOfStudy}
        removeServiceProvider={removeServiceProvider.bind(this, currentUser, sp._id)}
        currentUser={currentUser}
      />
    ));
    return (
      <div>
        <h1 className = "pageHeaders">Service Providers</h1>
        <div className = "controls">
          <input type="text" className="searchBar" onChange={this.handleChange} placeholder="Search..."/>
        </div>
        <div className = "row">
          {serviceProvidersList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    serviceProviders: state.serviceProviders,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchServiceProviders, removeServiceProvider })(
  ServiceProvidersList
);
