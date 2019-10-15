import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Map.css';

export class MapContainer extends Component{

  static propTypes = {
    listings: PropTypes.array
  }

  render() {
    const listings = this.props.listings; 
    if(listings){
      return (
        <>
          {/* <img className={styles.map} src={mapUrl || `https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&key=${process.env.MAPS_API_KEY}&size=980x980`} /> */}
          <GoogleMap
            google={this.props.google}
            zoom={10}
            style={styles}
            initialCenter={ { lat: 45.5051, lng: -122.66 } }
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
