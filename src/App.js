import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NewIngredientForm from './pages/New';
import { Link } from 'react-router-dom';
import UpdateIngredientForm from './pages/Edit';
import './App.css';
import Ingredient from "./pages/Ingredient";
import Ingredients from "./pages/Ingredients";
import LoginForm from './pages/Login';



function App() {
  const URL = "http://localhost:8000/"
  console.log(URL)
  const [ingredients, setIngredients] = useState([])
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
  //CREATE - INGREDIENTS 
  const createIngredient = async (createdIngredient) => {
    try {
      console.log(createdIngredient)
      const response = await fetch(`${URL}api/ingredients`, {
        method: "POST",
        body: JSON.stringify(createdIngredient),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Failed to create ingredient");
      }
      getIngredientData();
    } catch (error) {
      console.error(error);
    }
  };
  //UPDATE - INGREDIETNS
  const updateIngredient = async (id, updatedIngredient) => {
    try {
      console.log(updatedIngredient)
      const response = await fetch(`${URL}api/ingredients/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedIngredient),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Failed to update ingredient");
      }
      getIngredientData();
    } catch (error) {
      console.error(error);
    }
  };

  //DELETE - INGREDIENTS

  //SEARCH - RECIPES

  //CREATE - ACCOUNT

  //LOGIN - ACCOUNT
  const loginUser = async (username, email, password) => {
    try{
      const response = await fetch (`${URL}api/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({username, email, password})
      })
      if(response.ok){
        const data= await response.json()
        console.log(data)
      } else {
        throw new Error("login failed")
      }
    } catch (error){
      console.error(error)
    }
  }

  return (
    <Router>
      <div className="App">
        <p>
          Ingredients!
        </p>
        <Routes>
          <Route path="/new" element={<NewIngredientForm createIngredient={createIngredient} />} />
          <Route path="/edit/:id" element={<UpdateIngredientForm ingredients={ingredients} updateIngredient={updateIngredient}/>}/>
          <Route path="/ingredient/:id" element={<Ingredient ingredients={ingredients} getIngredientData={getIngredientData} updateIngredient={updateIngredient}/>}/>
          <Route exact path="/ingredients" element={<Ingredients ingredients={ingredients} URL={URL} />} />
          <Route exact path="/login" element={<LoginForm loginUser={loginUser} URL={URL} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
