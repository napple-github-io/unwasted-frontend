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


class ListingById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  state = {
    listing: null,
    message: ''
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

  deleteClick = () => {
    return deleteListingFromApi(this.state.listing._id);
  }
  
  componentDidMount() {
    this.fetch();
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
      <Header user={this.props.currentUser}/>
      <div className={styles.listingDetailsContainer}>
        <ListingDetails listing={this.state.listing} receivingUser={this.state.listing.user} onChange={this.changeHandler} onSubmit={this.submitHandler} deleteClick={this.deleteClick} />
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
