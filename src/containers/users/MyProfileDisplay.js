import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import YourProfileDetails from '../../components/profile/YourProfileDetails';
import UserListingThumbList from '../../components/listings/UserListingThumbList';
import NearbyListingThumbList from '../../components/listings/NearbyListingThumbList';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';
import { getListingsByUser } from '../../services/listingsApi';
import { getUser } from '../../selectors/userAuthSelectors';

class MyProfileDisplay extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  state = {
    userInfo: null,
    listings: null,
  }
  
  fetch(){
    console.log(this.props);
    return getUserFromApi(this.props.user.userMongooseId)
      .then(userInfo => {
        return Promise.all(([
          Promise.resolve(userInfo),
          getListingsByUser(userInfo._id)
        ]));
      })
      .then(([userInfo, listings]) => this.setState({ userInfo, listings }));

  }
  componentDidMount(){
    this.fetch();
  }

  render(){
    const { userInfo, listings } = this.state;
    if(!userInfo) return <h1>Loading</h1>;
    return (
    <>
      {/* <Header /> */}
      <UserListingThumbList userListingList={listings} />
      <NearbyListingThumbList nearbyListingList={listingSeed} />
      <YourProfileDetails profile={userInfo} />
      <ReviewList reviewList={reviewSeed} />
      <Footer />
    </>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state)
});

export default connect(
  mapStateToProps,
  null
)(MyProfileDisplay);
