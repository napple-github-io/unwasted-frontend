import React from 'react';
import PropTypes from 'prop-types';
import ListingThumb from './ListingThumb';
import styles from './Listings.css';
import filters from './AllListingsFilter.css';

function AllListingsList({ allListingsList }) {
  const listItem = allListingsList.map(listing => (
    <li key={listing._id}>
      <ListingThumb listing={listing} />
    </li>
  ));

  return (
    <>
      <section className={filters.filters}>
        <form>
          <select id="listing-category" name="category">
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
              <h4>Allergens</h4>
              <ul>
                <li><input type ="checkbox" name="dairy" value="dairy" />Dairy Free</li>
                <li><input type ="checkbox" name="gluten" value="gluten" />Gluten Free</li>
                <li><input type ="checkbox" name="shellfish" value="shellfish" />Shellfish Free</li>
                <li><input type ="checkbox" name="nut" value="nut" />Nut Free</li>
              </ul>
            </div>

            <div>
              <h4>Dietary</h4>
              <ul>
                <li><input type ="checkbox" name="vegetarian" value="vegetarian" />Vegetarian</li>
                <li><input type ="checkbox" name="vegan" value="vegan" />Vegan</li>
              </ul>
            </div>
          </div>

          <div>
            <h4>Max Distance</h4>
            <input type="range" min="0" max="100" value="50"></input>
            <p><strong>$NUM Miles</strong> from your location</p>
          </div>
        </form>
      </section>

      <section className={styles.listings}>
        <header>
          <h2>All Listings</h2>
        </header>
        <ul>
          {listItem}
        </ul>
      </section>
    </>
  );
}

AllListingsList.propTypes = {
  allListingsList: PropTypes.array.isRequired
};

export default AllListingsList;
