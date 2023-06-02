import React, { useState } from "react";
import { Link } from "react-router-dom"

const RecipeSearchForm = ({ ingredients, searchRecipes }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [searchError, setSearchError] = useState(false);


    const handleIngredientChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedIngredients((prevIngredients) => [...prevIngredients, value]);
        } else {
            setSelectedIngredients((prevIngredients) =>
                prevIngredients.filter((Ingredient) => Ingredient !== value)
            );
        }
    };
    const handleRecipeSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/ingredients/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: selectedIngredients }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response data
                console.log(data);
                setRecipes(data.meals);
                setRecipes(data.meals === null ? [] : data.meals);
                console.log(recipes)
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
                setRecipes([])
            });
    }


    const loaded = () => {
        console.log(ingredients);
        return (

            <form onSubmit={handleRecipeSubmit}>
                <button type="submit">Search</button>
                <div className="recipeSearch"> {ingredients.map((ingredient) => (
                    <label className="ingredientSelector">

                        <input
                            className="check"
                            type="checkbox"
                            value={ingredient.ingredient}
                            checked={selectedIngredients.includes(ingredient.ingredient)}
                            onChange={handleIngredientChange}
                        />
                        <div className="ingredientSelection">
                            {ingredient.ingredient}
                            <img
                                className="ingredientThumb"
                                src={`https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`}
                                alt={ingredient.ingredient}
                                onError={(e) => {
                                    e.target.src = process.env.PUBLIC_URL + '/Fork.png';
                                }}
                            />
                        </div>
                    </label>
                ))}
                </div>
                <div className="recipeResults">
                    {recipes && (recipes.length === 0 || recipes === null) ? (
                        <h3>
                            Select a different ingredient or add to your kitchen
                        </h3>
                    ) : (
                        recipes.map((recipe) => (
                            <div className="recipeIcon" key={recipe.idMeal}>
                                <Link to={`/ingredients/recipe/${recipe.idMeal}`} className="link"
                                ><h3>{recipe.strMeal} </h3></Link>
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipeImage"/>
                                
                            </div>
                        
                ))
                )}
                </div>
            </form >
        )
    };

    const loading = () => {
        return <h1>Looking through the cupboards...</h1>;
    };
    return (ingredients ? loaded() : loading());
}

export default RecipeSearchForm
