import React from 'react';
import './App.css';
import CakeContainer from './containers/CakeContainer';
import CakeRegister from './components/CakeRegister';

function App() {
  return (
    <>
      <div className = "navBar">
      <h1>BNTA Bakery </h1>
      <nav>
        <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Recipe</a></li>
        <li><a href="#">Allergens</a></li>
        </ul>
      </nav>
      </div>
      <CakeContainer />
      
    
    </>
  );
}

export default App;
