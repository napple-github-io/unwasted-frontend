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
import { listingSeed } from '../../assets/seedData/seedData';
import { getListingsByUser } from '../../services/listingsApi';
import { getUser } from '../../selectors/userAuthSelectors';
import { getReviewsByUserId } from '../../services/reviewsApi';

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
    if(!userInfo) return <h1>Loading</h1>;
    return (
    <>
      <Header user={userInfo}/>
      <UserListingThumbList userListingList={listings} />
      <NearbyListingThumbList nearbyListingList={listingSeed} />
      <MyProfileDetails profile={userInfo} />
      <ReviewList reviewList={reviews} />
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
