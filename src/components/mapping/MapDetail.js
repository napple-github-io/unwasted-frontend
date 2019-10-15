import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Map.css';

export class MapDetailContainer extends Component{

  static propTypes = {
    listing: PropTypes.object
  }

  render() {
    const { listing } = this.props; 
    if(listing){
      return (
        <>
          {/* <img className={styles.map} src={mapUrl || `https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&key=${process.env.MAPS_API_KEY}&size=980x980`} /> */}
          <GoogleMap
            google={this.props.google}
            zoom={15}
            style={styles}
            initialCenter={ { lat: listing.coords.lat, lng: listing.coords.lng } }
          >
            <Marker
              key={listing._id}
              title={listing.title}
              name={listing.user.username}
              position={{ lat: listing.coords.lat, lng: listing.coords.lng }}
            />
          </GoogleMap>
  
        </>
      );
    }
  }
}


MapDetailContainer.propTypes = {
  google: PropTypes.object.isRequired
};

// export default Map;
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(MapDetailContainer);
