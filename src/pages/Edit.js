import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateIngredientForm({ingredients, updateIngredient }) {
    console.log(ingredients)
    const { id } = useParams();
    const [updatedIngredient, setUpdatedIngredient] = useState({});
    const [ingredient, setIngredient] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const selectedIngredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
        setIngredient(selectedIngredient)
    }, [ingredients, id])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedIngredient((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(updateIngredient);
        updateIngredient(id, updatedIngredient)
        console.log("Inbgredient updated", ingredient)
        navigate('/ingredients'); 
    }
    if(!ingredient){
        console.log("Ingredient is undefined")
        return null
    }
    console.log("Inbgredient updated", ingredient)
    
    return (
        <form onSubmit={handleSubmit}>
          <h2>Edit Ingredient</h2>
          <label>
            Ingredient:
            <input
              type="text"
              name="ingredient"
              value={updatedIngredient.ingredient || ""}
              onChange={handleChange}
              placeholder= {ingredient.ingredient}
            />
          </label>
          <label>
            Quantity:
            <input
              type="integer"
              name="quantity"
              value={updatedIngredient.quantity || ""}
              onChange={handleChange}
              placeholder= {ingredient.quantity}
            />
          </label>
          <button type="submit">Update</button>
        </form>
      );
    };
    
    export default UpdateIngredientForm;
    