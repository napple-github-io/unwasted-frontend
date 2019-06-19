import React from 'react';
import PropTypes from 'prop-types';

function Map({ mapUrl }) {
  return (
    <div>
      <strong>{mapUrl}</strong>
    </div>
  );
}

Map.propTypes = {
  mapUrl: PropTypes.string.isRequired
};

export default Map;
