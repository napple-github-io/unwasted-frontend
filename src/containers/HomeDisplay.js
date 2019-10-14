import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/display/Header';
import Footer from '../components/display/Footer';
import NearbyListingThumbList from '../components/listings/NearbyListingThumbList';
import Map from '../components/mapping/Map';
import PowerUserList from '../components/userAggregations/PowerUserList';
import styles from './Home.css';
import { getPowerUsersFromApi } from '../services/userApi';
import { getUser } from '../selectors/userAuthSelectors';
import { getAllListingsFromApiWithDistance } from '../services/listingsApi';
import { getListingMap, getListingCoords } from '../services/mapApi';
import loadStyles from './Loader.css';

class HomeDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    userLat: '',
    userLong: '',
    listings: [],
    nearestListings: [],
    mapUrl: '',
    origin: '',
    powerUserList: []
  }

  changeOrigin = () => {
    let origin = '';
    if(!this.props.currentUser && !this.state.userLat) {
      origin = 'Portland, OR';
    }
    if(!this.state.userLat && this.props.currentUser.location){
      origin = this.props.currentUser.location.street;
    } 
    if(this.state.userLat) {
      origin = (this.state.userLat + ',' + this.state.userLong);
    }
    this.setState({ origin });
  }
  
  fetchListingsWithDistance = () => {
    const { origin } = this.state;
    return getAllListingsFromApiWithDistance(origin)
      .then(listings => {
        this.setState({ listings });
        this.setState({ nearestListings: [listings[0], listings[1], listings[2]] });
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
    const mapUrl = getListingMap(userLat, userLong, listingsArray);
    this.setState({ mapUrl });
  }

  fetchPowerUsers = () => {
    return getPowerUsersFromApi()
      .then(powerUserList => {
        this.setState({ powerUserList });
      });
  }

  componentDidMount(){
    Promise.all(([
      this.getUserLocation()
        .then(position => {
          this.setState({ userLat: position.coords.latitude, userLong: position.coords.longitude });
        })
    ]))
      .then(() => {
        this.fetchListingsWithDistance();
      })
      .then(() => {
        this.fetchMap();
      })
      .then(() => {
        this.fetchPowerUsers();
      });
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.state.userLat !== prevState.userLat){
      this.changeOrigin();
    }

    if(this.state.listings !== prevState.listings){
      this.fetchMap();
    }
  }

  render() {
    const { nearestListings, powerUserList, listings } = this.state;

    // if(!listings) return (
    //   <div className={loadStyles.loading}>
    //     <div className={loadStyles.loader}></div>
    //   </div>
    // );

    return (
      <>
      <section className={styles.hero}>
        <Header />
        <div>
          <h1>End Hunger<br />In Your<br />Community</h1>
        </div>
      </section>

      <div className={styles.mainHome}>
        {nearestListings.length >= 3 && <NearbyListingThumbList nearbyListingList={nearestListings} />}
        <div className={styles.map}>
          <Map listings={listings} />
        </div>
        {powerUserList.length >= 3 && <PowerUserList powerUserList={powerUserList} />}
      </div>

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


