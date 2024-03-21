import '../App.css';
import React from "react"
const CakeList = ({cakeName, ingredients, rating }) => {
    
    return (
        <div className="cake">
        <h3>{cakeName}</h3>
        <ul>
                Ingredients: {ingredients.map( (ingredient, index) => {
                    return <li>{ingredient}</li>
                })}
            </ul>
        <p> Rating {rating} </p>
            </div>
    )
}


export default CakeList;