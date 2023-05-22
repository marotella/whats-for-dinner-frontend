import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NewIngredientForm from './pages/New';
import { Link } from 'react-router-dom';
import EditIngredient from './pages/Edit';
import './App.css';


function App() {
  const URL = "http://localhost:8000/"
  console.log(URL)
  const [ingredients, setIngredients] = useState("")
  const getIngredientData = async () => {
    try {
      const response = await fetch(`${URL}api/ingredients`);
      if (!response.ok) {
        throw new Error("Failed to fetch ingredient data");
      }
      const data = await response.json();
      setIngredients(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredientData();
  }, []);

  console.log("Ingredient State:", ingredients);
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
    </div>
  );
}

export default App;
