import React from 'react';
import PropTypes from 'prop-types';
import NearbyListingThumb from './NearbyListingThumb';

function NearbyListingThumbList({ nearbyListingList }) {
  const listItem = nearbyListingList.map(nearbyListing => (
    <li key={nearbyListing}>
      <NearbyListingThumb nearbyListing={nearbyListing} />
    </li>
  ));

  return (
    <section>
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
