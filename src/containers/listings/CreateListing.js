import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingForm from '../../components/listings/ListingForm';
import ImageForm from '../../components/listings/ImageForm';
import { postListingToApi, postImageToApi } from '../../services/listingsApi';
import { getUserMongooseId } from '../../selectors/userAuthSelectors';
import { withRouter } from 'react-router-dom';

class CreateListing extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
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
    expiration: '',
    file: null,
    imageTitle: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  imageOnChange = ({ target }) => {
    this.setState({
      file: target.files[0]
    });
  }

  checkBoxChecked = ({ target }) => {
    this.setState({ dietary: { ...this.state.dietary, [target.name]: target.checked } });
  }

  onSubmit = event => {
    event.preventDefault();
    const user = this.props.user;
    const { imageUrl, title, category, street, state, zip, description, dietary, expiration } = this.state;
    postListingToApi(title, description, imageUrl, category, street, zip, state, dietary, expiration, user)
      .then(createdPost => {
        this.props.history.push(`/listings/${createdPost._id}`);
      });
  }

  imageSubmit = event => {
    event.preventDefault();
    return postImageToApi(this.state.file)
      .then(res => {
        console.log(res);
        this.setState({ imageUrl: res.file });
      });
  }
 
  render() {
    const { imageUrl, title, category, street, state, zip, description, postedDate, expiration } = this.state;

    return (
      <>
      <ImageForm imageTitle={this.state.imageTitle} imageSubmit={this.imageSubmit} onChange={this.onChange} imageOnChange={this.imageOnChange} />
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: getUserMongooseId(state),
});

export default withRouter(connect(
  mapStateToProps,
  null
)(CreateListing));
