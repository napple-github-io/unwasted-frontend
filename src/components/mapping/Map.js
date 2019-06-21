import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';

function Map({ mapUrl }) {
  return (
    <>
      <img className={styles.map} src={mapUrl} />
    </>
  );
}

Map.propTypes = {
  mapUrl: PropTypes.string.isRequired
};

export default Map;
