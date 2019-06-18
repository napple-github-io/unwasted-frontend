import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import UserListingThumbList from '../../components/listings/UserListingThumbList';
import UserProfileDetails from '../../components/profile/UserProfileDetails';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';
import { getListingsByUser } from '../../services/listingsApi';

export default class UserProfileDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  state = {
    userInfo: null,
    listings: null
  }

  fetch(){
    return getUserFromApi(this.props.match.params.id)
      .then(userInfo => {
        return Promise.all(([
          Promise.resolve(userInfo),
          getListingsByUser(this.props.match.params.id)
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
      <UserProfileDetails userProfileDetails={userInfo} />
      <ReviewList reviewList={reviewSeed} />
      {/* REVIEW FORM */}
      <UserListingThumbList userListingList={listings} />
      <Footer />
    </>
    );
  }
}
