import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListingForm from '../../components/listings/ListingForm';
import { postListingToApi, postImageToApi } from '../../services/listingsApi';
import { getUserMongooseId, getUser } from '../../selectors/userAuthSelectors';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/display/Footer';
import Header from '../../components/display/Header';
import styles from './CreateListing.css';

class CreateListing extends PureComponent {
  static propTypes = {
    user: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    currentUser: PropTypes.object
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
    file: null
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

  imageSubmit = () => {
    return postImageToApi(this.state.file)
      .then(res => {
        this.setState({ imageUrl: res.file });
      });
  }

  componentDidUpdate(){
    if(this.state.file && !this.state.imageUrl) {
      this.imageSubmit();
    }
  }
 
  render() {
    const { imageUrl, title, category, street, state, zip, description, postedDate, expiration, file } = this.state;

    return (
      <>
      <Header />
      <div className={styles.listingFormContainer}>
        <ListingForm 
          imageSubmit={this.imageSubmit}
          imageOnChange={this.imageOnChange}
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
          imageFile={file}
        />
      </div>
      <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: getUserMongooseId(state),
  currentUser: getUser(state)
});

export default withRouter(connect(
  mapStateToProps,
  null
)(CreateListing));
