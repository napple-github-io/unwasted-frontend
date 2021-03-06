import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import ReviewForm from '../../components/reviews/ReviewForm';
import CurrentListingThumbList from '../../components/listings/CurrentListingThumbList';
import UserProfileDetails from '../../components/profile/UserProfileDetails';
import { getListingsByUser } from '../../services/listingsApi';
import { connect } from 'react-redux';
import { getUser } from '../../selectors/userAuthSelectors';
import { postReviewToApi, getReviewsByUserId } from '../../services/reviewsApi';
import loadStyles from '../Loader.css';
// import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';
import styles from './UserProfileDisplay.css';

class UserProfileDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  state = {
    userInfo: null,
    listings: null,
    reviewText: '',
    thumbsUp: 'false',
    reviews: []
  }

  fetch(){
    return getUserFromApi(this.props.match.params.id)
      .then(userInfo => {
        return Promise.all(([
          Promise.resolve(userInfo),
          getListingsByUser(this.props.match.params.id),
          getReviewsByUserId(this.props.match.params.id)
        ]));
      })
      .then(([userInfo, listings, reviews]) => this.setState({ userInfo, listings, reviews }));
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    const { reviewText, thumbsUp, userInfo } = this.state;
    let thumbsUpBool = thumbsUp == 'true' ? true : false;
    event.preventDefault();
    postReviewToApi(reviewText, thumbsUpBool, this.props.currentUser, userInfo);
  }


  componentDidMount(){
    this.fetch();
  }

  render(){
    const { userInfo, listings, reviews } = this.state;
    const { currentUser } = this.props;
    if(!userInfo) return (
      <div className={loadStyles.loading}>
        <div className={loadStyles.loader}></div>
      </div>
    );
    return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <div className={styles.center}>
          <h2 id={styles.username}>{userInfo.username}</h2>
          <div className={styles.top}>
            <UserProfileDetails userProfileDetails={userInfo} />
            <div className={styles.review}>
              <ReviewList reviewList={reviews} />
              <ReviewForm currentUser={currentUser} reviewee={userInfo} onChange={this.onChange} onSubmit={this.onSubmit} />
            </div>
          </div>
          <CurrentListingThumbList userListingList={listings} />
        </div>
      </section>
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
)(UserProfileDisplay);
