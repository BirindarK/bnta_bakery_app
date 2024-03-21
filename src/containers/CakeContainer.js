import {useState} from "react";
import CakeList from "../components/CakeList";
import CakeRegister from "../components/CakeRegister";

const CakeContainer = () => {

    const [cakes] = useState([
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
      ])
 
  return (
    <>
      <h1>Recipes</h1>
      <div className="cakes">
      {cakes.map(cake => (
                <CakeList
                    key={cake.cakeName}
                    cakeName={cake.cakeName}
                    ingredients={cake.ingredients}
                    rating={cake.rating}
                />
        ))}
      </div>

    </>
  );
};

export default CakeContainer;