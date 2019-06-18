import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getUserFromApi } from '../../services/userApi';
import Header from '../../components/display/Header';
import Footer from '../../components/display/Footer';
import ReviewList from '../../components/reviews/ReviewList';
import ReviewForm from '../../components/reviews/ReviewForm';
import UserListingThumbList from '../../components/listings/UserListingThumbList';
import UserProfileDetails from '../../components/profile/UserProfileDetails';
import { listingSeed, userSeedObj, reviewSeed } from '../../assets/seedData/seedData';
import { getListingsByUser } from '../../services/listingsApi';
import { connect } from 'react-redux';
import { getUser } from '../../selectors/userAuthSelectors';
import { postReviewToApi } from '../../services/reviewsApi';

class UserProfileDisplay extends PureComponent {
  static propTypes = {
    currentUser: PropTypes.object,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  state = {
    userInfo: null,
    listings: null,
    review: '',
    thumbsUp: 'false'
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

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    const { review, thumbsUp, userInfo } = this.state;
    let thumbsUpBool = thumbsUp == 'true' ? true : false;
    console.log(thumbsUpBool);
    event.preventDefault();
    postReviewToApi(review, thumbsUpBool, this.props.currentUser, userInfo);
  }


  componentDidMount(){
    this.fetch();
    console.log(this.props.match);
  }

  render(){
    const { userInfo, listings } = this.state;
    const { currentUser } = this.props;
    if(!userInfo) return <h1>Loading</h1>;
    return (
    <>
      <Header user={currentUser} />
      <UserProfileDetails userProfileDetails={userInfo} />
      <ReviewList reviewList={reviewSeed} />
      <ReviewForm currentUser={currentUser} reviewee={userInfo} onChange={this.onChange} onSubmit={this.onSubmit} />
      <UserListingThumbList userListingList={listings} />
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
