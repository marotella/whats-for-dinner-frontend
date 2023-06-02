import React from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Ingredient = ({ ingredients, getIngredientData, deleteIngredient }) => {
  //use the param to match the id in the database
  const { id } = useParams();
  const navigate = useNavigate();
  //checks that the  data is loaded and then looks for the wine that matches the param of id.
  const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
  useEffect(() => {
    // Call the getIngredientData function here to fetch the data
    getIngredientData();
  }, []);
  console.log(ingredients)
  console.log(ingredient)
  const handleDelete = (ingredientId) => {
    deleteIngredient(ingredientId);
    navigate(`/ingredients`); // Redirect to the same page after deleting
  };
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
            {ingredient.image ? (
              <img src={`https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`} alt={ingredient.ingredient} />
            ) : (
              <img src={process.env.PUBLIC_URL + '/Fork.png'} alt="default" className="fork" />
            )}
            <li>Quantity: {ingredient.quantity}</li>
            <li>
              <button onClick={() => handleDelete(ingredient.id)} className="delete">DELETE</button>
              <Link to={`/ingredients/edit/${ingredient.id}`}>
                <button>EDIT</button>
              </Link>
            </li>
          </ul>

        </div>
        <Link to="/ingredients" className="backLink"> Back </Link>
      </section >
    );
  };

  return <div>{ingredient ? loaded() : loading()}</div>;
};

export default Ingredient;