import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingThumb.css';

function ListingThumb({ listing }) {
  return (
    <section className={styles.ListingThumb}>
      <div id={styles.image}>
        <img src={listing.imageUrl} alt={listing.title} />
        <span>2.3 mi</span>
      </div>
      
      <div>
        <h3>{listing.title}</h3>
        <p id={styles.location}>{listing.location.zip}</p>
        <p id={styles.description}>{listing.description}</p>
        <p id={styles.posted}>Posted {listing.postedDate}</p>
      </div>
    </section>
  );
}

ListingThumb.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingThumb;
