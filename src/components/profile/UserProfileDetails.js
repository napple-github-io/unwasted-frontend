import React from 'react';
import PropTypes from 'prop-types';

function UserProfileDetails({ userProfileDetails }) {
  return (
    <section>
      {!userProfileDetails.powerUser && <img src={userProfileDetails.userImage} alt={userProfileDetails.username} />}
      {userProfileDetails.powerUser && <img src={userProfileDetails.userImage} alt={userProfileDetails.username} />}
      <h5>Name</h5>
      <h4>{userProfileDetails.firstName} {userProfileDetails.lastName}</h4>
      <h5>Location</h5>
      <h4>{userProfileDetails.location.street}, {userProfileDetails.location.state}</h4>
      <h5>Standing</h5>
      <h4>{userProfileDetails.standing}</h4>
      <button>CONTACT</button>
    </section>
  );
}

UserProfileDetails.propTypes = {
  userProfileDetails: PropTypes.object.isRequired
};

export default UserProfileDetails;
