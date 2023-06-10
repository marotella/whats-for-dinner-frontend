import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = ({ loginUser, getIngredientData }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await loginUser(username, email, password)
      if (response.status === 200) {
        navigate("/ingredients")
        getIngredientData()
    } else {
      const errorMessageResponse = await response.json()
      if (errorMessageResponse.message === "Your email and/or password is incorrect. Please try again."){
        setErrorMessage("Your email and/or password is incorrect. Please try again.")
      }
    }
  } catch (error) {
    setErrorMessage("Your email and/or password is incorrect. Please try again.")
    console.error(error)
  }
    
  }
  return (
    <div>
      <h1 className="p-5 font-medium fontsize text-3xl text-center">Log in to What's for Dinner</h1>
      <div className="flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 flex flex-col w-1/2 p-5">
          <p className="p-5">Enter your email and password below to login into your account.</p>
          {errorMessage && <p className="text-orange p-5">{errorMessage}</p>}


          <form className="p-5" onSubmit={handleSubmit}>
            <label>
              <p className="text-orange font-medium">Username: </p>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <p className="text-orange font-medium">Email: </p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <p className="text-orange font-medium">Password: </p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button className="bg-green hover:bg-white border-lightGreen rounded-lg px-5 m-3 text-white hover:text-green focus:bg-orange focus:text-white" type="submit">Log In</button>
            </div>
          </form>
        </div>
        <div className="w-1/2 max-h-200 p-5 flex justify-content">
          <img className="max-h-100 object-contain loginImage" src={process.env.PUBLIC_URL + '/ApronTie.jpg'} alt="apron-tie" />
        </div>
      </div>
    </div>

  );
}

export default LoginForm