import React from "react"
import {Link, useParams} from "react-router-dom"

const IngredientInfo = ({ ingredient }) => {
  return (
    <div>
    <h4>{ingredient.ingredient}</h4>
    <h4>{ingredient.quantity}</h4>
  </div >
)
    }


export default IngredientInfo

