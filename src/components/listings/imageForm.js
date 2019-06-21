import React from 'react';
import PropTypes from 'prop-types';

export default function ListingForm({ onChange, title, imageSubmit, imageOnChange }) {
  return (
    <form onSubmit={imageSubmit}>
      <p>
        <input type="text" name="imageTitle" placeholder="title" value={title} maxLength="50" onChange={onChange} />
      </p>

      <p>
        <input type="file" name="file" onChange={imageOnChange}/>
      </p>

      <button>submit image</button>
    </form>
  );
}

ListingForm.propTypes = {
  onChange: PropTypes.func.isRequired, 
  imageOnChange: PropTypes.func.isRequired, 
  imageSubmit: PropTypes.func.isRequired, 
  title: PropTypes.string.isRequired
};
