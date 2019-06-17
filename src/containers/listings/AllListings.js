import React, { PureComponent } from 'react';
import AllListingsList from '../../components/listings/AllListingsList';
import { getAllListingsFromApi } from '../../services/listingsApi';

export default class AllListings extends PureComponent {
  state = {
    listings: []
  }

  fetch = () => {
    return getAllListingsFromApi()
      .then(listings => {
        this.setState({ listings });
      });
  }

  componentDidMount() {
    this.fetch();
  }

  render(){
    return <AllListingsList allListingsList={this.state.listings} />;
  }
}
