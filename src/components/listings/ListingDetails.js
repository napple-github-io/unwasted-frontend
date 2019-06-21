import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListingDetails.css';
import ContactForm from '../contact/ContactForm';
import Map from '../mapping/Map';
import { Link } from 'react-router-dom';

function ListingDetails({ listing, receivingUser, onChange, onSubmit, deleteClick, mapUrl, currentUser }) {
  const sameUser = currentUser.userMongooseId === listing.user._id ? true : false;
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
          <div><Map mapUrl={mapUrl} /></div>
        </div>
      </section>

      <section className={styles.center}>
        <div>
          <p className={styles.date}>{listing.location.street}</p>
          <p className={styles.date}>{listing.location.zip}</p>
          <p className={styles.bodyCopy}>{listing.description}</p>

          <h4>Dietary</h4>
          <ul className={styles.dietary}>
            {listing.dietary.dairy && <li>Dairy Free</li>}
            {listing.dietary.gluten && <li>Gluten Free</li>}
            {listing.dietary.shellfish && <li>Shellfish Free</li>}
            {listing.dietary.nut && <li>Nut Free</li>}
            {listing.dietary.vegetarian && <li>Vegetarian</li>}
            {listing.dietary.vegan && <li>Vegan</li>}
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
          <Link to={`/users/${listing.user._id}`} >
            <img src={listing.user.userImage || 'https://i.imgur.com/O5tm3Du.jpg'} alt={listing.user.username} />
          </Link>
        </div>
        <Link to={`/users/${listing.user._id}`} >
          <h5>{listing.user.username}</h5>
        </Link>
        {sameUser && <button onClick={deleteClick}>Delete</button>}
      </section>
    </main>
    </>
  );
}

ListingDetails.propTypes = {
  listing: PropTypes.object.isRequired,
  receivingUser: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  mapUrl: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  deleteClick: PropTypes.func
};

export default ListingDetails;
