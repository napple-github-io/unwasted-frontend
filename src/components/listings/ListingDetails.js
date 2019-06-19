import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingDetails.css';

function ListingDetails({ listing }) {
  console.log(listing);
  return (
    <>
    <header className={styles.header}>
      <h2>{listing.title}</h2>
      <h3>{listing.category}</h3>
    </header>

    <main className={styles.listingDetails}>
      <section className={styles.left}>
        <div>
          <div id={styles.listingPhotoContainer}>
            <img src={listing.imageUrl} alt={listing.title} />
          </div>
          <div>MAP GOES HERE</div>
        </div>
      </section>

      <section className={styles.center}>
        <div>
          <span className="listing-location">{listing.location.street}</span>
          <span className="listing-location">{listing.location.zip}</span>
          <p>{listing.description}</p>

          <h4 id="listing-dietary">Dietary</h4>
          <ul>
            <li>{listing.dietary.nut}</li>
            <li>{listing.dietary.vegetarian}</li>
          </ul>

          <p>Posted {listing.postedDate}</p>
          <p>Expires {listing.expiration}</p>
          <a href="#" className="report-link">REPORT</a>
        </div>
      </section>

      <section className={styles.right}>
        <div className={styles.userPhotoContainer}>
          <img src={listing.user.userImage} alt={listing.user.username} />
        </div>
        <h5>{listing.user.username}</h5>
      </section>
    </main>
    </>
  );
}

ListingDetails.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingDetails;
