import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const IngredientInfo = ({ ingredient, deleteIngredient, updateIngredient}) => {
  const navigate = useNavigate();
  const handleDelete = (ingredientId) => {
    deleteIngredient(ingredientId);
    navigate(`/ingredients`); // Redirect to the same page after deleting
  };
  return (
    <div className="ingredientInfo">
       <Link to={`/ingredients/${ingredient.id}`}className="ingredientLink">
        <h4>{ingredient.ingredient}</h4>
      </Link>
      <h4>{ingredient.quantity}</h4>
      <div>
        <button onClick={() => handleDelete(ingredient.id)}className="delete">DELETE</button>
        <Link to={`/ingredients/edit/${ingredient.id}`}>
          <button>EDIT</button>
        </Link>
      </div>
    </div >
  )
}


export default IngredientInfo

