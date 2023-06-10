import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const RecipeDetails = ({ baseUrl }) => {
    const { id } = useParams()
    const [recipeInfo, setRecipeInfo] = useState(null)
    useEffect(() => {
        fetch(`${baseUrl}/ingredients/api/recipes/${id}`)
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
        <div className="container mx-auto p-4">
            <h1 className="text-center font-medium font-size text-3xl">{recipeInfo.name}</h1>
            <div className="flex justify-between my-4">
                <Link to="/ingredients/recipes" className="text-green flex items-center">  <span class="material-symbols-outlined">
                    arrow_back
                </span>  Back </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 mx-auto md:mx-0 md:mr-4">
                    <div className="flex flex-col">
                        <h2 className="font-medium text-lg 
                    p-4">Ingredients:</h2>
                        <ul className="pl-4">
                            {recipeInfo.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.ingredient} - {ingredient.measure}</li>
                            )
                            )
                            }
                        </ul>
                    
                        <div className="mb-4">
                        <h2 className="font-medium text-l m-5 p-4">Instructions:</h2>
                        <p className="pl-4 text-s"> {recipeInfo.instructions}</p>
                    </div>
                    </div>
                </div>
                    
                    <div className="w-full md:w-1/2 mx-auto">
                        <div>
                        <p className="p-2 font-medium">Category: {recipeInfo.category}</p>
                        </div>
                        <img className="w-full h-auto border-green border-2" src={recipeInfo.thumbnail} alt="food image" />
                    </div>

              

            </div>
          
        </div>
    );
};


export default RecipeDetails