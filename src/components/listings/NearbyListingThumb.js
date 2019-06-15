import React from 'react';
import PropTypes from 'prop-types';

function NearbyListingThumb({ nearbyListing }) {
  return (
    <section>
      <div>
        <img src={nearbyListing.image} alt={nearbyListing.name} />
        <span>{nearbyListing.distance}</span>
      </div>
      
      <h4>{nearbyListing.name}</h4>
      <p>{nearbyListing.location}</p>
      <p>{nearbyListing.description}</p>
      <p className="listing-thumb-posted">Posted $TIME POSTED</p>
    </section>
  );
}

NearbyListingThumb.propTypes = {
  nearbyListing: PropTypes.object.isRequired
};

export default NearbyListingThumb;
