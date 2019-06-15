import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingForm from '../../components/listings/ListingForm';
import { postListingToApi } from '../../services/listingsApi';
import { getUserMongooseId } from '../../selectors/userAuthSelectors';

class CreateListing extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired
  }

  state = {
    imageUrl: '',
    title: '',
    category: '',
    street: '',
    state: 'OR',
    zip: '',
    description: '',
    dietary: {
      dairy: false,
      gluten: false,
      shellfish: false,
      nut: false,
      vegetarian: false,
      vegan: false
    },
    postedDate: '',
    expiration: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  checkBoxChecked = ({ target }) => {
    this.setState({ dietary: { ...this.state.dietary, [target.name]: target.checked } });
  }

  onSubmit = event => {
    event.preventDefault();
    const { imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration } = this.state;
    postListingToApi({ user: this.props.user, imageUrl, title, category, street, state, zip, description, dietary, postedDate, expiration });
    this.setState({ imageUrl: '', title: '', category: '', street: '', state: 'OR', zip: '', description: '', dietary: { dairy: false, gluten: false, shellfish: false, nut: false, vegetarian: false, vegan: false }, postedDate: '', expiration: '' });
  }
 
  render() {
    const { imageUrl, title, category, street, state, zip, description, postedDate, expiration } = this.state;

    return (
      <ListingForm 
        imageUrl={imageUrl}
        title={title}
        category={category}
        street={street}
        state={state}
        zip={zip}
        description={description}
        postedDate={postedDate}
        expiration={expiration}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        checkBoxChecked={this.checkBoxChecked}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: getUserMongooseId(state)
});

export default connect(
  mapStateToProps,
  null
)(CreateListing);
