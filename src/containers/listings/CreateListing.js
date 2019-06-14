import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingForm from '../../components/listings/ListingForm';
import { createListingApi } from '../../services/listingsApi';

class CreateListing extends PureComponent {
  static propTypes = {
    createListing: PropTypes.func.isRequired
  }

  state = {
    imageUrl: '',
    title: '',
    category: '',
    street: '',
    state: 'OR',
    zip: '',
    description: '',
    dietary: '',
    postedDate: '',
    expiration: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration } = this.state;
    this.props.createListing({ imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration });
    this.setState({ imageUrl: '', title: '', category: '', street: '', state: 'OR', zip: '', description: '', dietary: '', postedDate: '', expiration: '' });
  }
 
  render() {
    const { imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration } = this.state;

    return (
      <ListingForm 
        imageUrl={imageUrl}
        title={title}
        category={category}
        street={street}
        state={state}
        zip={zip}
        description={description}
        dietary={dietary}
        postedDate={postedDate}
        expiration={expiration}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createListing(imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration) {
    dispatch(createListingApi(imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateListing);
