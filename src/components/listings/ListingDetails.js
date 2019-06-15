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
            <img src={listingDetails.image} alt={listingDetails.title} />
          </div>
          <div>MAP GOES HERE</div>
        </div>

        <div>
          <span className="listing-location">{listingDetails.location}</span>
          <span className="listing-location">{listingDetails.zip}</span>
          <p>{listingDetails.description}</p>

          <h3 id="listing-dietary">Dietary</h3>
          <ul>
            <li>{listingDetails.dietary.nut}</li>
            <li>{listingDetails.dietary.vegetarian}</li>
          </ul>

          <p>Posted {listingDetails.postedTime}</p>
          <p>Posted {listingDetails.expiration}</p>
        </div>
      </section>

      <section>
        <div className="user-photo-container">
          <img src={listingDetails.userImage} alt={listingDetails.userName} />
        </div>
        <h4>{listingDetails.userName}</h4>
        <button>CONTACT</button>
      </section>
    </section>
  );
}

ListingDetails.propTypes = {
  listingDetails: PropTypes.object.isRequired
};

export default ListingDetails;
