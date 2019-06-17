import React from 'react';
import PropTypes from 'prop-types';

function UserListingThumb({ userListing }) {
  return (
    <section>
      <div>
        <img src={userListing.image} alt={userListing.name} />
      </div>
      
      <h4>{userListing.name}</h4>
      <p>{userListing.location}</p>
      <p>{userListing.description}</p>
      <p className="listing-thumb-posted">Posted $TIME POSTED</p>
    </section>
  );
}

UserListingThumb.propTypes = {
  userListing: PropTypes.object.isRequired
};

export default UserListingThumb;
