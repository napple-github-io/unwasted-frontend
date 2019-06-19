import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/display/Header';
import Footer from '../components/display/Footer';
import NearbyListingThumbList from '../components/listings/NearbyListingThumbList';
import Map from '../components/mapping/Map';
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
    mapUrl: ''
  }

  fetchListings = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }

  getUserLocation = () => {
    if(window.navigator.geolocation) {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    } else {
      throw 'User must allow Location services to search by current location';
    }
  }

  fetchMap = () => {
    const { userLat, userLong, listings } = this.state;
    const listingsArray = listings.map(listing => {
      return listing.location.street + listing.location.zip + '|';
    });
    console.log(listingsArray);
    const mapUrl = getListingMap(userLat, userLong, listingsArray);
    console.log(mapUrl);
    this.setState({ mapUrl });
  }

  componentDidMount(){
    Promise.all(([
      this.getUserLocation()
        .then(position => {
          this.setState({ userLat: position.coords.latitude, userLong: position.coords.longitude });
        }),
      this.fetchListings()
    ]))
      .then(() => this.fetchMap());




    // return this.GetUserLocation()
    //   .then(userPosition => this.setState({ userLat: userPosition.lat, userLong: userPosition.long }))
    //   .then(() => this.fetchListings())
    //   .then(() => this.fetchMap())
    //   .then(map => {
    //     if(this.state.userLat && this.state.userLong) {
    //       console.log(map);
    //       this.setState({ map });
    //     }
    //   });
  }

  render() {
    return (
      <>
      <section className={styles.hero}>
        <Header user={this.props.currentUser} />
        <h1>End Hunger<br />In Your<br />Community</h1>
      </section>
        <NearbyListingThumbList nearbyListingList={listingSeed} />
        <Map mapUrl={this.state.mapUrl} />
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


