import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import UserListingThumbList from '../../components/listings/UserListingThumbList';
import UserProfileDetails from '../../components/profile/UserProfileDetails';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';

export default class UserProfileDisplay extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    userInfo: null
  }

  fetch(){
    return getUserFromApi(this.props.match.params.id)
      .then(userInfo => {
        console.log(userInfo);
        this.setState({ userInfo });
      });
  }

  componentDidMount(){
    this.fetch();
  }

  render(){
    const { userInfo } = this.state;
    if(!userInfo) return <h1>Loading</h1>;
    return (
    <>
      {/* <Header /> */}
      <UserProfileDetails userProfileDetails={userInfo} />
      {/* <ReviewList reviewList={reviewSeed} /> */}
      {/* REVIEW FORM */}
      {/* <UserListingThumbList userListingList={listingSeed} /> */}
      <Footer />
    </>
    );
  }
}
