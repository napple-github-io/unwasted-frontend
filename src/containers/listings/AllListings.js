import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AllListingsList from '../../components/listings/AllListingsList';
import { getAllListingsFromApi, getListingsByUser } from '../../services/listingsApi';
import Header from '../../components/display/Header';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/display/Footer';

class AllListings extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    currentUser: PropTypes.object
  }

  state = {
    listings: [],
    category: null,
    title: 'All Listings'
  }

  fetch = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }
  fetchMyListings = () => {
    const userId = this.props.location.search.slice(4);
    return getListingsByUser(userId)
      .then(listings => {
        this.setState({ listings });
      });
  }

  componentDidMount() {
    console.log(this.props);

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

    if(this.props.location.search) {
      this.fetchMyListings();
      this.setState({ title: `${this.props.currentUser.username}'s Listings` });
    } else {
      this.fetch();
    }
  }

  render(){
    return (
      <>
      <Header user={this.props.currentUser}/>
      <AllListingsList title={this.state.title} allListingsList={this.state.listings} />
      <Footer />
      </>
    )
    ;
  }
}

const mapStateToProps = state => ({
  currentUser: getUser(state)
});

export default withRouter(connect(
  mapStateToProps,
  null
)(AllListings));
