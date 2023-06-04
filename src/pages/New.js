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
      <h3 class="p-5 font-medium fontsize text-2xl text-center">Add a new ingredient to your kitchen!</h3>
      <div class="flex flex-row">
        
        <div class= "flex flex-col p-5 w-1/2">
          <p>Enter the name and quantity of the new ingredient below.</p>
          <form class="p-5" onSubmit={handleSubmit} className="newIngredientForm">
            <label class="text-orange font-medium">
              Name:
              <input
                type="text"
                name="ingredient"
                value={formData.ingredient}
                onChange={handleInputChange}
              />
            </label>
            <label class="text-orange font-medium">
              Quantity:
              <input
                type="integer"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </label>
            <button class="bg-green hover:bg-white border-lightGreen rounded-lg px-5 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Submit</button>
          </form>
        </div>
        <div class="w-1/2 max-h-200 p-5 flex justify-content">
          <img class="max-h-100 object-contain" src={process.env.PUBLIC_URL + '/Refrigerator.jpg'} alt="fridge" className="newImage" />
        </div>
      </div>
    </div>
  );
}

export default NewIngredientForm;

