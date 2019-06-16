import React from 'react';
import PropTypes from 'prop-types';

function ListingThumb({ listing }) {
  return (
    <section>
      <div>
        <img src={listing.imageUrl} alt={listing.title} />
        <span>2.3 mi</span>
      </div>
      
      <h4>{listing.title}</h4>
      <p>{listing.location.zip}</p>
      <p>{listing.description}</p>
      <p className="listing-thumb-posted">Posted {listing.postedDate}</p>
    </section>
  );
}

ListingThumb.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingThumb;
