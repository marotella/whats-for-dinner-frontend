import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const RecipeDetails = () => {
    const { id } = useParams()
    const [recipeInfo, setRecipeInfo] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/ingredients/api/recipes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setRecipeInfo(data)
                console.log(data);
            })
            .catch((error) => {
                console.error(error)
                setRecipeInfo(null)
            })


    }, [id])

    useEffect(() => {
        console.log(recipeInfo);
    }, [recipeInfo]);

    if (!recipeInfo) {
        return <h2>Flipping through the pages of the cookbook...</h2>
    }

    return (
        <div>
            <h1>{recipeInfo.name}</h1>
            <p>Category: {recipeInfo.category}</p>
            <img src={recipeInfo.thumbnail} alt="food image" />
            <h2>Ingredients</h2>
            <ul>
                {recipeInfo.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.ingredient} - {ingredient.measure}</li>
                )
                )
                }
            </ul>
            <h2>Instructions:</h2>
            <p>{recipeInfo.instructions}</p>
            <Link to="/ingredients/recipes" className="backLink"> Back </Link>
        </div>
    );
};


export default RecipeDetails