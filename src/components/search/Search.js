import React from 'react';

export default function Search() {
  return (
    <>
      <section>
        <div>Search</div>
        <form>
          <input type="text" placeholder="Search..."></input>
        </form>
      </section>

      <section>
        <h4>Dietary Requirements</h4>
        <ul>
          <li>
            <li><input type ="checkbox" name="dairy" value="dairy" />Dairy Free</li>
            <li><input type ="checkbox" name="gluten" value="gluten" />Gluten Free</li>
            <li><input type ="checkbox" name="shellfish" value="shellfish" />Shellfish Free</li>
            <li><input type ="checkbox" name="nut" value="nut" />Nut Free</li>
            <li><input type ="checkbox" name="vegetarian" value="vegetarian" />Vegetarian</li>
            <li><input type ="checkbox" name="vegan" value="vegan" />Vegan</li>
          </li>
        </ul>
      </section>

       <section>
         <h4>Max Distance</h4>
         <input type="range" min="0" max="100" value="50"></input>
         <p><strong>$NUM Miles</strong> from your location:</p>
         <p>$YOUR_LOCATION</p>
         <div>MAPGOESHERE</div>
       </section>
    </>
  );
}
