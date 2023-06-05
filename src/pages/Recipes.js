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
            <div class="flex text-center flex-col p-5 m-5">
                <h3 class='text-xl font-medium p-2'>What's for Dinner Recipe Book</h3>

                <div className="flex flex-wrap">
                    <form onSubmit={handleRecipeSubmit}>
                        <div class="flex flex-row">
                            <p>Use your kitchen to discover new recipes!<br /><br /> Select 1-3 items to search our cookbooks and discover something new to make for dinner.</p>
                            <button type="submit"><span class="material-symbols-outlined text-white bg-green text-4xl items-center">
                                search
                            </span>Search</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-1/2"> {ingredients.map((ingredient) => (
                            <label className="ingredientSelector flex items-center flex-col border border-lightGreen border-2">
                                <div class="flex flex-row text-center justify-center items-center p-2">
                                    <input
                                        className="check m-1 p-2"
                                        type="checkbox"
                                        value={ingredient.ingredient}
                                        checked={selectedIngredients.includes(ingredient.ingredient)}
                                        onChange={handleIngredientChange}
                                    />
                                    <p class="p-4">{ingredient.ingredient}</p>
                                </div>
                                <div className="ingredientSelection flex items-center">
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
                        <div className="results">
                            {recipes && (recipes.length === 0 || recipes === null) ? (
                                <h3>
                                    Select a different ingredient or add to your kitchen
                                </h3>

                            ) : (
                                recipes.map((recipe) => (
                                    <div className="recipeIcon w-1/2 flex flex-col  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" key={recipe.idMeal}>
                                        <Link to={`/ingredients/recipe/${recipe.idMeal}`} className="link"
                                        ><h3>{recipe.strMeal} </h3></Link>
                                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipeImage" />

                                    </div>


                                ))

                            )}
                        </div>
                    </form >
                </div>
            </div>
        )
    };

    const loading = () => {
        return <h1>Looking through the cupboards...</h1>;
    };
    return (ingredients ? loaded() : loading());
}

export default RecipeSearchForm
