import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const IngredientInfo = ({ ingredient, deleteIngredient, updateIngredient }) => {
  const navigate = useNavigate();
  const handleDelete = (ingredientId) => {
    deleteIngredient(ingredientId);
    navigate(`/ingredients`); // Redirect to the same page after deleting
  };
  const imageSource = `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`;
  const fallbackImage = process.env.PUBLIC_URL + '/Fork.png';
  return (

    <div className="ingredientTile drop-shadow-xl">
      <Link to={`/ingredients/${ingredient.id}`} className="p-2 font-medium text-orange hover:underline">
        <h4>{ingredient.ingredient}</h4>
      </Link>
      <Link to={`/ingredients/${ingredient.id}`} className="">
        <img className="ingredientThumb" src={imageSource} alt={ingredient.ingredient} onError={(e) => e.target.src = fallbackImage} />
      </Link>
      <div className="flex items-center justify-between">
        <button onClick={() => handleDelete(ingredient.id)} className="flex justify-center p-2 text-orange hover:text-white hover:bg-orange m-1"><span class="material-symbols-outlined">
          delete
        </span></button>
        <Link to={`/ingredients/edit/${ingredient.id}`}>
          <button className="flex justify-center p-2 m-1 text-orange hover:text-white hover:bg-orange"><span className="material-symbols-outlined">
            edit
          </span></button>
        </Link>
      </div>
    </div >
  )
}


export default IngredientInfo

