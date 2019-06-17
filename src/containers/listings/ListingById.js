import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListingDetails from '../../components/listings/ListingDetails';
import { getSingleListingFromApi } from '../../services/listingsApi';
import ContactForm from '../../components/contact/ContactForm';
import { getUser } from '../../selectors/userAuthSelectors';
import { connect } from 'react-redux';
import { sendEmail } from '../../services/emailApi';


class ListingById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
  }

  state = {
    listing: null,
    message: ''
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    const { currentUser } = this.props;
    const { message, listing } = this.state;
    const email = {
      to: 'paytlower@gmail.com',
      from: currentUser.userInfo.email,
      subject: `Unwasted: Email regarding ${listing.title} from ${listing.user.username}`,
      html: `<strong>User:${currentUser.userInfo.username} says: ${message}</strong>`,   
    };
    console.log(email);
    sendEmail(email);
  }
  
  fetch = () => {
    return getSingleListingFromApi(this.props.match.params.listingId)
      .then(listing => {
        this.setState({ listing });
      });
  }
  
  componentDidMount() {
    this.fetch();
  }
  
  render(){
    const { listing } = this.state;
    if(!listing) return <h1>Loading</h1>;
    return  (
      <>
      <ListingDetails listing={this.state.listing} />
      <ContactForm receivingUser={this.state.listing.user} sendingUser={this.props.currentUser} onChange={this.changeHandler} onSubmit={this.submitHandler}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getUser(state)
});

export default connect(
  mapStateToProps,
  null
)(ListingById)
;
