import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingThumb.css';
import { Link } from 'react-router-dom'; 

function ListingThumb({ listing }) {
  return (
    <section className={styles.ListingThumb}>
      <div id={styles.image}>
        <img src={listing.imageUrl || 'https://billystrings.com/wp-content/uploads/2019/04/2529_070818_dg_0017-Edit-688x1024.jpg'} alt={listing.title} />
        <span>2.3 mi</span>
      </div>
      
      <div>
        <Link to={`/listings/${listing._id}`}>
          <h3>{listing.title}</h3>
        </Link>
        <p id={styles.location}>{listing.location.zip}</p>
        <p id={styles.description}>{listing.description}</p>
        <p id={styles.posted}>Posted {listing.postedDate} by <Link to={`/users/${listing.user._id}`}>{listing.user.username}</Link></p>
      </div>
    </section>
  );
}

ListingThumb.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingThumb;
