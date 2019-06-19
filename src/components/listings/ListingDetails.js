import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingDetails.css';
import ContactForm from '../contact/ContactForm';

function ListingDetails({ listing, receivingUser, onChange, onSubmit }) {
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
          <p className={styles.date}>{listing.location.street}</p>
          <p className={styles.date}>{listing.location.zip}</p>
          <p className={styles.bodyCopy}>{listing.description}</p>

          <h4>Dietary</h4>
          <ul className={styles.dietary}>
            <li>{listing.dietary.nut}</li>
            <li>{listing.dietary.vegetarian}</li>
          </ul>

          <p className={styles.date}>Posted {listing.postedDate}</p>
          <div className={styles.bottomRow}>
            <p className={styles.date}>Expires {listing.expiration}</p>
            <a href="#" className="report-link">REPORT</a>
          </div>
        </div>

        <ContactForm receivingUser={receivingUser} onChange={onChange} onSubmit={onSubmit} />
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
  listing: PropTypes.object.isRequired,
  receivingUser: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default ListingDetails;
