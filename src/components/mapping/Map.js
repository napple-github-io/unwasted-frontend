import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component{
  render() {
    return (
      <>
        {/* <img className={styles.map} src={mapUrl || `https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&key=${process.env.MAPS_API_KEY}&size=980x980`} /> */}
        <GoogleMap
          google={this.props.google}
          zoom={12}
          style={styles}
          initialCenter={ { lat: 45.5051, lng: -122.55 } }
        />
      </>
    );
  }

}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

// export default Map;
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(MapContainer);
