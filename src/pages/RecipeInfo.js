import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const RecipeDetails = ({URL}) => {
    const { id } = useParams()
    const [recipeInfo, setRecipeInfo] = useState(null)
    useEffect(() => {
        fetch(`${URL}/ingredients/api/recipes/${id}`)
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
        <div className="w-full">
            <h1 className="p-5 max-w-sm mx-auto text-center font-medium font-size text-3xl">{recipeInfo.name}</h1>
            <div className="m-5">
                <Link to="/ingredients/recipes" className="flex text-green items-center">  <span class="material-symbols-outlined">
                    arrow_back
                </span>  Back </Link>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <div className="flex m-5 p-4 flex-row justify-left">
                    <div className="flex flex-col">
                    <h2 className="flex font-medium text-l 
                    p-4">Ingredients:</h2>
                    <ul className="p-4">
                        {recipeInfo.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.ingredient} - {ingredient.measure}</li>
                        )
                        )
                        }
                    </ul>
                    </div>
                    <div className="flex flex-col w-1/2 p-5 m- 5 justify-center items-center">
                        <p className="p-2 font-medium">Category: {recipeInfo.category}</p>
                        <img className="w-full h-auto border-green border-2" src={recipeInfo.thumbnail} alt="food image" />
                    </div>

                </div>

            </div>
            <div>
                <h2 className="font-medium text-l p-4">Instructions:</h2>
                <p className="p-4 text-s">1. {recipeInfo.instructions}</p>
            </div>
        </div>
    );
};


export default RecipeDetails