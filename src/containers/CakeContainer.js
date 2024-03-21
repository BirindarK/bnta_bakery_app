import '../App.css';
import {useState} from "react";
import CakeList from "../components/CakeList";
import CakeRegister from "../components/CakeRegister";

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ]);

    const addCake = (newCake) => {
        setCakes([...cakes, newCake]);
    }

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const filteredCakes = cakes.filter(cake =>
        cake.cakeName.toLowerCase().includes(searchQuery.toLowerCase()));

    

  return (
    <div className = "cakes">
      <h1>Cakes</h1>

      
      <form className='search-form'>
      <input
      type="text"
      placeholder='search for cake...'
      value= {searchQuery}
      onChange={handleSearch}
      />
    </form>
      <div className="cakes">
      {filteredCakes.map((cake, index) => (
                <CakeList
                    key={index}
                    cakeName={cake.cakeName}
                    ingredients={cake.ingredients}
                    rating={cake.rating}
                />
        ))}
      </div>
      <CakeRegister addCake = {addCake}/>
    </div>
  );
};

export default CakeContainer;