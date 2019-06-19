import React from 'react';
import PropTypes from 'prop-types';

function ListingDetails({ listing }) {
  console.log(listing);
  return (
    <section>
      <section>
        <h2>{listing.title}</h2>
        <h3>{listing.category}</h3>
      </section>

      <section>
        <div>
          <div id="listing-photo-container">
            <img src={listing.imageUrl} alt={listing.title} />
          </div>
          <div>MAP GOES HERE</div>
        </div>

        <div>
          <span className="listing-location">{listing.location.street}</span>
          <span className="listing-location">{listing.location.zip}</span>
          <p>{listing.description}</p>

          <h3 id="listing-dietary">Dietary</h3>
          <ul>
            <li>{listing.dietary.nut}</li>
            <li>{listing.dietary.vegetarian}</li>
          </ul>

          <p>Posted {listing.postedDate}</p>
          <p>Expires {listing.expiration}</p>
          <a href="#" className="report-link">REPORT</a>
        </div>
      </section>

      <section>
        <div className="user-photo-container">
          <img src={listing.user.userImage} alt={listing.user.username} />
        </div>
        <h4>{listing.user.username}</h4>
        <button>CONTACT</button>
      </section>
    </section>
  );
}

ListingDetails.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingDetails;
