import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Map.css';

export class MapContainer extends Component{

  static propTypes = {
    listings: PropTypes.array,
    userLat: PropTypes.string,
    userLng: PropTypes.string
  }

  render() {
    const { listings, userLat, userLng } = this.props; 
    if(listings){
      return (
        <>
          <GoogleMap
            google={this.props.google}
            zoom={10}
            style={styles}
            initialCenter={ { lat: userLat || 45.5051, lng: userLng || -122.66 } }
          >
            {listings.map(listing => (
              <Marker
                key={listing._id}
                title={listing.title}
                name={listing.user.username}
                position={{ lat: listing.coords.lat, lng: listing.coords.lng }}
              />
            ))}
          </GoogleMap>
  
        </>
      );
    }
  }
}


MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

// export default Map;
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(MapContainer);
