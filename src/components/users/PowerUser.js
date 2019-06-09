import React from 'react';
import PropTypes from 'prop-types';

function PowerUser({ powerUser }) {
  return (
    <section>
      <div>
        <img src={powerUser.image} alt={powerUser.name} />
      </div>
      
      <h4>{powerUser.name}</h4> <img src="./src/assets/icons/poweruser.svg" alt="Power User Icon" />
      <p>{powerUser.listingCount} Listings</p>
      <p>{powerUser.description}</p>
    </section>
  );
}

PowerUser.propTypes = {
  powerUser: PropTypes.object.isRequired
};

export default PowerUser;
