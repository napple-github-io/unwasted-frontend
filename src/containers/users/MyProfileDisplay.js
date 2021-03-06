import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import MyProfileDetails from '../../components/profile/MyProfileDetails';
import UserListingThumbList from '../../components/listings/UserListingThumbList';
import NearbyListingThumbList from '../../components/listings/NearbyListingThumbList';
import { getListingsByUser } from '../../services/listingsApi';
import { getUser } from '../../selectors/userAuthSelectors';
import { getReviewsByUserId } from '../../services/reviewsApi';
import loadStyles from '../Loader.css';
import styles from './MyProfileDisplay.css';

class MyProfileDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  }

  state = {
    userInfo: null,
    listings: null,
  }
  
  fetch(){
    return getUserFromApi(this.props.currentUser.userMongooseId)
      .then(userInfo => {
        return Promise.all(([
          Promise.resolve(userInfo),
          getListingsByUser(userInfo._id),
          getReviewsByUserId(userInfo._id)
        ]));
      })
      .then(([userInfo, listings, reviews]) => this.setState({ userInfo, listings, reviews }));

  }
  componentDidMount(){
    this.fetch();
  }

  render(){
    const { userInfo, listings, reviews } = this.state;
    if(!userInfo) return (
      <div className={loadStyles.loading}>
        <div className={loadStyles.loader}></div>
      </div>
    );

    return (
    <>
      <section className={styles.hero}>
        <Header />
        <div>
          <h1>Welcome back,<br />
            <span id={styles.name}>{userInfo.firstName} {userInfo.lastName}</span></h1>
        </div>
      </section>
      
      <div className={styles.center}>
        <section className={styles.mainMyProfile}>
          <UserListingThumbList userListingList={listings} />
          <MyProfileDetails profile={userInfo} />
          <ReviewList reviewList={reviews} />
        </section>
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
)(MyProfileDisplay);
