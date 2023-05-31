import React, { useState } from "react";

const RecipeSearchForm = ({ ingredients }) => {
    console.log(ingredients)
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
                <div className="ingredientList"> {ingredients.map((ingredient) => (
                    <label>
                        <input
                            type="checkbox"
                            value={ingredient.ingredient}
                            checked={selectedIngredients.includes(ingredient.ingredient)}
                            onChange={handleIngredientChange}
                        />
                        {ingredient.ingredient}
                    </label>
                ))}
                </div>
                <button type="submit">Search</button>
                {recipes && (recipes.length === 0 || recipes === null) ? (
                    <h3>
                        Select a different ingredient or add to your kitchen
                    </h3>
                ) : (
                    recipes.map((recipe) => (
                        <div key={recipe.idMeal}>
                            <h3>{recipe.strMeal}</h3>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                    ))
                )}
            </form>
        )
    };

    const loading = () => {
        return <h1>Looking through the cupboards...</h1>;
    };
    return (ingredients ? loaded() : loading());
}

export default RecipeSearchForm
