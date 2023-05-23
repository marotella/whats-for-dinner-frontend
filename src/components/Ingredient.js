import React from "react"
import {Link, useParams} from "react-router-dom"

const IngredientInfo = ({ ingredients }) => {
    const { id } = useParams();
  
    const ingredient = ingredients.find(
      (ingredient) => ingredient.id === parseInt(id)
    );
  
    if (!ingredient) {
      return <h1>Looking through the cupboards...</h1>;
    }
        return(
            <div className="ingredientInfo">
        <ul className="ingredientList">
          <li>Ingredient: {ingredient.ingredient}</li>
          <li>Quantity: {ingredient.quantity}</li>
        </ul>
        <div className="ingredient">
          <Link to={`/edit/${ingredient.id}`}>
            <button>Update</button>
          </Link>
          <button>Delete</button>

        </div>
      </div>
    ); 
        
    }


export default IngredientInfo

