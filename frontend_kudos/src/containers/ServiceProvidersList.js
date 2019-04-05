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
        const fnlc = serviceProvider.firstName.toLowerCase();
        const lnlc = serviceProvider.lastName.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return (fnlc.includes(filter) || lnlc.includes(filter));
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
        serviceProviderId={sp._id}
        firstName={sp.firstName}
        lastName={sp.lastName}
        profileImageUrl={sp.profileImageUrl}
        school={sp.school}
        fieldOfStudy={sp.fieldOfStudy}
        serviceType={sp.serviceType}
        removeServiceProvider={removeServiceProvider.bind(this, currentUser, sp._id)}
        currentUser={currentUser}
      />
    ));
    if(serviceProvidersList.length === 0){
      return (
        <div>
          <h1 className = "pageHeaders">Service Providers</h1>
          <div className = "controls">
            <Link to = "/serviceProviders/new" className = "btn btn-info mb-3">Add Service Provider</Link>
            <input type="text" className="serviceProviderSearchBar" onChange={this.handleChange} placeholder="Search..."/>
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
    return (
      <div>
        <h1 className = "pageHeaders">Service Providers</h1>
        <div className = "controls">
          <Link to = "/serviceProviders/new" className = "btn btn-info mb-3">Add Service Provider</Link>
          <input type="text" className="serviceProviderSearchBar" onChange={this.handleChange} placeholder="Search..."/>
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
