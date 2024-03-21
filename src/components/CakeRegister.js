import './App.css';
import React, { useState } from "react";

const CakeRegister = ({ addCake }) => {
    const [cakeName, setCakeName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!cakeName || !ingredients || !rating) {
            setError("Can't create a cake out of thin air, but maybe you can add a recipe 😉. Don't forget to add commas between your ingredients 🔪");
            alert(error);
            return;
        }

        const newCake = {
            cakeName,
            ingredients,
            rating
        };

        addCake(newCake);
        setCakeName('');
        setIngredients([]);
        setRating('');
        setError('');
    };

    return (
        <>
            <h2>Add Cake</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Cake Name"
                    placeholder="enter cake name.."
                    value={cakeName}
                    onChange={(event) => setCakeName(event.target.value)}
                />
                <input
                    type="text"
                    name="Ingredients"
                    placeholder="enter ingredients using commas between them ..."
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value.split(','))}
                />
                <input
                    type="text"
                    name="Rating"
                    placeholder="enter recipe rating..."
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default CakeRegister;