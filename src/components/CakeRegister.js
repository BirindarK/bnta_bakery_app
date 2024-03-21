import React, { useState } from "react";

const CakeRegister = ({ addRecipe }) => {
    const [cakeName, setCakeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [rating, setRating] = useState('');

    // const [error, setError] = useState('');

    return (
        <>
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit}>
        <input
        type = "text"
        name = "Recipe Name"
        placeholder="enter recipe name.."
        value={cakeName}
        onChange={(event)=> setCakeName(event.target.value)}
        />
        <input
        type = "text"
        name = "Ingredients"
        placeholder="enter ingredients.."
        value={ingredients}
        onChange={(event)=> setIngredients(event.target.value)}
        />
        <input
        type = "text"
        name = "Rating"
        placeholder="enter recipe rating..."
        value={rating}
        onChange={(event)=> setRating(event.target.value)}
        />
        <input type="submit" value="Submit"/>
        </form>
        </>
    )
}
export default CakeRegister;