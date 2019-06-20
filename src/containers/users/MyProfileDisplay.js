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
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';
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
    console.log(this.props);
    this.fetch();
  }

  render(){
    const { userInfo, listings, reviews } = this.state;
    // if(!userInfo) return (
    //   <div className={loadStyles.loading}>
    //     <div className={loadStyles.loader}></div>
    //   </div>
    // );

    console.log(userInfo);

    return (
    <>
      <section className={styles.hero}>
        <Header user={userSeedObj} />
        <div>
          <h1>Welcome back,<br />
            <span id={styles.name}>{userSeedObj.firstName} {userSeedObj.lastName}</span></h1>
        </div>
      </section>
      
      <section className={styles.mainMyProfile}>
        <UserListingThumbList userListingList={listingSeed} />
        <NearbyListingThumbList nearbyListingList={listingSeed} />
        <MyProfileDetails profile={userSeedObj} />
        <ReviewList reviewList={reviewSeed} />
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
)(MyProfileDisplay);
