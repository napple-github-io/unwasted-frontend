import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/display/Header';
import Footer from '../components/display/Footer';
import NearbyListingThumbList from '../components/listings/NearbyListingThumbList';
// import MapIndex from '../mapping/MapIndex';
import PowerUserList from '../components/userAggregations/PowerUserList';
import { listingSeed, userSeed } from '../assets/seedData/seedData';
import styles from './Home.css';
import { getUser } from '../selectors/userAuthSelectors';
import { getAllListingsFromApi } from '../services/listingsApi';
import { getListingMap } from '../services/mapApi';

class HomeDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    userLat: '',
    userLong: '',
    listings: [],
    map: null
  }

  fetchListings = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }

  getUserLocation = () => {
    if(window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const userPosition = {
          lat: position.coords.latitude,
          long: position.coords.longitude };
        return userPosition;
      });
    } else {
      throw 'User must allow Location services to search by current location';
    }
  }

  fetchMap = () => {
    getListingMap(this.state.userLat, this.state.userLong, this.state.listings);
  }

  componentDidMount(){
    return this.GetUserLocation()
      .then(userPosition => this.setState({ userLat: userPosition.lat, userLong: userPosition.long }))
      .then(() => this.fetchListings())
      .then(() => this.fetchMap())
      .then(map => {
        if(this.state.userLat && this.state.userLong) {
          console.log(map);
          this.setState({ map });
        }
      });
  }

  render() {
    return (
      <>
      <section className={styles.hero}>
        <Header user={this.props.currentUser} />
        <h1>End Hunger<br />In Your<br />Community</h1>
      </section>
        <NearbyListingThumbList nearbyListingList={listingSeed} />
        {/* <MapIndex /> */}
        <PowerUserList powerUserList={userSeed} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getUser(state)
});

export default connect(
  mapStateToProps,
  null
)(HomeDisplay);
