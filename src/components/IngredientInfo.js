import React from "react"
import { Link, useParams } from "react-router-dom"

const IngredientInfo = ({ ingredient, deleteIngredient, updateIngredient}) => {
  return (
    <div className="ingredientInfo">
      <h4>{ingredient.ingredient}</h4>
      <h4>{ingredient.quantity}</h4>
      <div>
        <button onClick={() => deleteIngredient(ingredient.id)} className="delete">DELETE</button>
        <Link to={`/ingredients/edit/${ingredient.id}`}>
          <button>EDIT</button>
        </Link>
      </div>
    </div >
  )
}


export default IngredientInfo

