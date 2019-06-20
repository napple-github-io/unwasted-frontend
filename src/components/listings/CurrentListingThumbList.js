import React from 'react';
import PropTypes from 'prop-types';
import ListingThumb from './ListingThumb';
import styles from './Listings.css';

function CurrentListingThumbList({ userListingList }) {
  const listItem = userListingList.map(userListing => (
    <li key={userListing._id}>
      <ListingThumb listing={userListing} />
    </li>
  ));

  return (
    <section className={styles.listings}>
      <header>
        <h2>Current Listings</h2>
        <p>
          <a href="#">View All</a>
        </p>
      </header>
      <ul>
        {listItem}
      </ul>
    </section>
  );
}

CurrentListingThumbList.propTypes = {
  userListingList: PropTypes.array.isRequired
};

export default CurrentListingThumbList;
