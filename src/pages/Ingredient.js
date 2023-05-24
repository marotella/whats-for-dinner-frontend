import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


//pass down the props in the app.js so that we can display individual data, delete and updated
const Ingredient = ({ingredients, getIngredientData}) => {
  //use the param to match the id in the database
  const {id} = useParams();
  //checks that the  data is loaded and then looks for the wine that matches the param of id.
  const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
  useEffect(() => {
    // Call the getIngredientData function here to fetch the data
    getIngredientData();
  }, []);
  console.log(ingredients)
  console.log(ingredient)

  //Pouring message when the data has not yet landed
  const loading = () => {
    return <h1>Looking through the cupboards...</h1>;
  };

  const loaded = () => {
    const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
    if (!ingredient) {
      return <h1>Ingredient not found</h1>;
    }
    //Displays ingredient information and buttons that perform update and delete
    return (
      <section className="showSection">
      <div className="ingredientInfo">
        <ul>
          <li>Ingredient: {ingredient.ingredient}</li>
          <li>Quantity: {ingredient.quantity}</li>
          <li>
            <button id="delete">DELETE</button>
            <button>EDIT</button>
          </li>
        </ul>
      </div>
      </section>
    );
  };

  return <div>{ingredient ? loaded() : loading()}</div>;
};

export default Ingredient;