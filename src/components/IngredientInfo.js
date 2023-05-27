import React from "react"
import {Link, useParams} from "react-router-dom"

const IngredientInfo = ({ ingredient }) => {
  return (
    <div className="ingredientInfo">
    <h4>{ingredient.ingredient}</h4>
    <h4>{ingredient.quantity}</h4>
    <div>
            <button id="delete">DELETE</button>
            <button>EDIT</button>
          </div>
  </div >
)
    }


export default IngredientInfo
