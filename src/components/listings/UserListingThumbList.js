import React from 'react';
import PropTypes from 'prop-types';
import UserListingThumb from './UserListingThumb';

function UserListingThumbList({ userListingList }) {
  const listItem = userListingList.map(userListing => (
    <li key={userListing}>
      <UserListingThumb userListing={userListing} />
    </li>
  ));

  return (
    <section>
      <header>
        <h2>Your Current Listings</h2>
        <p>
          <a href="#">View All</a> <span>|</span> <a href="#">New Listing</a> <span>|</span> <a href="#">Expired Listings</a>
        </p>
      </header>
      <ul>
        {listItem}
      </ul>
    </section>
  );
}

UserListingThumbList.propTypes = {
  userListingList: PropTypes.array.isRequired
};

export default UserListingThumbList;
