import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NewIngredientForm from './pages/New';
import { Link } from 'react-router-dom';
import UpdateIngredientForm from './pages/Edit';
import './App.css';
import Ingredient from "./pages/Ingredient";
import Ingredients from "./pages/Ingredients";
import LoginForm from './pages/Login';
import RegisterForm from './pages/Register';
import Header from './components/header';
import Footer from './components/footer';
import RecipeSearchForm from './pages/Recipes';
import RecipeDetails from "./pages/RecipeInfo"
function App() {
  const URL = "http://localhost:8000/"
  console.log(URL)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ingredients, setIngredients] = useState([])
  const getIngredientData = async () => {
    try {
      const response = await fetch(`${URL}api/ingredients`, {
        credentials: "include"
      });
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
        },
        credentials: "include"
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
        },
        credentials: "include"
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
  const deleteIngredient = async(id) => {
    try{
      const response = await fetch (`${URL}api/ingredients/${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      if(!response.ok){
        throw new Error ("Failed ot delete ingredient.");
      }
      getIngredientData()
    }catch (error){
      console.error(error)
    }
  }

  //CREATE - ACCOUNT
  const registerUser = async (username, email, password) => {
    try{
      const registeredUser = { username: username, email: email, password: password }
      const response = await fetch (`${URL}api/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        credentials: "include",
        body: JSON.stringify({registeredUser})
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

  //LOGIN - ACCOUNT
  const loginUser = async (username, email, password) => {
    try{
      const loggedUser = { username: username, email: email, password: password }
      const response = await fetch (`${URL}api/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        credentials: "include",
        body: JSON.stringify(loggedUser)
      })
      if(response.ok){
        const data= await response.json()
        console.log(data)
        setIsLoggedIn(true);
        console.log("Sucessfully logged in!")
      } else {
        throw new Error("login failed")
      }
    } catch (error){
      console.error(error)
    }
  }

    //LOGOUT - ACCOUNT
    const logoutUser = () => {
      fetch(`${URL}api/users/logout`, {
        method: "GET",
        credentials: "include",
      })
      .then(response => {
        if (response.ok){
          console.log("Logout completed")
          setIsLoggedIn(false);
        } else{
          throw new Error("Logout failed.")
        }
      })
      .catch(error => {
        console.error(error)
      })
    }
  return (
    <Router>
      <div className="App">
        <h1>What's for Dinner?</h1>
        <button onClick={logoutUser}>Logout</button>
        <Header/>
        <Routes>
          <Route path="/ingredients/new" element={<NewIngredientForm createIngredient={createIngredient} />} />
          <Route path="/ingredients/edit/:id" element={<UpdateIngredientForm ingredients={ingredients} updateIngredient={updateIngredient}/>}/>
          <Route path="/ingredients/:id" element={<Ingredient ingredients={ingredients} getIngredientData={getIngredientData} deleteIngredient={deleteIngredient}updateIngredient={updateIngredient}/>}/>
          <Route exact path="/ingredients" element={<Ingredients ingredients={ingredients} URL={URL} deleteIngredient={deleteIngredient}updateIngredient={updateIngredient}/>} />
          <Route exact path="/user/login" element={<LoginForm loginUser={loginUser} URL={URL} />} />
          <Route exact path="/user/register" element={<RegisterForm registerUser={registerUser} URL={URL} />} />
          <Route exact path="/ingredients/recipe/:id" element={ <RecipeDetails/>} />
          <Route exact path="/ingredients/recipes" element={ <RecipeSearchForm ingredients={ingredients} URL={URL} />} />
        </Routes>
      </div>
      <Footer/>

    </Router>
  );
}
export default App;
