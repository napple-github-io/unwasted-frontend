import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AllListingsList from '../../components/listings/AllListingsList';
import { getAllListingsFromApi, getListingsByUser, searchListings, getAllListingsFromApiWithDistance } from '../../services/listingsApi';
import Header from '../../components/display/Header';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/display/Footer';
import styles from './AllListings.css';

class AllListings extends PureComponent {
  static propTypes = {
    location: PropTypes.object,
    currentUser: PropTypes.object,
    logout: PropTypes.func
  }

  state = {
    listings: [],
    category: '',
    title: 'All Listings',
    dietary: {
      dairy: false,
      gluten: false,
      shellfish: false,
      nut: false,
      vegetarian: false,
      vegan: false
    },
    distance: '25',
    origin: 'Portland, OR',
    userLat: '',
    userLng: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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

  changeOrigin = () => {
    let origin = '';
    if(!this.props.currentUser && !this.state.userLat) {
      origin = 'Portland, OR';
    }
    if(!this.state.userLat && this.props.currentUser.location){
      origin = this.props.currentUser.location.street;
    } 
    if(this.state.userLat) {
      origin = (this.state.userLat + ',' + this.state.userLng);
    }
    this.setState({ origin });
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

  fetchListingsWithDistance = () => {
    const { origin } = this.state;
    return getAllListingsFromApiWithDistance(origin)
      .then(listings => {
        this.setState({ listings });
        this.setState({ nearestListings: [listings[0], listings[1], listings[2]] });
      });
  }
    
  filterSubmit = event => {
    event.preventDefault();
    const { dietary, category, distance, origin } = this.state;
    this.changeOrigin();
    searchListings(dietary, category, distance, origin)
      .then(listings => {
        this.setState({ listings });
      });
  }

  checkBoxChecked = ({ target }) => {
    this.setState({ dietary: { ...this.state.dietary, [target.name]: target.checked } });
  }


  componentDidMount() {
    this.getUserLocation()
      .then(position => {
        this.setState({ userLat: position.coords.latitude, userLng: position.coords.longitude });
      });
    if(this.props.location.search) {
      this.fetchMyListings();
      this.setState({ title: `${this.props.currentUser.username}'s Listings` });
    } else {
      this.fetchListingsWithDistance();
      this.setState({ title: 'All Listings' });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.userLat !== prevState.userLat){
      this.changeOrigin();
    }
    if(this.props.location.search && prevProps.location.search !== this.props.location.search) {
      this.fetchMyListings();
      this.setState({ title: `${this.props.currentUser.username}'s Listings` });
    }
    if(!this.props.location.search && prevProps !== this.props){
      this.fetchListingsWithDistance();
      this.setState({ title: 'All Listings' });
    }
  }

  render(){
    const { distance, category } = this.state;
    return (
      <>
      <Header />

      <div className={styles.allListingsContainer}>
        <AllListingsList title={this.state.title} distance={distance} allListingsList={this.state.listings} filterSubmit={this.filterSubmit} onChange={this.onChange} category={category} checkBoxChecked={this.checkBoxChecked}/>
      </div>

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
