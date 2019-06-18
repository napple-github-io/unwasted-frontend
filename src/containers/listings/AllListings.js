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
    console.log('comp did mount?');
    this.fetch();
  }

  render(){
    console.log(this.state);
    return (
      <>
      <Header />
      <AllListingsList allListingsList={this.state.listings} />
      </>
    )
    ;
  }
}
