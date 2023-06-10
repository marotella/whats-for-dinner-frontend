import React from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Ingredient = ({ ingredients, getIngredientData, deleteIngredient, baseUrl }) => {
  //use the param to match the id in the database
  const { id } = useParams();
  const navigate = useNavigate();
  //checks that the  data is loaded and then looks for the wine that matches the param of id.
  const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
  useEffect(() => {
    // Call the getIngredientData function here to fetch the data
    getIngredientData(baseUrl);
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
  const imageSource = `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`;
  const fallbackImage = process.env.PUBLIC_URL + '/Fork.png';

  const loaded = () => {
    const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
    if (!ingredient) {
      return <h1>Ingredient not found</h1>;
    }
    //Displays ingredient information and buttons that perform update and delete
    return (
      <div>
        <h3 className="flex justify-center m-4 font-medium text-xl">View, edit, and delete ingredients from your kitchen.</h3>
      <section className="showSection drop-shadow-xl">

        <div className="ingredientInfo">
          <div className="font-medium p-5">
            <h3 className="p-2">Ingredient: {ingredient.ingredient}</h3>
            <h3 className="p-2">Quantity: {ingredient.quantity}</h3>
            <div className="flex flex-row m-4 objects-center">
              <button onClick={() => handleDelete(ingredient.id)} className="text-white bg-green p-2 m-2 hover:bg-white hover:text-green active:bg-orange active:text-white"><span className="material-symbols-outlined">
                delete
              </span></button>
              <Link to={`/ingredients/edit/${ingredient.id}`}><button className="text-white bg-green hover:bg-white hover:text-green active:bg-orange active:text-white p-2 m-2"><span className="material-symbols-outlined">
                edit
              </span></button>
              </Link>
            </div>
          </div>
          <img className="ingredientShow" src={imageSource} alt={ingredient.ingredient} onError={(e) => e.target.src = fallbackImage} />
        </div>
        <div className="m-5">
                <Link to="/ingredients" className="flex text-green items-center drop-shadow-xl">  <span class="material-symbols-outlined">
                    arrow_back
                </span>  Back </Link>
            </div>
      </section >
      </div>
    );
  };

  return <div>{ingredient ? loaded() : loading()}</div>;
};

export default Ingredient;