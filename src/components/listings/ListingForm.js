import React from 'react';
import PropTypes from 'prop-types';

export default function ListingForm({ onSubmit, onChange, title, category, street, state, zip, description, expiration, checkBoxChecked }) {
  return (
    <>
    <h2>New Listing</h2>
      <form id="listing" onSubmit={onSubmit}>
        <section>
          <div id="listing-image-container">
            {/* <img src={imageUrl} alt="Upload an image" /> */}
          </div>
          <h4>Upload a photo</h4>
          {/* DISCUSS THIS WITH RYAN M */}
          <input type="file" id="listing-upload" name="upload" accept="image/*" value={imageUrl} onSubmit={onSubmit} onChange={onChange} />
        </section>


        <section>
          <input type="text" name="title" value={title} id="listing-title" placeholder="Title" onChange={onChange} />

          <select id="listing-category" name="category" value={category} onChange={onChange}>
            <option value="" hidden>Category</option>
            <option value="canned goods">Canned Goods</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="eggs">Eggs</option>
            <option value="meat">Meat</option>
            <option value="seafood">Seafood</option>
            <option value="prepared foods">Prepared Food</option>
            <option value="garden">Garden</option>
            <option value="pantry staples">Pantry Staples</option>
            <option value="herbs">Herbs</option>
            <option value="boxed goods">Boxed Goods</option>
            <option value="spices">Spices</option>
            <option value="beverages">Beverages</option>
          </select>

          <input type="text" name="street" value={street} id="listing-street" placeholder="Street" onChange={onChange} />

          <select id="listing-state" name="state" value={state} onChange={onChange}>
            <option value="AK">AK</option>
            <option value="AR">AR</option>	
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>	
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>	
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>	
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>			
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>	
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </select>

          <input type="string" maxLength="5" minLength="5" name="zip" value={zip} id="listing-zip" placeholder="Zip-Code" onChange={onChange} required />

          <section>
            <h3>Dietary Requirements</h3>
            <h4>Allergens</h4>

            <ul>
              <li><input type="checkbox" name="dairy" onChange={checkBoxChecked} />Dairy Free</li>
              <li><input type="checkbox" name="gluten" onChange={checkBoxChecked} />Gluten Free</li>
              <li><input type="checkbox" name="shellfish" onChange={checkBoxChecked} />Shellfish Free</li>
              <li><input type="checkbox" name="nut" onChange={checkBoxChecked} />Nut Free</li>
            </ul>
            <ul>
              <li><input type="checkbox" name="vegetarian" onChange={checkBoxChecked}/>Vegetarian</li>
              <li><input type="checkbox" name="vegan" onChange={checkBoxChecked}/>Vegan</li>
            </ul>
          </section>

          <h3>Expiration</h3>

          {/* IS THIS DEFAULT VALUE GOING TO BE CORRECT IN PRACTICE?? */}
          <input type="date" id="listing-expiration" name="expiration" value={expiration} min={'Date.now()'} onChange={onChange}/>

          <h3>Description</h3>

          {/* TEXTAREA WON'T TAKE VALUE */}
          <textarea id="listing-description" name="description" description={description} placeholder="Description" onChange={onChange}></textarea>
          <input type="checkbox" name="legal" required/>legal disclaimer goes here!!!
          <button>SUBMIT</button>
        </section>
      </form>
    </>
  );
}

ListingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  checkBoxChecked: PropTypes.func.isRequired, 
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expiration: PropTypes.string.isRequired
};
