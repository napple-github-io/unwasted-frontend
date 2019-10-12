import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map as GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Map.css';


export class MapContainer extends Component{

  static propTypes = {
    listings: PropTypes.array
  }

  componentDidMount() {
    console.log('did mount');
    console.log('!!!', this.props);
  }
  render() {
    const listings = [{ lat: 45.5051, lng: -122.55 }, { lat: 45.5049, lng: -122.51 }];
    if(this.props.listings){
      return (
        <>
          {/* <img className={styles.map} src={mapUrl || `https://maps.googleapis.com/maps/api/staticmap?center=Portland,OR&key=${process.env.MAPS_API_KEY}&size=980x980`} /> */}
          <GoogleMap
            google={this.props.google}
            zoom={12}
            style={styles}
            initialCenter={ { lat: 45.5051, lng: -122.55 } }
          >
            {/* {listings.map(item => (
              <Marker ref={this.onMarkerMounted}
                key={item.id}
                title={item.name}
                name={item.name}
                position={{ lat: item.lat, lng: item.lng }}
              />
            ))} */}
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
