import React from 'react';
import './App.css';
import CakeContainer from './containers/CakeContainer';

function App() {
  return (
    <>
      <div className = "navBar">
      <h1>BNTA Bakery </h1>
      <nav>
        <ul>
    <li>About</li>
    <li>Recipes</li>
    <li>Allergens</li>
    <form className='search-form'>
      <input
      type="text"
      placeholder='search for recipe..'
      />
    </form>

    {/* <form> */}
        </ul>
      </nav>
      </div>
      <CakeContainer />
    </>
  );
}

export default App;
