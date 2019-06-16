import React from 'react';
import PropTypes from 'prop-types';

function ListingDetails({ listingDetails }) {
  return (
    <section>
      <section>
        <h2>{listingDetails.title}</h2>
        <h3>{listingDetails.category}</h3>
      </section>

      <section>
        <div>
          <div id="listing-photo-container">
            <img src={listingDetails.imageUrl} alt={listingDetails.title} />
          </div>
          <div>MAP GOES HERE</div>
        </div>

        <div>
          <span className="listing-location">{listingDetails.location.street}</span>
          <span className="listing-location">{listingDetails.location.zip}</span>
          <p>{listingDetails.description}</p>

          <h3 id="listing-dietary">Dietary</h3>
          <ul>
            <li>{listingDetails.dietary.nut}</li>
            <li>{listingDetails.dietary.vegetarian}</li>
          </ul>

          <p>Posted {listingDetails.postedDate}</p>
          <p>Expires {listingDetails.expiration}</p>
          <a href="#" className="report-link">REPORT</a>
        </div>
      </section>

      <section>
        <div className="user-photo-container">
          <img src={listingDetails.user.userImage} alt={listingDetails.user.username} />
        </div>
        <h4>{listingDetails.user.username}</h4>
        <button>CONTACT</button>
      </section>
    </section>
  );
}

ListingDetails.propTypes = {
  listingDetails: PropTypes.object.isRequired
};

export default ListingDetails;
