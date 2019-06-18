import React, { PureComponent } from 'react';
import AllListingsList from '../../components/listings/AllListingsList';
import { getAllListingsFromApi } from '../../services/listingsApi';
import Header from '../../components/display/Header';

export default class AllListings extends PureComponent {
  state = {
    listings: [],
    category: null
  }

  fetch = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }

  componentDidMount() {
    // console.log(window.navigator.geolocation);
    // if(window.navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     const pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     console.log(pos)
    //     ;})
    //   ;}
    this.fetch();
  }

  render(){
    return (
      <>
      <Header />
      <AllListingsList allListingsList={this.state.listings} />
      </>
    )
    ;
  }
}
