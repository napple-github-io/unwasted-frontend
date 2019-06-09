import React from 'react';
import PropTypes from 'prop-types';
import UserListingThumb from './UserListingThumb';

function UserListingThumbList({ userListingList }) {
  console.log(userListingList);
  const listItem = userListingList.map(userListing => (
    <li key={userListing}>
      <UserListingThumb userListing={userListing} />
    </li>
  ));

  return (
    <ul>
      {listItem}
    </ul>
  );
}

UserListingThumbList.propTypes = {
  userListingList: PropTypes.array.isRequired
};

export default UserListingThumbList;
