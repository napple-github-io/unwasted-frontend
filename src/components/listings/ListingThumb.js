import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingThumb.css';
import { Link } from 'react-router-dom'; 

function ListingThumb({ listing }) {
  return (
    <section className={styles.ListingThumb}>
      <div id={styles.image}>
        <Link to={`/listings/${listing._id}`}>
          <img src={listing.imageUrl || 'https://i.imgur.com/x73Ial1.jpg'} alt={listing.title} />
        </Link>

        <span>{listing.distance}</span>
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
