import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListingDetails from '../../components/listings/ListingDetails';
import { getSingleListingFromApi } from '../../services/listingsApi';

export default class ListingById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
    //user
  }

  state = {
    listing: null,
    listingUser: {}
  }
  
  fetch = () => {
    return getSingleListingFromApi(this.props.match.params.listingId)
      .then(listing => {
        this.setState({ listing, listingUser: listing.user });
      });
  }
  
  componentDidMount() {
    this.fetch();
  }
  
  render(){
    const { listing } = this.state;
    if(!listing) return <h1>Loading</h1>;
    return  (
      <ListingDetails listing={this.state.listing} />
    );
  }
}

//mapstatetoprops to get currentUser