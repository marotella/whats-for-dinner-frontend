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
                console.log(data);
                setRecipes(data.meals);
                setRecipes(data.meals === null ? [] : data.meals);
                console.log(recipes)
            })
            .catch((error) => {
                console.error(error);
                setRecipes([])
            });
    }

    const loaded = () => {
        console.log(ingredients);
        return (
            <div className="flex text-center flex-col p-5 m-5">
                <h3 className='text-xl font-medium p-2'>
                    What's for Dinner Recipe Book
                </h3>
                <p>
                                Use your kitchen to discover new recipes!
                                <br />
                                <br />
                                Select 1-3 items to search our cookbooks and discover something new to make for dinner.
                            </p>
                <div className="flex flex-wrap">
                    <form onSubmit={handleRecipeSubmit} className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                        
                            <div className="flex justify-center">
                                <button type="submit" className="flex items-center bg-green text-white py-2 px-4 mt-4">
                                    <span className="material-symbols-outlined text-4xl mr-2">
                                        search
                                    </span>
                                    Search
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {ingredients.map((ingredient) => (
                                    <label className="ingredientSelector flex items-center flex-col border border-lightGreen border-2 bg-white" key={ingredient.ingredient}>
                                        <div className="flex flex-row text-center justify-center items-center p-2">
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
                        </div>
                        <div className="w-full md:w-1/2 items-center p-2">
                            <h3 className="text-center text-xl p-1">Search Results</h3>
                            <div className="flex flex-col items-center justify-center">
                                {recipes && (recipes.length === 0 || recipes === null) ? (
                                    <h3>
                                        Select an ingredient to search!
                                    </h3>

                                ) : (
                                    recipes.map((recipe) => (
                                        <div className="recipeIcon flex flex-col items-center border border-lightGreen border-2 bg-green text-white" key={recipe.idMeal}>
                                            <h3 className="text-l font-medium">Recipe Card</h3>
                                           <div className="flex flex-row justify-center items-center">
                                            <Link to={`/ingredients/recipe/${recipe.idMeal}`} className="link"
                                            ><h2 className="text-white hover:text-orange hover:underline text-center">{recipe.strMeal} </h2>
                                            </Link>
                                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipeImage m-3 items-center border-white border-2" />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </form >
                </div >
            </div >
        )
    };

    const loading = () => {
        return <h1>Looking through the cupboards...</h1>;
    };
    return (ingredients ? loaded() : loading());
}

export default RecipeSearchForm
