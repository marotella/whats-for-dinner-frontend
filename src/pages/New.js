import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewIngredientForm({ createIngredient }) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    ingredient: '',
    quantity: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission using the formData object
    console.log(formData);
    // Reset the form
    try {
      await createIngredient(formData)
      setFormData({
        ingredient: '',
        quantity: ''
      });
      console.log("formData")
      navigate('/ingredients'); 
    } catch (error) {
      console.error(error)
    };
  }

  return (
    <div>
      <h3>Add a New Ingredient to your kitchen!</h3>
      <form onSubmit={handleSubmit} className="newIngredientForm">
        <label>
          Ingredient:
          <input
            type="text"
            name="ingredient"
            value={formData.ingredient}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="integer"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewIngredientForm;

