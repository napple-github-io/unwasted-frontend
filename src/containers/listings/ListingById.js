import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListingDetails from '../../components/listings/ListingDetails';
import { getSingleListingFromApi, deleteListingFromApi } from '../../services/listingsApi';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';
import { sendEmail } from '../../services/emailApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import loadStyles from '../Loader.css';
import styles from './ListingById.css';
import { getListingMap, getListingMapWithoutUser } from '../../services/mapApi';



class ListingById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    listing: null,
    message: '',
    origin: 'Portland, OR',
    userLat: '',
    userLong: '',
    mapUrl: ''
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

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    const { currentUser } = this.props;
    const { message, listing } = this.state;
    const email = {
      to: listing.user._id,
      from: currentUser.userMongooseId,
      subject: `Unwasted: Email regarding ${listing.title} from ${listing.user.username}`,
      html: `<strong>User:${currentUser.userInfo.username} says: ${message}</strong>`,   
    };
    sendEmail(email);
  }

  fetch = () => {
    return getSingleListingFromApi(this.props.match.params.listingId)
      .then(listing => {
        this.setState({ listing });
      });
  }

  fetchMapWithUserLoc = () => {
    const { userLat, userLong, listing } = this.state;
    const mapUrl = getListingMap(userLat, userLong, listing.location.street + '' + listing.location.zip);
    this.setState({ mapUrl });
  }

  fetchMap = () => {
    const { listing } = this.state;
    const mapUrl = getListingMapWithoutUser(listing.location.street + '' + listing.location.zip);
    this.setState({ mapUrl });
  }

  deleteClick = () => {
    deleteListingFromApi(this.state.listing._id)
      .then(() => this.props.history.push('/'));
      
  }
  
  componentDidMount() {
    this.fetch()
      .then(() => this.fetchMap());
  }

  componentDidUpdate() {
    Promise.all(([
      this.getUserLocation()
        .then(position => {
          this.setState({ userLat: position.coords.latitude, userLong: position.coords.longitude });
        }),
      this.fetch()
        .then(() => this.fetchMapWithUserLoc())
    ]));
  }
  
  render(){
    const { listing } = this.state;
    if(!listing) return (
      <div className={loadStyles.loading}>
        <div className={loadStyles.loader}></div>
      </div>
    );

    return  (
      <>
      <Header />
      <div className={styles.listingDetailsContainer}>
        <ListingDetails listing={this.state.listing} receivingUser={this.state.listing.user} onChange={this.changeHandler} onSubmit={this.submitHandler} deleteClick={this.deleteClick} mapUrl={this.state.mapUrl} currentUser={this.props.currentUser}/>
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
)(ListingById);
