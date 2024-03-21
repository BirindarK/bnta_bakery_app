import React from "react"
const CakeList = ({cakeName, ingredients, rating}) => {
    
    return (
        <div className="cake">
        <h3>{cakeName}</h3>
        <p> Ingredients: {ingredients.join(', ')} </p>
        <p> Rating {rating} </p>
            </div>
    )
}


export default CakeList;