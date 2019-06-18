import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AllListingsList from '../../components/listings/AllListingsList';
import { getAllListingsFromApi } from '../../services/listingsApi';
import Header from '../../components/display/Header';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';

class AllListings extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    currentUser: PropTypes.object
  }

  state = {
    listings: [],
    category: null
  }

  fetch = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }

  componentDidMount() {


    // console.log(window.navigator.geolocation);
    // if(window.navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   const pos = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   };
    //   console.log(pos)
    // ;})
    // ;}
    this.fetch();
  }

  render(){
    return (
      <>
      <Header user={this.props.currentUser}/>
      <AllListingsList allListingsList={this.state.listings} />
      </>
    )
    ;
  }
}

const mapStateToProps = state => ({
  currentUser: getUser(state)
});

export default connect(
  mapStateToProps,
  null
)(AllListings);
