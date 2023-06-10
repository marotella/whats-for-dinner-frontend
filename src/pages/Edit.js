import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function UpdateIngredientForm({ ingredients, updateIngredient }) {
  console.log(ingredients)
  const { id } = useParams();
  const [updatedIngredient, setUpdatedIngredient] = useState({});
  const [ingredient, setIngredient] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const selectedIngredient = ingredients.find(ingredient => ingredient.id === parseInt(id))
    setIngredient(selectedIngredient)
  }, [ingredients, id])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedIngredient((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(updateIngredient);
    updateIngredient(id, updatedIngredient)
    console.log("Ingredient updated", ingredient)
    navigate('/ingredients');
  }
  if (!ingredient) {
    console.log("Ingredient is undefined")
    return null
  }
  console.log("Ingredient updated", ingredient)

  const imageSource = `https://www.themealdb.com/images/ingredients/${ingredient.ingredient}.png`;
  const fallbackImage = process.env.PUBLIC_URL + '/Fork.png';

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full p-5">
      <h2 className="p-5 font-medium text-2xl text-center">Edit Ingredient</h2>
      <div className="m-5">
                <Link to="/ingredients" className="flex text-green items-center">  <span class="material-symbols-outlined">
                    arrow_back
                </span>  Back </Link>
            </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col p-5 w-1/2">
          <form className="flex p-5 flex-col drop-shadow-xl" onSubmit={handleSubmit}>
            <label className="text-orange font-medium mt-4">
              Ingredient:
              <input
                type="text"
                name="ingredient"
                value={updatedIngredient.ingredient || ""}
                onChange={handleChange}
                placeholder={ingredient.ingredient}
                className="mt-2 border rounded-lg p-2"
              />
            </label>
            <label className="text-orange font-medium mt-4" >
              Quantity:
              <input
                type="integer"
                name="quantity"
                value={updatedIngredient.quantity || ""}
                onChange={handleChange}
                placeholder={ingredient.quantity}
                className="mt-2 border rounded-lg p-2"
              />
            </label>
            <button className="bg-green hover:bg-white border-lightGreen rounded-lg px-5 mt-4 text-white hover:text-green active:bg-orange active:text-white focus:bg-orange drop-shadow-xl" type="submit">Update</button>
          </form>
          
        </div>
        <div className="lg:w-1/2 flex justify-center"> 
          <img className="ingredientShow" src={imageSource} alt={ingredient.ingredient} onError={(e) => e.target.src = fallbackImage} />
        </div>
      </div>
      </div>
    </div >

  );
};

export default UpdateIngredientForm;
