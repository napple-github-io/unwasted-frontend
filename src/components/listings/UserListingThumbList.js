import React from 'react';
import PropTypes from 'prop-types';
import ListingThumb from './ListingThumb';
import styles from './Listings.css';
import userStyles from './UserListingThumbList.css';

function UserListingThumbList({ userListingList }) {
  const listItem = userListingList.map(userListing => (
    <li key={userListing._id}>
      <ListingThumb listing={userListing} />
    </li>
  ));

  return (
    <section className={styles.listings}>
      <header>
        <h2>Your Current Listings</h2>
        <p>
          <a href="#">View All</a> <span className={userStyles.span}>|</span> <a href="#">New Listing</a> <span className={userStyles.span}>|</span> <a href="#">Expired Listings</a>
        </p>
      </header>
      <ul>
        {listItem.length < 1 && <h4>No listings found.</h4>}
        {listItem.length > 0 && listItem}
      </ul>
    </section>
  );
}

UserListingThumbList.propTypes = {
  userListingList: PropTypes.array.isRequired
};

export default UserListingThumbList;
