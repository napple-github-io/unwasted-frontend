import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';

function Map({ mapUrl }) {
  return (
    <>
      <img className={styles.map} src={mapUrl || `https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&key=${process.env.MAPS_API_KEY}&size=980x980`} />
    </>
  );
}

Map.propTypes = {
  mapUrl: PropTypes.string.isRequired
};

export default Map;
