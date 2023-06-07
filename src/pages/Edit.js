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
    console.log("Inbgredient updated", ingredient)
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
    <div className="flex justify-center flex-col">
      <h2 className="p-5 font-medium fontsize text-2xl text-center">Edit Ingredient</h2>
      <div className="flex flex-row">
        <div className="flex flex-col p-5 w-1/2">
          <form className="p-5" onSubmit={handleSubmit}>
            <label className="text-orange font-medium">
              Ingredient:
              <input
                type="text"
                name="ingredient"
                value={updatedIngredient.ingredient || ""}
                onChange={handleChange}
                placeholder={ingredient.ingredient}
              />
            </label>
            <label className="text-orange font-medium" >
              Quantity:
              <input
                type="integer"
                name="quantity"
                value={updatedIngredient.quantity || ""}
                onChange={handleChange}
                placeholder={ingredient.quantity}
              />
            </label>
            <button className="bg-green hover:bg-white border-lightGreen rounded-lg px-5 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Update</button>
          </form>
        </div>
        <div>
          <img className="ingredientShow" src={imageSource} alt={ingredient.ingredient} onError={(e) => e.target.src = fallbackImage} />
        </div>
      </div>
    </div >

  );
};

export default UpdateIngredientForm;
