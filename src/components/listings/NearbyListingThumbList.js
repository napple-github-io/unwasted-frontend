import React from 'react';
import PropTypes from 'prop-types';
import ListingThumb from './ListingThumb';
import styles from './Listings.css';

function NearbyListingThumbList({ nearbyListingList }) {
  const listItem = nearbyListingList.map((listing, i) => (
    <li key={i}>
      <ListingThumb listing={listing} />
    </li>
  ));

  return (
    <section className={styles.listings}>
      <header>
        <h2>Listings Near You</h2>
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

NearbyListingThumbList.propTypes = {
  nearbyListingList: PropTypes.array.isRequired
};

export default NearbyListingThumbList;
