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
        return <h2>Flipping through the cookbook pages...</h2>
    }

    return (
        <div>
            <h1 class="p-5 max-w-sm mx-auto text-center font-medium font-size text-3xl">{recipeInfo.name}</h1>
            <p class="p-2 text-center">Category: {recipeInfo.category}</p>
            <div class="flex row">
                <div class="w-1/2 p-5">
                    <h2 class="p-5 flex items-center font-medium max-w-sm mx-auto text-xl">Ingredients</h2>
                    <ul>
                        {recipeInfo.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.ingredient} - {ingredient.measure}</li>
                        )
                        )
                        }
                    </ul>
                </div>
                <div class="w-1/2 p-5">
                    <img class="w-full h-auto" src={recipeInfo.thumbnail} alt="food image" />
                </div>
            </div>
            <div class="m-5">
                <h2 class="font-medium text-xl">Instructions:</h2>
                <p class="p-5 text-xs">1. {recipeInfo.instructions}</p>
                <Link to="/ingredients/recipes" className="backLink"> Back </Link>
            </div>


        </div>
    );
};


export default RecipeDetails