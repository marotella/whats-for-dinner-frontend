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
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log(baseUrl)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ingredients, setIngredients] = useState([])
  const getIngredientData = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/ingredients`, {
        method: "GET",
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
      const response = await fetch(`${baseUrl}/api/ingredients`, {
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
      const response = await fetch(`${baseUrl}/api/ingredients/${id}`, {
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
  const deleteIngredient = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/ingredients/${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (!response.ok) {
        throw new Error("Failed ot delete ingredient.");
      }
      getIngredientData()
    } catch (error) {
      console.error(error)
    }
  }

  //CREATE - ACCOUNT
  const registerUser = async (username, email, password) => {
    try {
      const registeredUser = { username: username, email: email, password: password }
      const response = await fetch(`${baseUrl}/api/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        credentials: "include",
        body: JSON.stringify(registeredUser)
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        return data;
      } else {
        throw await response.json();
      }
    } catch (error) {
      throw error
    }
  }

  //LOGIN - ACCOUNT
  const loginUser = async (username, email, password) => {
    try {
      const loggedUser = { username: username, email: email, password: password }
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        credentials: "include",
        body: JSON.stringify(loggedUser)
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setIsLoggedIn(true);
        console.log("Sucessfully logged in!")
      } else {
        throw new Error("login failed")
      }
    } catch (error) {
      console.error(error)
    }
  }

  //LOGOUT - ACCOUNT
  const logoutUser = () => {
    fetch(`${baseUrl}/api/users/logout`, {
      method: "GET",
      credentials: "include",
    })
      .then(response => {
        if (response.ok) {
          console.log("Logout completed")
          setIsLoggedIn(false);
        } else {
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
        <Header logoutUser={logoutUser} />
        <Routes>
          <Route path="/" element = {<Home registerUser={registerUser} loginUser={loginUser}/>}/>
          <Route path="/ingredients/new" element={<NewIngredientForm createIngredient={createIngredient} />} />
          <Route path="/ingredients/edit/:id" element={<UpdateIngredientForm ingredients={ingredients} updateIngredient={updateIngredient} />} />
          <Route path="/ingredients/:id" element={<Ingredient ingredients={ingredients} getIngredientData={getIngredientData} deleteIngredient={deleteIngredient} updateIngredient={updateIngredient} />} />
          <Route exact path="/ingredients" element={<Ingredients ingredients={ingredients} baseUrl={baseUrl} deleteIngredient={deleteIngredient} updateIngredient={updateIngredient} />} />
          <Route exact path="/user/login" element={<LoginForm loginUser={loginUser} getIngredientData={getIngredientData} baseUrl={baseUrl} />} />
          <Route exact path="/user/register" element={<RegisterForm registerUser={registerUser} getIngredientData={getIngredientData} baseUrl={baseUrl} />} />
          <Route exact path="/ingredients/recipe/:id" element={<RecipeDetails baseUrl={baseUrl} />} />
          <Route exact path="/ingredients/recipes" element={<RecipeSearchForm ingredients={ingredients} baseUrl={baseUrl} />} />
          <Route exact path="/about" element={<About baseUrl={baseUrl} />} />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
}
export default App;
