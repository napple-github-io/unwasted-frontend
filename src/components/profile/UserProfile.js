import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ userProfile }) {
  return (
    <section>
      <img src={userProfile.image} alt={userProfile.userName} />
      <h5>Name</h5>
      <h4>{userProfile.name}</h4>
      <h5>Location</h5>
      <h4>{userProfile.city}, {userProfile.state}</h4>
      <h5>Standing</h5>
      <h4>{userProfile.standing}</h4>
      <button>CONTACT</button>
    </section>
  );
}

UserProfile.propTypes = {
  userProfile: PropTypes.object.isRequired
};

export default UserProfile;
