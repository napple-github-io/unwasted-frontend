import React from 'react';
import PropTypes from 'prop-types';
import ListingThumb from './ListingThumb';
import styles from './Listings.css';
import filters from './AllListingsFilter.css';
import  { Link }  from 'react-router-dom';

function AllListingsList({ title, allListingsList, filterSubmit, onChange, category, checkBoxChecked, distance, currentUserId }) {
  const listItem = allListingsList.map(listing => (
    <li key={listing._id}>
      <ListingThumb listing={listing} />
    </li>
  ));

  return (
    <>
      <section className={filters.filters}>
        <form onSubmit={filterSubmit}>
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

          <div id={filters.dietary}>
            <div>
              <h5>Allergens</h5>
              <ul>
                <li><label><input type ="checkbox" name="dairy" value="dairy" onChange={checkBoxChecked} />Dairy Free</label></li>
                <li><label><input type ="checkbox" name="gluten" value="gluten" onChange={checkBoxChecked} />Gluten Free</label></li>
                <li><label><input type ="checkbox" name="shellfish" value="shellfish" onChange={checkBoxChecked} />Shellfish Free</label></li>
                <li><label><input type ="checkbox" name="nut" value="nut" onChange={checkBoxChecked} />Nut Free</label></li>
              </ul>
            </div>

            <div>
              <h5>Dietary</h5>
              <ul>
                <li><label><input type ="checkbox" name="vegetarian" value="vegetarian" onChange={checkBoxChecked} />Vegetarian</label></li>
                <li><label><input type ="checkbox" name="vegan" value="vegan" onChange={checkBoxChecked} />Vegan</label></li>
              </ul>
            </div>
          </div>

          <div id={filters.distance}>
            <h5>Max Distance <span>{distance}</span></h5>
            <input type="range" name="distance" min="0" max="50" value={distance} id={filters.slider} onChange={onChange}></input>
          </div>
          <button>Apply Filter</button>
        </form>
      </section>

      <section className={styles.listings}>
        <header>
          <h2>{title}</h2>
        </header>
        <ul>
          {listItem && listItem}
        </ul>
        {listItem <= 0 && title == 'All Listings' && <h3>No listings have been posted yet!</h3>}
        {listItem <= 0 && title !== 'All Listings' && <h3>You have not posted a listing yet! <Link to="/listings/new">Click here to create one!</Link></h3>}
      </section>
    </>
  );
}

AllListingsList.propTypes = {
  allListingsList: PropTypes.array.isRequired,
  title: PropTypes.string,
  filterSubmit: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  checkBoxChecked: PropTypes.func.isRequired,
  distance: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AllListingsList;
